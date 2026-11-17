import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menu = [
    { label: 'Accueil', path: '/' },
    { label: 'Profil', path: '/profil' },
    { label: 'Amis', path: '/amis' },
    { label: 'Notifications', path: '/notifications' },
  ];
}
