import React from 'react'
import '../Styles/Answers.css'


const Answers = ({ questionsData = [] }) => {
    return (
        <div className='answers' >
            <h2> Your answers appear here 📋 </h2>
            {
                questionsData.length ?
                    questionsData.map(({ selectedAnswer }, index) => {
                        return selectedAnswer != null ? <h4 key={`${selectedAnswer}-${index}`}>Question {index + 1} : {selectedAnswer}</h4> : null
                    }) : null
            }
        </div >
    )
}

export default Answers