import React, { useState } from 'react'
import '../Styles/Questions.css'
import AnswerOptions from './AnswerOptions';


const Questions = ({ questionsData, setQuestionsData }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const increaseIndex = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex !== questionsData.length - 1 ? prevIndex + 1 : 0;
        })
    }
    const decreaseIndex = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex - 1;
        })
    }
    return (
        <div className='questions'>
            Attempt Questions here
            <h3>{questionsData[currentIndex]?.question}</h3>
            <AnswerOptions questionsData={questionsData} setQuestionsData={setQuestionsData} activeIndex={currentIndex} />
            <button onClick={increaseIndex}>Next</button>
            {currentIndex !== 0 ? <button onClick={decreaseIndex}>Previous</button> : null}
        </div>
    )
}

export default Questions