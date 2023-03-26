import React, { useState, useEffect } from 'react';
import hero from './img/hero1.png'

const GreenPointRedemption = () => {
  const [couponCode, setCouponCode] = useState('');
  
  const green = '#00B98E';
  const light = '#F3F6F8';
  const dark = '#0E2E50';

  useEffect(() => {
    generateCouponCode();
  }, []);

  const generateCouponCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCouponCode(code);
  }

  const copyCouponCode = () => {
    navigator.clipboard.writeText(couponCode);
  }

  return (

<div style={{color: dark }} className="container-xxl d-flex flex-column justify-content-sm-around ">
                <div className="container">
                    <div className="row g-5 align-items-center mt-10">
                      
                    <div className='col-lg-12' style={{textAlign: "center"}}>
                            <div>

                            <img width={"20%"} style={{borderRadius: "50%"}} src={hero} />
                            </div>
                        </div>
                        <div className="col-lg-12 text-center text-lg-start my-2">
                            <h4>Thank you for choosing our eco-friendly product! We appreciate your efforts towards a greener planet. 
                              
                            </h4>

                            <h4 className="py-2">As a token of our appreciation, please use the following coupon code to receive a discount on your next purchase:

                            &nbsp; &nbsp;  <span style={{border: "1px solid"+ green, borderRadius: "5px", display: "inline-block", padding: "5px 15px", lineHeight:"27px"}}>{couponCode}</span>
                           </h4>
                            <button style={{backgroundColor: green, border: green}} className="btn btn-primary rounded-pill mx-auto logout-btn"  onClick={copyCouponCode}>Copy Code</button>
                      
                            <h4> Let's work together to make our planet a better place!"</h4>
                       </div>
                    </div>
                </div>
      </div>
  );
}

export default GreenPointRedemption;

