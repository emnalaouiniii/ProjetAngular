import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = [
    'Une nouvelle conférence est disponible.',
    'Sami vous a envoyé une invitation.',
  ];

  // false = notifications masquées au départ
  afficher = false;
}
