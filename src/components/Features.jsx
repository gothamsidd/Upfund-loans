import React from "react";
import "./Features.css";

const features = [
  {
    icon: <img src="/quickmoneyy.png" alt="Quick Money"  />,
    title: "Quick Money",
    desc: "Instant top-up loan for vehicle owners"
  },
  {
    icon: <img src="/highloan.png" alt="highloan"  />,
    title: "High Loan Amount",
    desc: "Get up to 200% of your car's current value"
  },
  {
    icon: <img src="/repayment.png" alt="repayment"  />,
    title: "Flexible Repayment Tenure",
    desc: "Repay your loan easily with flexible EMIs"
  },
  {
    icon: <img src="/interestrate.png" alt="Interest rate"  />,
    title: "Competitive Interest Rates",
    desc: "UpFund Loan interest is much lower than personal or business loans"
  },
  {
    icon:<img src="/nohidden.png" alt="No hidden charges"  />,
    title: "No hidden charges",
    desc: "All our fees and charges are clearly mentioned in our terms and conditions."
    
  },
  {
    icon: <img src="/documetation .png" alt="Minimal documentation"  />,
    title: "Minimal documentation",
    desc: "Only a few essential documents are required to apply for a loan against car"
  },
  {
    icon: <img src="/landinquick.png" alt="Quick "  />,
    title: "Easy Approval",
    desc: "Apply for loan online or connect with our representative via call at +91-8818884843"
    
  },
  {
    icon:<img src="/offer.png" alt="offers"  />,
    title: "Pre-approved offers",
    desc: "Follow our 5 easy steps to getting your pre-approved UpFund Loan!"
  },
  {
    icon: <img src="/onlineapllication.png" alt="Quick Money"  />,
    title: "Online application process",
    desc: "Apply for a loan against car anytime from your home or even on-the-go"
  }
];

export default function CarLoanFeatures() {
  return (
    <>
        <section id="Features">
            <div className="carloan-features-wrapper">
                <h2 className="carloan-title">Why Choose UpFund Loans?</h2>
                <div className="carloan-features-grid">
                    {features.map((f, i) => (
                    <div className="carloan-feature-card" key={i}>
                        <div className="carloan-feature-icon">{f.icon}</div>
                        <div className="carloan-feature-title">{f.title}</div>
                        <div className="carloan-feature-desc">{f.desc}</div>
                    </div>
                ))}
            </div>
        </div>

        

        </section>
        <section id="eli">
          <div  className="eligibility-page">
            <div className="blur-box">
              <h1 className="eligibility-heading">Eligibility</h1>
              <div className="points-grid">
                  <div className="point">Age-25 to 65 yrs</div>
                  <div className="point">Salaried or self-employed</div>
                  <div className="point">Car not older than 10 yrs</div>
                  <div className="point">At least 7 EMIs paid</div>
              </div>
            </div>
        </div>

        </section>

    
        
    </>


  );
  
} 