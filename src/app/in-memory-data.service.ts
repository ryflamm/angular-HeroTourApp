import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'NightWing'},
      { id: 11, name: 'Dr Strange'},
      { id: 12, name: 'Cyclops'},
      { id: 13, name: 'Mr Incredible'},
      { id: 14, name: 'Professor X'},
      { id: 15, name: 'Wolverine'},
      { id: 16, name: 'Batman'},
      { id: 17, name: 'Green Lantern'},
      { id: 18, name: 'Gambit'},
      { id: 19, name: 'Spiderman'},
      { id: 20, name: 'The Flash'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}