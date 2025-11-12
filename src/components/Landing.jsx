import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaMoneyBillWave, FaClock, FaCoins, FaArrowDown, FaPercent, FaCheckCircle, FaFileAlt, FaShieldAlt, FaUserFriends } from 'react-icons/fa'
import './Landing.css'
  
const Landing = () => {
  return (
    <div className="landing-page">
      <section className="landing-container">
        
        
        <div className="landing-left">
          <h1>
            Get Easy <br />
            loans on your<br />
            <span className="highlight">USED CAR</span>
            </h1>
            
          <div className="info-cards-grid">
            <div className="info-card-item">
              <div className="info-card-icon">
                <img src="/landingcarcoin.png" alt="Money Icon" className="info-card-icon-img" />
              </div>
              <div className="info-card-text">
                <h3>200% of Car Value</h3>
                <p>Get loans up to double your car's value</p>
              </div>
            </div>
            <div className="info-card-item">
              <div className="info-card-icon">
                <img src="/quickmoney.png" alt="Quick Approval Icon" className="info-card-icon-img" />
              </div>
              <div className="info-card-text">
                  <h3>Quick Approval</h3>
                  <p>Get approved within 12 hours</p>
                </div>
            </div>
            <div className="info-card-item">
              <div className="info-card-icon">
                <img src="/fastmoney.png" alt="Fast Disbursal Icon" className="info-card-icon-img" />
              </div>
              <div className="info-card-text">
                  <h3>Fast Disbursal</h3>
                  <p>Money in your account within 24 hours</p>
                </div>
              </div>
          </div>
          
          <div className="achievement-stats">
            <div className="achievement-item">
              <span className="achievement-number">₹500Cr+</span>
              <span className="achievement-label">Loans Disbursed</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-number">8K+</span>
              <span className="achievement-label">Happy Customers</span>
            </div>
          </div>
        </div>

        <div className="landing-right">
          <img src="/landing12.jpg" alt="Car Loan Offer" className="landing-right-image" />
        </div>
      </section>
        </div>
  )
}

export default Landing