import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/ui/header.component";
import { SideBarComponent } from "./shared/ui/side-bar.component";
import { FooterComponent } from "./shared/ui/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-header [headerTitle]="title"></app-header>
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-sm-12 col-lg-3" style="border-right: 1px solid #eee;">
                <app-sidebar></app-sidebar>
            </div>
            <div class="col-sm-12 col-lg-9">
                <router-outlet></router-outlet>
            </div>
        </div>
    </div>
    <app-footer></app-footer>
  `,
    imports: [CommonModule, RouterOutlet, HeaderComponent, SideBarComponent, FooterComponent]
})
export class AppComponent {
  title = 'Angular Reactive Form Demo';
}
