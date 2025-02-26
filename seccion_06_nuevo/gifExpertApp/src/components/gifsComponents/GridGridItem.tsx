import React, { useEffect, useState } from 'react'

import GifService, { GifItemData } from '../../helpers/GifgService'
import { GridGridItemGif } from './GridGridItemGif'
import { CategoryItem } from '../../models/CategoryItem'
import { useFetchGifs } from '../../customHooks/useFetchGifs'


const GridGridItem = ({ categoryTitle }: CategoryItem) => {


    const { gifs, isLoading } = useFetchGifs(categoryTitle)
    return (
        <div>
            {/* !NOTA ESTO SE HACE ASÍ PORQUE ES LA MEJOR MANERA EN REACT DE HACERLO INCLUSO EN EL CURSO LO HACEN */}
            {!isLoading && gifs.length > 0 && (
                <>
                    <h3 className='text-center'>{categoryTitle}</h3>
                    <div className='card-grid'>
                        {gifs.map(gif => (
                            //componente para mostrar el item de gif
                            <GridGridItemGif key={gif.id} gifItemData={gif}></GridGridItemGif>

                        ))}
                    </div>
                </>
            )}
            {isLoading && (
                <div>
                    <h2>Cargando...</h2>
                </div>
            )}


        </div>
    )
}

export default GridGridItem
