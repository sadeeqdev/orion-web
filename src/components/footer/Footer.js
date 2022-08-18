import React from 'react'
import { NavLink } from 'react-router-dom'
import orionLogo from '../../assets/img/Orion.png'
import Discord from '../../assets/img/Discord New.png'
import Email from '../../assets/img/Email Send.png'
import Github from '../../assets/img/GitHub.png'
import Twitter from '../../assets/img/Twitter.png'

const Footer = () => {
  return (
    <div className='bg-footer'>
        <div className=' text-white pt-16 text-center lg:pt-28 py-7 w-5/6 2xl:w-4/6 mx-auto flex-col space-y-10'>
            <div className="grid justify-center lg:flex lg:justify-between">
                <div className='flex justify-center text-center'>
                    <img src={orionLogo} alt="Logo" style={{width:'250px'}}/>
                </div>
                <div className='flex mt-10 lg:w-1/4 lg:mt-0 font-medium self-end'>
                    <div className='space-x-10 flex'>
                        <NavLink to="/home" style={{width:'15%'}} className="hover:scale-110" >
                            <img src={Email} alt="Logo"/>
                        </NavLink>
                        <NavLink to="/home" style={{width:'15%'}} className="hover:scale-110">
                            <img src={Twitter} alt="Logo"/>
                        </NavLink>
                        <NavLink to="/home" style={{width:'15%'}} className="hover:scale-110">
                            <img src={Discord} alt="Logo"/>
                        </NavLink>
                        <NavLink to="/home" style={{width:'15%'}} className="hover:scale-110">
                            <img src={Github} alt="Logo"/>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='lg:flex lg:justify-between pb-8 space-y-3 lg:space-y-0'>
                <p>
                    Orion © 2022 All rights reserved
                </p>
                <p>
                    In association with its partners,  project  Orion is launched
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer