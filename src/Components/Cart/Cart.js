import React from 'react';
import './Cart.css';
import useCart from '../../CustomHooks/useCart';
import useService from '../../CustomHooks/useService';
import Summary from '../CartSummary/Summary';
import CartService from '../CartServices/CartService';
import { Link } from 'react-router-dom';
import { deleteFromStorage } from '../utilities/fakestorage';

const Cart = () => {
    // Import from custom hooks useService
    const [courses] = useService();
    const [cartAddmission, setCartAddmission] = useCart(courses);

    // Handle remove course from cart

    const handleRemoveCourse = (id) => {
          // Show rest cart courses after clicking the remove btn and remove clicked course from ui
          const restCartAddmission = cartAddmission.filter(allAdmission => allAdmission.id !== id);
          setCartAddmission(restCartAddmission);
          // Remove clicked course from database
          deleteFromStorage(id);
    } 
    return (
      <div className="cartTable">
          <div className="container">
              {
                  cartAddmission.length !== 0 ? <div className="row cartRow">
                  <h1 className="heading">Cart Items : {cartAddmission.length}</h1>
                  <br />
                  <br />   
                  
                   <div className="col-lg-8 col-md-12 col-sm-12 cartItem"> 
                     {   
                     cartAddmission.map(admission => <CartService key={admission.id} addmission={admission} handleRemoveCourse={handleRemoveCourse} />) 
                      }
                 </div> 
                 
                 
                    {/* Cart Summary Table */}
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <br />
                    {   
                    // Cart sammary table import here
                    <Summary cartAddmission={cartAddmission} />
                    }
                     </div>
                    </div>
                      : <div className="errorMessage"> 
                      <h1 className="errorAlert">No Course Added Yet!</h1>
                      <Link className="redirectBtn" to="/services">Explore Course</Link>
                      </div>    
                  }
                </div>
            </div>
    );
};

export default Cart;