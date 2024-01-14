import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
    selector: 'app-boards',
    standalone: true,
    templateUrl: './boards.component.html',
    imports: [NavbarComponent, FontAwesomeModule, CdkAccordionModule, NgClass]
})

export class BoardsComponent {
    faTrello = faTrello;
    faBox = faBox;
    faWaveSquare = faWaveSquare;
    faClock = faClock;
    faAngleUp = faAngleUp;
    faAngleDown = faAngleDown;
    faHeart = faHeart;
    faBorderAll = faBorderAll;
    faUsers = faUsers;
    faGear = faGear;
}
