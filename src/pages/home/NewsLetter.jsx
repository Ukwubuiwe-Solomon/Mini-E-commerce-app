import React from 'react'
import { Link } from 'react-router-dom'

const NewsLetter = () => {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16'>
        <h1 className='mb-8 text-3xl font-medium text-center my-8 capitalize'>Follow products and discounts on Instagram</h1>
        <div className='flex flex-wrap justify-center items-center gap-4 mb-20'>
            <Link to='/'>
                <img src='/images/instagram/img1.png' alt=''/>
            </Link>
            <Link to='/'>
                <img src='/images/instagram/img2.png' alt=''/>
            </Link>
            <Link to='/'>
                <img src='/images/instagram/img3.png' alt=''/>
            </Link>
            <Link to='/'>
                <img src='/images/instagram/img4.png' alt=''/>
            </Link>
            <Link to='/'>
                <img src='/images/instagram/img5.png' alt=''/>
            </Link>
            <Link to='/'>
                <img src='/images/instagram/img6.png' alt=''/>
            </Link>
        </div>
        <div>
            <h1 className='text-3xl font-medium text-center my-8 capitalize'>Or subscribe to the newsletter</h1>
            <form className='md:w-1/2 mx-auto text-center'>
                <input type='email' name='email' id='email' placeholder='Email address' className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4'/>
                <button className='bg-black text-white py-1 px-6 rounded-sm font-semibold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default NewsLetter