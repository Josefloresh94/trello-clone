import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { RecoveryFormComponent } from "../../components/recovery-form/recovery-form.component";
import { HeaderComponent } from "../../components/header/header.component";
import { BackgroundComponent } from "../../components/background/background.component";
import { RouterLinkWithHref } from '@angular/router';

@Component({
    selector: 'app-recovery',
    standalone: true,
    templateUrl: './recovery.component.html',
    imports: [FooterComponent, RecoveryFormComponent, HeaderComponent, BackgroundComponent, RouterLinkWithHref]
})
export default class RecoveryComponent {

}
