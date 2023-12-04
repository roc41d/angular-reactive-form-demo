import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'form-control',
        loadComponent: () => 
            import('./form-control/form-control.component').then((comp => comp.FormControlComponent))
    },
    {
        path: 'form-group',
        loadComponent: () => 
            import('./form-group/form-group.component').then((comp => comp.FormGroupComponent))
    },
    {
        path: '',
        redirectTo: 'form-control',
        pathMatch: 'full'
    }
];
