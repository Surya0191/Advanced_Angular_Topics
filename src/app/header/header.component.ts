import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; // Import required Angular Material modules
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, // Mark as standalone
  imports: [RouterModule, MatIconModule], // Include required modules here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
