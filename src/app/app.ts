import { Component } from '@angular/core';
import { AddTask } from './components/add-task/add-task';
import { TaskList } from './components/task-list/task-list';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    AddTask,
    TaskList
  ]
})
export class App {}
