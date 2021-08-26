import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  caughtPokemon!: string | null;

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

  savePokemon(pokemonToSave: string[]) {
    if (this.caughtPokemon !== undefined) {
      let copyCaughtPokemon = this.getCaughtPokemon()
      copyCaughtPokemon.push(pokemonToSave[pokemonToSave.length - 1])
      localStorage.setItem('caughtPokemon', JSON.stringify(copyCaughtPokemon))
    }else{
      localStorage.setItem('caughtPokemon', JSON.stringify(pokemonToSave))
    }
  }

  getCaughtPokemon() {
    this.caughtPokemon = localStorage.getItem('caughtPokemon')
    return JSON.parse(this.caughtPokemon!);
  }

  removePokemonFromList(id: number) {
    let copyCaughtPokemon = JSON.parse(this.caughtPokemon!)
    for (let i = 0; i < copyCaughtPokemon.length; i++) {
      if (copyCaughtPokemon[i].id === id) {        
        copyCaughtPokemon.splice(i, 1);        
      }

    }
    localStorage.setItem('caughtPokemon', JSON.stringify(copyCaughtPokemon))
  }

  

}
