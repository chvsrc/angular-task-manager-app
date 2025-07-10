import { Routes } from '@angular/router';
import { AddTaskComponent } from '../components/add-task/add-task';
import { TaskListComponent } from '../components/task-list/task-list';

export const taskRoutes: Routes = [
  { path: 'add', component: AddTaskComponent },
  { path: 'list', component: TaskListComponent }
];
