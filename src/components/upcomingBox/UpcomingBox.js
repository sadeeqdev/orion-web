import React from 'react'
import { NavLink } from 'react-router-dom'
import OrionDark from '../../assets/img/Orion-dark.png'
import Earth from '../../assets/img/Earth Globe.svg'
import Email from '../../assets/img/Email.svg'
import Meduim from '../../assets/img/Medium Monogram.svg'
import Twitter from '../../assets/img/Twitter .svg'
import Star from '../../assets/img/Star.svg'

const UpcomingBar = () => {
  return (
    <div className='bg-dark shadow-xl px-3 py-7 lg:p-7 text-white' 
        style={{
            background:'linear-gradient(320.78deg, rgba(244, 243, 243, 0.2) -36.37%, rgba(244, 243, 243, 0) 101.8%)', 
            filter: 'drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.4))', 
            borderRadius: '20px',
            borderImage: 'linear-gradient(90deg, black, white)',
            border: '1px solid transparent'
        }}>
        <div className='flex'>
            <div className='h-24 w-24 lg:h-32 lg:w-32 rounded-full border border-greentext flex items-center justify-center p-5 lg:p-6'>
                <img src={OrionDark} alt="Orion" />
            </div>
            <div className='ml-7 lg:ml-11 w-3/5 lg:w-2/5 mt-2'>
                <h2 className='text-white font-bold text-3xl'>Orion</h2>
                <p className='mt-2'>First decentralized fund raising platform on Aptos</p>
                 <div className='space-x-3 flex mt-5'>
                    <NavLink to="/home" className="hover:scale-110" >
                        <img src={Earth} alt="Logo"/>
                    </NavLink>
                    <NavLink to="/home" className="hover:scale-110">
                        <img src={Email} alt="Logo"/>
                    </NavLink>
                    <NavLink to="/home" className="hover:scale-110">
                        <img src={Twitter} alt="Logo"/>
                    </NavLink>
                    <NavLink to="/home" className="hover:scale-110">
                        <img src={Meduim} alt="Logo"/>
                    </NavLink>
                </div>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between mt-9'>
            <div className='flex-col space-y-5'>
                <div className='flex '>
                    <button className='w-full lg:w-auto text-center border border-greentext py-2 lg:px-7 text-left hover:bg-greentext mt-2' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>Hard Cap</button>
                    <button className='w-full lg:w-auto text-center border border-greentext py-2 lg:px-7 text-left hover:bg-greentext mt-2 ml-3' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>Soft Cap</button>
                </div>
                <div className='flex '>
                    <button className='w-full lg:w-auto text-center bg-green py-2 lg:px-7 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Open in TBA</button>
                    <button className='w-full lg:w-auto text-center  bg-green py-2 lg:px-7 hover:bg-greentext ml-3' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Aptos</button>
                </div>
            </div>
            <div className='flex lg:flex-col  space-x-4 self-start mt-7 lg:mt-0 lg:self-end text-right'>
                <p className='mt-1 lg:mt-0'>Bullish Index</p>
                <h2 className='flex text-2xl justify-end font-bold'>
                    <img src={Star} alt="star" width="25%" className='mr-2'/>
                    5.0
                </h2>
            </div>
        </div>
    </div>
  )
}

export default UpcomingBar