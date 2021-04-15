
import './popup.css'


function popup ({score,questionnbr,setshowQcm,setgameOver}){


    function RestartGame(){
        setshowQcm(false);
        setgameOver(false);
        


    }


    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
              <h1>Congrats!</h1><br/>
              <h4>You answered { Math.trunc(score/questionnbr *100)} % of questions correctly</h4><br/> 
              <button type="button"  className="btn btn-warning" data-dismiss="modal"  onClick={RestartGame}  >Play Again</button> 
              </div>
            </div>
          </div>
        </div>

    )
}

export default popup;