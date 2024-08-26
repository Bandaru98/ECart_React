import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Fetchdata from '../Components/Fetchdata/Fetchdata'
import MensCloths from '../Components/MensCloths/MensCloths'
import Cart from '../Components/Cart/Cart'


const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart/>} />

                {/* <Route path='/fetchdata' element={<Fetchdata />} /> */}
                {/* <Route path='/mensclothes' element={<MensCloths />} /> */}

            </Routes>
        </>
    )
}

export default Routing
