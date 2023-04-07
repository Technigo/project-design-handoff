import React from 'react';
import './pricingplan.css';

export const Pricingplan = () => {
  return (
    <div className="pricingplan-background">
      <h1 className="pricing-bigtext">Choose your preferred pricing plan:</h1>
      <div className="pricingplan-container">
        <div className="pricingplan-card">
          <div className="pricingplan-card-pricing">
            <h1 className="pricingplan-card-price">7-day trial </h1>
            <h1 className="pricingplan-card-price">$0.00</h1>
            <p className="pricingplan-card-suscrition">Trial automatically upgrades to a monthly subscription after 7 days </p>
          </div>
          <div className="pricingplan-card-benefits">
            <p className="pricingplan-card-benefit">Unlimited recipe options </p>
            <p className="pricingplan-card-benefit">Full access to all yoga classes</p>
            <p className="pricingplan-card-benefit">5% discount in our yoga store</p>
          </div>
          <div className="pricingplan-card-button">
            <h2 className="pricingplan-card-button-text">Choose this plan</h2>
          </div>
        </div>
        <div className="pricingplan-card-annual">
          <div className="pricingplan-card-pricing-annual">
            <h1 className="pricingplan-card-price-annual">Annual </h1>
            <h1 className="pricingplan-card-price-annual">$89.99</h1>
            <p className="pricingplan-card-suscrition-annual">Charged every 12 months</p>
          </div>
          <h2 className="save-monthly-cost">You save 25% of monthly cost</h2>
          <div className="pricingplan-card-benefits-annual">
            <p className="pricingplan-card-benefit-annual">Unlimited recipe options </p>
            <p className="pricingplan-card-benefit-annual">Full access to all yoga classes</p>
            <p className="pricingplan-card-benefit-annual">10% discount in our yoga store</p>
          </div>
          <div className="pricingplan-card-button-annual">
            <h2 className="pricingplan-card-button-text-annual">Choose this plan</h2>
          </div>
        </div>
        <div className="pricingplan-card">
          <div className="pricingplan-card-pricing">
            <h1 className="pricingplan-card-price">7-day trial </h1>
            <h1 className="pricingplan-card-price">$0.00</h1>
            <p className="pricingplan-card-suscrition">Trial automatically upgrades to a monthly subscription after 7 days </p>
          </div>
          <div className="pricingplan-card-benefits">
            <p className="pricingplan-card-benefit">Unlimited recipe options </p>
            <p className="pricingplan-card-benefit">Full access to all yoga classes</p>
            <p className="pricingplan-card-benefit">5% discount in our yoga store</p>
          </div>
          <div className="pricingplan-card-button">
            <h2 className="pricingplan-card-button-text">Choose this plan</h2>
          </div>
        </div>
      </div>
    </div>
  )
}