import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Detail() {
  
  let history = useHistory();

    return (
      <div className="container">
          <div className="row">

            <button className="btn btn-danger backBtn" onClick={()=>{
                  history.goBack();
                }}>Back</button> 
                
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">Item Name</h4>
              <p>Description</p>
              <p>$120</p>
              <button className="btn btn-danger">Check-out</button> 
              
            </div>
          </div>
        </div> 
    )
  }

  export default Detail;