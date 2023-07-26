import axios from "axios";
export const placeOrder = (token , subtotal) => async(dispatch , getState)=>{
    dispatch({type:'PLACE_ORDER_REQUEST'})
    const {userId,email} = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems

    try{

        const response = await axios.post('/api/orders/placeorder' , {
            token , 
            subtotal , 
            currentUser :{userId,email}, 
            cartItems
        });
        dispatch({type:'PLACE_ORDER_SUCCESS'});
        console.log(response);

    }
    catch(error){
        if (error.response && error.response.data && error.response.data.type === 'StripeInvalidRequestError') {
            console.error('Stripe Invalid Request Error:', error.response.data.message);
            console.error('Stripe Request ID:', error.response.data.requestId);
          } else {
            // Handle other errors
            console.error('Error:', error.message);
          
          }

        dispatch({type:'PLACE_ORDER_FAILED'})

        console.log(error);
    }
}

export const getUserOrders =()=>async (dispatch,getState)=>{

    const currentUser=getState().loginUserReducer.currentUser
    dispatch({type:'GET_USER_ORDERS_REQUEST'})

    try{
        const response = await axios.post('/api/orders/getuserorders',{userId:currentUser._id})
        console.log(response)
        dispatch({type:'GET_USER_ORDERS_SUCCESS', payload : response.data})
       
    } 
    catch(error){
        dispatch({type:'GET_USER_ORDERS_FAILED' , payload : error})

    }





} 