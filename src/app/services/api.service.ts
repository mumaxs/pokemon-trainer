import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "https://pokeapi.co/api/v2/pokemon?limit=150/";
  private pokemon: IPokemon[] = []

  constructor(private http: HttpClient) { }

  getPokemon(): void {
    this.http.get(this.url).subscribe((pokemon: any) =>{
      for (let i = 0; i < pokemon.results.length; i++) {
        pokemon.results[i].id = pokemon.results[i].url.slice(34, pokemon.results[i].url.length-1)
        pokemon.results[i].captured = false;
      }
      this.pokemon = pokemon.results;
    },
    (error: HttpErrorResponse) =>{
      console.log(error)
    });
  }

  get getFetchedPokemon() : IPokemon[] {
    return this.pokemon;
  }

  public getFetchedPokemonSequel(): IPokemon[] {
    return this.pokemon
  }

  public catchPokemon(id: number) {
    for (let index = 0; index < this.pokemon.length; index++) {
      if (this.pokemon[index].id === id)
        this.pokemon[index].captured = true;
    }      
  }
}
