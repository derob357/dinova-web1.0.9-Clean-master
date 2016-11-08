import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';
import {GoogleplaceDirective} from '../global/googleplace.directive';
import { GlobalService } from '../global/global.service';
import * as spinner from 'ng2-spin-kit-new/app/spinners'
import { IRestaurant } from '../restaurants/restaurant'

@Component({
    selector: 'search',
    templateUrl: "./app/search/search.component.html"
})
export class SearchComponent implements OnInit { 
    @Input() pageType: string;
    public DiningOptions:Array<any> = [
    { name: 'Up to 10', min: 0, max: 9 }, 
    { name: '10+', min: 10, max: 24 },
    { name: '25+', min: 25, max: 49 }, 
    { name: '50+', min: 50, max: 99 }, 
    { name: '100+', min: 100, max: 249 }, 
    { name: '250+', min: 250, max: 499},
    { name: '500+', min: 500, max: 99999}];
    public CateringOptions:Array<any> = [
    { name: 'Take-Out', value: "take_out" }, 
    { name: 'Delivery', value: "delivery" },
    { name: 'Buffet', value: "buffet" }, 
    { name: 'Seated', value: "seated" }, 
    { name: 'Family Style', value: "family_style" },
    { name: 'Full Service', value: "Full-service" },
    { name: 'Self Service', value: "Self-service" }];
    public selectedDiningOption: any;
    public selectedCateringOption: any;
    public term: string;
    private name: string = '';
    private address: string = '';
    public restaurants: Array<any> = [];
    public searchFlag = 0;
    private location: any = {
        lat: '',
        lng:  '',
        city: '',
        state: '',
        zipCode: ''

    }


    private loading: boolean;
    constructor(private _searchService: SearchService, private _route: Router, private _globalService: GlobalService) {
        
    }

    ngOnInit(): void{
        this.loading = false;
        //this.address = this._globalService.getLocation();
        if(this._globalService.getLocation() == undefined) {
            this._globalService.searchedRestaurants$
                .subscribe(
                    res=> {
                        this.address = res.formatted_address;
                        this.location.city = res.locality;
                        this.location.state = res.administrative_area_level_1;
                        this.location.lat = res.lat;
                        this.location.lng = res.lng;
                    }
                )
        }
        else {
            var place = this._globalService.getLocation();
            this.address = place.formatted_address;
            this.location.city = place.locality;
            this.location.state = place.administrative_area_level_1;
            this.location.lat = place.lat;
            this.location.lng = place.lng;
        }
        
    }
    selectedTab(value: number) {
        if(value == 1) {
            this.selectedCateringOption = null;
            this.selectedDiningOption = null;
        }
        else if(value == 2) {
            this.selectedCateringOption = null;
        }
        else if(value == 3) {
            this.selectedDiningOption = null;
        }
    }
    getSelectedDiningOption(option: any) {
        this.selectedCateringOption = null;
        this.selectedDiningOption = option
    }
    getSelectedCateringOption(option: any) {
        this.selectedDiningOption = null;
        this.selectedCateringOption = option
    }
    search () {
        this.restaurants = [];
        if(this.name != '') {
            this.searchFlag = 1;
            this.loading = true;
            if(this.selectedDiningOption) {
                //this._searchService.searchRestaurants(this.name, this.selectedDiningOption, null);
                this._searchService.fetchSearchedRestaurants(this.name, this.location, this.selectedCateringOption, null)
                    .subscribe(
                        res => {
                            this.restaurants = res;
                            this.loading = false;
                            this._route.navigate(['/restaurants']);
                        },
                        errMsg => {
                            console.log(errMsg);
                        }
                    )
            }
            else if(this.selectedCateringOption) {
                //this._searchService.searchRestaurants(this.name, null, this.selectedCateringOption);
                this._searchService.fetchSearchedRestaurants(this.name, this.location, null, this.selectedCateringOption)
                    .subscribe(
                        res => {
                            this.restaurants = res;
                            this.loading = false;
                            this._route.navigate(['/restaurants']);
                        },
                        errMsg => {
                            console.log(errMsg);
                        }
                    )
                
            }   
            else {

                this._searchService.fetchSearchedRestaurants(this.name, this.location, null, null)
                    .subscribe(
                        res => {
                            this.restaurants = res;
                            this.loading = false;
                            this._route.navigate(['/restaurants']);
                        },
                        errMsg => {
                            //this._route.navigate(['/search/restaurants']);
                            console.log(errMsg);
                        }
                    )
            }
        }
    }
    getAddress(place:any) {
        this.address = place.formatted_address;
        this.location.city = place.locality;
        this.location.state = place.administrative_area_level_1;
        this.location.lat = place.lat;
        this.location.lng = place.lng;
       }
}
