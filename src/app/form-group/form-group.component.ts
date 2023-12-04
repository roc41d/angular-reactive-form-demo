import { Component } from "@angular/core";
import { FormGroupFormComponent } from "./ui/form-group-form.component";
import { User } from "../shared/interfaces/user";

@Component({
    standalone: true,
    selector: 'app-form-group',
    template: `
    <h2>Form Group</h2>
    <hr>
    <app-form-group-form (onSubmit)="handleSubmit($event)"></app-form-group-form>

    @if (userObj) {
        <div class="mt-3">
            <h5>Form Values:</h5>
            <p>First Name: {{ userObj.firstName }}</p>
            <p>Last Name: {{ userObj.lastName }}</p>
            <p>Email: {{ userObj.email }}</p>
        </div>
    }
    `,
    imports: [FormGroupFormComponent]
})

export class FormGroupComponent {

    userObj!: User;

    handleSubmit(user: User) {
        this.userObj = user;
        
    }
}