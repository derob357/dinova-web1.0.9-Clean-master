import { Component } from '@angular/core';


@Component({
    selector: 'hero',
    templateUrl:'./app/hero/hero.component.html',
    styleUrls:['./app/hero/hero.component.css']
})
export class HeroComponent{
    public images = ['canoe.png', 'chaya.png', 'flemings.png','islandprime.png','junoon.png','patina.png','whisknladle.png'];
    heroImage = 'app/assets/images/hero/'+ this.images[Math.floor(Math.random() * this.images.length)]
}