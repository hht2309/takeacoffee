import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome';


import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';
import {NotFoundComponent} from './components/notFound/notFound.component';
import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, AboutComponent, SearchComponent, ArtistComponent, AlbumComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    routing, 
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
