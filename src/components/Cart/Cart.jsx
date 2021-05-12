import { CircularProgress } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { topicContext } from '../../context/TopicContext';
import { calcTotalPrice } from '../helpers/calcPrice';

import './Cart.css';



const Cart = () => {
    const { getCart, cart, changeProductCount } = useContext(topicContext)
    useEffect(() => {
        getCart()
    }, [])
    console.log(cart.products + "cart")
    return (
        <div className="cart">
            {cart.products ? (
                <div className="asd">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                {/* <th>Count</th>
                                <th>SubPrice</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.map(elem => (
                                <tr key={elem.item.id}>
                                    <td>
                                        <img style={{ width: "50px" }} src={elem.item.img} alt="product-img" />
                                    </td>
                                    <td>{elem.item.title}</td>
                                    <td>{elem.item.price}</td>
                                    {/* <td> <input
                                        style={{width: "50px"}}
                                        type="number"
                                        value={elem.count}
                                        onChange={(e) => changeProductCount(e.target.value, elem.item.id)}

                                    /></td> */}
                                    {/* <td>{elem.subPrice}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {/* <h4>Total: {calcTotalPrice(cart.products)} </h4> */}
                    {/* <Link to="/payment"> */}
                        {/* <Button>Buy:</Button> */}
                    {/* </Link> */}
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};

export default Cart;