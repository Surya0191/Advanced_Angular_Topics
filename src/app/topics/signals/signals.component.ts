import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent implements OnInit {
  effectCount = 0;
  count = signal(0);
  colors = signal(['red', 'Green']);
  length = signal(20); //Writable signals
  breadth = signal(40);
  area = computed(() => this.length() * this.breadth()); //Computed Signals

  constructor() {
    effect(() => {
      this.count();
      this.colors();
      this.length();
      this.breadth();
      this.effectCount = this.effectCount + 1;
    });
  }

  ngOnInit(): void {}

  increase() {
    this.count.update((value) => value + 1);
    this.colors.update((values) => [...values, 'Blue']);
  }

  calculateArea() {
    this.length.set(30);
  }
}
