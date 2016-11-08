import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }  from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './config/app-routing.module';
import { TabsModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent }  from './app.component';
import { SearchComponent } from './search/search.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { MetroComponent } from './metro/metro.component'
import { RestaurantsListComponent } from './restaurants/restaurants-list.component';
import { GoogleplaceDirective } from './global/googleplace.directive';
import { SearchService } from './search/search.service';
import { GlobalService } from './global/global.service';
import { GeolocationService } from './global/geolocation.service';
import * as spinner from 'ng2-spin-kit-new/app/spinners'

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, AppRoutingModule, TabsModule, DropdownModule ],
  declarations: [ AppComponent
                  ,SearchComponent 
                  ,WelcomeComponent
                  ,NavbarComponent
                  ,HeroComponent
                  ,MetroComponent
                  ,GoogleplaceDirective
                  ,RestaurantsListComponent
                  ,spinner.WaveComponent
                ],
  bootstrap: [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, SearchService, GlobalService, GeolocationService],
})
export class AppModule { }
