import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { User } from "../../shared/interfaces/user";


@Component({
    standalone: true,
    selector: 'app-form-group-form',
    template: `
        <form class="form" (ngSubmit)="handleSubmit()" [formGroup]="userForm">
            <div class="mb-3">
                <label for="firstNameFormControlInput" class="form-label">First Name</label>
                <input formControlName="firstName" type="text" class="form-control" id="firstNameFormControlInput" placeholder="Enter first name">
            </div>
            <div class="mb-3">
                <label for="lastNameFormControlInput" class="form-label">Last Name</label>
                <input formControlName="lastName" type="text" class="form-control" id="lastNameFormControlInput" placeholder="Enter last name">
            </div>
            <div class="mb-3">
                <label for="emailFormControlInput" class="form-label">Email Address</label>
                <input formControlName="email" type="email" class="form-control" id="emailFormControlInput" placeholder="Enter email address">
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button (click)="resetForm()" type="button" class="btn btn-danger ms-2">Rest</button>
            </div>
        </form>
    `,
    imports: [ReactiveFormsModule]
})

export class FormGroupFormComponent {

    @Output() onSubmit = new EventEmitter<User>()

    userForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
    });

    handleSubmit() {
        this.onSubmit.emit(this.userForm.getRawValue() as User);        
    }

    resetForm() {
        this.userForm.reset();
        this.handleSubmit();
    }
}