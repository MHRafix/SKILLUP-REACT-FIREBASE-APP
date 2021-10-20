import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import LatestCourses from '../LatestCourses/LatestCourses';

// Home page mark up starts from here 
const Home = () => {
    return (
      <main>
        <section>
          <div className="homeSection">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="themeDet">
                    <h2 className="headline">
                      Learn Something New, <br />
                      Learning Will Make You a Leader.
                    </h2>
                    <p className="themePera">
                      If you're a student and you study in school, college, university or others whatever, you have lots of time and you want to learn some thing crazy and outstanding? Okay, all right you're the right place. We will teach you your choosen subject with cares and love. So don't waste time just start your crazy learnning with us. 
                    </p>
                    <Link to="/services">
                       <button className="buttonBnt">Explore Courses</button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="iamge">
                    <img width="100%" height="350px" src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LatestCourses />
        </main>
      
    );
};

export default Home;