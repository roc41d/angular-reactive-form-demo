import { Component } from "@angular/core";
import { FormArrayFormComponent } from "./ui/form-array-form.component";

@Component({
    standalone: true,
    selector: 'app-form-array',
    template: `
        <h2>Form Array</h2>
        <hr>
        <app-form-array-form (onSubmit)="handleSubmit($event)"></app-form-array-form>

        @if (programmingLanguages) {
            <div class="mt-3">
                <h3>Programming Languages:</h3>
                @for (lang of programmingLanguages; track $index) {
                    <p>{{ $index + 1 }}: {{ lang }}</p>
                }
            </div>
        }
    `,
    imports: [FormArrayFormComponent]
})

export class FormArrayComponent {

    programmingLanguages!: string[];

    handleSubmit(languages: string[]) {
        this.programmingLanguages = languages;
    }

}