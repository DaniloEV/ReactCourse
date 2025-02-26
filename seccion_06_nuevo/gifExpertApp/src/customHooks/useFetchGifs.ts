import React, { useEffect, useState } from 'react'
import { UseFetchGifsModel } from '../models/useFetchGifsModel'
import GifService, { GifItemData } from '../helpers/GifgService'

//!NOTA UN HOOK NO ES MÁS QUE UNA FUNCION
export const useFetchGifs = (categoryTitle: string): UseFetchGifsModel => {

    const [gifs, setGifs] = useState<GifItemData[] | []>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        return () => { // Remove async from here
   
            const clear = async () => { // Create a new async function: clear
                setIsLoading(true)
                // write your cleanup code here
                const ps = new GifService();
                const list = await ps.getGifs(categoryTitle)
                setGifs(list)
                setIsLoading(false)
            };
   
            clear() // Call the clear() function
            
        };
    }, [categoryTitle])

    return {
        gifs,
        isLoading
    }
}


