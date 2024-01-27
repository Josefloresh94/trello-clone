import { Routes } from '@angular/router';

import { authGuard } from '@guards/auth.guard';
import { redirectGuard } from '@guards/redirect.guard';

export const routes: Routes = [
    {
        path: '',
        // redirectTo: 'login',
        // pathMatch: 'full',
        canActivate: [ redirectGuard ],
        children: [
            {
                path: 'login',
                loadComponent:() => import('./modules/auth/pages/login/login.component'),
                title: 'Login'
            },
            {
                path: 'forgot-password',
                loadComponent:() => import('./modules/auth/pages/forgot-password/forgot-password.component'),
                title: 'Forgot Password'
            },
            {
                path: 'register',
                loadComponent:() => import('./modules/auth/pages/register/register.component'),
                title: 'Register'
            },
            {
                path: 'recovery',
                loadComponent:() => import('./modules/auth/pages/recovery/recovery.component'),
                title: 'Recovery'
            },
        ]
    },
    {
        path: 'app',
        loadComponent:() => import('./modules/layout/components/layout/layout.component'),
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
