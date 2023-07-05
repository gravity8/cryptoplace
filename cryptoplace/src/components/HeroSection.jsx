/* eslint-disable no-unused-vars */
import React from 'react'
import heroImg from '../assets/heroImg.png'
import Herobackground from '../assets/Herobackground.svg'
import heroextras from '../assets/heroextras.svg'

function HeroSection() {
  return (
    <div className='overflow-hidden'>
        <div className='flex flex-col  lg:flex-row md:justify-between md:px-[50px]'>
            <div className='flex flex-col items-center lg:items-start mt-[62px] '>
                <div>
                    <p className='text-purple flex h-4 text-[16px] font-bold justify-center lg:justify-start mb-[20px] items-center'><span className=' h-14 text-[40px] mt-1'>*</span>Jump start your porfolio</p>
                    <h1 className='text-[48px] md:text-[68px] font-bold w-[375px] md:w-[480px] text-center lg:text-start leading-[55px] md:leading-[78px] mb-[30px]'>The World’s Most Powerful Crypto App </h1>
                </div>
                <p className='text-[16px] text-grey text-center md:text-start w-[310px] mb-[30px] '>Get the most  accurate market data, alerts,
                conversion tools and more - all within the 
                same app</p>
                <button className='h-[50px] w-[150px] md:h-[62px] md:w-[200px] bg-purple rounded-2xl text-[white]'>Get Started</button>
            </div>
            <div className='relative lg:w-full lg:absolute lg:right-11 -z-10 mt-[100px] lg:mt-[40px]'>
                <img src={heroImg} className='m-[auto] w-[345px]
                 h-[340px] md:w-[450px] md:h-[430px] lg:w-[534px] lg:absolute lg:h-[523px] lg:right-10' alt="" />
                <img src={Herobackground} className=' w-[400px] 
                h-[380px] md:w-[550px] md:h-[500px] -z-10 absolute m-auto top-0
                lg:w-[65%] lg:h-[650px] lg:-top-[40px] lg:-right-11' alt="" />
                <img src={heroextras} width={'125px'} height={'110px'} 
                className=' lg:w-[170px] lg:h-[160px] absolute top-[240px] -z-10 right-[10%] md:right-[15%] 
                md:top-[350px] lg:top-[400px] lg:right-0' alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection
