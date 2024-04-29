import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='flex gap-10 items-center py-10'>
        <h1 className='text-3xl lg:text-5xl text-white'>
            {title}
        </h1>
        <div className='lg:w-60 h-[1px] w-16 bg-tertiary' >

        </div>
    </div>
  )
}

export default SectionTitle;