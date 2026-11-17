import { Component } from '@angular/core';
import { Profil } from '../profil/profil';
import { Amis } from '../amis/amis';
import { Notifications } from '../notifications/notifications';

// Page d'accueil : regroupe profil, amis et notifications
@Component({
  selector: 'app-home',
  imports: [Profil, Amis, Notifications],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
