import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./routes/task.routes').then(m => m.taskRoutes)
  },
  { path: '**', redirectTo: 'add' }
];
