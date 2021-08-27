import { Injectable } from '@angular/core';
import { IPokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setUser(username: string) {
    localStorage.setItem('username', username);
  }

  getUser() {
    let currentUsername = localStorage.getItem('username');
    return currentUsername;
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  savePokemon(pokemonToSave: IPokemon[]) {
    let caughtPokemon = this.getCaughtPokemon()
    if (caughtPokemon !== null) {
      caughtPokemon = this.getCaughtPokemon()
      caughtPokemon.push(pokemonToSave[pokemonToSave.length - 1])
      localStorage.setItem('caughtPokemon', JSON.stringify(caughtPokemon))
    } else {
      localStorage.setItem('caughtPokemon', JSON.stringify(pokemonToSave))
    }
  }

  getCaughtPokemon() {
    let caughtPokemon = localStorage.getItem('caughtPokemon')
    return JSON.parse(caughtPokemon!);
  }
}
