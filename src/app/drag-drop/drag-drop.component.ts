import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
})
export class DragDropComponent implements OnInit {
  addNewTodoList: any;
  addNewDoingList: any;
  addNewDoneList: any;

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

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
  panelOpenState: boolean | any;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else  {
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
  
  closePanel() {
    this.panelOpenState = false;
  }

  remove1(item1: string): void {
    const index = this.todo.indexOf(item1);
    if (index !== -1) {
      this.todo.splice(index, 1);
    }
  }
  
  remove2(item2: string): void {
    const index = this.doing.indexOf(item2);
    if (index !== -1) {
      this.doing.splice(index, 1);
    }
  }

  remove3(item3: string): void {
    const index = this.done.indexOf(item3);
    if (index !== -1) {
      this.done.splice(index, 1);
    }
  }

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
