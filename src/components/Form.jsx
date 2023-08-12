import React, {useState, useRef} from "react";
import {subsciptionPlans} from "../utils/subscriptionPlans";
const Form = () => {
  const [selectedPlan, setSelectedPlan] = useState(179);

  return (
    <section className="form-container">
      <div className="steppers-container">
        <div className="stepper-and-label">
          <button className="stepper">1</button>
          <label className="stepper-label">Sign Up</label>
        </div>
        <div className="stepper-and-label">
          <button className="stepper">2</button>
          <label className="stepper-label">Subscribe</label>
        </div>
      </div>

      <div className="subscription-header-container">
        <h3 className="subscription-header">Select your subscription plan</h3>
      </div>

      <div className="subscription-plans">
        <div className={`plan-box-disabled`}>
          <div className="plan-remarks-expired">Offer expired</div>
          <div className="checkbox-and-desc">
            <input
              className={`radio `}
              checked={true}
              type="radio"
              disabled={true}
            />
            <label className="plan-desc">12 Months Subscription</label>
          </div>
          <div className="total-and-per-month">
            <p className="plan-total">
              <span className="plan-total-span">Total</span>
              <span>₹99</span>
            </p>
            <p className="per-month-span">
              ₹{(99 / 12).toFixed(2)}
              <span className="per-month">/mo</span>
            </p>
          </div>
        </div>

        {subsciptionPlans.map((plan) => (
          <div
            className={
              selectedPlan == plan.total ? "plan-box-active" : "plan-box"
            }
            key={plan.months}>
            {plan.remarks != "none" && (
              <div className="plan-remarks">{plan.remarks}</div>
            )}
            <div className="checkbox-and-desc">
              <div className="input-radio-custom">
                <input
                  className="radio-select"
                  type="radio"
                  name="plan"
                  value={plan.total}
                  onChange={(e) => {
                    setSelectedPlan(e.target.value);
                  }}
                />
                <i
                  className={
                    selectedPlan == plan.total
                      ? "fa-solid fa-circle-check icon"
                      : "fa-solid"
                  }
                  style={{color: "#47ba68"}}></i>
              </div>

              <label className="plan-desc">{plan.planDesc}</label>
            </div>
            <div className="total-and-per-month">
              <p className="plan-total">
                <span className="plan-total-span">Total</span>
                <span>₹{plan.total}</span>
              </p>
              <p className="per-month-span">
                ₹{(plan.total / plan.months).toFixed(2)}
                <span className="per-month">/mo</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* summary */}

      <div className="summary-container">
        <div className="fees-container">
          <p style={{fontWeight: 400}} className="fees-header">
            Subscription Fee
          </p>
          <p style={{fontWeight: 500}} className="fees-value">
            ₹18,500
          </p>
        </div>

        <div className="discount-container">
          <div className="discount-desc-container">
            <p className="discount-desc">Limited time offer</p>
            <p className="discount-value">-₹18,401</p>
          </div>
          <div className="discount-image-and-validity">
            <img className="discount-image" src="/ClockDiscount.svg" />
            <p className="offer-validity">Offer valid till 25th March 2023 </p>
          </div>
        </div>
        <div className="total-price-container">
          <span className="total-price-header">
            <span style={{fontWeight: 600}}>Total</span>(Incl. of 18% GST)
          </span>

          <span className="total-price-value">
            ₹{99 + Number(selectedPlan)}
          </span>
        </div>
      </div>

      {/* button section  */}

      <div className="btn-container">
        <button className="btn-secondary">CANCEL</button>
        <button className="btn-primary">PROCEED TO PAY</button>
      </div>

      <img
        src="/RazorpayLogo.png"
        alt="Razorpay to start payment in Eduyoda"
        width="108px"
        height="35px"
      />
    </section>
  );
};

export default Form;
