import Header from '../../components/Header'
import { Tabs } from "antd";
import Introsection from './Introsection';
import Aboutsection from './Aboutsection';
import { useSelector } from 'react-redux';
import Experiencesection from './Experiencesection';
import Projectsection from './Projectsection';
import Coursesection from './Coursesection';
import { useEffect } from 'react';

const Admin = () => {
    const { portfolioData } = useSelector((state)=> state.root)
    const onChange = (key) => {
      };
      const items = [
        {
            key: '1',
        label: 'Intoduction',
        children: < Introsection />,
        },
        {
            key: '2',
        label: 'About',
        children: <Aboutsection />,
        },
        {
            key: '3',
        label: 'Experience',
        children: <Experiencesection />,
        },
        {
            key: '4',
        label: 'Project',
        children: <Projectsection />,
        },
        {
            key: '5',
        label: 'Course',
        children: <Coursesection />,
        },
        ];

        useEffect(()=>{
            if(!localStorage.getItem("token")){
                window.location.href = "./admin-login";
            }
        },[])
    return (
        <div>
            <Header />
            <div className='m-2'>
                <div className='flex justify-between' >
                <h1 className='text-3xl mt-4' >Admin Panel</h1>
                <h1 className='text-xl mt-4 cursor-pointer' onClick={()=>{
                    localStorage.removeItem("token");
                    window.location.href = "./admin-login";
                }} 
                >Logout
                </h1>
                </div>
           { portfolioData && <Tabs defaultActiveKey="1" items={items} onChange={onChange}  className='mt-5'/> }
            </div>
        </div>
    )
}

export default Admin