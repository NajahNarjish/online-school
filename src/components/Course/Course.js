import React from 'react';
import "./Course.css";

const Course = (props) => {
    const {Course_name, Course_duration, Price_USD, Image} = props.course;
    return (
        <div className = "col-md-4">
                <div className = "card p-2 mb-5 each-card">
                    <img className="card-img-top" src={Image} alt=""/>
                    <div className = "card-body card-content">
                        <h2>{Course_name}</h2>
                        <p>Course duration: {Course_duration}</p>
                        <h4>Price (USD): {Price_USD}</h4>   
                    </div>
                    <div class="card-footer">
                        <button className ="btn btn-success enroll-btn" onClick = {() => props.handleAddCourse(props.course)}>Enroll Now</button>
                    </div>
                </div>
        </div>
    );
};

export default Course;


