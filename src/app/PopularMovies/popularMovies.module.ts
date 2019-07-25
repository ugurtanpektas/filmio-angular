import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PopularMoviesComponent } from './popularMovies.component';
import { MovieService } from '../Services/movieService.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [PopularMoviesComponent]
})
export class PopularMoviesModule { }