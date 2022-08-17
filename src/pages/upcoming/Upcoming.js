import React from 'react'
import UpcomingBar from '../../components/upcomingBox/UpcomingBox'

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