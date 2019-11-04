import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_05d9cCrYRN6LbYdF5GWKDG3F';

   const  onToken = token => {
        console.log(token);
        alert('payment successful')
    }

    return(
        <StripeCheckout 
        label='pay Now'
        name='CHIBABA clothing ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton
