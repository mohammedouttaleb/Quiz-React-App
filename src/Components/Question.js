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
            body:"Who is the balon d'or winner for 2018?",
            type:"sports",
            difficulty:"easy",
            responses:["Lionel Messi","Ronaldo","Neymar","Braithwaite"],
            answer:"Lionel Messi"

        },
        {
            body:"Who is the Premier League’s all-time top scorer?",
            type:"sports",
            difficulty:"Hard",
            responses:["Sergio Kun Aguero","Eden Hazard","Alan Shearer","Rooney"],
            answer:"Alan Shearer"

        },
        {
            body:"Wayne Rooney scored his Premier League first goal against which team?",
            type:"sports",
            difficulty:"Hard",
            responses:["Arsenal","Chelsea","Man City","Totenham"],
            answer:"Arsenal"

        },
        {
            body:"Where were the Olympics held in 1980?",
            type:"sports",
            difficulty:"Hard",
            responses:["Russia","South Africa","Japan","China"],
            answer:"Russia"

        },
        {
            body:"Who holds the women's record for the 100m sprint?",
            type:"sports",
            difficulty:"Hard",
            responses:["Florence Griffith-Joyner","Stevie Marget","Magie Oliver","Elizabet Kean"],
            answer:"Florence Griffith-Joyner"

        },
        {
            body:"Who Oscar winner for 2019?",
            type:"art",
            difficulty:"easy",
            responses:["R.louali","FERKOUS","Naciri","Hassan Elfadd"],
            answer:"R.louali"

        },
        {
            body:"Who is the best rapper for 2020 in Morroco?",
            type:"art",
            difficulty:"easy",
            responses:["SmalllX","El Grande ToTo","Dizzy Dros","Inkonnu"],
            answer:"SmalllX"

        },
        

    ];
    let finalList=[]; 
     /*filltered list based on user parameters */ 
     QuestionsList.forEach(question => {
        if(   question.type.localeCompare(Setup.Category)===0 &&question.difficulty.localeCompare(Setup.Difficulty)===0 ){
                
             if(finalList.length<Setup.Q_nbr) finalList.push(question);
             else return;
        }

     });

    console.log(finalList);

    //checking the availability of the questions  so based on that bolean we render either questions or a error message
    let questionsAvailability= finalList.length>0 ? true:false;

    //handler du nextquestion button 
    function ClickHandler(){
        
        if (index<=finalList.length-2) {

         setindex(index+1);  
        }
        else{
            /** display game over popup */
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
            
        if(index<=finalList.length-2)  {
         /* the game is not over*/ 
        setindex(index+1);
    }
    else{
        /* the game is over so we will display congratualation popup with the score*/
        setgameOver(true);
    }

    }

    
    return(
        <div >
          { questionsAvailability ?
            <div className="Qtemplate">
            <label className="correct-answer">Correct Answers{score}/{questionnbr}</label>
            <h1>{finalList[index].body}</h1><br/><br/>
            {finalList[index].responses.map((response,index) => <button type="button" key={index}   className="btn btn-outline-primary a1" data-toggle="modal" data-target="#exampleModal" value={response} onClick={ e => AnswerHandler(e.target)} >{response}</button> )}
            <button type="button" id="next" className="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModal" onClick={ClickHandler}>Next Question</button>
             { gameOver && <Popup score={score} questionnbr={questionnbr} setshowQcm={setshowQcm} setgameOver={setgameOver} />}
           </div>
            :<div className="Qtemplate" ><br/><br/><br/><h1 className="error" >Sorry There is no available Questions right Now ;(</h1><br/><br/><br/></div>
            } 
        </div>
    )
}

export default Question;