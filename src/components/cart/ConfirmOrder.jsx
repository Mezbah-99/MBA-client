import React from 'react';

const ConfirmOrder = () => {
    return (
        <section className='confirmOrder'>
            <main>
                <h1>Confirm Order</h1>
                <form action="">
                    <div>
                        <label>Cash On Delivery</label>
                        <input type="radio" name="payment"/>
                    </div>
                    <div>
                        <label>Online</label>
                        <input type="radio" name="payment"/>
                    </div>
                    <button type='submit'>Place Orders</button>
                </form>
            </main>
        </section>
    );
};

export default ConfirmOrder;