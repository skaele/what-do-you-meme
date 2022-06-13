import { userModel } from '@entities/users'
import { Button, Layout } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    return (
        <Layout.Header>
            {/* <Logo height={20} /> */}
            {/* <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(15).fill(null).map((_, index) => {
                    const key = index + 1
                    return {
                        key,
                        label: `nav ${key}`,
                    }
                })}
            /> */}
            <Button
                onClick={() => {
                    userModel.events.logout()
                    navigate('/login')
                }}
            >
                Выйти
            </Button>
        </Layout.Header>
    )
}

export default Header
