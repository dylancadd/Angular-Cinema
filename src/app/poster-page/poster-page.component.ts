import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { PosterPageApiService } from './poster-page-api.service';

@Component({
  selector: 'app-poster-page',
  templateUrl: './poster-page.component.html',
  styleUrls: ['./poster-page.component.scss']
})
export class PosterPageComponent implements OnInit {
  poster_id: string = sessionStorage.getItem('poster_id');
  image_url: string;
  profile_url: string;

  title: string;
  genre: string;
  overview: string;
  images;
  castAvailable;

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "nextArrow": "",
    "prevArrow": "",
    "infinite": false,
    "responsive": [
      {
        "breakpoint": 1279,
        "settings": {
          "slidesToShow": 3,
          "slidesToScroll": 3
        }
      },
      {
        "breakpoint": 730,
        "settings": {
          "slidesToShow": 2,
          "slidesToScroll": 2
        }
      }
    ]
  };

  constructor(private api:PosterPageApiService, public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();

    this.api.getMovieDetails(this.poster_id).subscribe(data => {

      if(data['backdrop_path'] !== null) {
        this.image_url = `https://image.tmdb.org/t/p/original/${data['backdrop_path']}`;
      } else {
        this.image_url = '/assets/gradient-blue.jpg';
      }

      if(data['genres'].length > 0) {
        this.genre = data['genres'][0].name;
      } else {
        this.genre = "No Genre Found";
      }

      this.overview = data['overview'];
      this.title = data['title'];
    });

    this.api.getCredits(this.poster_id).subscribe(data => {

      if(data['cast']. length !== 0) {
        this.castAvailable = true;
      } else {
        this.castAvailable = false;
      }

      this.images = data['cast'];
      console.log(this.images)
    });
  }

  redirectBack() {
    location.href = '/search';
  }

  redirectActorPage(actor_id: string) {
    // Relocate to Actor Page
  }

}
