import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-amis',
  imports: [FormsModule], // nécessaire pour [(ngModel)]
  templateUrl: './amis.html',
  styleUrl: './amis.css',
})
export class Amis {
  friends = [
    { name: 'Sami', email: 'sami@esprit.tn' },
    { name: 'Youssef', email: 'youssef@esprit.tn' },
    { name: 'Amine', email: 'amine@esprit.tn' },
  ];

  // Liée à l'input "Ajouter" avec [(ngModel)]
  nouvelAmi = '';

  ajouterAmi() {
    if (this.nouvelAmi.trim() !== '') {
      this.friends.push({ name: this.nouvelAmi.trim(), email: '' });
      this.nouvelAmi = '';
    }
  }
}
