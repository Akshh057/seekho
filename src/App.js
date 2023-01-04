import Answers from "./Components/Answers";
import Questions from "./Components/Questions";
import Header from "./Components/Header";
import './Styles/App.css'
import { useState } from "react";
import { QuestionsData } from "./QuestionsData";
import ResultsScreen from "./Components/ResultsScreen";

function App() {
  const [questionsData, setQuestionsData] = useState(QuestionsData);
  const [answersSubmitted, setAnswersSubmitted] = useState(false);
  const handleSubmit = () => {
    setAnswersSubmitted(true)
  }

  return (
    <div className="container">
      <Header />
      <div className="content">
        {!answersSubmitted ?
          <>
            <Answers questionsData={questionsData} />
            <Questions questionsData={questionsData} setQuestionsData={setQuestionsData} />
            <button onClick={handleSubmit}>Submit</button>
          </>
          :
          <ResultsScreen questionsData={questionsData} />
        }
      </div>
    </div>
  );
}

export default App;
