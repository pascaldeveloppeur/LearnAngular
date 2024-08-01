import { inject, OnDestroy } from '@angular/core';
import { signal } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent implements OnInit, OnDestroy {

  private route = inject(ActivatedRoute);
	private router = inject(Router);

	routeSubscription: Subscription | null = null;
	monsterId = signal<number | undefined>(undefined);

	ngOnInit(): void {
		this.routeSubscription = this.route.params.subscribe(params => {
			this.monsterId.set(params['monster'] ? parseInt(params['monster']) : undefined);
		});
	}

	ngOnDestroy(): void {
		this.routeSubscription?.unsubscribe();
	}

	next() {
		let nextId = this.monsterId() || 0;
		nextId++;
		this.router.navigate(['monster/' + nextId])
	}

}
