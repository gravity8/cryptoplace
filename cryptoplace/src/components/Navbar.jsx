/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from '../assets/Cryptoplace.svg'
import vector from '../assets/vector.svg'
import cancel from '../assets/cancel.svg'

function Navbar() {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <div className=' sticky top-0 bg-white' >
            <div className='flex justify-between items-center text-black w-full h-[10dvh] border-b-[1px] border-black px-[30px] md:px-[50px]'>
                <img src={logo} alt="" />
                <div className='hidden md:flex justify-between items-center w-[35%]'>
                    <a href="" className=' font-medium transition-all duration-500 decoration-purple decoration-4 md:hover:underline underline-offset-8 text-[#000]'> Ranking</a>
                    <a href="" className='font-medium transition-all duration-500 decoration-purple decoration-4 md:hover:underline underline-offset-8 text-[#000]'> Watchlist</a>
                    <a href="" className='font-medium transition-all duration-500 decoration-purple decoration-4 md:hover:underline underline-offset-8 text-[#000]'> Portfolio</a>
                    <a href="" className='font-medium transition-all duration-500 decoration-purple decoration-4 md:hover:underline underline-offset-8 text-[#000]'> Tools</a>
                </div>
                <div className='hidden md:flex gap-3'>
                    <button className='h-[50px] border border-purple ease-in-out transition-all duration-300 hover:bg-purple hover:text-[#fff] text-[#000] font-semibold  w-[120px] bg-[transparent] rounded-[15px] text-[14px]'>Log In</button>
                    <button className='h-[51px] border border-purple ease-in-out transition-all duration-300  text-[#fff] hover:text-[#000] hover:bg-[transparent] font-semibold w-[120px] rounded-[15px]
                    bg-purple text-[14px]'>Get Started</button>
                </div>
                <div className='block md:hidden'  onClick={()=>setOpen(!open)} >
                    <img src={vector} className='block md:hidden' alt="" />
                </div>
            </div>
            <div className={`${open? `w-full md:hidden`:'w-0'}  md:hidden transition-all ease-in duration-500 fixed bg-[#000] w-full h-[100vh] top-0 bottom-0 overflow-hidden`}>
                <div className=' flex justify-end me-[38px] mt-8' onClick={()=>setOpen(!open)}>
                    <img src={cancel}  alt="" />
                </div>
                <div className='flex  flex-col gap-12 items-center mt-[100px]'>
                    <a href="" className='font-medium  text-purple text-[22px]'> Ranking</a>
                    <a href="" className='font-medium  text-purple text-[22px]'> Watchlist</a>
                    <a href="" className='font-medium  text-purple text-[22px]'> Portfolio</a>
                    <a href="" className='font-medium  text-purple text-[22px]'> Tools</a>
                    <div className='flex flex-col gap-3'>
                    <button className='h-[50px] border border-purple ease-in-out transition-all duration-300 hover:bg-purple hover:text-[#fff] text-[#fff] font-semibold  w-[120px] bg-[transparent] rounded-[15px] text-[14px]'>Log In</button>
                    <button className='h-[51px] border border-purple ease-in-out transition-all duration-300  text-[#fff] hover:text-[#000] hover:bg-[transparent] font-semibold w-[120px] rounded-[15px]
                    bg-purple text-[14px]'>Get Started</button>
                </div>
            </div> 
        </div>
        </div>
    </div>
    
  )
}

export default Navbar
