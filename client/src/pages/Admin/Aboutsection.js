import React from 'react'
import { Form, input, message } from 'antd';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
const Aboutsection = ()  => {
    const { portfolioData } = useSelector((state) => state.root);
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        try {
                const tempskills = values.skills.split(",");
                values.skills = tempskills;
                const response = await fetch("http://localhost:4000/api/portfolio/update-about", {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                      'Content-Type': 'application/json',
                      "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify({
                        _id: portfolioData.About._id,
                        ...values,
                    }),
                  });

               const data = await response.json();
                if (response.data.success) {
                    message.success(response.data.message);
                } else {
                    message.error(response.data.message);
                }
        } catch (error){
                message.error(error.message);
        }
    };
  return (
    <div>
        <Form onFinish={onFinish}
        layout="vertical"
        initialValues={{
          ...portfolioData.About,
        skills: portfolioData.About.skills.join(" , "),
        }}
        >
            <Form.Item name="imageurl" label="Image URL">
                <input placeholder='imageurl' className='border-4 w-full'  />
            </Form.Item>

            <Form.Item name="description1" label="Description">
                <textarea placeholder='description1' className='border-4 w-full' />
            </Form.Item>

            <Form.Item name="description2" label="Description">
                <textarea placeholder='description2' className='border-4 w-full' />
            </Form.Item>

            <Form.Item name="skills" label="skills">
                <input placeholder='skills' className='border-4 w-full' />
            </Form.Item>

            <div className='flex justify-end w-full'>
                <button className='px-10 py-2 bg-primary text-white' type='submit' >
                    Save
                </button>

            </div>

        </Form>
    </div>
  )
}

export default Aboutsection