import { Spin } from 'antd'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import './index.scss'
import 'antd/dist/antd.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={<Spin size="large" delay={300} />}>
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>,
)
