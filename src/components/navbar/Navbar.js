import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import orionLogo from '../../assets/img/Orion.svg'

const Navbar = () => {
  return (
    <div className='bg-navbar'>
        <div className=' text-white pt-12 pb-7 w-11/12  lg:pt-28 lg:py-7 lg:w-5/6 2xl:w-4/6 mx-auto flex justify-between'>
            <div>
                <img src={orionLogo} alt="Logo"/>
            </div>
            <div className='space-x-8 font-medium hidden lg:flex '>
                <NavLink to="/home" className="hover:text-greentext" >Home</NavLink>
                <NavLink to="/tokenclaim" className="hover:text-greentext">Token Claim</NavLink>
                <NavLink to="/home" className="hover:text-greentext">IDO Pool</NavLink>
                <NavLink to="/home" className="hover:text-greentext">Farm</NavLink>
            </div>
            <div className="hidden lg:flex">
                <Link to="/dashboard">
                    <button className='border border-greentext px-11 py-1 hover:bg-greentext'>LAUNCH APP</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar