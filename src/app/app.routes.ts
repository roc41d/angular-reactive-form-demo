import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'form-control',
        loadComponent: () => 
            import('./form-control/form-control.component').then((comp) => comp.FormControlComponent)
    },
    {
        path: 'form-group',
        loadComponent: () => 
            import('./form-group/form-group.component').then((comp) => comp.FormGroupComponent)
    },
    {
        path: 'form-array',
        loadComponent: () =>
            import('./form-array/form-array.component').then((comp) => comp.FormArrayComponent)
    },
    {
        path: '',
        redirectTo: 'form-control',
        pathMatch: 'full'
    }
];
