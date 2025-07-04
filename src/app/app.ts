import { Component, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Proyectos } from './proyectos/proyectos';
import { Habilidades } from './habilidades/habilidades';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,SobreMi, Proyectos, Habilidades, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'LandingPage';

   isDarkMode = signal(false);

  constructor() {
    effect(() => {
      if (this.isDarkMode()) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  }

  toggleDarkMode() {
    this.isDarkMode.set(!this.isDarkMode());
  }
}
