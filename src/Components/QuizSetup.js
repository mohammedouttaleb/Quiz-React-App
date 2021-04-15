import './QuizSetup.css'
import {useState} from 'react'


function QuizSetup({showQcm,setshowQcm,setSetup}) {

   

    const [Q_nbr,setQnbr]=useState(1)
    const [Category,setCategory]=useState('sports')
    const [Difficulty,setDifficulty]=useState('easy')


    function ClickHanlder(){
       
        /** showing qcm form and passing user inputs to question component */
            setshowQcm(!showQcm);
            setSetup({Category,Difficulty,Q_nbr});
    }

    return(
        <div  className="form" >
             <h1 className="element">Setup Quiz</h1><br/>
             <label className="element">Number Of questions</label><br/>
             <input className="element" type={"Number"} min={1} placeholder="Questions Number" value={Q_nbr} onChange={ (e)=> setQnbr(e.target.value)} ></input><br/>
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