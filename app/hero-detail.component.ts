import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
    moduleId: module.id,
    selector: "my-hero-detail",
    templateUrl: "hero-detail.component.html",
    styleUrls: [ "dashboard.component.css" ]
})

export class HeroDetailComponent implements OnInit {
    // properties
    hero: Hero;

    // constructors
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    // selectors

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

    add(name: string): void {
        name = name.trim();
        
        if (!name) { 
            return;
        }

        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    // lifecycle methods
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params["id"]; // all params are strings. id is converted to a number with "+"
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
    }
}
