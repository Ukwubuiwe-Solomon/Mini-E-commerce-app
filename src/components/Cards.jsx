/* eslint-disable no-unused-vars */

import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart } from '../redux/soloSlice'
import { ToastContainer, toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
const Cards = ({filteredItems}) => {
    const dispatch = useDispatch()

    
  return (
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm'>
            {
                
                // eslint-disable-next-line react/prop-types
                filteredItems.map((item)=>(
                    <div key={item.id}>
                        <Link to={`/shop/${item.id}`}>
                            <img src={item.image} alt='' className='mx-auto w-full hover:scale-105 transition-all duration-300' />
                            </Link>
                            <div className='mt-4 px-4'>
                                <h4 className='text-base font-semibold mb-2'>{item.title}</h4>
                                <div className='flex justify-between'>
                                    <p className='text-black/50'>{item.category}</p>
                                    <p className='font-semibold'>${item.price}</p>
                                </div>
                                <button onClick={()=>dispatch(addToCart({
                                    id:item.id,
                                    title:item.title,
                                    category:item.category,
                                    price:item.price,
                                    image:item.image,
                                    status:item.status
                                }))
                                   &toast.success(`${item.title} is add`)
                                } className=' text-base bg-red-300 text-black rounded-sm px-3 hover:bg-slate-500 mt-4 py-1'>add to cart</button>
                            </div>
                        
                
                    </div>
                ))
            }
            <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

    </div>
  )
}

export default Cards