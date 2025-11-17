import React, { useState } from 'react';
import './Documentation.css';

const documentsData = {
  "Valid Identity Proof": [
    "PAN Card",
    "Aadhar Card", 
    "Passport",
    "Voter ID"
  ],
  "Address Proof": [
    "Aadhar Card",
    "Driving License",
    "Passport"
  ],
  "Business Proof": [
    "GST Certificate",
    "Trade certificate",
    "Gumasta"
  ],
  "Income Proof": [
    "Three months' salary slip for salaried customers",
    "Latest six months bank statements"
  ],
  "Vehicle Documents": [
    "RC Book and Insurance copy of the vehicle"
  ]
};

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("Valid Identity Proof");

  const toggleSection = (section) => {
    setActiveSection(prev => (prev === section ? null : section));
  };

  return (
    <div className="documents-container">
      <h1 className='heading-doc'>Documents Required</h1>
      <div className="document-list">
        {Object.keys(documentsData).map((section) => (
          <div key={section} className="document-section">
            <div
              className={`section-header ${activeSection === section ? 'active' : ''}`}
              onClick={() => toggleSection(section)}
            >
              {section}
            </div>
            <div className={`section-content ${activeSection === section ? 'show' : ''}`}>
              <ul>
                {documentsData[section].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentation;