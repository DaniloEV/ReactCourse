const PRODUCT_URL = import.meta.env.VITE_API_URL;
export interface GifItemData{
    id:string,
    title:string,
    image:string,
}
export default class GifService {
    
     async getGifs(categoryValue: string) : Promise<GifItemData[]> {
        debugger
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${PRODUCT_URL}=${categoryValue}&limit=5`;
        const { data = [] } = await fetch(url)
            .then(response => response.json())
        const gifs = data.map((value: any) => ({
            id: value.id,
            title: value.title,
            image: value.images.downsized_medium.url
        }))
        // console.log("🚀 ~ gifs ~ gifs:", gifs)
        return gifs as GifItemData[];
    }

}


