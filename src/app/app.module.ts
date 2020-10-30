import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscoverComponent } from './discover/discover.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { LatestComponent } from './latest/latest.component';
import { HomeComponent } from './home/home.component';
import { MoviesPopularComponent } from './movies/movies-popular/movies-popular.component';
import { MoviesLatestComponent } from './movies/movies-latest/movies-latest.component';
import { MoviesNowPlayingComponent } from './movies/movies-now-playing/movies-now-playing.component';
import { MoviesTopRatedComponent } from './movies/movies-top-rated/movies-top-rated.component';
import { MoviesUpcomingComponent } from './movies/movies-upcoming/movies-upcoming.component';
import { TvShowsLatestComponent } from './tv-shows/tv-shows-latest/tv-shows-latest.component';
import { TvShowsPopularComponent } from './tv-shows/tv-shows-popular/tv-shows-popular.component';
import { TvShowsTopRatedComponent } from './tv-shows/tv-shows-top-rated/tv-shows-top-rated.component';
import { SearchComponent } from './search/search.component';
import { PosterPageComponent } from './poster-page/poster-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverComponent,
    MoviesComponent,
    TvShowsComponent,
    LatestComponent,
    HomeComponent,
    MoviesPopularComponent,
    MoviesLatestComponent,
    MoviesNowPlayingComponent,
    MoviesTopRatedComponent,
    MoviesUpcomingComponent,
    TvShowsLatestComponent,
    TvShowsPopularComponent,
    TvShowsTopRatedComponent,
    SearchComponent,
    PosterPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
