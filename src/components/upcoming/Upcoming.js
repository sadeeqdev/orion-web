import React from 'react'
import OrionDark from '../../assets/img/Orion-dark.png'

const UpcomingBar = () => {
  return (
    <div className='w-3/4 h-80 bg-dark shadow-xl p-7 text-white' 
        style={{
            background:'linear-gradient(320.78deg, rgba(244, 243, 243, 0.2) -36.37%, rgba(244, 243, 243, 0) 101.8%)', 
            filter: 'drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.4))', 
            borderRadius: '20px',
            borderImage: 'linear-gradient(90deg, black, white)',
            border: '1px solid transparent'
        }}>
        <div className='flex'>
            <div className='h-32 w-32 rounded-full border border-greentext flex items-center justify-center p-6'>
                <img src={OrionDark} alt="Orion"/>
            </div>
            <div className='ml-11 w-2/5 mt-2'>
                <h2 className='text-white font-bold text-3xl'>Orion</h2>
                <p className=''>First decentralized fund raising platform on Aptos</p>
            </div>
        </div>
    </div>
  )
}

export default UpcomingBar