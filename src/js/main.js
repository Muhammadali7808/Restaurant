// const hero = document.querySelector(".heros");
const box = document.querySelector(".box");
const menu = document.querySelector(".menu");


import { catalog, catalogData } from "./data.js";


const render = async () => {
    const data = await catalog();
    
    box.innerHTML = data.map((item) => `
            <button class=" font-medium text-lg text-white hover:text-red-700 rounded-[13px]" data-path="${item.path}">${item.name}</button>
    `).join("");
}

render();


const renderData = async (path) => {
    const data = await catalogData(path);    
    menu.innerHTML = data?.map((item) => `
        <div class="border rounded-[16px] bg-[#252836] p-3 mb-5 w-[250px] ">
            <img src="${item.img}">
            <h2 class="font-bold text-lg text-[#fff] mt-[16px] mb-[8px]">${item.title}</h2>
            <p class="font-bold text-lg text-[#fff] mb-[4px]">${item.price}</p>
            <p class="font-bold text-lg text-[#fff] border border-spacing-4 rounded-[5px] pt-[3px] pb-[3x] pl-[5px] pr-[5px]">${item.text}</p>
        </div>
    `).join("");
}
box.addEventListener("click", async (e) => {
    const path = e.target.dataset.path    
    if (path) {
        await renderData(path)
    }
   
})

renderData("colddishes");