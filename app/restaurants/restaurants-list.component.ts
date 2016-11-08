import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'restaurants-list',
    templateUrl: './app/restaurants/restaurants-list.component.html'
})

export class RestaurantsListComponent  implements OnInit{ 
    public restaurants: Array<any> = [];
    subscription: Subscription;

    constructor(private _searchService: SearchService) {

    }

    ngOnInit(): void {
        this.subscription = this._searchService.searchedRestaurants$.subscribe(
            res => {
                console.log(res);
                this.restaurants = res;
                //this._route.navigate(['/search/restaurants']);
            });
        this.restaurants = this._searchService.getRestaurants();
        console.log(this.restaurants)
    }
}