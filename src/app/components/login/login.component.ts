import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    if(this.localStorageService.getUser() !== null){
      this.router.navigate(['/catalogue-page'])
    }
  }

  login(username: string) {
    this.localStorageService.setUser(username)
    this.router.navigate(['/catalogue-page'])
  }
}
