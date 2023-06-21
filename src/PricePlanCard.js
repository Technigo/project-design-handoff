import React from 'react'

const PricingPlanCard = (props) => {
  return (
    <div className={`${props.annual ? 'pricingplan-card-annual' : 'pricingplan-card'}`}>
      <div className="pricingplan-card-pricing">
        <h1 className="pricingplan-card-price">{props.title}</h1>
        <h1 className="pricingplan-card-price">${props.price}</h1>
        <p className="pricingplan-card-suscrition">{props.subtitle}</p>
      </div>
      {props.annual && (
        <h2 className="save-monthly-cost">{props.annual}</h2>
      )}
      <div className="pricingplan-card-benefits">
        <p className="pricingplan-card-benefit">{props.text1}</p>
        <p className="pricingplan-card-benefit">{props.text2}</p>
        <p className="pricingplan-card-benefit">{props.text3}</p>
      </div>
      {props.setIsOpen && (
        <button className="pricingplan-card-button" onClick={() => { props.setIsOpen(true); props.setSelectedPlan(props.type) }} type="button">
          <h2 className="pricingplan-card-button-text">Choose this plan</h2>
        </button>
      )}
    </div>
  )
}

export default PricingPlanCard