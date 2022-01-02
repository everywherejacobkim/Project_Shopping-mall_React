import React from "react";
import {Table} from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props) {

    let state = useSelector((state) => state.reducer)
    console.log(state);

    let dispatch = useDispatch();

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Edit</th>
                    </tr>
                </thead>

                <tbody>
                {
                    state.map((a, i)=>{
                        return (
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.price}</td>
                                <td>{a.quantity}</td>
                                <td>
                                    <button onClick={()=>{
                                         dispatch({type: 'addNum'})  
                                    }}><b>+</b></button>

                                    <button onClick={()=>{
                                         dispatch({type: 'deductNum'})  
                                    }}><b>-</b></button>
                                </td>
                                
                            </tr>
                        )
                    })
                }

                    {/* <tr>
                    <td>1</td>
                    <td>{props.state[0].name}</td>
                    <td>{props.state[0].quantity}</td>
                    <td>{props.state[0].price}</td>
                    </tr> */}
                </tbody>
            </Table>
                {props.alertOpen === true
                ? ( <div className="itemAlert">
                    <p>Purchase Today & Enjoy Extra 20% OFF!</p>
                    <button className="closeBtn" onClick={()=>{ props.dispatch({type: 'closeModal'}) }}>Close</button>
                    </div>)   
                : null
                }

        </div>
    )
}



// function stateProps(state){
//     return {
//         state : state.reducer,
//         alertOpen : state.reducer2
//     }
// }

// export default connect(stateProps)(Cart)

export default Cart;