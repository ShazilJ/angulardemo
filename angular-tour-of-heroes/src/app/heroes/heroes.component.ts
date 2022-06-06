import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

//In the same file (HeroesComponent class), define a component property called heroes to expose the HEROES array for binding.

export class HeroesComponent implements OnInit {
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }

  ngOnInit(): void {
  }


  //Add the following onSelect() method, which assigns the clicked hero from the template to the component's selectedHero.
  selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}

