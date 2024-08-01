import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { input } from '@angular/core';
import { model } from '@angular/core';
import { output } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchButtonClicked = output<void>({
		alias: 'submit'
	});

	search = model('blala');

	searchClick() {
		this.searchButtonClicked.emit();
	}


}
