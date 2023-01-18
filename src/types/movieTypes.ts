export interface DefaultMovieProps {
    id: number,
    title: string,
    genres_ids: number[],
    description: string,
    rate: number,
    poster: string,
    miniPoster: string,
    backdrop:string,
}
export interface MovieDetailsProps {
      id: number,
      title: string,
      tagline:string,
      genres: {id:number, name:string}[],
      description: string,
      rate: number,
      poster: string,
      backdrop: string,
      budget: number,
      countries: {iso_3166_1:string, name:string}[],
      release:string,
      runtime:number,
      miniPoster:string,
}
export interface MovieActrosProps{
    id:number,
    name:string,
}

export interface MovieTrailerProps{
      id:number
      youtubeKey:string,
      type:number & string,
      name:string,
  }
 
  export interface ActorDetailsProps{
      id:number,
      name:string,
      biography:string,
      photo:string,
      popularity:number,
      birthday:number,
      place_of_birth:string,
      deathday?:number,
      career:string
    }
