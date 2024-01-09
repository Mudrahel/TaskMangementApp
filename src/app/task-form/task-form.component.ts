import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})

export class TaskFormComponent {
  newTask: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService) { }

  addTask(): void {
    this.taskService.addTask({ ...this.newTask, id: this.taskService.getTasks().length + 1 });
    this.newTask = { id: 0, title: '', description: '', completed: false };
  }
}
