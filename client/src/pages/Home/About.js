import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

const About = () => {
    const { portfolioData } = useSelector((state) => state.root);
    const { About } = portfolioData;
    const { imageurl, description1, description2, skills } = About;

    return (
        <div>
            <SectionTitle title="About Me" />
            <div className='flex flex-col lg:flex-row  gap-8'>
                <div className='w-full h-[40vh] lg:h-[60vh]'>
                    <img src={imageurl} alt='Animation of desk person' />
                </div>
                <div className='flex flex-col w-full gap-7 lg:justify-center '>
                    <p className='text-white'>
                        {description1}
                    </p>
                    <p className='text-white'>
                        {description2}
                    </p>
                </div>
            </div>

            <div className='py-5'>
                <h1 className='text-tertiary text-xl'>
                    Here are the technologies
                </h1>
                <div className='flex flex-wrap gap-10 mt-5 ' >
                    {skills.map((skill, index) => (
                        <div className='border border-tertiary py-3 px-5'>
                            <h1 className='text-tertiary'>{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About