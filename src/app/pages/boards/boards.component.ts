import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faBox, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-boards',
    standalone: true,
    templateUrl: './boards.component.html',
    imports: [NavbarComponent, FontAwesomeModule]
})
export class BoardsComponent {
    faClock = faClock;
    faTrello = faTrello;
    faBox = faBox;
    faWaveSquare = faWaveSquare;
}
