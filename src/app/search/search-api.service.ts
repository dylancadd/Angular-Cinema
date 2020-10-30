import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {
  api: string = "3810ef94b35bbfd0704e06bc9fa6a61d";

  constructor(private http:HttpClient) { 
  }

  apiCall(searchWord: string) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.api}&query=${searchWord}&language=en-US&page=1`);
  }

  initSearch() {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.api}&language=en-US&sort_by=popularity.desc&page=1`);
  }
}
