import React, { useState } from 'react';
import fakedata from '../../../src/fakedata/fakedata.js';
import Course from '../Course/Course.js';
import CourseCart from '../CourseCart/CourseCart.js';
import "./Package.css"


const Package = () => {
    const [cart, setCart] = useState([]);
    const handleAddCourse = (course) => {
        if(cart.indexOf(course) < 0){
            const newCartArray = [...cart, course];
            setCart(newCartArray);
        }  
    };
    
    return (
        
        <div className="container package-div">
            <div className="row course_part">
                <div className="col-md-9 course_names ">
                    <div className="row">
                        {
                            fakedata.map(course =><Course course={course} handleAddCourse={handleAddCourse} key ={course.Course_ID} />)
                        }
                    </div>     
                </div>
                <div className="col-md-3 course_cart">
                    <CourseCart cart={cart}/>
                </div>
            </div>
        </div>
    );
};

export default Package;