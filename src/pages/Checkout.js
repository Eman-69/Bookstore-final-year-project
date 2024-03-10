import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51OsKnSSIjzh9pxOCn8rasjdMFfqfN4Szd3lNahYEVX5wcenUEmDyFReCwswAqt80T7PWC7JBsVRFwPsNCyCF7ql700ghb9H9WS');

    return (
        <section className="checkout-wrapper">
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
        </section>
    )
}

export default withAuthenticator(Checkout)
