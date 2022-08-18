import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import orionLogo from '../../assets/img/Orion-logo.png'
import Menu from '../../assets/img/Menu-2.png'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [mobile, setMobile] = useState(false)

    function handleShow(){
        setShow(!show)
    }

    /* eslint-disable */
    useEffect(() => {
        if(window.innerWidth < 850 ){
            setMobile(true)
        }
    })

    function checkWindow(){
        if(window.innerWidth > 800 ){
            setShow(true)
            setMobile(false)
        }else if(window.innerWidth < 800 ){
            setShow(false)
            setMobile(true)
        }
    }

    window.onresize = checkWindow

  return (
    <div className='bg-navbar'>
        <div className='fixed w-72 -ml-72 bg-sub-dark h-screen transition-all' style={{zIndex:999, transform:(mobile && show)  && 'translateX(288px)', backdropFilter: 'blur(15px)'}}>
            <div className=' text-white pt-12 pb-7 w-11/12  lg:pt-28 lg:py-7 lg:w-5/6 2xl:w-4/6 mx-auto grid grid-cols-1 place-items-center justify-between'>
                <div className='flex justify-center'>
                    <img src={orionLogo} width="50%" alt="Logo"/>
                </div>
                <div className='font-medium grid text-xl gap-y-5 mt-9 text-center' onClick={() => setShow(false)}>
                    <NavLink to="/home" className="hover:text-greentext" >Home</NavLink>
                    <NavLink to="/tokenclaim" className="hover:text-greentext">Token Claim</NavLink>
                    <NavLink to="/home" className="hover:text-greentext">IDO Pool</NavLink>
                    <NavLink to="/home" className="hover:text-greentext">Farm</NavLink>
                </div>
                <div className="">
                    <Link to="/dashboard">
                        <button className='border border-greentext px-16 py-2 mt-9 hover:bg-greentext'>LAUNCH APP</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className=' text-white pt-12 pb-7 w-11/12  lg:pt-28 lg:py-7 lg:w-5/6 2xl:w-4/6 mx-auto flex justify-between'>
            <div>
                <img src={orionLogo} width="20%" alt="Logo"/>
            </div>
            <div className='space-x-8 font-medium hidden lg:flex ' >
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
             <div className='mt-0 flex lg:hidden' style={{position:'absolute', right:0}}>
                <button onClick={handleShow} >
                    <img src={Menu} width="50%" alt="Menu"/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar