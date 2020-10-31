import { Component, OnInit } from '@angular/core';
import { SearchApiService } from './search-api.service';
import { NavbarService } from '../navbar.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  posters;
  header: string = "Explore";

  constructor(private api:SearchApiService, public nav: NavbarService) { }

  ngOnInit(): void { 
    this.nav.show();

    this.api.initSearch().subscribe(data => {
      this.posters = data['results'];
    });;

  }

  search(event) {
    setTimeout(() => {
      this.header = "";
    if(event.target.value !== "") {
      this.api.apiCall(event.target.value).subscribe(data => {
        this.posters = data['results'];
      });
    } else {
      this.header = "Explore";
      this.api.initSearch().subscribe(data => {
        this.posters = data['results'];
      });
    }
    }, 1000)
  
  }

  redirectPoster(poster_id) {
    setTimeout(() => {
      sessionStorage.setItem('poster_id', poster_id);
      location.href = '/poster-page';
    }, 250)
  }
}
