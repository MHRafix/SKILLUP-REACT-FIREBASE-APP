import React, { useEffect, useState } from 'react';
import Card from '../CourseCard/Card';
import './LatestCourses.css';

// Latest Courses Area starts from here 
const LatestCourses = () => {
    // Js dynamic dta load from fake data.json 
    let [courses, setCourses] = useState([]);

    // Use useEffect to load data from fakeData 
    useEffect( () => {
        // This data for latest course dispaly 
        fetch('./fakedata.json')
        .then(response => response.json())
        .then(data => setCourses(data));
    }, []);

    return (
        <div className="latestCorsesArea">
            <div className="container">
                <div className="headingopfArea">
                    <h1 className="heading mb-5">Latest Courses</h1> <br />
                </div>
                <div className="row">
                {
                    courses.map(course => <Card key={course.id} courseData={course} />)
                }
                </div>
            </div>
        </div>
    );
};

export default LatestCourses;