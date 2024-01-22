/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../redux/soloSlice'
import { ToastContainer, toast } from 'react-toastify';

const SingleProduct = () => {
    const dispatch = useDispatch()
    let [baseQty, setBaseQty] = useState(1)
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState([])
    // eslint-disable-next-line no-unused-vars
    const {id} = useParams()
    useEffect(()=>{
        const fetchData= async ()=>{
            try {
                 const response = await fetch("/products.json");
                 const data = await response.json();
                 const product = data.filter((p)=> p.id==id)
                 setProducts(product[0])
                
            } catch (error) {
                console.log("Error fetching data:", error)
            }
        }
        fetchData()
        window.scrollTo({top:0, behavior:'smooth'})
    },[id])

    const {title, category, image, status, price} = products
  return (
    <div className='mt-28 max-w-screen-2xl mx-auto container xl:px-28 px-4'>
        <div className='p-3 max-w-7xl mx-auto'>
        <div className='mt-4'>
            <a href='/' className='text-gray-600'>Home</a>
            <a href='/shop' className='font-bold text-black'>/ Shop</a>
        </div>
            <div className='mt-2 sm:mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
                    <div>
                        <img src={image} alt='' className='w-full'/>
                    </div>
                    <div>
                    <h1 className='text-3xl font-medium my-8 capitalize text-left'>{title}</h1>
                        <p className='mt-6 text-gray-600 leading-6 text-base sm:mt-4 text-left'>Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani boutique in Los Angeles.
                        Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani boutique in Los Angeles.</p>
                        <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </span>
                        <p className='text-xl text-red-500 font-semibold sm:text-2xl'>${price}</p>
                        <div className='mt-4'>
                            <div className='text-left flex flex-col gap-2'>
                                <label className='font-semibold'>Quantity</label>
                                <div className='w-full flex gap-4 justify-center items-center md:w-20 border bg-slate-600
                                rounded-sm'>
                               <button onClick={()=>setBaseQty( baseQty + 1)}  className='w-5 h-5 font-bold text-lg flex items-center justify-center  bg-slate-400 hover:bg-slate-500 text-white hover:text-black'>+</button>
                               <span className='text-center font-bold text-white'>{baseQty}</span>
                               <button onClick={()=>setBaseQty(baseQty===1 ? (baseQty=1): baseQty-1)}  className='w-5 h-5 font-bold text-lg flex items-center justify-center  bg-slate-400 hover:bg-slate-500 text-white hover:text-black'>-</button>
                               </div>

                            </div>
                            <div className='w-full text-left my-4'>
                                <button className='flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6'><span onClick={()=>dispatch(addToCart({
                                     id:products.id,
                                    title:products.title,
                                    category:products.category,
                                    price:products.price,
                                    image:products.image,
                                    status:products.status,
                                    quantity:baseQty
                                }))&toast.success(`${products.title} is added`)
                                }>add to cart</span><FaArrowAltCircleRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
transition: Bounce
/>
<ToastContainer />
    </div>
  )
}

export default SingleProduct