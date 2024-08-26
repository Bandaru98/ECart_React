import React, { useState } from 'react'
import { useEffect } from 'react'


const Fetchdata = () => {
    const [pro, setPro] = useState([])
    useEffect(() => {
        getdata()
    }, [])
    const getdata = async () => {
        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        // console.log(data);
        setPro(result)
    }


    return (

        <>

            <h3>Products</h3>
            {pro.length > 0 ? (
                <div className='container'>
                    <div className='row mt-4 mb-4'>
                        {
                            pro.map((item) => (

                                <div className='col-md-4'>
                                    <div className='card g-4 mb-4'>

                                        <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
                                            <img src={item.image} alt='image' className='img-fluid' style={{ height: '200px', width: '200px' }} />

                                        </div>

                                        <div className='ms-4'>
                                            <h4>Category: {item.category}</h4>
                                            <p>Desc: {item.description}</p>
                                            <h4>Price: {item.price}</h4>
                                            <h4>Ratings: {item.rating.rate}</h4>
                                        </div>

                                    </div>
                                </div>

                            ))
                        }


                    </div>

                </div>
            )
                :
                (<div> No Items</div>)

            }


        </>
    )
}

export default Fetchdata
