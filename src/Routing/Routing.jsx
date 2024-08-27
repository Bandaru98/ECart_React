import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Cart from '../Components/Cart/Cart'
import Singlepage from '../Components/Singlepage/Singlepage'
import Fetchdata from '../Components/Fetchdata/Fetchdata'


const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Fetchdata />} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/product/:id' element={<Singlepage/>} />


               
            

            </Routes>
        </>
    )
}

export default Routing
