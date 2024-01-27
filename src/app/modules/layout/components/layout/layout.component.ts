import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

import { RouterOutlet } from '@angular/router';
import { AuthService } from '@services/auth.service';

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
export default class LayoutComponent implements OnInit {
    constructor(
        private authService: AuthService
    ){}

    ngOnInit(){
        this.authService.getProfile().subscribe();
    }
}
