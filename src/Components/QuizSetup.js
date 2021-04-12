import './QuizSetup.css'
import {useState} from 'react'


function QuizSetup({showQcm,setshowQcm,setSetup}) {

   

    const [Q_nbr,setQnbr]=useState(0)
    const [Category,setCategory]=useState('sports')
    const [Difficulty,setDifficulty]=useState('easy')


    function ClickHanlder(){

        if(Q_nbr===0  ){
            alert('Invalid Inputs!!!Please Enter a valid parametres');
            return;
        }
        
            alert("welcome to our quiz lets goo!!!!!!!");
            console.log(Q_nbr);
            console.log(Category);
            console.log(Difficulty);
            setshowQcm(!showQcm);
            setSetup({Category,Difficulty,Q_nbr});
            
        

    
    }

    return(
        <div  className="form" >
             <h1 className="element">Setup Quiz</h1><br/>
             <label className="element">Number Of questions</label><br/>
             <input className="element" type={"Number"} min={0} placeholder="Questions Number" value={Q_nbr} onChange={ (e)=> setQnbr(e.target.value)} ></input><br/>
             <label className="element">Category</label><br/>
             <select className="element" value={Category}  onChange={ (e)=> setCategory(e.target.value)}>
                 <option>Sports</option>
                 <option>Art</option>
                 <option>General Culture</option>
             </select>
              <br/><br/>
             <label className="element">Select Difficulty</label><br/>
             <select className="element" value={Difficulty}  onChange={ (e)=> setDifficulty(e.target.value)}  >
                 <option>Easy</option>
                 <option>Medium</option>
                 <option>Hard</option>
             </select><br/><br/>
             <button className="element" id="start" onClick={ClickHanlder} >Start</button>
 

        </div>

    )
}
export default QuizSetup