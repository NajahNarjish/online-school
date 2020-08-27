import React from 'react';
import "./SelectedCourse.css"

const SelectedCourse = (props) => {
    const {Course_name, Price_USD} = props.course;
    return (
        <div className="selected_course">
            <h6>{Course_name}</h6>
            <p>${Price_USD}</p>
            <small  className="delete-btn">Delete</small> 
        </div>
    );
};

export default SelectedCourse;