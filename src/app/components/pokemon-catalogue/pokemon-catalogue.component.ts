import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from 'src/app/models/pokemon';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent implements OnInit {

  caughtPokemon: any[] = []

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

  addToList(id: number, name: string): void{
    let saveData = {id: id, name: name};
    this.caughtPokemon.push(saveData)
    this.localStorageService.savePokemon(this.caughtPokemon)
  }


}
