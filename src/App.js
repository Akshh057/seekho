import Answers from "./Components/Answers";
import Questions from "./Components/Questions";
import Header from "./Components/Header";
import './Styles/App.css'
import { useState } from "react";
import { QuestionsData } from "./QuestionsData";

function App() {
  const [questionsData, setQuestionsData] = useState(QuestionsData)
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Answers />
        <Questions questionsData={questionsData} setQuestionsData={setQuestionsData} />
      </div>
    </div>
  );
}

export default App;
