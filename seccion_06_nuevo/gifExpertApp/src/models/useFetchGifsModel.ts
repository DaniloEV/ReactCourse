import { GifItemData } from "../helpers/GifgService";

export interface UseFetchGifsModel {
    gifs : GifItemData[]
    isLoading: boolean
}