import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-form-array-form',
    template: `
        <form [formGroup]="programmingLanguagesForm" (ngSubmit)="handleSubmit()">
            <div formArrayName="languages">
                @for (lang of languages.controls; track $index) {
                    <div class="input-group mb-3">
                        <input [formControlName]="$index" type="text" class="form-control" placeholder="Programming language {{ $index + 1 }}">
                        @if ($index != 0) {
                            <button (click)="removeLanguage($index)" class="btn btn-danger" type="button">Remove</button>
                        }
                    </div>
                }

            </div>
            <div>
                <button class="btn btn-info" type="button" (click)="addLanguage()">Add Language</button>
                <button class="btn btn-primary ms-2" type="submit">Submit</button>
            </div>

        </form>
    `,
    imports: [ReactiveFormsModule]
})

export class FormArrayFormComponent implements OnInit {
    @Output() onSubmit = new EventEmitter<string[]>()

    programmingLanguagesForm!: FormGroup;

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.programmingLanguagesForm = new FormGroup({
            languages: new FormArray([new FormControl('')])
        });
    }

    get languages() {
        return (this.programmingLanguagesForm.get('languages') as FormArray);
    }

    addLanguage() {
        this.languages.push(new FormControl(''));
    }

    removeLanguage(index: number) {
        this.languages.removeAt(index);
        this.handleSubmit();
    }

    handleSubmit() {        
        this.onSubmit.emit(this.languages.value);
    }
}