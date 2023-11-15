import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = signal(5);
  title2 = computed(() => this.title());
  constructor() {
    effect(() => console.log(this.title()));
  }
  updateTitle() {
    this.title.update((value) => value + 5);
    console.log(typeof this.title2());
  }
}
