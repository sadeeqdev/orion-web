import React, { useEffect } from 'react'
import LaptopImg from '../../assets/img/Laptop-1.png'

const TokenClaim = ({handleNavbar}) => {

    useEffect(() => {
        handleNavbar(true)
    })

  return (
    <>
        <div className="w-5/6 2xl:w-4/6 mx-auto text-white">
            <div className='py-32 flex justify-between'>
                <div className='w-4/5'>
                    <h2 className='text-6xl font-bold capitalize'>
                        first decentralized fund raising platform on Aptos
                    </h2>
                    <p className='text-xl mt-9 w-4/5'>
                        Orion is a Premier Fundraising Platfrom
                        being developed on the new scalable L1
                        Chain called Aptos.
                        Orion aims to be the stop shop for new
                        protocols launching on Aptos to use as a
                        strategic Partner for a raise through a decentralized network.work.
                    </p>
                    <button className='border border-greentext px-40 py-4 shadow-md shadow-greenshadow mt-12 hover:bg-greentext transition-all'>CLAIM</button>
                </div>
                <div className='flex lg:w-1/1 2xl:w-4/6 -mt-20  float-right justify-end'>
                    <img src={LaptopImg} alt="Logo" width="100%"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default TokenClaim