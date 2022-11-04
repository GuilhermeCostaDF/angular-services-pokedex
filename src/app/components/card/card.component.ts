import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemonName: string = 'Charmander';
  pokemonPhoto: string = '';
  pokemonStats: string[] = ['Fire', 'Rock'];

  constructor() {}

  ngOnInit(): void {}
}
