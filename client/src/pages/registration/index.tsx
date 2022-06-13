import { RegistateRequest } from '@api/types/user/registrate-request'
import { userModel } from '@entities/users'
import Card from '@ui/card'
import { Button, Form, Input } from 'antd'
import React from 'react'

const Registration = () => {
    const onFinish = (values: RegistateRequest) => {
        userModel.events.registrate(values)
    }

    return (
        <Card className="card">
            <Form<RegistateRequest> layout="vertical" onFinish={onFinish}>
                <Form.Item label="Почта" name="email" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Имя" name="fullName" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Пароль" name="password" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Registration
