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
  }
  
  releasePokemon(index: number) {
    let caughtPokemon = this.localStorageService.getCaughtPokemon()
    caughtPokemon.splice(index, 1)
    localStorage.setItem('caughtPokemon', JSON.stringify(caughtPokemon))
  }

}
