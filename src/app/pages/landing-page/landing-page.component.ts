import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  show = false;

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    if(this.localStorageService.getUser() !== null){
      this.router.navigate(['/catalogue-page'])
    }
  }

  openPokeball(): void {
    this.show = true;
  }

}
