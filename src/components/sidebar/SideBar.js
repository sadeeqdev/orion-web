import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import orionLogo from '../../assets/img/Orion.svg'
import Discord from '../../assets/img/Discord New.svg'
import Email from '../../assets/img/Email Send.svg'
import Github from '../../assets/img/GitHub.svg'
import Twitter from '../../assets/img/Twitter.svg'
import Downloads from '../../assets/img/Downloads Folder.svg'
import Gold from '../../assets/img/Gold Bars.svg'
import Layers from '../../assets/img/Layers.svg'
import Document from '../../assets/img/Sign Document.svg'
import Menu from '../../assets/img/Menu-2.png'

const SideBar = () => {

    const [show, setShow] = useState(false);
    const [mobile, setMobile] = useState(false)

    function handleShow(){
        setShow(!show)
    }

    function checkWindow(){
        if(window.innerWidth > 850 ){
            setShow(true)
            setMobile(false)
        }else if(window.innerWidth < 850 ){
            setShow(false)
            setMobile(true)
        }
    }

    window.onresize = checkWindow

  return (
    <div>
        <div className='flex flex-row text-white justify-between lg:hidden' >
            <div className='mt-0 '>
                <img src={orionLogo} alt="Logo" style={{display:show && 'none', padding:'20px 0 0 20px'}}/>
            </div>
            <div className='mt-0' style={{position:'absolute', right:0}}>
                <button onClick={handleShow} className="mt-5">
                    <img src={Menu} width="50%" alt="Menu"/>
                </button>
            </div>
        </div>
        <div className='bg-sub-dark shadow-2xl lg:flex flex-col mt-0 -ml-72 lg:ml-0 transition-all justify-between h-full text-white fixed' style={{zIndex:999, transform:(mobile && show)  && 'translateX(288px)'}}>
            <div className='grid grid-cols-1 px-6 lg:px-14 gap-y-16 w-72  lg:w-80 2xl:w-96 place-items-center'>
                <div className='mt-12 lg:mt-20'>
                    <img src={orionLogo} alt="Logo"/>
                </div>
                <div className='space-y-4 w-full grid grid-cols-1 '>
                    <button className='bg-green  py-2 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Total Liquidity Raised: $0.00</button>
                    <button className='bg-green py-2 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Total Values Locked: 0</button>
                    <button className='bg-green py-2 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Total Participants: 0</button>
                </div>
                <div className='gap-y-2 w-full grid grid-cols-1'>
                    <button className='border w-full border-green bg-btn-dark py-2 px-5 text-left hover:bg-greentext flex justify-between' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56)'}}><span>IDO</span><img src={Layers} alt="Icon" className='mt-1'/></button>
                    <button className='border border-greentext py-2 px-5 text-left hover:bg-greentext mt-4 flex justify-between' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>$Orion Staking<img src={Gold} alt="Icon" className='mt-1'/></button>
                </div>
                <div className='gap-y-2 w-full grid grid-cols-1'>
                    <button className='border border-greentext py-2 px-5 text-left hover:bg-greentext flex justify-between' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>Doc<img src={Document} alt="Icon" className='mt-1'/></button>
                    <button className='border border-greentext py-2 px-5 text-left hover:bg-greentext mt-2 flex justify-between' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>Apply for IDO <img src={Downloads} alt="Icon" className='mt-1'/></button>
                </div>
            </div>
            <div className='lg:w-80 2xl:w-96 py-8 px-10 bg-dashFooter hidden lg:flex justify-center self-bottom'>
                <div className='space-x-9 flex mt-5'>
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
    </div>
  )
}

export default SideBar