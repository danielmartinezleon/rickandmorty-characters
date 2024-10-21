import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {
  
  listadoPersonajes: Character[] = [];

  constructor(private characterService: CharacterService){}
  
  
  ngOnInit(): void {
    this.characterService.getCharacterList().subscribe((data) => {
      this.listadoPersonajes = data.results;
    });
  }
}
