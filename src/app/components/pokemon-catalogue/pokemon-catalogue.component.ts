import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from 'src/app/models/pokemon';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent implements OnInit {

  constructor(private pokemonApi: ApiService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private trainer: TrainerService) { }

  ngOnInit(): void {
    if (this.localStorageService.getUser() === null) {
      this.router.navigate([''])
    }
    this.pokemonApi.getPokemon();
  }

  get pokemon(): IPokemon[] {
    return this.pokemonApi.getFetchedPokemon
  }

  /**
   * Method that check if pokemon is captured so that you cannot capture more than one of a kind.
   * @param pokemon 
   */
  addToList(pokemon: IPokemon): void {
    if (pokemon.captured === false) {
      this.pokemonApi.catchPokemon(pokemon.id)
      this.trainer.setCapturedPokemon(pokemon)
    }
  }
}
