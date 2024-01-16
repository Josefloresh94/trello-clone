import { Routes } from '@angular/router';

import { LoginComponent } from './modules/auth/pages/login/login.component';
import { ForgotPasswordComponent } from './modules/auth/pages/forgot-password/forgot-password.component'; 
import { RegisterComponent } from './modules/auth/pages/register/register.component'; 
import { RecoveryComponent } from './modules/auth/pages/recovery/recovery.component'; 
import { BoardComponent } from './modules/boards/pages/board/board.component';
import { BoardsComponent } from './modules/boards/pages/boards/boards.component';
import { LayoutComponent } from './modules/layout/components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        title: 'Forgot Password'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path: 'recovery',
        component: RecoveryComponent,
        title: 'Recovery'
    },
    {
        path: 'boards',
        component: BoardsComponent
    },
    {
        path: 'board',
        component: BoardComponent
    },
];
