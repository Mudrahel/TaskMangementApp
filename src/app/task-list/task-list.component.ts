import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule,NgForOf],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.refreshTaskList();
  }

  refreshTaskList(){
    this.tasks = this.taskService.getTasks();
  }

  markAsCompleted(taskId: number): void {
    this.taskService.markAsCompleted(taskId);
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.refreshTaskList();
  }
}