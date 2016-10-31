import { Injectable } from "@angular/core";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable()
export class HeroService {
    // VSC is throwing errors for "Promise", but the app is transpiling fine???
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}
