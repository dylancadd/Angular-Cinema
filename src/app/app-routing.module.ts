import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { LatestComponent } from './latest/latest.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { SearchComponent } from './search/search.component';
import { PosterPageComponent } from './poster-page/poster-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'latest', component: LatestComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'poster-page', component: PosterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
