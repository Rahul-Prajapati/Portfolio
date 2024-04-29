import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

const Courses = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { Course } = portfolioData;
  return (
    <div>
      <SectionTitle title="Courses" />
      <div className='flex py-10 gap-20 flex-col lg:flex-row'>
        <div className='flex w-full flex-row gap-10 border-1-2 border-[bg-secondary] lg:flex-col lg:w-1/3' >
          {Object.keys(Course).map((key, index) => (
            <div onClick={() => {
              setSelectedItemIndex(index);
            }}
              className='cursor-pointer'
            >
              <h1 className={`text-xl px-5 ${selectedItemIndex === index
                  ? "text-tertiary border-tertiary border-1-4 -ml-[3px] bg-slate-800 py-3"
                  : "text-white"
                }`}
              >
                {Course[key].title}
              </h1>
            </div>
          ))}


        </div>

        <div className='flex items-center justify-center gap-10 flex-col lg:flex-row'>
          <img src={Course[selectedItemIndex].image} alt='course' className='h-60 w-72' />
          <div className='flex flex-col gap-5 lg:w-2/3'>
            <h1 className='text-secondary text-xl'>
              {Course[selectedItemIndex].title}
            </h1>
            <p className='text-white text-lg'>
              {Course[selectedItemIndex].description}
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Courses
