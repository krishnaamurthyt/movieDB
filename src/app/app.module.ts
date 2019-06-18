import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from './movie.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayMovieComponent } from './display-movie/display-movie.component';
import { SearchComponent } from './search/search.component';
import { MoviePreviewComponent } from './search/movie-preview/movie-preview.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayMovieComponent,
    SearchComponent,
    MoviePreviewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
