import { Button } from 'antd'
import React from 'react'
import './index.scss'

const Home = () => {
    return (
        <div className="home">
            <Button href="http://localhost:3000/quiz" className="start start-quiz" type="primary">
                Начать квест
            </Button>
            <Button disabled className="start start-card" type="primary">
                Начать карточную игру
            </Button>
        </div>
    )
}

export default Home
