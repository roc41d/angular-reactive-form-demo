import { Component } from "@angular/core";
import { FormBuilderFormComponent } from "./ui/form-builder-form.component";
import { Checkout } from "../shared/interfaces/checkout";

@Component({
    standalone: true,
    selector: 'app-form-builder',
    template: `
        <h2>Form Builder</h2>
        <hr>
        <form-builder-form (onSubmit)="handleSubmit($event)"></form-builder-form>

        @if (checkoutData) {
            <div class="mt-4">
                <h5>Shipping Info</h5>
                <p>First Name: {{ checkoutData.shipping.firstName }}</p>
                <p>Last Name: {{ checkoutData.shipping.lastName }}</p>
                <p>Address: {{ checkoutData.shipping.address }}</p>
            </div>
            <div class="mt-3">
                <h5>Payment Details</h5>
                <p>Card Number: {{ checkoutData.payment.cardNumber }}</p>
                <p>Expiry Date: {{ checkoutData.payment.expiryDate }}</p>
                <p>CVV: {{ checkoutData.payment.cvv }}</p>
            </div>
        }
    `,
    imports: [FormBuilderFormComponent]
})

export class FormBuilderComponent {

    checkoutData!: Checkout;
    handleSubmit(checkoutData: Checkout) {
        this.checkoutData = checkoutData;
    }
}