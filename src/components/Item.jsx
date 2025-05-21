import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../Redux/counter/counterSlice'
import { multiply, minus } from '../Redux/data/dataSlice'
import { increase, decrease } from '../Redux/data/totalSlice'
import { useEffect } from 'react'


const Item = () => {
    const total = useSelector((state) => state.total.value)
    const data = useSelector((state) => state.data.value)
    const quantities = useSelector((state) => state.data.quantities)
    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(increment())
    }

    const handleSubtract = () => {
        dispatch(decrement())
    }

    const formatToRupees = (num) => {
        return new Intl.NumberFormat('en-IN', { 
          style: 'currency', 
          currency: 'INR',
          maximumFractionDigits: 0 
        }).format(num);
      };


    return (
        <>
            {
                (data).map((item) => (
                    <div key={item.des} className='flex flex-row justify-between w-5/6 border-b p-3'>
                        <div className='flex flex-col justify-center items-start'>
                            <img className='h-35 p-2 m-2 ml-0 rounded-xl bg-red-50' src={`${item.src}`} alt="" />
                            <span className='text-lg font-bold'>{item.des}</span>
                        </div>
                        <div className='flex flex-row justify-between w-1/4 items-center m-4'>
                            <span>{item.price}</span>
                            <div className='flex flex-row'>
                                <button onClick={() => handleSubtract(dispatch(minus({ des: item.des })),
                             dispatch(decrease({ item: parseInt(item.price.replace(/[^0-9]/g, "")) })))} className='p-1 m-1 border-1 h-5 flex items-center cursor-pointer text-xl font-black'>-</button>
                                <span>{quantities[item.des]}</span>
                                <button onClick={() => handleAdd(dispatch(multiply({ des: item.des })),
                                    dispatch(increase({ item: parseInt(item.price.replace(/[^0-9]/g, "")) })))} className='p-1 m-1 border-1 h-5 flex items-center cursor-pointer font-black'>+</button>
                            </div>
                            <span>{formatToRupees(item.total)}</span>
                        </div>
                    </div>
                ))
            }

            <div className="flex flex-row w-5/6 justify-between p-3 pr-8 border-b">
                <span className='text-xl font-black'>Sub Total</span>
                <span>{formatToRupees(total)}</span>
            </div>
        </>
    )
}

export default Item
