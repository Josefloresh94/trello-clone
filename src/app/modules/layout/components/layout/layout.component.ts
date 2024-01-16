import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    imports: [
      CommonModule,
      NavbarComponent,
      RouterOutlet
    ],
    template: '<router-outlet>'
})
export class LayoutComponent {

}
