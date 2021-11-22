import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  encapsulation : ViewEncapsulation.Emulated
})
export class TodoComponent implements OnInit {

  // list of items
  items = [];
  // User's task entry
  submission: string;

  constructor() { }

  ngOnInit(): void {
    // Remove background image added from the countdown clock
    // and set the background color to white
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = 'black';
  }

  // Adds new item to items list
  submitNewItem() {
    this.items.push([this.submission, false]);
  }

  // Marks items as complete
  completeItem(index) {
    this.items[index][1] = true;
  }

  // Deletes item from items list
  deleteItem(index) {
    this.items.splice(index, 1);
  }
}
