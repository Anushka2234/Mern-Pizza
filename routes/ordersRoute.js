const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51NW0uGSEWsWWVccaDYTerbCllUADJuekGOzFxGdlidIlVIn7wwtdkixbbSGhOflLWJwn4OUlAY4nh2kqRHfNH8sF00MzHJIQDf")


router.post("/placeorder" ,async(req,res)=>{

    const {token , subtotal , currentUser , cartItems} = req.body

    try {
        const customer = await stripe.customers.create({
            email : token.email,
            source:token.id
        })
        const payment = await stripe.charges.create({
            amount:subtotal*100,
            currency:'inr',
            customer : customer.id,
            receipt_email : token.email
        },{
            idempotency_key: uuidv4(),
        });
        if(payment)
        {
            res.send('Payment Done')
        }
        else{
            res.send('Payment failed')
        }
    }
    catch(error){
        return res.status(400).json({message: 'Something went wrong' , error});
    }

});

module.exports = router