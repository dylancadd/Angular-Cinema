import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosterPageApiService {
  api: string = "3810ef94b35bbfd0704e06bc9fa6a61d";

  constructor(private http:HttpClient) { }

  getMovieDetails(movie_id: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.api}&language=en-US`);
  }

  getCredits(movie_id: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${this.api}`);
  }
  
}
