import React from 'react';

const Course = (props) => {
    const {Course_name, Course_duration, Price_USD} = props.course;
    const courseStyle  = {border: '1px solid blue', margin: "10px", padding: "10px"}
    return (
        <div style={courseStyle}>
            <h1>Course Name: {Course_name}</h1>
            <p>Course duration: {Course_duration}</p>
            <h3>Price (USD): {Price_USD}</h3>
            <button onClick = {() => props.handleAddCourse(props.course)}>Enroll Now</button>
        </div>
    );
};

export default Course;