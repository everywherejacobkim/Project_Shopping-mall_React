import React from "react";
import {Table} from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
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
                    props.state.map((a, i )=>{
                        return (
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.price}</td>
                                <td>{a.quantity}</td>
                                <td>
                                    <button onClick={()=>{
                                         props.dispatch({type: 'addNum'})  
                                    }}><b>+</b></button>

                                    <button onClick={()=>{
                                         props.dispatch({type: 'deductNum'})  
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
        </div>
    )
}

function stateProps(state){
    return {
        state : state
    }
}

export default connect(stateProps)(Cart)
// export default Cart;