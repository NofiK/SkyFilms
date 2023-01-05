class MoviesService {
  private _apiKey: string = "efa6474dd16a64f01e1c0ea678996de6";
  private _apiBase: string = "https://api.themoviedb.org/3/";
  private _imgPath: string = "https://image.tmdb.org/t/p/original/";
  //  private _videoPath:string = 'https://www.youtube.com/watch?v=';

  getResource = async (url: string) => {
    let result = await fetch(url);

    if (!result.ok) {
      console.error(`Something went wrong with API call`);
    }
    return await result.json();
  };
  // https://api.themoviedb.org/3/movie/latest?api_key=efa6474dd16a64f01e1c0ea678996de6&language=en-US
  // https://api.themoviedb.org/3/movie/now_playing?api_key=efa6474dd16a64f01e1c0ea678996de6&language=en-US&page=1

  getPopular = async (page:number) => {
    const res = await this.getResource(
      `${this._apiBase}/movie/popular?api_key=${this._apiKey}&language=en-US&page=${page}`
    );
    return res.results.map((movie: any) => this._transcriptFilm(movie));
  };
 
  getNowPlaying = async (region:string) => {
    const res = await this.getResource(
      `${this._apiBase}/movie/now_playing?api_key=${this._apiKey}&language=en-US&page=${1}&region=${region}`
    );
    return res.results.map((movie: any) => this._transcriptFilm(movie));
  };
  getUpcoming = async (page:number) => {
    const res = await this.getResource(
      `${this._apiBase}/movie/upcoming?api_key=${this._apiKey}&language=en-US&page=${page}`
    );
    return res.results.map((movie: any) => this._transcriptFilm(movie));
  };
   //     getLatest = async (page = 1) =>{
   //      const res = await this.getResource(`${this._apiBase}/movie/latest?api_key=${this._apiKey}&language=en-US&page=${page}`)
   //      console.log(res)
   //      return res.results.map((movie:any)=> this._transcriptFilm(movie))
   //  }

  _transcriptFilm(movie: any) {
    return {
      id: movie.id,
      title: movie.title,
      genres_ids: movie.genre_ids,
      description: movie.overview,
      rate: movie.vote_average,
      poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
      miniPoster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
      backdrop: this._imgPath + movie.backdrop_path,
    };
  }
}

export default MoviesService;
