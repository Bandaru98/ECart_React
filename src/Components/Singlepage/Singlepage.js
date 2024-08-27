import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../Redux/ProductAction/ProductAction';

const Singlepage = () => {

    const dispatch = useDispatch()

    const [pro, setPro] = useState([])
    // const [proitem, setProitem] = useState([])

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

            <h3 className='text-center mt-4 mb-4'>Product Description</h3>
            {pro.map((item) => (
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Link to={`/product/${item.id}`}>
                                <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
                                    <img src={item.image} alt='image' className='img-fluid' style={{ height: '250px', width: '250px' }} />

                                </div>
                            </Link>
                        </div>
                        <div className='col-md-6'>
                            <div className=' mt-4'>
                                <h4><b style={{ color: 'orangered' }}>Category: </b>  {item.category}</h4>
                                <p className='mt-3 mb-3'><b>Desc:</b> {item.description}</p>
                                <h5>Price: {item.price}</h5>
                                <h5>Ratings: {item.rating.rate}</h5>
                            </div>
                            <div>
                                <button className='btn btn-info mt-4 add-cart-btn'
                                    onClick={() => { dispatch(addToCart(item)) }}
                                >Add to Cart</button>
                                {/* <button type="button" class="btn btn-lg btn-danger" 
                                data-bs-toggle="popover" title="Popover title"
                                 data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                //  onClick={() => { dispatch(addToCart(item)) }}
                                 >Click to toggle popover</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }




            {/*  */}

            {/* <h3 className='text-center mt-4 mb-4'>Products</h3>

            {pro.length > 0 ? (
                <div className='container'>
                    <div className='row mt-4 mb-4'>
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

            } */}





        </div>
    )
}

export default Singlepage





















