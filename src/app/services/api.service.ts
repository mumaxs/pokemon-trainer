import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "https://pokeapi.co/api/v2/pokemon?limit=150/";
  private pokemon = []

  constructor(private http: HttpClient) { }

  getPokemon(): void {
    this.http.get(this.url).subscribe((pokemon: any) =>{
      for (let i = 0; i < pokemon.results.length; i++) {
        pokemon.results[i].id = pokemon.results[i].url.slice(34, pokemon.results[i].url.length-1)
        //console.log(pokemon.results[i].url.lastIndexOf("/", pokemon.results[i].url.lastIndexOf("/")))
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


}
