import React from 'react'

const FeatureBox = ({image, header, content}) => {
  return (
    <div className='text-center text-white rounded-xl bg-dark' style={{boxShadow:'0px 4px 35px rgba(0, 0, 0, 0.4)'}}>
        <div className='px-6 h-20 flex justify-center items-center'>
            <div className='h-40 w-40 rounded-full bg-grey flex justify-center items-center'>
                <img src={image} width="65%" alt="icon" />
            </div>
        </div>
        <div className='px-12 mt-20'>
            <p className='text-4xl font-bold text-sub-white'>{header}</p>
            <p className='text-xl pb-8 mt-5'>{content}</p>
        </div>

    </div>
  )
}

export default FeatureBox