import React from 'react'
import UpcomingBar from '../../components/upcoming/Upcoming'

const Upcoming = () => {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-8">
        <UpcomingBar/>
        <UpcomingBar/>
        <UpcomingBar/>
        <UpcomingBar/>
    </div>
  )
}

export default Upcoming