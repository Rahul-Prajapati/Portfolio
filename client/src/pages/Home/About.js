import React from 'react'
import SectionTitle from '../../components/SectionTitle'

const About = () => {
    const skills = ["Javascipt", "ReactJS", "NodeJS" , "TailwindCSS", "Redux", "Express" ,"Mongo"];
  return (
    <div>
        <SectionTitle title="About Me" />
        <div className='flex w-full gap-4'>
            <div className='w-1/2 h-[50vh]'>
            <img src="https://img.freepik.com/free-photo/3d-portrait-people_23-2150793856.jpg?t=st=1711096852~exp=1711100452~hmac=c30e06d1a705460ae9d12732c0a09e03a53f8d4f05fb3fee9fe25dee2c031fff&w=1380" alt='Animation of desk person' />
            </div>
            <div className='flex flex-col w-1/2 gap-8 p-4'>
                <p className='text-white'>
                I hold a 2021 Computer Science Engineering degree and boast a 2-year tenure at Infosys as a dedicated React developer. Proficient in front-end technologies, I excel in React, JavaScript, HTML5, CSS3, Tailwind CSS, Redux and responsive design. My track record includes contributing to interactive web applications, collaborating across teams, and staying abreast of the latest React trends
                </p>
                <p className='text-white'>
                Eager to apply my skills and knowledge to help companies create compelling and modern web solutions with reusable components, I am keen on the opportunity to interview and further discuss my contributions at my previous organization.
                </p>
            </div>
        </div>

        <div className='py-5'>
            <h1 className='text-tertiary text-xl'>
                Here are the technologies 
            </h1>
            <div className='flex flex-wrap gap-10 mt-5'>
            {skills.map((skill, index) => (
                <div className='border border-tertiary py-3 px-5'>
                    <h1 className='text-tertiary'>{skill}</h1>
                </div>    
            )) }
            </div>
        </div>
    </div>
  )
}

export default About