import React from 'react'

const TopBar = () => {
  return (
    <div className='w-1/1'>
        <div className='max-w text-white mt-20  w-5/6 2xl:w-4/6 mx-auto flex justify-between'>
            
            <div className='flex space-x-8 font-medium'>
                <button className='px-9 py-2 hover:bg-greentext'>Live</button>
                <button className='border border-greentext px-9 py-2hover:bg-greentext'>Upcoming</button>
            </div>
            <div>
                <button className='border border-greentext px-9 py-2 hover:bg-greentext'>0x321DSJ32...</button>
            </div>
        </div>
    </div>
  )
}

export default TopBar