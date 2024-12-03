import React from 'react'

// react-icons
import {BiChevronDown, BiMenu, BiSearch} from "react-icons/bi"

function NavSm(){
    return <>
        <div className='text-white flex items-center justify-between'>
            <div>
                <h4 className='text-xl font-bold'>It all starts here !!</h4>
                <span className='text-gray-400 text-xs flex items-centre cursor-pointer hover:text-white'>Bangalore <BiChevronDown /></span>
            </div>
            <div className='w-8 h-8'>
                <BiSearch className='w-full h-full'/>
            </div>
        </div>
    </>
}

function NavMd(){
    return <>
    <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
    <BiSearch />
    <input type='search' className='w-full bg-transparent border-none focus:outline-none' />
    </div>
    </>
}

function NavLg(){
    return <>
        <div className='container flex mx-auto px-4 items-center justify-between'>
            <div className='flex items-center w-1/2 gap-3 '>
                <div className='w-10 h-10'>
                    <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo"
                     className='w-full h-full'
                    />
                </div>
                <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
                    <BiSearch />
                    <input type='search'
                    className='w-full bg-transparent border-none focus:outline-none'
                    placeholder='Search for movies, places, events, sports and activites '
                    />
                </div> 
            </div>
            <div className='flex items-center gap-3'>
                <span className='text-gray-400 text-base flex items-center cursor-pointer hover:text-white'>Bangalore <BiChevronDown /></span>
                <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>Sign In</button>
                <div className='w-8 h-8 text-white'>
                    <BiMenu  className='w-full h-full'/>
                </div>
            </div>
        </div>
    </>
}

const MovieNavbar = () => {
  return (
    <nav className='bg-black px-4 py-3'>
        {/* Small Screen Size */}
        <div className='md:hidden'>
            <NavSm />
        </div>
        {/* Medium Screen Size */}
        <div className='hidden md:flex lg:hidden'>
            <NavMd />
        </div>
         {/* Large Screen Size */}
        <div className='hidden md:hidden lg:flex'>
            <NavLg />
        </div>
    </nav>
  )
}

export default MovieNavbar