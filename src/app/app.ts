import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './components/add-task/add-task';
import { TaskListComponent } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    AddTaskComponent,
    TaskListComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Angular Task Manager';
}
