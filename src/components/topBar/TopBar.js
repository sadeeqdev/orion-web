import React from 'react'
import Twitter from '../../assets/img/Twitter.svg'

const TopBar = () => {
  return (
    <div className='w-1/1'>
        <div className='max-w text-white mt-20 px-12 mx-auto flex justify-between'>
            <div className='flex space-x-8 font-medium'>
                <button className='px-9 py-2 hover:bg-greentext'>Live</button>
                <button className='border border-greentext px-9 py-2hover:bg-greentext'>Upcoming<img src={Twitter} alt="icon"/></button>
            </div>
            <div>
                <button className='border border-greentext px-9 py-2 hover:bg-greentext'>0x321DSJ32...</button>
            </div>
        </div>
    </div>
  )
}

export default TopBar