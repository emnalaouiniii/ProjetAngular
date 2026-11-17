import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profil } from './components/profil/profil';
import { Amis } from './components/amis/amis';
import { Notifications } from './components/notifications/notifications';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'profil', component: Profil },
  { path: 'amis', component: Amis },
  { path: 'notifications', component: Notifications },
  { path: '**', redirectTo: '' },
];
