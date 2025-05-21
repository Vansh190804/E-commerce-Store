import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Item from './Item'


const Cart = () => {
    const count = useSelector((state) => state.counter.value)
    const data =  useSelector((state) => state.data.value)
    const dispatch = useDispatch()

    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='m-5 font-extrabold text-2xl'>SHOPPING CART</div>
                <div className='flex flex-row justify-between border-t-1 border-b-1 w-5/6 p-3 font-semibold'>
                    <div>Product</div>
                    <div className='flex flex-row justify-between w-1/4'>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Item Total</div>
                    </div>
                </div>

                {/* Items to add */}
                {data.length ? <Item/>: <div className='m-5 text-2xl font-bold text-red-500'>Cart Is Empty</div>}
                
                
            </div>
        </>
    )
}

export default Cart
