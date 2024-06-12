import React from 'react'
import Logo from "../assets/GbLogo.jpeg"

export const Navbar = () => {
  return (
    <div className='flex items-center justify-center py-5 text-2xl'>

      <span><img src={Logo} alt='logo'  className='w-[20%]'></img></span>

        <h1 className='px-10'>Home</h1>
        <h1 className='px-10'>About</h1>
        <h1 className='px-10'>Trainers</h1>
        <h1 className='px- 10'>Review</h1>
        <h1 className='px-10'>Plans</h1>

    </div>
  )
}
