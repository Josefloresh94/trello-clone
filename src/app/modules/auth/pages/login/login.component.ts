import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { HeaderComponent } from "../../components/header/header.component";
import { BackgroundComponent } from "../../components/background/background.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    imports: [FooterComponent, LoginFormComponent, HeaderComponent, BackgroundComponent]
})
export class LoginComponent {

}
