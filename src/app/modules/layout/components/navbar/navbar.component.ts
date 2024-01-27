import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayModule } from '@angular/cdk/overlay';
import { faBell, faInfoCircle, faClose, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { AuthService } from '@services/auth.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import { User } from '@models/user.model';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    imports: [FontAwesomeModule, OverlayModule, ButtonComponent, RouterLinkWithHref]
})
export class NavbarComponent implements OnInit {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
  faAngleDown = faAngleDown;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;

  user: User | null = null;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getProfile()
      .subscribe(user => {
        this.user = user;
      })
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
