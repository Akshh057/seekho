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

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className='resultsContainer'>
            <h2> You have completed the test. 🎉 </h2>
            <p> Questions Asked - {questionsData.length} </p>
            <p> Correct Answers ✅  - {scoreOfUser.correctAnswersCount} </p>
            <p>Your score - {scoreOfUser.score} %</p>
            <button className='button' onClick={refreshPage}>Retake Test ↻</button>
        </div>
    )
}

export default ResultsScreen