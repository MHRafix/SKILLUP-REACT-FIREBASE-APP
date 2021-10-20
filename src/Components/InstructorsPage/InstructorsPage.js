import React from 'react';
import './InstructorsPage.css';
import { Link } from 'react-router-dom';
import Instructors from '../Instructors/Instructors';

// Instructors Page Markup Starts From Here
const InstructorsPage = () => {
    return (
        <section>
            <div className="instructorsArea">
                <div className="initialBanner">
                    <div className="aboutPageWrapper">
                     <div className="pageIntro">
                        <h3 className="pageName">
                            Our Instructors
                        </h3>
                        <span className="breadCrumb">
                            <Link className="homeLink" to="/home"> Home </Link> - <span className="pagePath">Instructors</span>
                        </span>
                     </div>
                    </div>
                </div>
            </div>
            {/* Instructors import here  */}
            <Instructors />
        </section>
    );
};

export default InstructorsPage;