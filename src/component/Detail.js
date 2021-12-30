import React, {useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import '../component/Detail.scss';

let contentBox = styled.div`
  padding:20px;
`;

function Detail(props) {

  let [alert, alertEdit] = useState(true);
  let [inputData, inputDataEdit] = useState('');

  // useEffect Function
  let timer = useEffect(()=>{
    setTimeout(()=>{alertEdit(false)}, 2000);
    return () => {clearTimeout(timer)}
  }, []);

 
  let {id} = useParams();
  let history = useHistory();

    return (
      <div className="container">

          <div className="row">
            <div className='itemDetail'>
              <p>Detail</p>
            </div>

            
            <input onChange={(e)=>{inputDataEdit(e.target.value)}}></input>
            {inputData}

            {
              alert === true
              ? <div className='itemAlert'>
                <p>Hurry up! Only 1 item LEFT..!!</p>
                </div> 
              : null
            }
      
            {/* <div className='itemAlert'>
              <p>Hurry up! Only 1 item LEFT..!!</p>
            </div>     */}

            <div className="col-md-6">
              <img src="../img/item1.jpg" width="100%" />
            </div>

            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{props.item[id].title}</h4>
              <p>{props.item[id].content}</p>
              <p>{props.item[id].price}</p>

              <Info stock = {props.stock}></Info>

              <button className="btn backBtn" onClick={()=>{
                  history.goBack();
                }}>Back</button> 

              <button className="btn btn-danger" onClick={()=>{
                props.stockEdit([9,11,12])
              }}>Check-out</button>             
            </div>
          </div>
        </div> 
    )
  }

  function Info(props){
    return (
      <p>Stock: {props.stock[0]}</p>
    );
  }


  export default Detail;