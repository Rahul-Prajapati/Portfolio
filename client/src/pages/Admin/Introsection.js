import React from 'react'
import { Form, input, message } from 'antd';
import { UseSelector, useDispatch, useSelector } from 'react-redux';

const Introsection = () => {
    const { portfolioData } = useSelector((state) => state.root);
    const { Introduction } = portfolioData;
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        try {
            const response = await fetch("/api/portfolio/update-intro", {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    _id: Introduction._id,
                    ...values,
                }),
            });


            if (!response.ok) {
                // Handle HTTP error status
                console.error("HTTP error:", response.status);
                // You can throw an error or handle it in a way that makes sense for your application
                throw new Error("HTTP error: " + response.status);
            }

            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                // Handle non-JSON response
                console.error("Invalid response format:", contentType);
                throw new Error("Invalid response format: " + contentType);
            }

            const data = await response.json();

            // Check if the response is empty
            if (Object.keys(data).length === 0 && data.constructor === Object) {
                console.warn("Empty response");
                // Handle empty response if needed
            } else {
                console.log("Response data:", data);
            }

            //


            console.log(data);
            // dispatch(HideLoading);
            if (response.data.success) {
                message.success(response.data.message);
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            message.error(error.message);
        }
        console.log(values);
    };
    return (
        <div>
            <Form onFinish={onFinish}
                layout="vertical"
                initialValues={Introduction}
            >
                <Form.Item name="welcomeText" label="Welcome Text">
                    <input placeholder='Welcome Text' className='border-4 w-full' />
                </Form.Item>

                <Form.Item name="firstName" label="FirstName">
                    <input placeholder='firstName' className='border-4 w-full' />
                </Form.Item>

                <Form.Item name="lastName" label="LastName">
                    <input placeholder='lastName' className='border-4 w-full' />
                </Form.Item>

                <Form.Item name="caption" label="Caption">
                    <input placeholder='caption' className='border-4 w-full' />
                </Form.Item>

                <Form.Item name="description" label="Description">
                    <textarea placeholder='description' className='border-4 w-full' />
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

export default Introsection