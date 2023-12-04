import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    template: `
    <div class="list-group">
        @for (link of links; track $index) {
            <a
                [routerLink]="link.route"
                class="list-group-item list-group-item-action" 
                aria-current="true">

                {{link.text}}
            </a>
        }
    </div>
    `,
    styles: [],
    imports: [RouterModule]
})

export class SideBarComponent {
    links: {route: string, text: string}[] = [
        { route: '/form-control', text: 'From Control' },
        { route: '/from-group', text: 'Form Group' },
        { route: '/from-array', text: 'Form Array' },
        { route: '/from-builder', text: 'Form Builder' },
      ];
}