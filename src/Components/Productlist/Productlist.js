import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/ProductAction/ProductAction';


const Productlist = () => {
const dispatch=useDispatch()


    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <h3 className='text-center mt-4'>Latest Products</h3>

                    <div className='col-md-12'>
                        <div className='text-center mt-4 d-flex justify-content-center'>
                            <button className='btn btn-gray border'
                             onClick={() => {
                                dispatch(addToCart);}}
                            >All</button>
                            <button className='btn btn-gray border ms-2'
                               
                            >Men's Clothing</button>
                            <button className='btn btn-gray border ms-2'>Women Clothing</button>
                            <button className='btn btn-gray border ms-2'>Jewellery</button>
                            <button className='btn btn-gray border ms-2'>Electronics</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productlist

























// // import React,{useEffect,useState} from 'react'
// // import cover from '../Assets/Images/cover.jpg'
// // import { useDispatch } from 'react-redux';
// // import { addToCart } from '../redux/productAction/ProductAction';

// // const Home = () => {

// //     const dispatch = useDispatch();
// //     const[products,setProducts] = useState([]);

// //     useEffect(()=>{
// //         getData();
// //     },[])

// //     const getData = async() => {
// //         let data = await fetch(`https://fakestoreapi.com/products`)
// //         let res = await data.json();
// //         console.log(res);
// //         setProducts(res)
// //     }

// //     const getMenCollection = async() => {
// //         let data = await fetch(`https://fakestoreapi.com/products`)
// //         let res = await data.json();
// //         const getData = res.filter((item)=>{
// //             return item.category === `men's clothing`
// //         })
// //         console.log(getData);
// //         setProducts(getData);
// //     }
// //     const getWomenCollection = async() => {
// //         let data = await fetch(`https://fakestoreapi.com/products`)
// //         let res = await data.json();
// //         const getData = res.filter((item)=>{
// //             return item.category === `women's clothing`
// //         })
// //         setProducts(getData);
// //     }
// //     const getJeweleryCollection = async() => {
// //         let data = await fetch(`https://fakestoreapi.com/products`)
// //         let res = await data.json();
// //         const getData = res.filter((item)=>{
// //             return item.category === `jewelery`
// //         })
// //         setProducts(getData);
// //     }
// //     const getElectronicsCollection = async() => {
// //         let data = await fetch(`https://fakestoreapi.com/products`)
// //         let res = await data.json();
// //         const getData = res.filter((item)=>{
// //             return item.category === `electronics`
// //         })
// //         setProducts(getData);
// //     }
// //   return (
// //     <>
// //       <img src={cover} alt='cover'className='w-100' style={{height:'25vh'}}/>
// //       <h3 className='text-center mt-4'>Latest Products</h3>
// //       <div className='container mt-4'>

// //         <div className='row'>
// //             <div className='col-md-3'></div>
// //             <div className='col-md-6 '>
// //                 <div className='row g-2'>
// //                     <div className='col-md-1 d-flex justify-content-center'><button className='btn btn-outline-dark'
// //                     onClick={getData}
// //                     >All</button></div>
// //                     <div className='col-md-3 d-flex justify-content-center'><button className='btn btn-outline-dark'
// //                     onClick={getMenCollection}
// //                     >Men's Clothing</button></div>
// //                     <div className='col-md-4 d-flex justify-content-center'><button className='btn btn-outline-dark'
// //                     onClick={getWomenCollection}
// //                     >Women's Clothing</button></div>
// //                     <div className='col-md-2 d-flex justify-content-center'><button className='btn btn-outline-dark'
// //                     onClick={getJeweleryCollection}
// //                     >Jewelary</button></div>
// //                     <div className='col-md-2 d-flex justify-content-center'><button className='btn btn-outline-dark'
// //                     onClick={getElectronicsCollection}
// //                     >Electrinics</button></div>
// //                 </div>
// //             </div>
// //             <div className='col-md-3'></div>
// //         </div>

// //         <div className='row mt-4'>
// //             {
// //                 products.map((item)=>(
// //                     <div className='col-md-4 g-4 '>
// //                         <div className='card d-flex justify-content-center' style={{height:'100%'}}>
// //                             <div className='card-body d-flex align-items-center'>
// //                                 <div className='card-img-top d-flex justify-content-center '>
// //                                 <img className='w-50' src={item.image} alt={item.title}/>
// //                                 </div>
// //                             </div>
// //                             <div className='card-title d-flex justify-content-center ms-2 me-2'>
// //                                 <h5>{item.title}</h5>
// //                             </div>
// //                             <div className='card-sub-title d-flex justify-content-center  ms-2 me-2'>
// //                                 <p>{item.description}</p>
// //                             </div>
// //                             <div className='card-sub-title d-flex justify-content-center'>
// //                                 <p>$ {item.price}</p>
// //                             </div>
// //                             <div className='d-flex justify-content-between ms-4 me-4 mb-1'>
// //                             <button className='btn btn-primary'>Details</button>
// //                             <button className='btn btn-primary'
// //                             onClick={()=>dispatch(addToCart(item))}
// //                             >Add to Cart</button>
// //                             </div>
                            
// //                         </div>
                        
                        

// //                     </div>
// //                 ))
// //             }
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default Home