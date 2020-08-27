import React, { useState } from 'react';
import fakedata from '../../../src/fakedata/fakedata.js';
import Course from '../Course/Course.js';
import CourseCart from '../CourseCart/CourseCart.js';


const Package = () => {
    const [cart, setCart] = useState([]);
    const handleAddCourse = (course) => {
        const newCartArray = [...cart, course];
        setCart(newCartArray);
    }
    return (
        <div>
            <CourseCart cart={cart}/>
            {
                fakedata.map(course =><Course course={course} handleAddCourse={handleAddCourse}/>)
            }
        </div>
    );
};

export default Package;