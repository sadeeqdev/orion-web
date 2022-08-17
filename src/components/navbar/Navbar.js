import React from 'react'
import { NavLink } from 'react-router-dom'
import orionLogo from '../../assets/img/Orion.svg'

const Navbar = () => {
  return (
    <div className='bg-navbar'>
        <div className=' text-white pt-28 py-7 w-5/6 2xl:w-4/6 mx-auto flex justify-between'>
            <div>
                <img src={orionLogo} alt="Logo"/>
            </div>
            <div className='flex space-x-8 font-medium'>
                <NavLink to="/home" className="hover:text-greentext" >Home</NavLink>
                <NavLink to="/tokenclaim" className="hover:text-greentext">Token Claim</NavLink>
                <NavLink to="/home" className="hover:text-greentext">IDO Pool</NavLink>
                <NavLink to="/home" className="hover:text-greentext">Farm</NavLink>
            </div>
            <div>
                <button className='border border-greentext px-9 py-1 hover:bg-greentext'>LAUNCH APP</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar