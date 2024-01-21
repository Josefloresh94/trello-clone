import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    imports: [
        NavbarComponent,
        RouterOutlet
    ],
    template: '<router-outlet>'
})
export class LayoutComponent {

}
