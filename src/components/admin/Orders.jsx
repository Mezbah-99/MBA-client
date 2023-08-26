import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import {GiArmoredBoomerang} from "react-icons/gi"

const Orders = () => {
    const arr = [1, 2, 3, 4]

    return (
        
        <section className='tableClass'>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Order Status</th>
                            <th>Item Qty</th>
                            <th>Amount</th>
                            <th>Payment Method</th>
                            <th>User</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            arr.map(item => (
                                <tr key={item}>
                                    <td>#asdklj</td>
                                    <td>Processing</td>
                                    <td>26</td>
                                    <td>$ {14}</td>
                                    <td>COD</td>
                                    <td>Mezbah</td>
                                    <td><Link to={`/order/${"asdss"}`}>
                                        <AiOutlineEye/>    
                                    </Link>
                                    <button>
                                        <GiArmoredBoomerang/>
                                    </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </section>
    );
};

export default Orders;