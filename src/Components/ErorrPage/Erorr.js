import React from 'react';
import { Link } from 'react-router-dom';
import erorrImg from '../../error.png';
import './Erorr.css';

const Erorr = () => {
    return (
        <div className="erorrPage">
            <div className="erorrPageWrapper">
                <div className="container">
                    <div className="erorrPageDet">
                        <img src={erorrImg} alt="erorrPage" />
                        <h2 className="erorrHeadline">Your page is not found!</h2>
                        <Link to="/home">
                            <button className="buttonBtn">Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Erorr;