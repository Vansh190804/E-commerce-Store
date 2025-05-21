import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'



const router = createBrowserRouter ([
  {
    path: '/',
    element: <>
             <Navbar/>
             <Home/>
             </>
  },
  {
    path: '/Cart',
    element:<>
           <Navbar/>
           <Cart/>
          </>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
