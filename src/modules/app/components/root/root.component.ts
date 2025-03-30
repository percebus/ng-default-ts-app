import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from '../hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {
  title = 'demo';
}
