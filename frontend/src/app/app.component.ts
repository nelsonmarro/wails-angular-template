import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greet } from '../../wailsjs/go/main/App';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  resultText: string = 'Please enter your name below 👇';
  name: string = '';

  greet(): void {
    Greet(this.name).then((result: string) => {
      this.resultText = result;
    });
  }
}
