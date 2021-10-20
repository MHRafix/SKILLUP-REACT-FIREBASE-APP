import React from 'react';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import { getStoredAdmission } from '../utilities/fakestorage';

const ServiceCard = (props) => {
    
    // For changing the route
    const history = useHistory();

    // Destructuring the single data value 
    const { service, author, regularFee, saleFee, AuhtorImage, video, rattingQuantity, thumbnail, duration, ratting, description } = props.service;
    
    // Destructuring the service uniqueid
    const {serviceId} = props;
    // Handle emroll button

    // Handle view cart btn
    const handleViewCartBtn = () => {
        history.push('/cart'); // Go cart page for next time
    }

    const storedAddmission = getStoredAdmission();
    let exactId; // Store current course id from cart page
    let idArray = []; // Empty array for storing cart courses id

    // Use for loop for getting all cart courses id
    for(const id in storedAddmission){
        idArray.push(id); // Store cart courses id in the empty array

        // Check current course id is available or not to the cart
        const tempId = idArray.find(a => a === serviceId);
        exactId = tempId;
    }
    return (
        <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="row singleService">
            <div className="serviceImage col-lg-5 col-md-6 col-sm-12">
                <img className="img-fluid mb-4" src={thumbnail} alt="singleServie" />
            </div>
            <div className="details px-4 col-lg-7 col-md-6 col-sm-12">
                <h2 className="serviceTitle">{service}</h2>
                <div className="dualInfo">
                <span className="price"><b className="saleFee1">$ {saleFee}</b> <b className="regularfee1">$ {regularFee}</b> </span>
                <span className="ratting1">
                <Rating className="foodRatting" readonly
                          initialRating={ratting}
                          emptySymbol="far fa-star"
                          fullSymbol="fas fa-star"
                  />({rattingQuantity})
                </span>
                </div><br />
                <div className="dualInfo">
                <span className="autorDet1"><img className="rounded-circle"  src={AuhtorImage} alt="helloAuthor"/> &nbsp;<b>{author}</b></span> 
                <span className="durationtime1">Duration : {duration}</span>
                </div><br />
                <div className="dualInfo">
                <span className="videoClass"><i className="fas fa-play-circle"></i>  Video : {video}</span>
                {   // Handle enroll and view cart btn based on id 
                    serviceId === exactId ? <span onClick={ handleViewCartBtn } className="enrollBtn2">View Cart &nbsp; <i className="fas fa-arrow-right"></i></span> : <span onClick={() => props.handleEnrollBtn(props.service) } className="enrollBtn2">Add to Enroll &nbsp; <i className="fas fa-arrow-right"></i></span> 
                }
                </div><br />
            </div>
        </div><br />
        <hr /><br />
        <div className="serviceDescription">
            <h2 className="tabTitle">Description</h2>
            <p className="descPera">{description}</p>
        </div>
    </div>
    );
};

export default ServiceCard;