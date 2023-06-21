import React, { useState } from 'react';
import PricingPlanCard from './PricePlanCard';
import './pricingplan.css';
import Modal from './Modal';
import './modal.css';

export const Pricingplan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  return (
    <div className="pricingplan-background" id="prisium">
      <Modal open={isOpen}>
        <div className="modal">
          <button className="modal-close" onClick={() => setIsOpen(false)} type="button">
          X
          </button>
          <div className="modal-content">
            <h1 className="modal-title">Register here</h1>
            <form className="modal-form" action="#">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                className="modal-input" />
              <input
                id="lastname"
                name="lastname"
                type="text"
                required
                placeholder="Last name"
                className="modal-input" />
              <input
                id="email"
                name="email"
                type="mail"
                autoComplete="email"
                required
                placeholder="e-mail"
                className="modal-input" />
              <input
                id="pwd"
                name="pwd"
                type="password"
                required
                placeholder="Password"
                className="modal-input" />
              <div className="modal-button-container">
                <button className="modal-button login" type="button">Log in</button>
                <button className="modal-button signup" type="submit">Sign up</button>
              </div>
            </form>
            <div className="modal-pricing-card-container">
              {selectedPlan === 'trial' ? (
                <PricingPlanCard
                  type="trial"
                  setSelectedPlan={setSelectedPlan}
                  title="7-day trial"
                  price="0.00"
                  subtitle="Trial automatically upgrades to a monthly subscription after 7 days"
                  text1="Unlimited recipe options"
                  text2="Full access to all yoga classes"
                  text3="5% discount in our yoga store" />
              ) : (
                <PricingPlanCard
                  type="annual"
                  setSelectedPlan={setSelectedPlan}
                  annual="You save 25% of monthly cost"
                  title="Annual"
                  price="89.99"
                  subtitle="Charged every 12 months"
                  text1="Unlimited recipe options"
                  text2="Full access to all yoga classes"
                  text3="10% discount in our yoga store" />
              )}
            </div>
          </div>
        </div>
      </Modal>
      <h1 className="pricing-bigtext">Choose your preferred pricing plan:</h1>
      <div className="pricingplan-container">
        <PricingPlanCard
          type="trial"
          setSelectedPlan={setSelectedPlan}
          setIsOpen={setIsOpen}
          title="7-day trial"
          price="0.00"
          subtitle="Trial automatically upgrades to a monthly subscription after 7 days"
          text1="Unlimited recipe options"
          text2="Full access to all yoga classes"
          text3="5% discount in our yoga store" />
        <PricingPlanCard
          type="annual"
          setSelectedPlan={setSelectedPlan}
          setIsOpen={setIsOpen}
          annual="You save 25% of monthly cost"
          title="Annual"
          price="89.99"
          subtitle="Charged every 12 months"
          text1="Unlimited recipe options"
          text2="Full access to all yoga classes"
          text3="10% discount in our yoga store" />
        <PricingPlanCard
          type="trial"
          setSelectedPlan={setSelectedPlan}
          setIsOpen={setIsOpen}
          title="Monthly"
          price="9.99"
          subtitle="Trial automatically upgrades to a monthly subscription after 30 days"
          text1="Unlimited recipe options"
          text2="Full access to all yoga classes"
          text3="5% discount in our yoga store" />
      </div>
    </div>
  )
}

export default Pricingplan;