export const catalog = async () =>{
    try {
        const result = fetch(`https://food-pos-data.vercel.app/catalog`);
        const data = (await result).json();
        return data;
    } catch (error) {
        return error.massage;
    }
}

export const catalogData = async (path) =>{
    try {
        const res = await fetch(`https://food-pos-data.vercel.app/${path}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error.massage;
    }
}
