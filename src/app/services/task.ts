import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // ✅ Makes it globally available
})
export class TaskService {
  private tasks: { name: string; done: boolean }[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(name: string) {
    this.tasks.push({ name, done: false });
  }

  clearCompleted() {
    this.tasks = this.tasks.filter(task => !task.done);
  }
}
