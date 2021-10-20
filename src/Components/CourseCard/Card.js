import React from 'react';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import './Card.css';
const Card = (props) => {
    let {service, id, thumbnail, saleFee, regularFee, video,  ratting, author, duration, rattingQuantity, AuhtorImage} = props.courseData;
    
    // Use useHistory hook to implement hidden router 
    let history = useHistory();
    // Hnadle the know more button click event 
    let handleKnowmoreBtn = () => {
        history.push(`/services/singleService/${id}`);
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="course-Box">
      <img className="img-fluid" src={thumbnail} alt="CoirseIamge" />
      <div className="courseDetals">
      <span className="videoClass"><i className="fas fa-play-circle"></i>  Video : {video}</span>
      <span className="ratting">
      <Rating className="foodRatting" readonly
                initialRating={ratting}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
        />({rattingQuantity})
      </span><br />
      <h2 onClick={ handleKnowmoreBtn } className="courseTitle">{service}</h2><br />
       <span className="autorDet"><img className="rounded-circle"  src={AuhtorImage} alt="helloAuthor"/> &nbsp;<b>{author}</b></span> 
        <span className="durationtime">Duration : {duration}</span> <br /><br />
        <hr className="horizentalRole" />
        <div className="lastPrice d-flex justify-content-between align-items-center">
           <span className="price"><b className="saleFee">$ {saleFee}</b> <b className="regularfee">$ {regularFee}</b> </span>
         <span>
         <span onClick={ handleKnowmoreBtn } className="px-3 enrollBtn">Know More &nbsp; <i className="fas fa-arrow-right"></i></span>
         </span> 
        </div>
      </div>
   </div>
</div>
    );
};

export default Card;