import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { GlobalService } from './global/global.service';
import { GeolocationService } from './global/geolocation.service';

@Component({
    selector: 'my-app',
    template: `<dwNavbar></dwNavbar><router-outlet></router-outlet>`
})
export class AppComponent { 
    private option: any = {
        enableHighAccuracy: true,
        timeout: "Infinity",
        maximumAge: "Infinity"
    }

    constructor(private _globalService: GlobalService, private _geolocationService: GeolocationService) { 
        this._geolocationService.getBrowserLocation(this.option)
            .subscribe(
                res => {
                    //this._globalService.setLocation(res);
                    this._geolocationService.getLocation(res)
                        .subscribe(
                            res => {
                                this._globalService.setLocation(res);
                            },
                            err => {
                                console.log(err);
                            }
                        )
                },
                err => {
                    console.log(err);
                }
            )
    }
}
