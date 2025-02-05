import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-custom-directives',
  standalone:true,
  imports: [HighlightDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.scss'
})
export class CustomDirectivesComponent {
  number = 0;
  onClick(){
    this.number = Math.floor(Math.random() * 100) + 1;
  }
}
