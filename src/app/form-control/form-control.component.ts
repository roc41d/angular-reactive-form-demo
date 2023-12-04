import { Component } from '@angular/core';
import { FromControlFormComponent } from "./ui/form-control-form.component";

@Component({
    standalone: true,
    selector: 'app-from-control',
    template: `
        <h2>Form Control</h2>
        <hr>
        <app-form-control-form (submit)="handleSubmit($event)"></app-form-control-form>

        @if (formInput) {
            <div class=" mt-3">
                <h5>Hello, {{formInput}}</h5>
            </div>
        }
    `,
    imports: [FromControlFormComponent]
})

export class FormControlComponent {
    formInput!: string | null;

    handleSubmit(formValue: string | null) {
        this.formInput = formValue;
    }
}