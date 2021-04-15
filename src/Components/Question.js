import Popup from './popup'
import { useState } from 'react';
import './Question.css'

function Question ({Setup,setshowQcm}){

    const [gameOver,setgameOver]=useState(false);
    const [score,setscore]=useState(0);
    const [index,setindex]=useState(0);
    const [questionnbr,setquestionnbr]=useState(0);

    const QuestionsList=[
        {
            body:"Who is the balon d'or winner for 2019?",
            type:"sports",
            difficulty:"easy",
            responses:["Lionel Messi","Ronaldo","Neymar","Braithwaite"],
            answer:"Lionel Messi"

        },
        {
            body:"Who Oscar winner for 2019?",
            type:"sports",
            difficulty:"easy",
            responses:["R.louali","FERKOUS","Naciri","Hassan Elfadd"],
            answer:"R.louali"

        },
        {
            body:"Who is the best rapper for 2020 in Morroco?",
            type:"sports",
            difficulty:"easy",
            responses:["SmalllX","El Grande ToTo","Dizzy Dros","Inkonnu"],
            answer:"SmalllX"

        },
        

    ];
    let finalList=[]; 
     /*filltered list based on user parameters */ 
     QuestionsList.forEach(question => {
        if(   question.type.localeCompare(Setup.Category)===0 &&question.difficulty.localeCompare(Setup.Difficulty)===0 ){
            finalList.push(question);
        }

     });

    console.log(finalList);

    //handler du nextquestion button 
    function ClickHandler(){
        
        if (index<=finalList.length-2) {

         setindex(index+1);  
        }
        else{
            /** display game over popup */
            alert("Game Over!!!");
            setgameOver(true);
        }
        setquestionnbr(questionnbr+1); 
     }
    //handler of answers buttons
    function AnswerHandler(target){
        setquestionnbr(questionnbr+1);
      
        if(target.value.localeCompare(finalList[index].answer)===0)  {
            setscore(score+1);
            
    
           } 
            //else  alert("wrong answer!!!");

        if(index<=finalList.length-2)  {
         /* the game is not over*/ 
        setindex(index+1);
    }
    else{
        /* the game is over so we will display congratualation popup with the score*/
        //alert("Game Over!!!");
        setgameOver(true);
    }

    }

    let array=finalList[index].responses;
    //array2 is the list of choices i render it using map method
    let array2=array.map(response => <button type="button"   className="btn btn-outline-primary a1" data-toggle="modal" data-target="#exampleModal" value={response} onClick={ e => AnswerHandler(e.target)} >{response}</button> )
    return(
        <div className="Qtemplate">
            <label className="correct-answer">Correct Answers{score}/{questionnbr}</label>
            <h1>{finalList[index].body}</h1><br/><br/>
            {array2}
            <button type="button" id="next" className="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModal" onClick={ClickHandler}>Next Question</button>
             { gameOver && <Popup score={score} questionnbr={questionnbr} setshowQcm={setshowQcm} setgameOver={setgameOver} />}
            
            
        </div>
    )
}

export default Question;