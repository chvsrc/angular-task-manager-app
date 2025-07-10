import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // Only RouterOutlet needed
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
