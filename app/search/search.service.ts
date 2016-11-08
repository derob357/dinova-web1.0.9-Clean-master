import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//import { IRestaurant } from '../restaurants/restaurant'

@Injectable()
export class SearchService {
    private dataUrl = './app/api/products.json';
    //private _dwproductUrl = './app/api/products.json';
    private _dwproductUrl = 'http://23.253.253.107/query/v1.2/search';
    public restaurants: Array<any> = [];
    
    public result: Array<any> = [];
    private restaurantsSource = new Subject<any>();
    public searchedRestaurants$ = this.restaurantsSource.asObservable();

    constructor(private _http: Http) {
    }
//    http://23.253.253.107/query/v1.2/search?apikey=88B6D7B3D8717086BBC0F6AA577E3531EAAEBB3ACBE4DF97540FD8B2AA5F89D744E0D77478AE7142CAD269995FFBA064&lat=34.062661399999996&lon=-84.1692956&distance=5&cuisine=&name=pizza&city=Johns%20Creek&state=Georgia&zip=    
//    http://23.253.253.107/query/v1.2/search?apikey=88B6D7B3D8717086BBC0F6AA577E3531EAAEBB3ACBE4DF97540FD8B2AA5F89D744E0D77478AE7142CAD269995FFBA064&lat=26.122438&lng=-80.137314&distance=5&cuisine=&name=&city=&state=&zip=
    //http://23.253.253.107/query/v1.1/search?   key=88B6D7B3D8717086BBC0F6AA577E3531EAAEBB3ACBE4DF97540FD8B2AA5F89D744E0D77478AE7142CAD269995FFBA064&lat=&lon=&distance=&cuisine=&name=new&city="New Hartford"&state="New York"
    fetchSearchedRestaurants(term: string, location: any, DiningOption: any, CateringOption: any): Observable<any> {
        let params = new URLSearchParams();
        console.log(location)
        params.set('apikey','88B6D7B3D8717086BBC0F6AA577E3531EAAEBB3ACBE4DF97540FD8B2AA5F89D744E0D77478AE7142CAD269995FFBA064');
        params.set('lat', location.lat);
        params.set('lng', location.lng);
        params.set('distance', '5');
        params.set('cuisine', CateringOption == null ? '' : CateringOption.value);
        params.set('name', term);
        params.set('city',location.city)
        params.set('state',location.state);
        params.set('zip',location.zipCode);
        return this._http.get(this._dwproductUrl,{search : params})

            .map((response: Response) =>  {
                this.restaurantsSource.next(<any>response.json());
                this.restaurants = <any>response.json();
                return <any>response.json();
            })
           // .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);


    }
    getRestaurants(): Array<any> {
        // return this.restaurants;
        return this.restaurants
        
    }
    filterDataByDiningOption(data: Array<any>, term: string, DiningOption: any) {
        return data.filter(
          restaurants => {
             if(restaurants.dineNumber <= DiningOption.max && restaurants.dineNumber >= DiningOption.min) {
                  return restaurants;
              }
        });
    }
    filterDataByCateringOption(data: Array<any>, term: string, CateringOption: any) {
        return data.filter(
          restaurants => {
             if(restaurants.cateringType == CateringOption.value) {
                  return restaurants;
              }
        });
    }
    filterData(term: string, searchParam:string) {
        return this.restaurants.filter(
          restaurants => {
              if(searchParam == 'zipcode') {
                  return restaurants.zipCode ===  term;
              } 
              var restaurantName = restaurants[searchParam].toLowerCase()
              var n = restaurantName.indexOf(term);
              if (n != -1) {
                  return restaurants;
              }
        });
    }
    private handleError (error: any) {
        let errMsg = (error._body) ? JSON.parse(error._body) :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

myrestaurants:    
    
   [ {"id": "20803",
    "name": "Panda Express - San Diego (Horton Plaza)",
    "address": "453 Horton Plaza",
    "city": "San Diego",
    "state": "California",
    "zipCode": "92101",
    "metroArea": "San Diego",
    "phone": "619-231-6766",
    "logoUrl": "http://dinova.imgix.net/1400123536_Panda-Express.jpg",
    "primaryCuisine": "Chinese",
    "secondaryCuisine": [
      "Chinese",
      "Asian",
      "Seafood",
      "Vegan/Vegetarian"
    ],
    "restaurantStyles": [
      "Casual dining",
      "Catering"
    ],
    "lat": 32.71432466805,
    "lon": -117.16112405062,
    "price": "0",
    "facebookUrl": "https://www.facebook.com/PandaExpress",
    "twitterUrl": "https://twitter.com/pandaexpress",
    "pinterestUrl": "undefined",
    "reservationsUrl": "undefined",
    "websiteUrl": "http://www.pandaexpress.com/",
    "cateringType": "buffet",
    "cuisineCategory": "Asian",
	"dineNumber": "400"
  },    
  {
    "id": "22805",
    "name": "Jamba Juice - Jackson Memorial Hospital",
    "address": "901 Northwest 17th Street",
    "city": "Miami",
    "state": "Florida",
    "zipCode": "33136",
    "metroArea": "undefined",
    "phone": "786-899-0466",
    "logoUrl": "http://dinova.imgix.net/1448290128_jamba-juice.jpg",
    "primaryCuisine": "Health food",
    "secondaryCuisine": [
      "Californian",
      "Health food",
      "Sandwich",
      "Vegan/Vegetarian",
      "Breakfast",
      "Baked Goods",
      "Snacks",
      "Energy-bowls",
      "Oatmeal",
      "Beverages"
    ],
    "restaurantStyles": [
      "Sandwich shop",
      "Fast food",
      "Catering",
      "QSR"
    ],
    "lat": 25.792268,
    "lon": -80.210823,
    "price": "0",
    "facebookUrl": "https://www.facebook.com/jambajuice",
    "twitterUrl": "https://twitter.com/jambajuice",
    "pinterestUrl": "undefined",
    "reservationsUrl": "undefined",
    "websiteUrl": "http://www.jambajuice.com",
    "cateringType": "buffet",
    "cuisineCategory": "undefined",
	"dineNumber": "450"
  },
  {
    "id": "8854",
    "name": "Lime Fresh Grill",
    "address": "7 West Flagler Street",
    "city": "Miami",
    "state": "Florida",
    "zipCode": "33130",
    "metroArea": "Miami/Fort Lauderdale",
    "phone": "305-789-0252",
    "logoUrl": "http://dinova.imgix.net/1339823171_Lime-Fresh-Grill.jpg",
    "primaryCuisine": "Mexican",
    "secondaryCuisine": [
      "American",
      "Mexican",
      "Seafood",
      "Soups/Salads",
      "Steakhouse"
    ],
    "restaurantStyles": [
      "Casual dining"
    ],
    "lat": 25.7741754,
    "lon": -80.1937326,
    "price": "0",
    "facebookUrl": "https://www.facebook.com/LimeFreshMex",
    "twitterUrl": "https://twitter.com/#!/limefreshmex",
    "pinterestUrl": "undefined",
    "reservationsUrl": "undefined",
    "websiteUrl": "http://www.limefreshmexicangrill.com/",
    "cateringType": "buffet",
    "cuisineCategory": "Mexican",
	"dineNumber": "450"
  }]
}

