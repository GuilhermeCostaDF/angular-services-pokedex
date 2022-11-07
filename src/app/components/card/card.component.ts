import { PokemonData } from './../../models/pokemonData';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemon: PokemonData;

  constructor(private service: PokemonService) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        front_default: '',
      },
      types: [],
    };
  }

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }

  getPokemon(searchName: string) {
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types,
        };
      },
      error: (err) => console.log(err),
    });
  }

  getType(type: string): string {
    switch (type) {
      case 'electric':
        return 'electric';
      case 'fire':
        return 'fire';
      case 'grass':
        return 'grass';
      case 'poison':
        return 'poison';
      case 'flying':
        return 'flying';
      case 'bug':
        return 'bug';
      case 'water':
        return 'water';
      case 'psychic':
        return 'psychic';
      default:
        return 'padrao';
    }
  }
}
