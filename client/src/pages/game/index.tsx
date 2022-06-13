import { RoutedProps, withRouter } from '@app/hocs/with-router'
import { Card } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import { loadQuizFx, loadQuizResultFx, useQuizStore } from './model'

type Props = RoutedProps<{ gameId: string }, unknown>

const Game: React.FC<Props> = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [result, setResult] = useState<Record<string, string>>({})
    const navigate = useNavigate()

    useEffect(() => {
        loadQuizFx()
    }, [])

    const quiz = useQuizStore()

    if (!quiz) return null

    const current = useMemo(() => quiz[currentIndex], [quiz, currentIndex])

    if (!current) return null

    const handleSelect = (optionId: string) => {
        setResult((prev) => {
            const updated = { ...prev }

            updated[current.id] = optionId
            return { ...updated }
        })
        if (currentIndex !== quiz.length - 1) setCurrentIndex((prev) => prev + 1)
        else {
            loadQuizResultFx(result)
            navigate('/quiz-result')
        }
    }

    return (
        <div className="game">
            <Card className="question-essence">
                <span>
                    {currentIndex + 1}.) {current.text}
                </span>
                {current.imageId && <img src={current.imageId} alt={current.text} />}
            </Card>
            <div className="question-options">
                {current.solutions.map((option, index) => (
                    <Card
                        key={option.text}
                        onClick={() => handleSelect(option.id)}
                        className="option"
                        title={option.text}
                    >
                        <span>{index}</span>
                        {option.image?.id && (
                            <img
                                width={'25%'}
                                src={`http://localhost:5000/images/${option.image?.id}${option.image.extension}`}
                                alt={option.text}
                            />
                        )}
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default withRouter(Game)
