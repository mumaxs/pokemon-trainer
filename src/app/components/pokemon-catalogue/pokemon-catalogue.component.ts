import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon, Pokemon } from 'src/app/models/pokemon';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent implements OnInit {
  caughtPokemon: Pokemon[] = [];

  constructor(private pokemonApi: ApiService, private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    if(this.localStorageService.getUser() === null){
      this.router.navigate([''])
    }
    this.pokemonApi.getPokemon();
  }

  get pokemon(): IPokemon[] {
    return this.pokemonApi.getFetchedPokemon
  }

  addToList(pokemon: Pokemon): void{
    this.caughtPokemon.push(pokemon)
    //ToDO :this.localStorageService.savePokemon(this.caughtPokemon)
    console.log(this.caughtPokemon)
    // this.localStorageService.setCaptured(id)
    this.pokemonApi.catchPokemon(pokemon.id)
  }


}
