import { ActorsI } from "./actors.interfaces"

export interface MoviesI{
    _id?: string,
    title: string,
    image: string,
    director?: string,
    cast?: ActorsI[]
}



