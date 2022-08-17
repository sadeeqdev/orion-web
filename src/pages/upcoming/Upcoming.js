import React from 'react'
import UpcomingBar from '../../components/upcomingBox/UpcomingBox'

const Upcoming = () => {
  return (
    <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
        <UpcomingBar/>
        <UpcomingBar/>
        <UpcomingBar/>
        <UpcomingBar/>
    </div>
  )
}

export default Upcoming