import { Injectable } from '@angular/core';
import { IPokemon } from '../models/pokemon';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private localStorageService: LocalStorageService) { }

  setCapturedPokemon = (pokemon: IPokemon) => {
    let caughtPokemon: IPokemon[] = [];
    caughtPokemon.push(pokemon)
    this.localStorageService.savePokemon(caughtPokemon)
    console.log(caughtPokemon)
  }
  
  releasePokemon(pokemon: IPokemon) {
    let caughtPokemon = this.localStorageService.getCaughtPokemon()
    for (let i = 0; i < caughtPokemon.length; i++) {
      if (caughtPokemon[i].id === pokemon.id) {
        caughtPokemon.splice(i, 1);
      }
    }
    localStorage.setItem('caughtPokemon', JSON.stringify(caughtPokemon))
  }

}
