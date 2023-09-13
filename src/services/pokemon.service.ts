import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/app/model/Pokemon';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemons: Pokemon[] = [];
  private currentPage = 1;
  private pageSize = 20;

  constructor(private httpClient: HttpClient) {
    this.loadPokemons();
  }

  private loadPokemons() {
    const offset = (this.currentPage - 1) * this.pageSize;
    const allPokemonsUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${this.pageSize}`;

    this.httpClient
      .get<any>(allPokemonsUrl)
      .pipe(
        map((value) => value.results),
        mergeMap((value: any) => {
          return from(value).pipe(
            mergeMap((v: any) => this.httpClient.get(v.url))
          );
        }),
        mergeMap(async (value) => value)
      )
      .subscribe((result: any) =>
        this.pokemons[result.id] = {
          image: result.sprites.front_default,
          number: result.id,
          name: result.name,
          types: result.types.map((t: { type: { name: any } }) => t.type.name),
        }
      );
  }

  loadMorePokemons() {
    this.currentPage++;
    this.loadPokemons();
  }
}