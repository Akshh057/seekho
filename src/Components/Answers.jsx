import React from 'react'
import '../Styles/Answers.css'


const Answers = ({ questionsData = [] }) => {
    return (
        <div className='answers' >
            Your answers appear here
            {
                questionsData.length ?
                    questionsData.map(({ selectedAnswer }, index) => {
                        return selectedAnswer != null ? <p key={`${selectedAnswer}-${index}`}>Ques : {index + 1} {selectedAnswer}</p> : null
                    }) : null
            }
        </div >
    )
}

export default Answers