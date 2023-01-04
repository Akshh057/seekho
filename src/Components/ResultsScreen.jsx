import React, { useMemo } from 'react'

const ResultsScreen = ({ questionsData = [] }) => {
    const scoreOfUser = useMemo(() => {
        let correctAnswersCount = 0;
        if (questionsData.length > 0) {
            questionsData.forEach(({ correctAnswer, selectedAnswer }) => {
                if (selectedAnswer === correctAnswer) {
                    correctAnswersCount += 1;
                } else if (correctAnswersCount > 0) {
                    correctAnswersCount -= 1;
                } else {
                    correctAnswersCount = 0;
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