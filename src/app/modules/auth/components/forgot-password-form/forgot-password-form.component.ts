import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { RequestStatus } from '@models/request-status.model';
import { AuthService } from '@services/auth.service';

@Component({
    selector: 'app-forgot-password-form',
    standalone: true,
    templateUrl: './forgot-password-form.component.html',
    imports: [ReactiveFormsModule, FontAwesomeModule, ButtonComponent]
})
export class ForgotPasswordFormComponent {

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });
  status: RequestStatus = 'init';
  emailSent = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  sendLink() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email } = this.form.getRawValue();
      this.authService.recovery(email)
        .subscribe({
          next: () => {
            this.status = 'success';
            this.emailSent = true;
          },
          error: () => {
            this.status = 'failed'
          }
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
