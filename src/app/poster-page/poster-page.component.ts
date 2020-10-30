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
      this.image_url =  `https://image.tmdb.org/t/p/original/${data['backdrop_path']}` ;
      this.title = data['title'];
      this.genre = data['genres'][0].name;
      this.overview = data['overview'];
    });

    this.api.getCredits(this.poster_id).subscribe(data => {
      this.images = data['cast'];
      this.profile_url = `https://image.tmdb.org/t/p/w200/${data['cast'][0].profile_path}`;
    });
  }

  redirectBack() {
    location.href = '/search';
  }

  redirectActorPage(actor_id: string) {
    // Relocate to Actor Page
  }

}
