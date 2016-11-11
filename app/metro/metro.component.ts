import { Component, Input, OnInit } from '@angular/core';

import { GoogleplaceDirective } from '../global/googleplace.directive';

import * as spinner from 'ng2-spin-kit-new/app/spinners'

@Component({

    selector: 'metro',
    templateUrl: './app/metro/metro.component.html',
    styleUrls: ['./app/metro/metro.component.css'],


})

export class MetroComponent implements OnInit {
    @Input() pageType: string;
    public name: string = "";
    public imageUrl: string = "";
    public dinova_Area: number = null;
    public count: number = null;
    public lat: number = null;
    public lng: number = null;


    // public metroTiles: Array<any> = [];
    public searchFlag = 0;
    private loading: boolean;
    constructor() { }
    sorting(json_object: Array<any>, key_to_sort_by: any) {
        function sortByKey(a: any, b: any) {
            var x = a[key_to_sort_by];
            var y = b[key_to_sort_by];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }
        json_object.sort(sortByKey);
    }
    ngOnInit(): void {
        this.loading = false;
       var metroAreaTiles = this.sorting(this.metroAreas, 'count')
       console.log(this.metroAreas.reverse())
    //    console.log("metroAreasTiles : "+this.metroAreasTiles[0])
     
    } 
tileImageUrl = 'app/assets/images/marketimages/';
tileImageSm = '_sm.png';
tileImageLg ='_lg.png';
    tileImage001 = 'app/assets/images/marketimages/washingtondc_lg.png'
    tileImage002 = 'app/assets/images/marketimages/newyork_sm.png'
    tileImage003 = 'app/assets/images/marketimages/chicago_sm.png'
    tileImage004 = 'app/assets/images/marketimages/atlanta_sm.png'
    tileImage005 = 'app/assets/images/marketimages/sanfrancisco_sm.png'
    tileImage006 = 'app/assets/images/marketimages/boston_sm.png'
    tileImage007 = 'app/assets/images/marketimages/dallas_sm.png'
    tileImage008 = 'app/assets/images/marketimages/losangeles_sm.png'

    registerImage = 'app/assets/images/rewardImage.png'    



       
metroAreas = [
                {
                    name: "Atlanta",
                    imageUrl: "atlanta",
                    dMarket: 23,
                    count: 307,
                    lat: 33.748995,
                    lng: -84.387982
                },
                {
                    name: "Boston",
                    imageUrl: "boston",
                    dMarket: 6,
                    count: 228,
                    lat: 42.360082,
                    lng: -71.058880
                },
                {
                    name: "Charlotte",
                    imageUrl: "charlotte",
                    dMarket: 27,
                    count: 147,
                    lat: 35.227087,
                    lng: -80.843127
                },
                {
                    name: "Chicago",
                    imageUrl: "chicago",
                    dMarket: 34,
                    count: 404,
                    lat: 41.878114,
                    lng: -87.629798
                },
                {
                    name: "Dallas / Ft.Worth",
                    imageUrl: "dallas",
                    dMarket: 46,
                    count: 518,
                    lat: 32.776664,
                    lng: -96.796988
                },
                {
                    name: "Fort Lauderdale",
                    imageUrl: "ftlauderdale",
                    dMarket: 30,
                    count: 123,
                    lat: 26.122439,
                    lng: -80.137317
                },
                {
                    name: "Houston",
                    imageUrl: "houston",
                    dMarket: 47,
                    count: 271,
                    lat: 29.760427,
                    lng: -95.369803
                },
                {
                    name: "Indianapolis",
                    imageUrl: "indianapolis",
                    dMarket: 37,
                    count: 126,
                    lat: 39.768403,
                    lng: -86.158068
                },
                {
                    name: "Los Angeles",
                    imageUrl: "losangeles",
                    dMarket: 60,
                    count: 131,
                    lat: 34.052234,
                    lng: -118.243685
                },
                {
                    name: "Miami",
                    imageUrl: "miami",
                    dMarket: 29,
                    count: 108,
                    lat: 25.761680,
                    lng: -80.191790
                },
                {
                    name: "New Jersey",
                    imageUrl: "newjersey",
                    dMarket: 1,
                    count: 100,
                    lat: 40.712784,
                    lng: -74.005941
                },
                {
                    name: "New York",
                    imageUrl: "newyork",
                    dMarket: 1,
                    count: 446,
                    lat: 40.712784,
                    lng: -74.005941
                },
                {
                    name: "Philadelphia",
                    imageUrl: "philadelphia",
                    dMarket: 11,
                    count: 295,
                    lat: 39.952584,
                    lng: -75.165222
                },
                {
                    name: "San Diego",
                    imageUrl: "sandiego",
                    dMarket: 58,
                    count: 273,
                    lat: 32.715738,
                    lng: -117.161084
                },
                {
                    name: "San Francisco",
                    imageUrl: "sanfrancisco",
                    dMarket: 56,
                    count: 419,
                    lat: 37.774929,
                    lng: -122.419416
                },
                {
                    name: "Seattle",
                    imageUrl: "seattle",
                    dMarket: 63,
                    count: 209,
                    lat: 47.606209,
                    lng: -122.332071
                },
                {
                    name: "Washington DC",
                    imageUrl: "washingtondc",
                    dMarket: 18,
                    count: 466,
                    lat: 38.907192,
                    lng: -77.036871
                }
            ]
   
}
