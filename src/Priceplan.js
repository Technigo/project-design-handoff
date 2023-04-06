import PricePlanButton from 'PricePlanButton';
import React from 'react';

const PricePlan = () => {
  return (
    <div className="price-plan-container">
      <h1>Choose your preferred pricing plan:</h1>
      <div className="price-plan-card">
        <p>7-day trial<br />$0.00</p>
        <p>Trial automatically upgrades to a monthly subscription after 7 days</p>
        <p>
          Unlimited recipe options<br />
          Full access to all yoga classes<br />
          5% discount in our yoga store
          <div className="price-plan-btn">
            <PricePlanButton />
          </div>
        </p>
      </div>
      <div className="price-plan-card">
        <p>Annual<br />$89.99</p>
        <p>Charged every 12 months</p>
        <p>
          You save 25% of monthly cost
        </p>
        <p>
          Unlimited recipe options<br />
          Full access to all yoga classes<br />
          10% discount in our yoga store
          <div className="price-plan-btn">
            <PricePlanButton />
          </div>
        </p>
      </div>
      <div className="price-plan-card">
        <p>Monthly<br />$9.99</p>
        <p>Full flexibility. Cancel anytime</p>
        <p>
          20 new recipes a month<br />
          Full access to all yoga classes<br />
          5% discount in our yoga store
          <div className="price-plan-btn">
            <PricePlanButton />
          </div>
        </p>
      </div>
    </div>
  )
}

export default PricePlan;
