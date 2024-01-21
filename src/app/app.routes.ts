import { Routes } from '@angular/router';

import { LoginComponent } from './modules/auth/pages/login/login.component';
import { ForgotPasswordComponent } from './modules/auth/pages/forgot-password/forgot-password.component'; 
import { RegisterComponent } from './modules/auth/pages/register/register.component'; 
import { RecoveryComponent } from './modules/auth/pages/recovery/recovery.component'; 
import { LayoutComponent } from './modules/layout/components/layout/layout.component';
import { authGuard } from '@guards/auth.guard';

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
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'app',
                redirectTo: 'boards',
                pathMatch: 'full',
            },
            {
                path: 'boards',
                loadComponent:() => import('./modules/boards/pages/boards/boards.component')
            },
            {
                path: 'board',
                loadComponent:() => import('./modules/boards/pages/board/board.component')
            },
            {
                path: 'profile',
                loadComponent:() => import('./modules/profile/pages/profile/profile.component')
            },
            {
                path: 'users',
                loadComponent:() => import('./modules/users/pages/users-table/users-table.component')
            },

        ]
    },
];
