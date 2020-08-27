import React from 'react';

const CourseCart = (props) => {
    const cart = props.cart;
    const grandTotal = cart.reduce((total,element) => total+ element.Price_USD,  0);
    return (
        <div>
            <h1>Purchase Summary</h1>
            <p>Total Courses: {cart.length}</p>
            <p>Total Price (USD): {grandTotal}</p>
   
        </div>
    );
};

export default CourseCart;