import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['']);
  }
}
