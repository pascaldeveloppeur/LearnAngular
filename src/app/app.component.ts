import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';
import { signal } from '@angular/core';
import { computed } from '@angular/core';
import { effect } from '@angular/core';
import { model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterService } from './services/monster/monster.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

}
