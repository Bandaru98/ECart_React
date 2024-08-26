import React, { useEffect, useState } from 'react'

const MensCloths = () => {
    const [pro, setPro] = useState([])
    const [proitem, setProitem] = useState([])
    useEffect(() => {
        getdata()
        mens()
    }, [])
    const getdata = async () => {
        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        // console.log(data);
        setPro(result)
 
    }
const mens=()=>{
    const mens = pro.filter((item) => item.category === "men's clothing");
    setProitem(mens);
}


  return (
    <div>
                  <h3>Men's Clothing</h3>
            {proitem.length > 0 ? (
                <div className='container'>
                    <div className='row mt-4 mb-4'>
                        {proitem.map((item) => (
                            <div className='col-md-4' key={item.id}>
                                <div className='card g-4 mb-4'>
                                    <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
                                        <img
                                            src={item.image}
                                            alt='image'
                                            className='img-fluid'
                                            style={{ height: '200px', width: '200px' }}
                                        />
                                    </div>
                                    <div className='ms-4'>
                                        <h4>Category: {item.category}</h4>
                                        <p>Desc: {item.description}</p>
                                        <h4>Price: {item.price}</h4>
                                        <h4>Ratings: {item.rating.rate}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>No Items</div>
            )}
    </div>
  )
}

export default MensCloths







































// import React, { useEffect, useState } from 'react'




// const MensCloths = () => {

//     const [pro, setPro] = useState([])
//     const [promens, setPromens] = useState([])
//     useEffect(() => {
//     getdata()
      
//     }, [])

//     useEffect(() => {
//         if (pro.length > 0) {
//             cloths();
//         }
//     }, [pro]);
//     const getdata = async () => {
//         const data = await fetch(`https://fakestoreapi.com/products`)
//         const result = await data.json()
//         // console.log(data);
//         setPro(result)
//     }
//     const cloths = () => {
//         const mens = pro.filter((item) => item.category === 'men s clothing')
//         setPromens(mens)
//         // console.log(mens);

//     }



//     return (
//         <div>




//             <h3>Mens Cloths</h3>
//             {/* {
//                 promens.length > 0 ? ( */}
//                     <div className='container'>
//                         <div className='row mt-4 mb-4'>
//                             {
//                                 promens.map((item) => (

//                                     <div className='col-md-4'>
//                                         <div className='card g-4 mb-4'>

//                                             <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
//                                                 <img src={item.image} alt='image' className='img-fluid' style={{ height: '200px', width: '200px' }} />

//                                             </div>

//                                             <div className='ms-4'>
//                                                 <h4>Category: {item.category}</h4>
//                                                 <p>Desc: {item.description}</p>
//                                                 <h4>Price: {item.price}</h4>
//                                                 <h4>Ratings: {item.rating.rate}</h4>
//                                             </div>

//                                         </div>
//                                     </div>

//                                 ))
//                             }


//                         </div>

//                     </div>
//                 {/* )
//                     :
//                     (<div> No Items</div>)

//             } */}





//         </div>
//     )
// }

// export default MensCloths





























// //

// import React, { useEffect, useState } from 'react';

// const MensCloths = () => {
//     const [pro, setPro] = useState([]);
//     const [promens, setPromens] = useState([]);

//     useEffect(() => {
//         getdata();
//     }, []);

    // useEffect(() => {
    //     if (pro.length > 0) {
    //         cloths();
    //     }
    // }, [pro]);

//     const getdata = async () => {
//         try {
//             const response = await fetch(`https://fakestoreapi.com/products`);
//             const result = await response.json();
//             setPro(result);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const cloths = () => {
        // const mens = pro.filter((item) => item.category === "men's clothing");
        // setPromens(mens);
//     };

//     return (
//         <div>
            // <h3>Men's Clothing</h3>
            // {promens.length > 0 ? (
            //     <div className='container'>
            //         <div className='row mt-4 mb-4'>
            //             {promens.map((item) => (
            //                 <div className='col-md-4' key={item.id}>
            //                     <div className='card g-4 mb-4'>
            //                         <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
            //                             <img
            //                                 src={item.image}
            //                                 alt='image'
            //                                 className='img-fluid'
            //                                 style={{ height: '200px', width: '200px' }}
            //                             />
            //                         </div>
            //                         <div className='ms-4'>
            //                             <h4>Category: {item.category}</h4>
            //                             <p>Desc: {item.description}</p>
            //                             <h4>Price: {item.price}</h4>
            //                             <h4>Ratings: {item.rating.rate}</h4>
            //                         </div>
            //                     </div>
            //                 </div>
            //             ))}
            //         </div>
            //     </div>
            // ) : (
            //     <div>No Items</div>
            // )}
//         </div>
//     );
// };

// export default MensCloths;
