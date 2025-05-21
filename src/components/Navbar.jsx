import React from 'react'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux' 
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const count = useSelector((state) => state.counter.value)
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = ()=>{
    if(location.pathname == "/Cart"){
      navigate("/")
    }
    else{
      navigate("/Cart")
    }
  }

  return (
    <div>
      <ul className='flex flex-row justify-between p-5 text-white bg-black'>
        <Link to="/">
        <li>Home</li>
        </Link>
        <li>About</li>
        <li>Contact Us</li>
      </ul>

      {/* Part of Nav */}
            <nav className='bg-purple-800 opacity-90 flex flex-row justify-between p-2'>
              <div className="font-bold text-xl font-serif">SHOP HERE</div>
              <div className='flex flex-row items-center gap-2'>
                <div className="cursor-pointer hover:text-white" onClick={handleClick}><FaShoppingCart size={30}/></div>
                <div className="text-lg">{count}</div>
              </div>
            </nav>
    </div>
  )
}

export default Navbar
