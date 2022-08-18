import React from 'react'
import { NavLink } from 'react-router-dom'
import OrionDark from '../../assets/img/Orion-dark.png'
import Earth from '../../assets/img/Earth Globe.png'
import Email from '../../assets/img/Email.png'
import Meduim from '../../assets/img/Medium Monogram.png'
import Twitter from '../../assets/img/Twitter .png'
import OrionBg from '../../assets/img/CircleBorder.svg'

const LiveBox = () => {
  return (
    <div className='bg-dark shadow-xl px-3 py-5 lg:py-7 lg:px-7 text-white' 
        style={{
            background:'linear-gradient(320.78deg, rgba(244, 243, 243, 0.2) -36.37%, rgba(244, 243, 243, 0) 101.8%)', 
            filter: 'drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.4))', 
            borderRadius: '20px',
            borderImage: 'linear-gradient(90deg, black, white)',
            border: '1px solid transparent'
        }}>
        <div className='flex justify-between px-4 lg:px-14'>
            <p className='text-white text-xl mt-2 '>
                Ended
            </p>
            <button className='border border-liveborder py-2 px-7 text-left hover:bg-greentext mt-2 ml-3' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>ORION IDO</button>
        </div>
        <div className='flex justify-between'>
            <div className='h-48 w-48 rounded-full flex items-center justify-center p-14 ' style={{backgroundImage:`url(${OrionBg})`, backgroundPosition:'center'}}>
                <img src={OrionDark} alt="Orion" className='ml-1.5 mt-0.5'/>
            </div>
            <div className=' w-2/4 flex justify-end mt-2'>
                <div className='text-center self-start'>
                    <h2 className='text-white font-bold text-3xl mt-5 text-center'>Orion</h2>
                    <p className='mt-2 text-xl font-bold text-center'>11th August 2022 1200 UTC</p>
                    <div className='space-x-4 flex mt-4 lg:mt-9 justify-center text-center w-3/4 mx-auto'>
                        <NavLink to="/home" style={{width:'12%'}} className="hover:scale-110" >
                            <img src={Earth} alt="Logo"/>
                        </NavLink>
                        <NavLink to="/home" style={{width:'12%'}} className="hover:scale-110">
                            <img src={Email} alt="Logo"/>
                        </NavLink>
                        <NavLink to="/home" style={{width:'12%'}} className="hover:scale-110">
                            <img src={Twitter} alt="Logo"/>
                        </NavLink>
                        <NavLink to="/home" style={{width:'12%'}} className="hover:scale-110">
                            <img src={Meduim} alt="Logo"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-3 lg:px-10'>
            <p className='flex justify-center mt-4 text-lg'>Contribution Range</p>
            <div className='flex justify-between mt-2 space-x-4'>
                <button className='w-full lg:w-auto border border-greentext py-2 lg:px-10 text-center hover:bg-greentext mt-2' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}> 100 APTOS</button>
                    <p className='items-center flex text-lg'>To</p>
                <button className='w-full lg:w-auto border border-greentext py-2 lg:px-10 text-center hover:bg-greentext mt-2 ml-3' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>1000 APTOS</button>
            </div>
        </div>
    </div>
  )
}

export default LiveBox