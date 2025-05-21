import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/counter/counterSlice'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = ()=>{
      dispatch(increment())
      navigate("/Cart")
      props.onAddCart()
      
  }

  return (
    <div className={`flex flex-col border-1 border-amber-100 rounded-xl m-5 bg-red-50`}>
      <img className="h-100 p-1" src={props.src} alt="" />
      <div className="flex flex-row justify-between p-3">
      <span>{props.des}</span>
      <span>{props.price}</span>
      </div>
      <button onClick={handleClick} className='bg-black text-white rounded-b-lg cursor-pointer h-10'>ADD TO CART</button>
    </div>
  )
}

export default Card
