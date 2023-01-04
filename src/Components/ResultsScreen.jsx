import React, { useMemo } from 'react'

const ResultsScreen = ({ questionsData = [] }) => {
    const scoreOfUser = useMemo(() => {
        if (questionsData.length > 0) {
            let correctAnswersCount = 0;
            questionsData.forEach(({ correctAnswer, selectedAnswer }) => {
                if (selectedAnswer === correctAnswer) {
                    correctAnswersCount += 1;
                }
            })
            return { correctAnswersCount, score: (correctAnswersCount / questionsData.length) * 100 };
        }
    }, [questionsData])

    return (
        <div>
            <p> You have completed the test. your score is as below </p>
            <p> Questions Asked - {questionsData.length} </p>
            <p> Correct Answers - {scoreOfUser.correctAnswersCount} </p>
            <p>Your score - {scoreOfUser.score} %</p>
        </div>
    )
}

export default ResultsScreen