import React, { useEffect } from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, multiply } from '../Redux/data/dataSlice';
import {increase} from '../Redux/data/totalSlice'




const Home = () => {
  
  const total = useSelector((state)=>state.total.value)
  const data = useSelector((state)=> state.data.value)
  const quantities = useSelector((state)=> state.data.quantities)
  const dispatch = useDispatch()
  
  const handleAdd = (item)=>{
    dispatch(addToCart(item))
    dispatch(increase({item: item.total}))
  }

  return (
    <>
      {/*This is a card*/}
      <div className='flex flex-row justify-around'>
        <Card des="Apple iPhone 13 Pro" src="src/img/item1.jpg" price="₹44,999" onAddCart={()=>handleAdd({des: "Apple iPhone 13 Pro", src: "src/img/item1.jpg", price: "₹44,999", total: 44999,})} />

        <Card des="SAMSUNG Galaxy S24 Ultra 5G" src="src/img/item2.jpg" price="₹1,04,999" onAddCart={()=>handleAdd({des:"SAMSUNG Galaxy S24 Ultra 5G", src:"src/img/item2.jpg", price:"₹1,04,999", total:104999,})}/>

        <Card des="POCO F6 Pro 5G" src="src/img/item3.jpg" price="₹22,999" onAddCart={()=> handleAdd({des:"POCO F6 Pro 5G", src:"src/img/item3.jpg", price:"₹22,999", total:22999,})}/>
      </div>
    </>
  )
}

export default Home
