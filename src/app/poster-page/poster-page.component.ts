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

  title: string;
  genre: string;
  overview: string;

  images;

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 2,
    "nextArrow": "",
    "prevArrow": "",
    "infinite": true,
    "responsive": [
      {
        "breakpoint": 1279,
        "settings": {
          "slidesToShow": 3,
          "slidesToScroll": 1
        }
      },
      {
        "breakpoint": 730,
        "settings": {
          "slidesToShow": 2,
          "slidesToScroll": 1
        }
      }
      
    ]
  };

  constructor(private api:PosterPageApiService, public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();

    

    this.api.getMovieDetails(this.poster_id).subscribe(data => {
      // @ts-ignore
      this.image_url = data.backdrop_path;
      // @ts-ignore
      this.title = data.title;
      // @ts-ignore
      this.genre = data.genres[0].name;

      // @ts-ignore
      this.overview = data.overview;
      // console.log(data)

    });

    this.api.getCredits(this.poster_id).subscribe(data => {
// @ts-ignore
      this.images = data.cast;

      
// @ts-ignore
      console.log(data.cast)

    });
  }

  redirectBack() {
    location.href = '/search';
  }

  slickInit(e) {
    console.log('initinalized')
  }

  google(name: string) {
    window.open(`https://google.com/search?q=${name}`, "_blank");
  }

}
