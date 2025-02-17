import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dom-sanitizer',
  templateUrl: './dom-sanitizer.component.html',
  standalone:true,
  styleUrls: ['./dom-sanitizer.component.scss']
})
export class DomSanitizerComponent {
  unsafeHtml: string;
  sanitizedHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.unsafeHtml = `<p style="color: red;">Unsafe HTML with <script>alert('Hacked!')</script></p>`;
    this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(this.unsafeHtml);
  }
}
