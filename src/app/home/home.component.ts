import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule], // Add CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  topics = [
    { title: 'Signals', description: 'Signals in Angular are a reactive state management feature that automatically updates the UI when the state changes, simplifying reactivity without the need for subscriptions.', route: '/signals' },
    { title: 'Custom Directives', description: 'Custom directives in Angular are used to extend HTML functionality by adding custom behavior to elements, components, or attributes.', route: '/directives' },
    { title: 'Fork Join', description: 'Learn about Fork Join', route: '/forkjoin' },
    { title: 'DOM Sanitizer', description: 'Learn about Dom Sanitizer', route: '/sanitizer' }
  ];
}
