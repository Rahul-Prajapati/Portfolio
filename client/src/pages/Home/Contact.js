import React from 'react'
import SectionTitle from '../../components/SectionTitle'

const Contact = () => {
  return (
    <div>
      <SectionTitle title="Contact Details" />
      <div className='flex flex-col'>
        <div className='flex flex-col gap-1 text-white'>
          <li className='text-2xl cursor-pointer' onClick={() => {
            window.open("https://www.linkedin.com/in/rahul-prajapati-reactdeveloper");
          }}> Linkedin</li>

          <li className='text-2xl cursor-pointer' onClick={() => {
            window.open("https://github.com/Rahul-Prajapati");
          }}>Github</li>
        </div>
      </div>
    </div>
  )
}

export default Contact
