import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop'; 
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NavbarComponent } from "../../components/navbar/navbar.component";

import { ToDo } from '../../models/todo.model';

@Component({
    selector: 'app-board',
    standalone: true,
    templateUrl: './board.component.html',
    imports: [NavbarComponent, NavbarComponent, DragDropModule],
    styles: [
      `
        /* Animate items as they're being sorted. */
        .cdk-drop-list-dragging .cdk-drag {
          transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
        }

        /* Animate an item that has been dropped. */
        .cdk-drag-animating {
          transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
        }
      `
    ]
})
export class BoardComponent {
  todos: ToDo[] = [
    {
      id: '1',
      title: 'Make dishes'
    },
    {
      id: '2',
      title: 'Buy a unicorn'
    }
  ];

  doing: ToDo[] = [
    {
      id: '3',
      title: 'Watch Angular Path in Platzi'
    }
  ];

  done: ToDo[] = [
    {
      id: '4',
      title: 'Play video games'
    }
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
