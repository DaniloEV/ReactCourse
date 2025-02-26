export const getGifs = async (categoryValue) => {
    // const url = `https://dummyapi.online/api/movies`;
    // const data = await fetch(url)
    //     .then(response => response.json())
        
    // const gifs = data.map(value => ({
    //     id: value.id,
    //     title: value.movie,
    //     image: value.imdb_url
    // }))


    const url = `https://api.giphy.com/v1/gifs/search?api_key=W8cgEArZ5zfJrsPiN45aJ4CaqogYjXLu&q=${categoryValue}&limit=5`;
    const { data = [] } = await fetch(url)
        .then(response => response.json())
    const gifs = data.map(value => ({


        id: value.id,
        title: value.title,
        image: value.images.downsized_medium.url
    }))
    // console.log("🚀 ~ gifs ~ gifs:", gifs)
    return gifs;
}