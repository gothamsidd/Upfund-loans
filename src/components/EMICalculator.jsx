import React, { useState, useEffect } from 'react';
import './EMICalculator.css';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanDuration, setLoanDuration] = useState(5);
  const [emiDetails, setEmiDetails] = useState(null);
  const [repaymentSchedule, setRepaymentSchedule] = useState([]);
  const [expandedYears, setExpandedYears] = useState({});

  // Calculate EMI
  const calculateEMI = (principal, rate, years) => {
    const monthlyRate = rate / 12 / 100;
    const numberOfMonths = years * 12;
    
    if (monthlyRate === 0) {
      return principal / numberOfMonths;
    }
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) / 
                (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
    
    return emi;
  };

  // Calculate repayment schedule
  const calculateSchedule = (principal, rate, years, emi) => {
    const schedule = [];
    let remainingPrincipal = principal;
    const monthlyRate = rate / 12 / 100;
    const numberOfMonths = years * 12;
    
    let yearData = {
      year: new Date().getFullYear(),
      principalAmt: 0,
      interest: 0,
      totalPayment: 0,
      balance: principal,
      monthlyBreakdown: []
    };
    
    for (let month = 1; month <= numberOfMonths; month++) {
      const interestPayment = remainingPrincipal * monthlyRate;
      const principalPayment = emi - interestPayment;
      remainingPrincipal -= principalPayment;
      
      const monthData = {
        month,
        principalPayment: Math.round(principalPayment),
        interestPayment: Math.round(interestPayment),
        totalPayment: Math.round(emi),
        balance: Math.max(0, Math.round(remainingPrincipal))
      };
      
      yearData.monthlyBreakdown.push(monthData);
      yearData.principalAmt += principalPayment;
      yearData.interest += interestPayment;
      yearData.totalPayment += emi;
      yearData.balance = Math.max(0, Math.round(remainingPrincipal));
      
      // New year or last month
      if (month % 12 === 0 || month === numberOfMonths) {
        schedule.push({
          ...yearData,
          principalAmt: Math.round(yearData.principalAmt),
          interest: Math.round(yearData.interest),
          totalPayment: Math.round(yearData.totalPayment)
        });
        
        yearData = {
          year: new Date().getFullYear() + Math.floor(month / 12),
          principalAmt: 0,
          interest: 0,
          totalPayment: 0,
          balance: Math.max(0, Math.round(remainingPrincipal)),
          monthlyBreakdown: []
        };
      }
    }
    
    return schedule;
  };

  useEffect(() => {
    const emi = calculateEMI(loanAmount, interestRate, loanDuration);
    const totalPayment = emi * loanDuration * 12;
    const totalInterest = totalPayment - loanAmount;
    
    setEmiDetails({
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
      principal: loanAmount
    });
    
    const schedule = calculateSchedule(loanAmount, interestRate, loanDuration, emi);
    setRepaymentSchedule(schedule);
  }, [loanAmount, interestRate, loanDuration]);

  const toggleYearExpansion = (index) => {
    setExpandedYears(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Calculate donut chart percentages and arc lengths
  const circumference = 2 * Math.PI * 80;
  const principalPercentage = emiDetails 
    ? (emiDetails.principal / emiDetails.totalPayment) * 100 
    : 0;
  const interestPercentage = emiDetails 
    ? (emiDetails.totalInterest / emiDetails.totalPayment) * 100 
    : 0;
  
  const principalArcLength = (principalPercentage / 100) * circumference;
  const interestArcLength = (interestPercentage / 100) * circumference;

  return (
    <section id="emi-calculator" className="emi-calculator-section">
      <div className="emi-calculator-container">
        <h1 className="emi-calculator-title">EMI Calculator</h1>
        
        <div className="emi-calculator-content">
          {/* Left Side - Input Controls */}
          <div className="emi-input-section">
            <div className="input-group">
              <label htmlFor="loanAmount">Enter Loan Amount</label>
              <div className="input-with-slider">
                <input
                  type="text"
                  id="loanAmount"
                  value={`₹ ${loanAmount.toLocaleString('en-IN')}`}
                  readOnly
                  className="amount-input"
                />
                <input
                  type="range"
                  min="1000"
                  max="10000000"
                  step="1000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="slider"
                />
                <div className="slider-labels">
                  <span>₹ 1</span>
                  <span>₹ 10,000,000</span>
                </div>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="interestRate">Interest Rate</label>
              <div className="input-with-slider">
                <input
                  type="text"
                  id="interestRate"
                  value={`${interestRate} %`}
                  readOnly
                  className="amount-input"
                />
                <input
                  type="range"
                  min="0"
                  max="40"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="slider"
                />
                <div className="slider-labels">
                  <span>0%</span>
                  <span>40%</span>
                </div>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="loanDuration">Loan Duration</label>
              <div className="input-with-slider">
                <input
                  type="text"
                  id="loanDuration"
                  value={`${loanDuration} Yrs`}
                  readOnly
                  className="amount-input"
                />
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={loanDuration}
                  onChange={(e) => setLoanDuration(Number(e.target.value))}
                  className="slider"
                />
                <div className="slider-labels">
                  <span>1 yr</span>
                  <span>30 yrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - EMI Summary */}
          <div className="emi-summary-card">
            <h2 className="summary-title">EMI Calculator</h2>
            
            {/* Donut Chart */}
            <div className="donut-chart-container">
              <svg className="donut-chart" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="40"
                />
                {emiDetails && (
                  <>
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="40"
                      strokeDasharray={`${principalArcLength} ${circumference}`}
                      strokeDashoffset={circumference * 0.25}
                      transform="rotate(-90 100 100)"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="40"
                      strokeDasharray={`${interestArcLength} ${circumference}`}
                      strokeDashoffset={circumference * 0.25 - principalArcLength}
                      transform="rotate(-90 100 100)"
                    />
                  </>
                )}
                <text x="100" y="95" textAnchor="middle" className="donut-center-text">
                  {emiDetails ? `₹${(emiDetails.emi / 1000).toFixed(1)}K` : '₹0'}
                </text>
                <text x="100" y="110" textAnchor="middle" className="donut-center-label">
                  Monthly EMI
                </text>
              </svg>
              
              <div className="donut-legend">
                <div className="legend-item">
                  <div className="legend-color principal"></div>
                  <span>Principal Amount</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color interest"></div>
                  <span>Interest Amount</span>
                </div>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-label">Monthly EMI</span>
                <span className="stat-value">
                  ₹ {emiDetails ? emiDetails.emi.toLocaleString('en-IN') : '0'}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Total Interest</span>
                <span className="stat-value">
                  ₹ {emiDetails ? emiDetails.totalInterest.toLocaleString('en-IN') : '0'}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Total Payment</span>
                <span className="stat-value">
                  ₹ {emiDetails ? emiDetails.totalPayment.toLocaleString('en-IN') : '0'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Repayment Schedule Table */}
        <div className="repayment-schedule">
          <h2 className="schedule-title">Repayment Schedule</h2>
          <div className="schedule-table-container">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Years</th>
                  <th>Principal Amt.</th>
                  <th>Interest</th>
                  <th>Total Payment</th>
                  <th>Balance</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {repaymentSchedule.map((year, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td>{year.year}</td>
                      <td>₹ {year.principalAmt.toLocaleString('en-IN')}</td>
                      <td>₹ {year.interest.toLocaleString('en-IN')}</td>
                      <td>₹ {year.totalPayment.toLocaleString('en-IN')}</td>
                      <td>₹ {year.balance.toLocaleString('en-IN')}</td>
                      <td>
                        <button
                          className="expand-btn"
                          onClick={() => toggleYearExpansion(index)}
                        >
                          {expandedYears[index] ? '−' : '+'}
                        </button>
                      </td>
                    </tr>
                    {expandedYears[index] && (
                      <tr className="monthly-details">
                        <td colSpan="6">
                          <div className="monthly-breakdown">
                            <h4>Monthly Breakdown for {year.year}</h4>
                            <table className="monthly-table">
                              <thead>
                                <tr>
                                  <th>Month</th>
                                  <th>Principal</th>
                                  <th>Interest</th>
                                  <th>Total Payment</th>
                                  <th>Balance</th>
                                </tr>
                              </thead>
                              <tbody>
                                {year.monthlyBreakdown.map((month, monthIndex) => (
                                  <tr key={monthIndex}>
                                    <td>{month.month}</td>
                                    <td>₹ {month.principalPayment.toLocaleString('en-IN')}</td>
                                    <td>₹ {month.interestPayment.toLocaleString('en-IN')}</td>
                                    <td>₹ {month.totalPayment.toLocaleString('en-IN')}</td>
                                    <td>₹ {month.balance.toLocaleString('en-IN')}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;

