import React from 'react'
import orionLogo from '../../assets/img/Orion.svg'

const SideBar = () => {
  return (
    <div className='bg-sub-dark px-10 shadow-2xl h-screen gird grid-col-1 place-items-center text-white'>
        <div className='grid grid-cols-1 w-60 place-items-center'>
            <div className='mt-20'>
                <img src={orionLogo} alt="Logo"/>
            </div>
            <div className='space-y-4 mt-8 w-full grid grid-cols-1 '>
                <button className='bg-green  py-2 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Total Liquidity Raised: $0.00</button>
                <button className='bg-green py-2 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Total Values Locked: 0</button>
                <button className='bg-green py-2 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56), inset 0px 4px 20px rgba(182, 250, 215, 0.5)'}}>Total Participants: 0</button>
            </div>
            <div className='gap-y-2 w-full grid grid-cols-1'>
                <button className='border w-full border-green bg-btn-dark py-2 px-5 text-left mt-32 hover:bg-greentext' style={{boxShadow:'0px 4px 9px rgba(6, 188, 95, 0.56)'}}>IDO</button>
                <button className='border border-greentext py-2 px-5 text-left hover:bg-greentext mt-5' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>$Orion Staking</button>
            </div>
            <div className='gap-y-2 w-full grid grid-cols-1'>
                <button className='border border-greentext py-2 px-5 text-left hover:bg-greentext mt-32' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>$Orion Staking</button>
                <button className='border border-greentext py-2 px-5 text-left hover:bg-greentext mt-2' style={{boxShadow:'0px 1px 5px rgba(182, 250, 215, 0.5)'}}>$Orion Staking</button>
            </div>
        </div>
    </div>
  )
}

export default SideBar