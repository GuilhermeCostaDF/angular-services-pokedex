import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl: string = '';
  private pokeData: any;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.pokeApi;
  }

  getPokemon(pokemonName: string) {
    this.pokeData = this.http.get(`${this.baseUrl}${pokemonName}`);
    console.log(this.pokeData);
  }
}
