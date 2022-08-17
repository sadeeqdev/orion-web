import React from 'react'
import { NavLink } from 'react-router-dom'
import OrionDark from '../../assets/img/Orion-dark.png'
import Earth from '../../assets/img/Earth Globe.svg'
import Email from '../../assets/img/Email.svg'
import Meduim from '../../assets/img/Medium Monogram.svg'
import Twitter from '../../assets/img/Twitter .svg'
import OrionBg from '../../assets/img/CircleBorder.svg'

const LiveBox = () => {
  return (
    <div className='bg-dark shadow-xl p-7 text-white' 
        style={{
            background:'linear-gradient(320.78deg, rgba(244, 243, 243, 0.2) -36.37%, rgba(244, 243, 243, 0) 101.8%)', 
            filter: 'drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.4))', 
            borderRadius: '20px',
            borderImage: 'linear-gradient(90deg, black, white)',
            border: '1px solid transparent'
        }}>
        <div className='flex justify-between px-14'>
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
                <div>
                    <h2 className='text-white font-bold text-3xl mt-5 text-center'>Orion</h2>
                    <p className='mt-2 text-xl font-bold text-center'>11th August 2022 1200 UTC</p>
                    <div className='space-x-3 flex mt-10 justify-center text-center'>
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
        </div>
        <div className='px-10'>
            <p className='flex justify-center mt-4 text-lg'>Contribution Range</p>
            <div className='flex justify-between mt-2'>
                <button className='border border-greentext py-2 px-10 text-left hover:bg-greentext mt-2' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}> 100 APTOS</button>
                    <p className='items-center flex text-lg'>To</p>
                <button className='border border-greentext py-2 px-10 text-left hover:bg-greentext mt-2 ml-3' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>1000 APTOS</button>
            </div>
        </div>
    </div>
  )
}

export default LiveBox