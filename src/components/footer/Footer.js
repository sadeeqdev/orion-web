import React from 'react'
import { NavLink } from 'react-router-dom'
import orionLogo from '../../assets/img/Orion.svg'
import Discord from '../../assets/img/Discord New.svg'
import Email from '../../assets/img/Email Send.svg'
import Github from '../../assets/img/GitHub.svg'
import Twitter from '../../assets/img/Twitter.svg'

const Footer = () => {
  return (
    <div className='bg-footer'>
        <div className=' text-white pt-28 py-7 w-5/6 2xl:w-4/6 mx-auto flex-col space-y-10'>
            <div className="flex justify-between">
                <div>
                    <img src={orionLogo} alt="Logo" style={{width:'250px'}}/>
                </div>
                <div className='flex space-x-5 font-medium'>
                    <div className='space-x-10 flex'>
                        <NavLink to="/home" className="hover:scale-110" >
                            <img src={Email} alt="Logo"/>
                        </NavLink>
                        <NavLink to="/home" className="hover:scale-110">
                            <img src={Twitter} alt="Logo"/>
                        </NavLink>
                        <NavLink to="/home" className="hover:scale-110">
                            <img src={Discord} alt="Logo"/>
                        </NavLink>
                        <NavLink to="/home" className="hover:scale-110">
                            <img src={Github} alt="Logo"/>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='flex justify-between pb-8'>
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