import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import orionLogo from '../../assets/img/Orion-logo.png'
import Discord from '../../assets/img/Discord New.png'
import Email from '../../assets/img/Email Send.png'
import Github from '../../assets/img/GitHub.png'
import Twitter from '../../assets/img/Twitter.png'
import Downloads from '../../assets/img/Downloads Folder.png'
import Gold from '../../assets/img/Gold Bars.png'
import Layers from '../../assets/img/Layers.png'
import Document from '../../assets/img/Sign Document.png'
import Menu from '../../assets/img/Menu-2.png'

const SideBar = () => {

    const [show, setShow] = useState(false);
    const [mobile, setMobile] = useState(false)

    function handleShow(){
        setShow(!show)
    }
    
    /* eslint-disable */
    useEffect(() => {
        if(window.innerWidth < 1555 ){
            setMobile(true)
        }
    })

    function checkWindow(){
        if(window.innerWidth > 1555 ){
            setShow(true)
            setMobile(false)
        }else if(window.innerWidth < 1555 ){
            setShow(false)
            setMobile(true)
        }  
    }

    window.onresize = checkWindow

  return (
    <div>
        <div className='flex flex-row text-white justify-between lg:hidden' >
            <div className='mt-0 ' style={{}}>
                <img src={orionLogo} alt="Logo" width="30%" style={{margin:'30px 0 0px 20px'}}/>
            </div>
            <div className='mt-0 mr-6' style={{}}>
                <button onClick={handleShow} className="mt-8">
                    <img src={Menu} width="100%" alt="Menu" />
                </button>
            </div>
        </div>
        <div className="hidden lg:flex xl:hidden" style={{position:'absolute', left:'50px', top:'40px'}}>
            <div className='mt-0 mr-6' style={{}}>
                <button onClick={handleShow} className="mt-8">
                    <img src={Menu} width="70%" alt="Menu" />
                </button>
            </div>
        </div>
        <div className='bg-sub-dark shadow-2xl xl:flex flex-col mt-0 -ml-72 xl:ml-0 transition-all justify-between h-screen text-white fixed' style={{zIndex:999, transform:(mobile && show)  && 'translateX(288px)', position:mobile && 'fixed', top: mobile && 0 }}>
            <div className="mt-3 flex justify-end w-72 xl:hidden" style={{display:show && mobile ? "flex" : "none"}}>
                <button onClick={() => setShow(false)} className=' mr-6 text-white text-2xl text-red flex self-end hover:text-redHover'>
                    X
                </button>
            </div>
            <div className='grid grid-cols-1 px-6 2xl:px-14 gap-y-12 w-72 2xl:w-96 place-items-center'>
                <div className='mt-3 xl:mt-28 flex justify-center'>
                    <img src={orionLogo} width="60%" alt="Logo"/>
                </div>
                <div className='space-y-4 w-full grid grid-cols-1 '>
                    <button className='bg-green  py-2 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Total Liquidity Raised: $0.00</button>
                    <button className='bg-green py-2 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Total Values Locked: 0</button>
                    <button className='bg-green py-2 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Total Participants: 0</button>
                </div>
                <div className='gap-y-2 w-full grid grid-cols-1'>
                    <button className='border w-full border-green bg-btn-dark py-2 px-5 text-left hover:bg-greentext flex justify-between' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56)'}}><span>IDO</span><img src={Layers} width="7%" alt="Icon" className='mt-1'/></button>
                    <button className='border border-greentext py-2 px-5 text-left hover:bg-greentext mt-4 flex justify-between' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>$Orion Staking<img src={Gold} width="7%" alt="Icon" className='mt-1'/></button>
                </div>
                <div className='gap-y-2 w-full grid grid-cols-1'>
                    <button className='border border-greentext py-2 px-5 text-left hover:bg-greentext flex justify-between' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>Doc<img src={Document} alt="Icon" width="7%" className='mt-1'/></button>
                    <button className='border border-greentext py-2 px-5 text-left hover:bg-greentext mt-2 flex justify-between' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>Apply for IDO <img src={Downloads} width="7%"alt="Icon" className='mt-1'/></button>
                </div>
            </div>
            <div className='lg:w-72 2xl:w-96 py-8 px-10 bg-dashFooter hidden xl:flex justify-center self-bottom'>
                <div className='space-x-2 flex mt-5'>
                    <NavLink to="/home" className="hover:scale-110" >
                        <img src={Email} width="50%" alt="Logo"/>
                    </NavLink>
                    <NavLink to="/home" className="hover:scale-110">
                        <img src={Twitter} width="50%" alt="Logo"/>
                    </NavLink>
                    <NavLink to="/home" className="hover:scale-110">
                        <img src={Discord} width="50%" alt="Logo"/>
                    </NavLink>
                    <NavLink to="/home" className="hover:scale-110">
                        <img src={Github} width="50%" alt="Logo"/>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar