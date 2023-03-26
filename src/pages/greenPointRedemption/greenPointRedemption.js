import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function GreenPointRedemption({ points, desiredPoints }) {
  const canRedeem = points >= desiredPoints;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <h1>Green Point Redemption</h1>
          <p>You have earned {points} green points.</p>
          {canRedeem ? (
            <p>
              You can redeem {desiredPoints} green points for a reward!{" "}
              <button className="btn btn-success">Redeem</button>
            </p>
          ) : (
            <p>
              You need {desiredPoints - points} more green points to redeem a
              reward.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GreenPointRedemption;
