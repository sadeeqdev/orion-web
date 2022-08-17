import React from 'react'
import LiveBox from '../../components/liveBox/LiveBox'

const Live = () => {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-8">
        <LiveBox/>
        <LiveBox/>
        <LiveBox/>
        <LiveBox/>
        <LiveBox/>
    </div>
  )
}

export default Live