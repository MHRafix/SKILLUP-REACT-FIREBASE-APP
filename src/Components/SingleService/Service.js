import React, { useState, useEffect} from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';
import ServiceCard from '../SingleServiceCard/ServiceCard';
import { addToStorage } from '../utilities/fakestorage';

const Service = () => {
    let history = useHistory(); // For changing the route
    const {serviceId} = useParams(); // For getting the clicking course id
    
    // Store data to the state 
    const [services, setServices] = useState([]);

    const [cart, setCart] = useState([]);
    
    // Load data from database or fake db json file
    useEffect( () => {
        fetch('../../fakedata2.json')
        .then(response => response.json())
        .then(data => setServices(data));
    }, []);
    
    // Get single service using if statement and find method 
    if(services.length){
        const singleService = services.find(service => service.id === serviceId);
        if(singleService){
           setServices(singleService);
        }else{
            history.push("/"); // Go home page if the user are nughty 
        }
    }

        // Handle emroll button
        const handleEnrollBtn = (course) => {
            let newCartAmount = [];
            newCartAmount = [...cart, course];
            setCart(newCartAmount);
            addToStorage(serviceId); // Go to the fake database with clicking course id  
      }

    return (
     <section>
      <div className="singleServiceArea">
        <div className="initialBanner">
            <div className="aboutPageWrapper">
             <div className="pageIntro">
                <h3 className="pageName">
                Single Service
                </h3>
                <span className="breadCrumb">
                    <Link className="homeLink" to="/home"> Home </Link> - <span className="pagePath">Single Service</span> - <span className="pagePath">{services.service}</span>
                </span>
             </div>
            </div>
        </div>
    </div>
     <div className="singleServiceArea">
         <div className="container">
             <div className="row">
                 {/* Send all of data to single service card as props */}
                    <ServiceCard service={services} key={services.id} handleEnrollBtn={handleEnrollBtn}  serviceId={serviceId} />
             </div>
         </div>
     </div>
    </section>
    );
};

export default Service;