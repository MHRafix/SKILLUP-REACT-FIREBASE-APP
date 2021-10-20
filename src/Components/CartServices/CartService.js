import React from 'react';
import Rating from 'react-rating';
import { useHistory } from 'react-router';

const CartService = (props) => {
    const history = useHistory();
    const { id, service, thumbnail, ratting, saleFee, quantity, video, rattingQuantity } = props.addmission;
    
    const {handleRemoveCourse} = props;
    // Hnadle the see details button click event 
    let handleSeeDetailsBtn = () => {
        history.push(`/services/singleService/${id}`);
    }

    return (    
        <div className="cartDetailts">
            <div className="itemImage mx-2">
           <img src={thumbnail} alt="ProductImage" />
            </div>
            <div className="itemDetails mx-4">
           <h2 className="productName">{service}</h2>
           <div className="dualInfo">
           <span className="quantity"> Quantity : {quantity}</span> 
           <span className="subTotal">Fee : $ {saleFee}</span> <br />
           </div>
           <div className="dualInfo">
           <span class="videoClass">
               <i class="fas fa-play-circle"></i>  Video : {video}
               </span>
           <span className="ratting">
           <Rating className="foodRatting" readonly
                initialRating={ratting}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
        />({rattingQuantity})
      </span><br />
           </div>

            <button onClick={() => handleRemoveCourse(id)} className="buttonBntRemove">Remove Items</button>
            <button onClick={ handleSeeDetailsBtn }className="buttonBntDisplay">See Details</button>
          </div>
        </div> 
    );
};

export default CartService;