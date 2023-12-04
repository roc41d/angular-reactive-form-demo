import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'form-control',
        loadComponent: () => 
            import('./form-control/form-control.component').then((comp => comp.FormControlComponent))
    },
    {
        path: '',
        redirectTo: 'form-control',
        pathMatch: 'full'
    }
];
