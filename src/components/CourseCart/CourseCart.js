import React from 'react';
import "./CourseCart.css"
import SelectedCourse from '../SelectedCourse/SelectedCourse';

const CourseCart = (props) => {
    const cart = props.cart;
    const grandTotal = cart.reduce((total,element) => total+ element.Price_USD,  0);
    return (
        <div className="cart_div text-center">
            <h1>Purchase Summary</h1>
            {
                cart.map(course =><SelectedCourse course={course}/>)
            }
            <p>Total Courses: {cart.length}</p>
            <p>Total Price (USD): {grandTotal}</p>
            
            <button className = "btn btn-dark">Checkout</button>

            
        </div>
    );
};

export default CourseCart;