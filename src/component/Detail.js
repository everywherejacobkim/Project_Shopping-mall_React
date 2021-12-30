import React from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import '../component/Detail.scss';

let contentBox = styled.div`
  padding:20px;
`;

function Detail(props) {
  
  let {id} = useParams();
  let history = useHistory();

    return (
      <div className="container">

          <div className="row">
            <div className='itemDetail'>
              <p>Detail</p>
            </div>
      
            <div className='itemAlert'>
              <p>Hurry up! Only 1 item LEFT..!!</p>
            </div>    

            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>

            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{props.item[id].title}</h4>
              <p>{props.item[id].content}</p>
              <p>{props.item[id].price}</p>

              <button className="btn backBtn" onClick={()=>{
                  history.goBack();
                }}>Back</button> 

              <button className="btn btn-danger">Check-out</button>             
            </div>
          </div>
        </div> 
    )
  }

  export default Detail;