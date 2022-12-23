class MoviesService {

     private _apiKey:string = 'efa6474dd16a64f01e1c0ea678996de6';
     private _apiBase:string = 'https://api.themoviedb.org/3/';
     private _imgPath:string = "https://image.tmdb.org/t/p/original/";
    //  private _videoPath:string = 'https://www.youtube.com/watch?v=';



     getResource = async (url:string) => {
     let result = await fetch(url);

     if (!result.ok) {
          console.error(`Something went wrong with API call`);
     }
     return await result.json();
     }


    getPopular = async (page = 1) =>{
        const res = await this.getResource(`${this._apiBase}/movie/popular?api_key=${this._apiKey}&language=en-US&page=${page}`)
        return res.results.map((movie:any)=> this._transcriptFilm(movie))
    }

     _transcriptFilm(movie:any) {
     return {
          id: movie.id,
          title: movie.title,
          genres_ids: movie.genre_ids,
          description: movie.overview,
          rate: movie.vote_average,
          poster: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          miniPoster: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          backdrop:this._imgPath + movie.backdrop_path,
     }
     }

     
}

export default MoviesService;