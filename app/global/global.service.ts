import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class GlobalService {
    private location: any;
    public googleApiKey: string = "AIzaSyBv1GDwJ2uP7OFeRVq3Gimn_snohmAVeE0";
    private locationSource = new Subject<any>();
    public searchedRestaurants$ = this.locationSource.asObservable();
    setLocation(location: any) {
        this.locationSource.next(location);
        this.location = location;
    }
    getLocation () {
        return this.location;
    }
}