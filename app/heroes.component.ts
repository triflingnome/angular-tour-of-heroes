import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { HeroService } from "./hero.service";

export class Hero {
    id: number;
    name: string;
}

@Component({
    moduleId: module.id,
    selector: "my-heroes",
    templateUrl: "heroes.component.html",
    styleUrls: [ "heroes.component.css" ]
})

export class HeroesComponent implements OnInit {
    // Properties
    heroes: Hero[];
    selectedHero: Hero;

    // Constructors
    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}

    // Selectors
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(["/detail", this.selectedHero.id]);
    }

    // Lifecycle methods
    ngOnInit(): void {
        this.getHeroes();
    }
}
