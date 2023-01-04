import React from 'react'

const AnswerOptions = ({ questionsData = [], setQuestionsData, activeIndex }) => {
    const { answerOptions, selectedAnswer } = questionsData[activeIndex];

    const handleSelectAnswer = (answer) => {
        setQuestionsData((prevQuestionsData) => {
            let newQuestionsData = [...prevQuestionsData]
            newQuestionsData[activeIndex] = {
                ...newQuestionsData[activeIndex],
                selectedAnswer: answer
            }
            return newQuestionsData
        })
    }
    return (
        <>
            {
                answerOptions.length ? answerOptions.map((answer) => {
                    return <label key={`${answer}-1`}>
                        <input type="radio" value={answer} checked={selectedAnswer === answer} onChange={() => handleSelectAnswer(answer)} />
                        {answer}
                    </label>
                }) : null
            }

        </>
    )
}

export default AnswerOptions