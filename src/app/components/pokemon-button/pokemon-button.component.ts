import { Component } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-button',
  templateUrl: './pokemon-button.component.html',
  styleUrls: ['./pokemon-button.component.sass']
})
export class PokemonButtonComponent {
  loading = false;

  constructor(private pokemonService: PokemonService) {}

  loadMore() {
    this.loading = true;

    this.pokemonService.loadMorePokemons();

    setTimeout(() => {
      this.loading = false;
    }, 3000); 
  }
}


