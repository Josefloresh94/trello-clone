import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ToDo } from '../../../../models/todo.model';
import { ButtonComponent } from "../../../shared/components/button/button.component";

interface InputData{
  todo: ToDo;
}

interface OutputData{
  rta: boolean;
}

@Component({
    selector: 'app-todo-dialog',
    standalone: true,
    templateUrl: './todo-dialog.component.html',
    imports: [FontAwesomeModule, ButtonComponent]
})
export class TodoDialogComponent {
  
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  
  todo: ToDo;
  
  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
    ) {
      this.todo = data.todo;
    }

  close(){
    this.dialogRef.close({
      rta: true,
    });
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({ rta });
  }
}
