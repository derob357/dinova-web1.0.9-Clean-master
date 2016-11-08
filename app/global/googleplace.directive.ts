import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';
import {NgModel} from '@angular/forms';

declare var google:any;

@Directive({
  selector: '[googleplace]',
  providers: [NgModel],
  host: {
    '(input)' : 'onInputChange()'
  }
})
export class GoogleplaceDirective  {
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  modelValue:any;
  autocomplete:any;
  private _el:HTMLElement;
  private componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'long_name',
        country: 'long_name',
        postal_code: 'short_name'
  };
  private geolocation: any = {
    street_number: '',
    locality: '',
    administrative_area_level_1: '',
    postal_code: '',
    lng: '',
    lat: '',
    formatted_address: ''
  }
  private location: any;
  constructor(el: ElementRef,private model:NgModel) {
    this._el = el.nativeElement;
    this.modelValue = this.model;
    var input = this._el;
    this.autocomplete = new google.maps.places.Autocomplete(input, {types: ['geocode']});
    google.maps.event.addListener(this.autocomplete, 'place_changed', ()=> {
      var place = this.autocomplete.getPlace();
      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (this.componentForm[addressType]) {
          var val = place.address_components[i][this.componentForm[addressType]];
          // document.getElementById(addressType).value = val;
          this.geolocation[addressType] = val;
        }
      }
      var location = place['geometry']['location'];
      this.geolocation.lat =  location.lat();
      this.geolocation.lng = location.lng();
      this.geolocation.formatted_address = place.formatted_address;
      this.invokeEvent(this.geolocation);

    });
  }

  invokeEvent(geolocation: any) {
    this.setAddress.emit(geolocation);
  }


  onInputChange() {
  }
}