export interface Checkout {
    shipping: shippingDetails;
    payment: paymentInfo;
}

interface shippingDetails {
    firstName: string;
    lastName: string;
    address: string;
}

interface paymentInfo {
    cardNumber: string;
    expiryDate: number;
    cvv: number;
}