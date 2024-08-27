import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { addToCart } from '../../Redux/ProductAction/ProductAction';

const Productlist = () => {

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

    const menscloths = async () => {

        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        const getdata = result.filter((item) => {
            return item.category === `men's clothing`
        })
        setPro(getdata)
    }
    const womencloths = async () => {

        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        const getdata = result.filter((item) => {
            return item.category === `women's clothing`
        })
        setPro(getdata)
    }

    const jewellery = async () => {

        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        const getdata = result.filter((item) => {
            return item.category === `jewelery`
        })
        setPro(getdata)
    }

    const electronics = async () => {

        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        const getdata = result.filter((item) => {
            return item.category === `electronics`
        })
        setPro(getdata)
    }



    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <h3 className='text-center mt-4'>Latest Products</h3>

                    <div className='col-md-12'>
                        <div className='text-center mt-4 d-flex justify-content-center'>
                            <button className='btn btn-gray border'
                                onClick={getdata}
                            >All</button>
                            <button className='btn btn-gray border ms-2'
                                onClick={menscloths}
                            >Men's Clothing</button>
                            <button className='btn btn-gray border ms-2'
                                onClick={womencloths}
                            >Women Clothing</button>
                            <button className='btn btn-gray border ms-2'
                                onClick={jewellery}
                            >Jewellery</button>
                            <button className='btn btn-gray border ms-2'
                                onClick={electronics}>
                                Electronics</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}

            <h3 className='text-center mt-4 mb-4'>Products</h3>

            {pro.length > 0 ? (
                <div className='container'>
                    <div className='row mt-4 mb-4 d-flex align-items-center justify-content-center'>
                        {
                            pro.map((item) => (

                                <div className='col-md-4'>
                                    <div className='card g-4 mb-4'>
                                        <Link to={`/product/${item.id}`}>
                                            <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
                                                <img src={item.image} alt='image' className='img-fluid' style={{ height: '200px', width: '200px' }} />

                                            </div>
                                        </Link>
                                        <div className='ms-4'>
                                            <h4>Category: {item.category}</h4>
                                            <div style={{ height: '15rem', overflow: 'hidden' }}>
                                                <p>Desc: {item.description}</p>
                                            </div>

                                            <h4 className='mb-1'>Price: {item.price}</h4>
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





        </div>
    )
}

export default Productlist





















