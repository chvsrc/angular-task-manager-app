import { Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task';
import { TaskListComponent } from './components/task-list/task-list';

export const routes: Routes = [
  { path: 'add', component: AddTaskComponent },
  { path: 'list', component: TaskListComponent },
  { path: '', redirectTo: '/add', pathMatch: 'full' }  // default route
];
