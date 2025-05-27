import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  selector: 'app-date-formatter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Date originale : {{ today }}</p>
    <p>Date formatée : {{ formatDate(today) }}</p>
  `
})
export class DateFormatterComponent {
  today = new Date();

  private datePipe = inject(DatePipe);

  formatDate(date: Date): string | null {
    return this.datePipe.transform(date, 'fullDate');
  }
}
