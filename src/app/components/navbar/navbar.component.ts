import { Component } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    imports: [BtnComponent, OverlayModule, FontAwesomeModule]
})
export class NavbarComponent {

    faBell = faBell;
    faInfoCircle = faInfoCircle;

    isOpen = false;
    isOpenBody = false;
}
