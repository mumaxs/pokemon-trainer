import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {  

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    if(this.localStorageService.getUser() === null){
      this.router.navigate([''])
    } 
    
  }

  logout() {
    this.localStorageService.clearLocalStorage();
    this.router.navigate([''])
  }

}
