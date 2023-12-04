import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Checkout } from '../../shared/interfaces/checkout';

@Component({
    standalone: true,
    selector: 'form-builder-form',
    template: `
        <form [formGroup]="checkoutForm" (ngSubmit)="handleSubmit()">
            <div formGroupName="shipping">
                <h5>Shipping Information</h5>
                <div class="row mt-3">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label">First Name</label>
                            <input formControlName="firstName" type="text" class="form-control" placeholder="Enter first name">
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label">Last Name</label>
                            <input formControlName="lastName" type="text" class="form-control" placeholder="Enter last name">
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Address</label>
                    <input formControlName="address" type="text" class="form-control" placeholder="Enter address">
                </div>
            </div>

            <div formGroupName="payment" class="mt-4">
                <h5>Payment Details</h5>
                <div class="mb-3">
                    <label class="form-label">Card Number</label>
                    <input formControlName="cardNumber" type="text" class="form-control" placeholder="Enter card number">
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label">Expiry Date</label>
                            <input formControlName="expiryDate" type="text" class="form-control" placeholder="Enter expiry date">
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label">CVV</label>
                            <input formControlName="cvv" type="text" class="form-control" placeholder="Enter cvv">
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3 mt-4">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button (click)="resetForm()" type="button" class="btn btn-danger ms-2">Rest</button>
            </div>
        </form>
    `,
    imports: [ReactiveFormsModule]
})

export class FormBuilderFormComponent implements OnInit {

    @Output()
    onSubmit = new EventEmitter<Checkout>();

    private fb = inject(FormBuilder);
    checkoutForm!: FormGroup;

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.checkoutForm = this.fb.group({
            shipping: this.fb.group({
                firstName: new FormControl(''),
                lastName: new FormControl(''),
                address: new FormControl('')
            }),
            payment: this.fb.group({
                cardNumber: new FormControl(''),
                expiryDate: new FormControl(''),
                cvv: new FormControl(''),
            })
        });
    }

    handleSubmit() {
        this.onSubmit.emit(this.checkoutForm.getRawValue());
    }

    resetForm() {
        this.checkoutForm.reset();
        this.handleSubmit();
    }
}