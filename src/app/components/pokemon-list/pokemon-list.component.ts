import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from 'src/app/models/pokemon';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService,
    private router: Router,
    private pokemonApi: ApiService,
    private trainer: TrainerService) { }

  ngOnInit(): void {
    if (this.localStorageService.getUser() === null) {
      this.router.navigate([''])
    }
  }

  get pokemon(): IPokemon[] {
    return this.pokemonApi.getFetchedPokemon
  }

  getCaughtPokemon() {
    return this.localStorageService.getCaughtPokemon()
  }

  release(pokemon: IPokemon) {
    this.trainer.releasePokemon(pokemon)
  }
}
