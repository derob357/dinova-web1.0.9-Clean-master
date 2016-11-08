import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent }  from '../welcome/welcome.component';
import { RestaurantsListComponent }    from '../restaurants/restaurants-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: WelcomeComponent },
      { path: 'restaurants', component: RestaurantsListComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
