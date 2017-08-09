import {ModuleWithProviders} from '@angular/core'; 
import {Routes, RouterModule} from '@angular/router'; 

import {HomeComponent} from './components/home/home.component'; 
import {AboutComponent} from './components/about/about.component'; 
import {SearchComponent} from './components/search/search.component'; 
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';
import {NotFoundComponent} from './components/notFound/notFound.component';
 
const appRoutes: Routes = [
    {
        path: '', 
        component: HomeComponent
    }, 
    {
        path: 'spotify',
        component: SearchComponent
    },
    {
        path: 'about', 
        component: AboutComponent
    }, 
    {
        path: 'artist/:id', 
        component: ArtistComponent
    }, 
    {
        path: 'album/:id', 
        component: AlbumComponent
    }, 
    {
        path: '**', 
        component: NotFoundComponent
    }, 
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);