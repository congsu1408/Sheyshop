'use client';
import React from 'react';
import {text} from "stream/consumers";
import {Button, Form} from "antd";
import Link from "antd/lib/typography/Link";
import {getAntdFieldRequiredRule} from "@/helpers/validations";

interface userType{
    email: string;
    password: string;
}
function Login() {

    const onLogin = (values : userType) => {
        console.log(values);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            <div className="h-full bg-primary hidden md:flex items-center justify-center">
                <h1 className="text-7xl font-bold text-red-500">Shey</h1>
                <h1 className="text-7xl font-bold text-gray-500">-</h1>
                <h1 className="text-7xl font-bold text-blue-500">Shop</h1>
            </div>

            <div className="flex items-center justify-center h-full">
                <Form className='w-[400px] flex flex-col gap-5' layout='vertical' onFinish={onLogin}>
                    <h1 className="text-3xl font-bold">Login</h1>
                    <hr/>
                    <Form.Item name='email' label='Email' rules={[getAntdFieldRequiredRule("Please input your email!!!")]}>
                        <input type='email' placeholder="Email"/>
                    </Form.Item>
                    <Form.Item name='password' label='Password' rules={[getAntdFieldRequiredRule("Please input your password!!!")]}>
                        <input type='password' placeholder="Password"/>
                    </Form.Item>
                    <Button type="primary" htmlType='submit' block>Login</Button>
                    <Link href="/auth/register" className='text-primary'>
                        Don't have an account? Register
                    </Link>
                </Form>

            </div>
        </div>
    );
}

export default Login;
