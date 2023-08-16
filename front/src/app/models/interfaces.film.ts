import { CharacterI } from "./interfaces.character"

export interface FilmI{
    id?: number,
    title: string,
    image: string,
}

export interface FilmDetailI extends FilmI{
    id?: number,
    film_id: number,
    directer: string,
    characters: CharacterI[],
}