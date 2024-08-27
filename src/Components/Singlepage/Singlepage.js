
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const Singlepage = () => {

    const { id } = useParams()
    console.log(id);

    // const dispatch=useDispatch()

    const [pro, setPro] = useState([])
    // const [imgdes, setImgdes] = useState([])

    useEffect(() => {
        getdata()
     
    }, [])
    const getdata = async () => {
        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        setPro(result)

    }


    // const imagedes = async() => {
    //     const data = await fetch(`https://fakestoreapi.com/products`)
    //     const result = await data.json()
  
    //     const getdata=result.find(item=>item.id===id)
    //     setPro(getdata)
    //     // setImgdes(getdata)
    //     }



    return (
            <>
                <h3 className='text-center mt-4 mb-4'>Products</h3>

         
                {/*  */}
                {pro.length > 0 ? (
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


                )
                    :
                    (<div> No Items</div>)

                }



            </>
        )
    }

    export default Singlepage





















// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useParams } from 'react-router-dom';
// import { products } from '../Images/products';
// // import bgroung from '../Background/bgroung.avif';
// import table from '../Images/table.jpg'
// import { addToCart } from '../Redux/ProductAction/ProductAction';
// import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';

// const Singlepage = () => {

//     {/* Smoothpageup variable */ }
//     const { pathname } = useLocation()
//     useEffect(() => {
//         window.scrollTo(0, 0)
//     }, [pathname])

//     const dispatch = useDispatch()
//     const { id } = useParams();

//     const [Reviews, setReviews] = useState([]);

//     const [product, setProduct] = useState({});
//     const [youLike, setYouLike] = useState([]);
//     const [quantity, setQuantity] = useState(1);

//     useEffect(() => {
//         getData();
//     }, [id]);

//     const getData = () => {
//         let temp = products.find(item => item.id === id);
//         setProduct(temp);
//         setReviews(temp.reviews)

//         if (temp) {
//             // let tempLike = products.filter((item) => item.category === temp.category);
//             let tempLike = products.filter((item) => item.category === temp.category && item.id !== temp.id);
//             setYouLike(tempLike);

//         }
//     }

//     if (!product) {
//         return <h2>Product not found!</h2>;
//     }

//     const handleQuantityChange = (e) => {
//         setQuantity(Number(e.target.value));
//     };

//     return (
//         <>
//             {/* Background */}

//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <img src={table} alt="background" className='img-fluid w-100 h-100' style={{ maxHeight: '250px', filter: 'brightness(50%)' }} />
//                         <h2 className="position-absolute bottom-50 start-50 text-center translate-middle text-white">
//                             {product.productName}
//                         </h2>
//                     </div>
//                 </div>
//             </div>


//             {/* Image Description */}

// <div className="container mt-5">

//     <div className="row mt-4">
//         <div className="col-md-6">
//             <img src={product.imgUrl} alt={product.productName} className="img-fluid" style={{ height: '250px' }} />
//         </div>

//         <div className="col-md-6">
//             <h2 className='mb-4'>{product.productName}</h2>
//             <div>
//                 <div className="star-hover">
//                     <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
//                     <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
//                     <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
//                     <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
//                     <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
//                     <span className='ms-4'>{product.avgRating} ratings</span>
//                 </div>
//             </div>

//             <div className='mt-3 mb-3'>
//                 <span>Price: ${product.price}</span>
//                 <span className='ms-3'>Category: {product.category}</span>
//             </div>

//             <p className='mt-3 mb-4'>{product.shortDesc}</p>

//             <div className="d-flex align-items-center mb-3 mt-2">
//                 <label htmlFor="quantity" className="me-2">Quantity:</label>
//                 <input
//                     type="number"
//                     id="quantity"
//                     value={quantity}
//                     onChange={handleQuantityChange}
//                     className="form-control"
//                     style={{ width: '70px' }}
//                     min="1"
//                 />
//             </div>

//             <button className="btn mt-4 text-white" style={{ backgroundColor: '#0f3460' }} onClick={() => {
//                 dispatch(addToCart(product));
//                 toast.success('Item added to cart!');
//             }}>Add to Cart</button>
//         </div>
//     </div>


//                 {/* Reviews & Description */}
//                 <div className="row mt-4">
//                     <h5 className='mt-4'>Description <span className='ms-2' data-bs-toggle='collapse' data-bs-target='#Example'>Reviews({Reviews.length})</span></h5>
//                 </div>
//                 <div className='collapse' id='Example'>
//                     <h5 className='mt-4 mb-3'>Product Ratings</h5>
//                     {
//                         Reviews.map((item) => (
//                             <div>
//                                 <h5 style={{ color: 'orange' }}>{item.rating} (rating)</h5>
//                                 <p>{item.text}</p>
//                             </div>))

//                     }
//                 </div>
//                 <p className='mb-4 mt-4'>{product.description}</p>
//             </div>

//             {/* You might like also */}
//             <div className='container mt-5'>
//                 <h3>You might like also</h3>
//                 <div className='row d-flex justify-content-center'>
//                     {youLike.map((items) => (
//                         <div key={items.id} className="col-md-4">
//                             <div className='card g-2 mb-4'>
//                                 <div className="card-img-top mt-4">
//                                     <Link to={`/product/${items.id}`} style={{ textDecoration: 'none' }}>
//                                         <div className='d-flex justify-content-center'>
//                                             <img src={items.imgUrl} alt={items.productName} style={{ height: '150px' }} />
//                                         </div>
//                                     </Link>
//                                     <div className="card-body d-flex flex-column">
//                                         <h5 className="card-title mb-4">{items.productName}</h5>
//                                         <div className="star-hover mb-3">
//                                             <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
//                                             <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
//                                             <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
//                                             <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
//                                             <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
//                                         </div>
//                                         <div className='d-flex justify-content-between mt-auto'>
//                                             <p className="card-text mb-3">$ {items.price}</p>
//                                             <h4>

//                                                 {/* <Link to={`/product/${items.id}`} style={{ textDecoration: 'none' }}> */}
//                                                 <button onClick={() => { dispatch(addToCart(items)); toast.success('Item added to cart!'); }
//                                                 } style={{ border: 'none', borderRadius: '50%', backgroundColor: '#0f3460', color: 'white' }} >+</button>
//                                                 {/* </Link> */}
//                                             </h4>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div >
//         </>
//     );
// };

// export default Singlepage;