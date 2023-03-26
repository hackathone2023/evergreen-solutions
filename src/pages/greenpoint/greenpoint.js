import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function GreenPoint() {
  const [mobileNumber, setMobileNumber] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate mobile number
    const regex = /^\d{10}$/;
    if (!regex.test(mobileNumber)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    // redirect to another page
    history.push(`/greenpoint-info`);
  };

  const handleChange = (e) => {
    setMobileNumber(e.target.value);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <h1>Enter Your Mobile Number</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="tel"
                className="form-control"
                id="mobileNumber"
                placeholder="Enter 10-digit mobile number"
                value={mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GreenPoint;
