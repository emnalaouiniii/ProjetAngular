import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Interpolation {{ }} : TS -> HTML
  appName = 'Conference App';
  slogan = 'Bienvenue sur votre espace utilisateur';
}
