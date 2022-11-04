import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemonName: string = 'charmander';
  pokemonPhoto: string = '';
  pokemonStats: string[] = ['Fire', 'Rock'];

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.service.getPokemon(this.pokemonName).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
}
