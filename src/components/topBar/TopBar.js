import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
    const [active, setActive] = useState(true)

    function handleActiveLive(){
        setActive(true)
    }

    function handleActiveUpcoming(){
        setActive(false)
    }

  return (
    <div className='w-1/1'>
        <div className='max-w text-white mt-16 px-12 mx-auto flex justify-between'>
            <div className='flex space-x-8 font-medium'>
                <Link to="/dashboard/live">
                    <button className='px-9 py-2 hover:bg-greentext' onClick={handleActiveLive} style={{border:active ? '1px solid #0E9E55' : 'none', boxShadow:active ? '0px 2px 5px rgba(182, 250, 215, 0.5)' : 'none'}}>Live</button>
                </Link>
                <Link to="/dashboard/upcoming">
                    <button className='px-9 py-2 hover:bg-greentext' onClick={handleActiveUpcoming} style={{border:!active ? '1px solid #0E9E55' : 'none', boxShadow:!active ? '0px 2px 5px rgba(182, 250, 215, 0.5)' : 'none'}}>Upcoming</button>
                </Link>
            </div>
            <div>
                <button className='border border-greentext px-9 py-2 hover:bg-greentext'>0x321DSJ32...</button>
            </div>
        </div>
    </div>
  )
}

export default TopBar