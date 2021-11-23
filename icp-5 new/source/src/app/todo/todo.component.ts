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
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = 'orange';
  }

  submitNewItem() {
    this.items.push([this.submission, false]);
  }

  completeItem(index) {
    this.items[index][1] = true;
  }

  deleteItem(index) {
    this.items.splice(index, 1);
  }
}
