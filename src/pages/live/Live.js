import React from 'react'
import LiveBox from '../../components/liveBox/LiveBox'

const Live = () => {
  return (
    <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
        <LiveBox/>
        <LiveBox/>
        <LiveBox/>
        <LiveBox/>
        <LiveBox/>
    </div>
  )
}

export default Live