import React from 'react'
import { NavLink } from 'react-router-dom'
import orionLogo from '../../assets/img/Orion.svg'
import Discord from '../../assets/img/Discord New.svg'
import Email from '../../assets/img/Email Send.svg'
import Github from '../../assets/img/GitHub.svg'
import Twitter from '../../assets/img/Twitter.svg'

const SideBar = () => {
  return (
    <div className='bg-sub-dark shadow-2xl flex flex-col justify-between text-white fixed' style={{height:'100%'}}>
        <div className='grid grid-cols-1 px-14 gap-y-16 w-80 2xl:w-96 place-items-center'>
            <div className='mt-20'>
                <img src={orionLogo} alt="Logo"/>
            </div>
            <div className='space-y-4 w-full grid grid-cols-1 '>
                <button className='bg-green  py-2 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Total Liquidity Raised: $0.00</button>
                <button className='bg-green py-2 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Total Values Locked: 0</button>
                <button className='bg-green py-2 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Total Participants: 0</button>
            </div>
            <div className='gap-y-2 w-full grid grid-cols-1'>
                <button className='border w-full border-green bg-btn-dark py-2 px-5 text-left hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56)'}}>IDO</button>
                <button className='border border-greentext py-2 px-5 text-left hover:bg-greentext mt-4' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>$Orion Staking</button>
            </div>
            <div className='gap-y-2 w-full grid grid-cols-1'>
                <button className='border border-greentext py-2 px-5 text-left hover:bg-greentext' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>Doc</button>
                <button className='border border-greentext py-2 px-5 text-left hover:bg-greentext mt-2' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>Apply for IDO</button>
            </div>
        </div>
        <div className='w-80 2xl:w-96 py-8 bg-dashFooter flex justify-center self-bottom'>
            <div className='space-x-10 flex mt-5'>
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
  )
}

export default SideBar