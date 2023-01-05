import React, { useState } from 'react'
import '../Styles/Questions.css'
import AnswerOptions from './AnswerOptions';


const Questions = ({ questionsData, setQuestionsData }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const increaseIndex = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex + 1;
        })
    }
    const decreaseIndex = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex - 1;
        })
    }
    return (
        <div className='questions'>
            <h2> Attempt Questions here 👇</h2>
            <h3>{questionsData[currentIndex]?.question} {currentIndex + 1}/{questionsData.length}</h3>
            <AnswerOptions questionsData={questionsData} setQuestionsData={setQuestionsData} activeIndex={currentIndex} />
            <div className='buttonsContainer'>
                {currentIndex !== questionsData.length - 1 ? <button className='button' onClick={increaseIndex}>Next Question</button> : null}
                {currentIndex !== 0 ? <button className='button' onClick={decreaseIndex}> Previous Question</button> : null}
            </div>
        </div >
    )
}

export default Questions