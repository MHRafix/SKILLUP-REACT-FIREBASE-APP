import React from 'react';
import { Link } from 'react-router-dom';
import Instructors from '../Instructors/Instructors';
import './About.css';
// About Page markup starts from here 
const About = () => {
    return (
        <section>
            <div className="aboutUsArea">
                <div className="initialBanner">
                    <div className="aboutPageWrapper">
                     <div className="pageIntro">
                        <h3 className="pageName">
                            About Us
                        </h3>
                        <span className="breadCrumb">
                            <Link className="homeLink" to="/home"> Home </Link> - <span className="pagePath">About Us</span>
                        </span>
                     </div>
                    </div>
                </div>
            </div>

                 <div className="aboutThemeDet">
                  <div className="container">
                        <div className="row">
                          <div className="headingopfArea">
                           <h1 className="heading">Strategy Outline</h1>
                          </div>
                         <div className="col-lg-6 col-md-6 col-sm-12">
                           <div className="themeDet">
                             <h2 className="headline">
                              Our Teaching Strategy, <br />
                              Teaching Method ?
                             </h2>
                             <p className="themePera">
                              If you're a student and you study in school, college, university or others whatever, you have lots of time and you want to learn some thing crazy and outstanding? Okay, all right you're the right place. We will teach you your choosen subject with cares and love. So don't waste time just start your crazy learnning with us. 
                             </p>
                             <Link to="/instructors">
                               <button className="buttonBnt">Meet Instructors</button>
                             </Link>
                          </div>
                        </div>
                           <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="video">
                          <iframe className="strategyVideo" width="100%" height="320px" src="https://www.youtube.com/embed/Cxf5sOXG0w0" title="YouTube video player" frameBorder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                       </div>
                      </div>
                      </div>
                    </div>
                 </div>
               {/* Instructors component import here */}
               <Instructors />
        </section>
    );
};

export default About;