import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTaskComponent {
  taskName: string = '';

  addTask() {
    console.log('Task added:', this.taskName);
    this.taskName = '';
  }
}
