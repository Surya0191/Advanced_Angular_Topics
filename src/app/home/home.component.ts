import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  topics = [
    { title: 'Signals', description: 'Signals in Angular are a reactive state management feature that automatically updates the UI when the state changes, simplifying reactivity without the need for subscriptions.', route: '/signals' },
    { title: 'Custom Directives', description: 'Custom directives in Angular are used to extend HTML functionality by adding custom behavior to elements, components, or attributes.', route: '/directives' },
    { title: 'Fork Join', description: 'ForkJoin in Angular is used to execute multiple observables in parallel and emits their combined final values only when all observables complete.', route: '/forkjoin' },
    { title: 'DOM Sanitizer', description: 'DOM Sanitizer in Angular helps prevent security risks by **cleaning and sanitizing untrusted HTML, URLs, styles, and scripts to protect against XSS attacks.', route: '/sanitizer' }
  ];
}
