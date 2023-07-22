import React from 'react'
import {useDispatch} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions';



export default function Checkout({subtotal}) {

    const dispatch = useDispatch()
    function tokenHander(token)
    {
        console.log(token);
        dispatch(placeOrder(token,subtotal))
    }

  return (
    <div>
        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHander}
        stripeKey='pk_test_51NW0uGSEWsWWVccaonCoA9dYf3lh2laQ9uJBhlFvgawqTJmG9E9IUQ4IU0X1zyEimj9boaoTNSe5NZtvz9gqaU8S00RvmmZyIN'
        currency='INR'
        >
           
            <button className ='btn'>Pay Now</button>
        </StripeCheckout>
    </div>
  )
}
