import './App.css';
import QuizSetup from './Components/QuizSetup'
import Question from './Components/Question'
import {useState} from 'react'

function App() {
  
   const [showQcm,setshowQcm]=useState(false);
   
   const [QuizParams,setQuizParams]=useState({});
  
  return (
    <div className="App">
     {showQcm?<Question Setup={QuizParams} setshowQcm={setshowQcm}  />:<QuizSetup   setSetup={setQuizParams} showQcm={showQcm} setshowQcm={setshowQcm}/>}  
     
     
    </div>
  );
}

export default App;
