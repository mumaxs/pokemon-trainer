import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrainerPageComponent } from './pages/trainer-page/trainer-page.component';
import { CataloguePageComponent } from './pages/catalogue-page/catalogue-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCatalogueComponent } from './components/pokemon-catalogue/pokemon-catalogue.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrainerPageComponent,
    CataloguePageComponent,
    LandingPageComponent,
    PokemonListComponent,
    PokemonCatalogueComponent,
    LoginComponent,
    NotFoundComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
