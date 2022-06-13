import { useQuiResultStore } from '@pages/game/model'
import { Button, Result } from 'antd'
import React from 'react'

const QuizResult = () => {
    const result = useQuiResultStore()
    return (
        <Result
            status="success"
            title="Тест успешно пройден"
            subTitle={`Ваш результат: ${result} / 3`}
            extra={[
                <Button key={'home'} href="http://localhost:3000/home" className="start start-quiz" type="primary">
                    Главная
                </Button>,
            ]}
        />
    )
}

export default QuizResult
