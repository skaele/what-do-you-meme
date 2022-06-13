import Header from '@widgets/header'
import { Layout } from 'antd'
import React from 'react'
import './index.scss'
import Routes from './routes'

const { Content } = Layout

const App = () => {
    return (
        <Layout className="layout">
            <Header />
            <Content>
                <Routes />
            </Content>
        </Layout>
    )
}

export default App
