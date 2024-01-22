import React from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { MdOutlineClose } from "react-icons/md";
import { deleteItem, resetCart } from '../../redux/soloSlice';
import { ToastContainer, toast } from 'react-toastify';


const Cart = () => {
    const dispatch = useDispatch()
    
    const productData = useSelector((state)=> state.solo.productData)

    
  return (
    <div className='mt-28 max-w-screen-2xl mx-auto container xl:px-28 px-4'>
        <div className='p-3 max-w-7xl mx-auto'>
                <h1 className='text-3xl font-medium text-center my-8 capitalize'>Shopping Cart</h1>

                {
                    productData.map((item)=>(
                        <div key={item.id} className='flex items-center justify-center flex-col md:flex-row gap-6 mt-6 shadow-sm '>
                            <div className='flex items-center gap-2'>
                                <MdOutlineClose onClick={()=>dispatch(deleteItem(item.id))
                                &toast.error(`${item.title} is removed`)} className='text-lg text-gray-600 hover:text-red-600
                                cursor-pointer duration-300' />
                                <img src={item.image} alt='' className='w-32 h-32 object-cover' />
                            </div>
                            <div className='flex justify-center items-center'>
                            <h1 className='w-52'>{item.title}</h1>
                            <p className='w-10'>${item.price}</p>
                            </div>
                            
                            
                        </div>
                        
                    ))
                }
               
        </div>
        <div className='flex flex-col justify-center items-center'>
        <button onClick={()=>dispatch(resetCart())
        &toast.error("Your Cart is Empty")} className='bg-red-600 py-1 px-6 text-white hover:bg-red-400 font-semibold  rounded-md ml-8 mt-4'>reset cart</button>
        </div>
       
        
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

export default Cart