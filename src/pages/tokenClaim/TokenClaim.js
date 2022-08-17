import React, { useEffect } from 'react'
import LaptopImg from '../../assets/img/Laptop-1.png'

const TokenClaim = ({handleNavbar}) => {

    useEffect(() => {
        handleNavbar(true)
    })

  return (
    <>
        <div className="w-1/1 lg:w-5/6 2xl:w-4/6 mx-auto text-white" data-aos="fade-left">
            <div className='py-12 lg:py-32 flex flex-col-reverse lg:flex-row lg:justify-between'>
                <div className='w-11/12 mx-auto lg:w-4/5 lg:mx-0'>
                    <h2 className='text-5xl  lg:text-6xl font-bold capitalize'>
                        first decentralized fund raising platform on Aptos
                    </h2>
                    <p className='text-xl w-1/1 mt-5 lg:mt-9 lg:w-4/5'>
                        Orion is a Premier Fundraising Platfrom
                        being developed on the new scalable L1
                        Chain called Aptos.
                        Orion aims to be the stop shop for new
                        protocols launching on Aptos to use as a
                        strategic Partner for a raise through a decentralized network.work.
                    </p>
                    <button className='border border-greentext w-full lg:px-40 py-4 shadow-md shadow-greenshadow mt-12 hover:bg-greentext transition-all'>CLAIM</button>
                </div>
                <div className='flex py-5 lg:py-12 lg:w-1/1 2xl:w-4/6 lg:-mt-20  lg:float-right lg:justify-end' data-aos="fade-up">
                    <img src={LaptopImg} alt="Logo" width="100%"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default TokenClaim