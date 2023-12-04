import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
    standalone: true,
    selector: 'app-form-control-form',
    template: `
        <div class="mb-3">
            <label for="nameFormControlInput1" class="form-label">Name</label>
            <input [formControl]="nameControl" type="text" class="form-control" id="nameFormControlInput" placeholder="Enter your name">
        </div>
        <div class="mb-3">
            <button (click)="handleSubmit()" type="button" class="btn btn-primary">Submit</button>
            <button (click)="resetFormValue()" type="button" class="btn btn-danger ms-2">Rest</button>
        </div>
    `,
    imports: [ReactiveFormsModule]
})

export class FromControlFormComponent {
    @Output() submit = new EventEmitter<string | null>();

    nameControl = new FormControl('');

    handleSubmit() {
        this.submit.emit(this.nameControl.value)
    }

    resetFormValue() {
        this.nameControl.reset();
        this.handleSubmit();
    }

}