import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    if(this.localStorageService.getUser() === null){
      this.router.navigate([''])
    } 
  }

  getCaughtPokemon(){
    return this.localStorageService.getCaughtPokemon()
  }

  release(id: number) {
    this.localStorageService.removePokemonFromList(id);
  }
}
