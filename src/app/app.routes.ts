import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuienessomosComponent } from './pages/quienessomos/quienessomos.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta principal
  { path: 'quienessomos', component: QuienessomosComponent },
  { path: 'catalogo', component: CatalogoComponent },
];
