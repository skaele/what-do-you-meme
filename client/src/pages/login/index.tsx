import { LoginRequest } from '@api/types/user/login-request'
import { userModel } from '@entities/users'
import Card from '@ui/card'
import { Button, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Login = () => {
    const onFinish = (values: LoginRequest) => {
        userModel.events.login(values)
    }

    return (
        <Card className="card">
            <Form<LoginRequest> layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Почта"
                    name="email"
                    rules={[{ required: true, message: 'Please input your login or email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Link to={'/registration'}>Нет аккаунта?</Link>
        </Card>
    )
}

export default Login
