import React from 'react';
import { useHistory } from 'react-router';

const Summary = (props) => {
    const history = useHistory(); // Use browser history for changing route
      const {cartAddmission} = props; // Destructure from props
      let subTotal = 0; // Initial subtotal fee

      // Apply for loop on array for getting all course objects
      for(const cartCourse of cartAddmission){
          const salePrice = Number(cartCourse.saleFee); // Take course sale fee
          subTotal = subTotal + salePrice; // Payable subtotal fee
      }
      
    // Calculate service fee
    const serviceFee = (subTotal / 100) * 3;

    // Calculate others fee
    const othersFee = ((subTotal + serviceFee) / 100) * 5;
    
    // Calculate grandTotal fee
    const grandTotal = (subTotal + serviceFee + othersFee);
    

    // Handle promo code and give discount
    // const promoCode = "getdiscount2021";
    const handlePromoCode = () => {
          alert("Please type a valid code!");
    }

    // Handle checkout button
    const handleCheckoutBtn = () => {
          history.push('/checkout');

    }

    return (
        <div className="cartSummary">
        <div className="tableHead">
            <span className="headline">Subject</span>
            <span className="headline">Balance</span>
        </div>
        <hr />

        <div className="tableBody">
         <div className="tableItem">
            <span className="subjectName">SubTotal</span> <br />
            <span className="subjectName">Service Fee</span> <br />
            <span className="subjectName">Others Fee</span> <br />
            <span className="subjectName">GrandTotal</span> <br />
        </div>
        <div className="tableItem">
            <span className="netBalance">:</span> <br />
            <span className="netBalance">:</span> <br />
            <span className="netBalance">:</span> <br />
            <span className="netBalance">:</span> <br />
        </div>
        <div className="tableItem">
            <span className="netBalance">$ {subTotal.toFixed(2)}</span> <br />
            <span className="netBalance">$ {serviceFee.toFixed(2)}</span> <br />
            <span className="netBalance">$ {othersFee.toFixed(2)}</span> <br />
            <span className="netBalance">$ {grandTotal.toFixed(2)}</span> <br />
        </div>
        </div> <br />
        <input type="text"  name="" id="" placeholder="Enter PromoCode" />
        <button onClick={handlePromoCode} className="buttonBtnCheckout">Apply</button> <br />
        <button onClick={handleCheckoutBtn} className="buttonBtnCheckoutLink">Checkout</button> <br /> 
    </div>
    );
};

export default Summary;