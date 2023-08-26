import React from 'react';

const OrderDetails = () => {
    return (
        <section  className='orderDetails'>
            <main>
                <h1>Order Details</h1>
                <div>
                    <h1>Shipping</h1>
                    <p>
                        <b>Address</b>
                        {"kotbari 12-22 comilla"}
                    </p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Name</b>
                        {"Mezbah"}
                    </p>
                    <p>
                        <b>Phone</b>
                        {"+8801843504994"}
                    </p>
                </div>
                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Payment Maythod</b>
                        {"Processing"}
                    </p>
                    <p>
                        <b>Placed At</b>
                        {"23-02-2022"}
                    </p>
                    <p>
                        <b>Delivered At</b>
                        {"23-02-2022"}
                    </p>
                </div>
                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method</b>
                        {"Online"}
                    </p>
                    <p>
                        <b>Payment Reference</b>
                        {"#dfsa"}
                    </p>
                    <p>
                        <b>Paid At</b>
                        {"23-02-2022"}
                    </p>
                </div>
                <div>
                    <h1>Amount</h1>
                    <p>
                        <b>Items Total</b>${332}
                    </p>
                    <p>
                        <b>Shipping Charge</b>${200}
                    </p>
                    <p>
                        <b>Tax</b>${20}
                    </p>
                    <p>
                        <b>Total Amount</b>${200+200}
                    </p>
                </div>
                <article>
                     <h1>Order Items</h1>
                     <div>
                        <h4>Cheese Burger</h4>
                        <div>
                            <span>{12}</span> x <span>{232}</span>
                        </div>
                     </div>
                     <div>
                        <h4>veg Cheese Burger</h4>
                        <div>
                            <span>{10}</span> x <span>{400}</span>
                        </div>
                     </div>
                     <div>
                        <h4>Cheese Burger with french</h4>
                        <div>
                            <span>{2}</span> x <span>{333}</span>
                        </div>
                     </div>
                     <div>
                        <h4 style={{
                            fontWeight: 800,
                        }}>Sub Total</h4>
                        <div style={{
                            fontWeight: 800,
                        }}>
                            ${8943}
                        </div>
                     </div>
                </article>

            </main>
        </section>
    );
};

export default OrderDetails;