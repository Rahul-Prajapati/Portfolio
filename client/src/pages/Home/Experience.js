import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

const Experience = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { Experience } = portfolioData;
  return (
    <div>
      <SectionTitle title="Experience" />
      <div className='flex py-10 gap-20 flex-col lg:flex-row'>
        <div className='flex w-full flex-row gap-10 border-1-2 border-[bg-secondary] lg:flex-col lg:w-1/3' >
          {Object.keys(Experience).map((key, index) => (
            <div onClick={() => {
              setSelectedItemIndex(index);
            }}
              className='cursor-pointer'
              key={index}
            >
              <h1 className={`text-xl px-5 ${selectedItemIndex === index ? "text-tertiary border-tertiary border-1-4 -ml-[3px] bg-slate-800 py-3"
                : "text-white"
                } `}
              >
                {Experience[key].period}
              </h1>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-5 lg:w-2/3'>
          <h1 className='text-secondary text-xl'>
            {Experience[selectedItemIndex].title}
          </h1>
          <h1 className='text-tertiary text-xl'>
            {Experience[selectedItemIndex].company}
          </h1>
          <p className='text-white text-lg'>
            {Experience[selectedItemIndex].description}
          </p>
        </div>

      </div>
    </div>
  )
}

export default Experience
