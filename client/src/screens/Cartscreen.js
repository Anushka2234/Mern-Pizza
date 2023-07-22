import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import {deleteFromCart} from '../actions/cartActions'
import Checkout from '../components/Checkout'

export default function Cartscreen() {
  const cartstate = useSelector(state=>state.cartReducer)
  const cartItems = cartstate.cartItems
  var subtotal = cartItems.reduce((x,items)=>x+items.price,0)
  const dispatch = useDispatch()
  return (
    <div className="row justify-content-center">

      <div className="col-md-6">
        <h2 style={{fontSize:'40px'}}>My Cart</h2>
        
        {cartItems.map(items=>{
        return <div className="flex-container">
          <div className="text-left m-1 w-100">
            <h1>{items.name}[{items.varient}]</h1>
            <h1>Price: {items.Quantity}={items.prices[0][items.varient]}={items.price}</h1>
            <h1 style={{display:'inline'}}>Quantity : </h1>
            <i className="fas fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(items,items.Quantity+ parseInt(1),items.varient))}}> </i>
          
            <b>{items.Quantity}</b>
            <i className="fa-solid fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(items,items.Quantity- parseInt(1),items.varient))}}> </i>
            <hr/>

          </div>
            
          <div className='m-1 w-100'>
             <img src={items.image} style={{height:'80px' ,width:'80px'}}/>

          </div>

          <div className='m-1 w-100'>
            <i className="fa-solid fa-trash mt-5" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(items))}}> </i>

          </div>

        </div>
        })}
        
      </div>
      <div className="col-md-4 text-right">
         <h2 style={{fontSize:'45px'}}>SubTotal :  {subtotal}/-</h2>
         <Checkout subtotal={subtotal} />

      </div>

        
    </div>
  )
}
