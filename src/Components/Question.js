import './Question.css'

function Question ({Setup}){

    let index=0;

    const QuestionsList=[
        {
            body:"Who is the balon d'or winner for 2019?",
            type:"sports",
            difficulty:"medium",
            responses:["Lionel Messi","Ronaldo","Neymar","Braithwaite"],
            answer:1

        },
        {
            body:"Who Oscar winner for 2019?",
            type:"sports",
            difficulty:"easy",
            responses:["R.louali","FERKOUS","Naciri","Hassan Elfadd"],
            answer:1

        },
        {
            body:"Who is the best rapper for 2020 in Morroco?",
            type:"sports",
            difficulty:"hard",
            responses:["SmalllX","El Grande ToTo","Dizzy Dros","Inkonnu"],
            answer:1

        },
        

    ];
    let finalList=[]; 
     QuestionsList.forEach(question => {
        if(   question.type.localeCompare(Setup.Category)===0 &&question.difficulty.localeCompare(Setup.Difficulty)===0 ){
            finalList.push(question);
        }

     });
    console.log(finalList);

    function ClickHandler(){
        while (index<finalList.length()-1) {
            
        }
    }

    return(
        <div className="Qtemplate">
            <label className="correct-answer">Correct Answers</label>
            <h1>{finalList[index].body}</h1><br/><br/>
            <button type="button" id="a1"  className="btn btn-outline-primary">{finalList[index].responses[0]}</button>
            <button type="button" id="a2" className="btn btn-outline-primary">{finalList[index].responses[1]}</button>
            <button type="button" id="a3" className="btn btn-outline-primary">{finalList[index].responses[2]}</button>
            <button type="button"  id="a4" className="btn btn-outline-primary">{finalList[index].responses[3]}</button>
            <button type="button" id="next" className="btn btn-outline-warning" onClick={ClickHandler}>Next Question</button>

        </div>
    )
}

export default Question;