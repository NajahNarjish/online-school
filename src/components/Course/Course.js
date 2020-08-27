import React from 'react';
import "./Course.css";

const Course = (props) => {
    const {Course_name, Course_duration, Price_USD} = props.course;
    return (
        <div className = "col-md-4">
            {/* <div className = "single-item text-center"> */}
                <div className = "card p-2 mb-5">
                    <img className="card-img-top" src="" alt=""/>
                    <div className = "card-body card-content">
                        <h1>{Course_name}</h1>
                        <p>Course duration: {Course_duration}</p>
                        <h3>Price (USD): {Price_USD}</h3>
                        
                    </div>
                    <div class="card-footer">
                        <button className ="btn btn-success enroll-btn" onClick = {() => props.handleAddCourse(props.course)}>Enroll Now</button>
                    </div>
                </div>
            {/* </div> */}
            
                
            

            {/* <h1>Course Name: {Course_name}</h1>
            <p>Course duration: {Course_duration}</p>
            <h3>Price (USD): {Price_USD}</h3>
            <button onClick = {() => props.handleAddCourse(props.course)}>Enroll Now</button> */}
        </div>
    );
};

export default Course;


