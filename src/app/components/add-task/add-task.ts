import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrls: ['./add-task.css']
})
export class AddTaskComponent {
  taskName: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.taskName.trim()) {
      this.taskService.addTask(this.taskName);
      this.taskName = '';
    }
  }
}
