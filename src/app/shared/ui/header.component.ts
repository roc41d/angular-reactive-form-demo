import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    template: `
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand">
            <!-- <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"> -->
            {{ headerTitle }}
            </a>
        </div>
    </nav>
    `
})

export class HeaderComponent {

    @Input({required: true})
    headerTitle!: string
}