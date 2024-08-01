import { Component } from '@angular/core';
import { MonsterService } from '../../services/monster/monster.service';
import { inject } from '@angular/core';
import { signal } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { model } from '@angular/core';
import { computed } from '@angular/core';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monster-list',
  standalone: true,
  imports: [PlayingCardComponent,SearchBarComponent,CommonModule],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent {

  monsterService = inject(MonsterService);

	monsters = signal<Monster[]>([]);
	search = model('');

	filteredMonsters = computed(() => {
		return this.monsters().filter(monster => monster.name.includes(this.search()));
	})

	constructor() {
		this.monsters.set(this.monsterService.getAll());
	}

	addGenericMonster() {
		const monster = new Monster();
		this.monsterService.add(monster);
		this.monsters.set(this.monsterService.getAll());
	}
}
