import { ActorsI } from "./actors.interfaces"

export interface MoviesI{
    id?: number,
    title: string,
    image: string,
    director?: string,
    cast?: ActorsI[]
}



