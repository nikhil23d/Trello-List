import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
})
export class DragDropComponent implements OnInit {
  addNewTodoList: any;
  addNewDoingList: any;
  addNewDoneList: any;

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Shopping',
  ];

  doing = ['Walk dog', 'Running', 'Gym', 'Lunch'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail'];

  addTodo = '';
  addDoing = '';
  addDone = '';

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  constructor() {}

  ngOnInit(): void {}

  addNewTodo() {
    this.todo.push(this.addTodo);
    this.addTodo = '';
  }

  addNewDoing() {
    this.doing.push(this.addDoing);
    this.addDoing = '';
  }

  addNewDone() {
    this.done.push(this.addDone);
    this.addDone = '';
  }
}
