import { Card as AntdCard } from 'antd'
import React from 'react'
import './index.scss'

interface Props {
    children: React.ReactNode
    className?: string
}

const Card: React.FC<Props> = ({ children, className }) => {
    return <AntdCard className={`input-card ${className}`}>{children}</AntdCard>
}

export default Card
