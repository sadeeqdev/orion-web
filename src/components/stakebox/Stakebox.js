import React from 'react'

const Stakebox = () => {
  return (
    <div className='shadow-lg text-center text-white' style={{background:'linear-gradient(320.78deg, rgba(244, 243, 243, 0.2) -36.37%, rgba(244, 243, 243, 0) 101.8%)', filter:'drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.4))'}}>
        <div className='px-5 h-20 flex justify-center items-center' style={{background:'linear-gradient(320.78deg, rgba(244, 243, 243, 0.2) -36.37%, rgba(244, 243, 243, 0) 101.8%)', filter:'drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.4))'}}>
            <p className='px-5 text-green text-5xl font-bold'>
                Bronze
            </p>
        </div>
        <div className='px-5 mt-7'>
            <p className='text-lg text-sub-white'>Staking Requirement</p>
            <p className='text-5xl font-bold'>1000</p>
            <p className='mt-10 text-sub-white'>Staking Length Required</p>
            <p className='font-bold text-xl'>3 Hours Before Allocation</p>
            <p className='text-xl font-bold'>Round Opens</p>
            <p className='mt-7 text-sub-white'>Whitelist Requirement</p>
            <p className='text-green font-bold text-xl'>Like, Comment & Retweet</p>
            <p className='text-sub-white text-lg mt-12'>Lottery Tickets</p>
            <p className='text-5xl font-bold mt-4 pb-10'>1</p>
        </div>

    </div>
  )
}

export default Stakebox