import React from 'react'
import { GifItemData } from '../../helpers/GifgService'

export interface GifItemParameter {
    gifItemData: GifItemData
}
export const GridGridItemGif = ({ gifItemData }:GifItemParameter) => {
  return (
    <div className='card'>
        <img src={gifItemData.image} alt={gifItemData.title} />
        <p>{gifItemData.title}</p>
    </div>
  )
}
