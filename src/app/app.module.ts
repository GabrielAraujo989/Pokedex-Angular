import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonService } from 'src/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonButtonComponent } from './components/pokemon-button/pokemon-button.component';
import { PokemonFooterComponent } from './components/pokemon-footer/pokemon-footer.component';
import { PokemonHeaderComponent } from './components/pokemon-header/pokemon-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonButtonComponent,
    PokemonFooterComponent,
    PokemonHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PokemonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
