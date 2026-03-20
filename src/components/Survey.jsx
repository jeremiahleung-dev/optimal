import { useState, useCallback } from 'react'
import { questions } from '../data/questions'
import QuestionCard from './QuestionCard'
import WalletShuffle from './WalletShuffle'

export default function Survey({ onComplete }) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [animState, setAnimState] = useState('idle')

  const handleAnswer = useCallback((optionId) => {
    const questionId = questions[index].id
    const newAnswers = { ...answers, [questionId]: optionId }

    if (index === questions.length - 1) {
      setAnimState('out')
      setTimeout(() => onComplete(newAnswers), 340)
      return
    }

    setAnimState('out')
    setTimeout(() => {
      setAnswers(newAnswers)
      setIndex(i => i + 1)
      setAnimState('in')
      setTimeout(() => setAnimState('idle'), 400)
    }, 340)
  }, [index, answers, onComplete])

  const handleBack = useCallback(() => {
    if (index === 0) return
    setAnimState('out-right')
    setTimeout(() => {
      setIndex(i => i - 1)
      setAnimState('in-left')
      setTimeout(() => setAnimState('idle'), 400)
    }, 340)
  }, [index])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px 40px',
    }}>
      <WalletShuffle />

      <QuestionCard
        question={questions[index]}
        animState={animState}
        onAnswer={handleAnswer}
        onBack={index > 0 ? handleBack : null}
      />
    </div>
  )
}
