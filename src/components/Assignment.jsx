import React from 'react';
import './Assignment.css';
import pro from './pro.png';

function Assignment() {
  const candidates = [
    { name: 'Saurav Singh', email: 'saurav@gmail.com', scores: '78' },
    { name: 'Saurav Singh', email: 'saurav@gmail.com', scores: '72' },
    { name: 'Saurav Singh', email: 'saurav@gmail.com', scores: '64' },
    { name: 'Saurav Singh', email: 'saurav@gmail.com', scores: '32' },
    { name: 'Saurav Singh', email: 'saurav@gmail.com', scores: '51' },
    { name: 'Saurav Singh', email: 'saurav@gmail.com', scores: '44' }
  ];

  return (
    <div className="assignment-container">
      <div className="assignment-details">
        <div className="flex-div">
          <div className="left-div">
            <h3>Sales BDE</h3>
            <p>Assignment Link</p>
            <p>Assignment Hour</p>
            <p>Assignment Ends at</p>
          </div>
          <div className="right-div">
            <h3><span className="active">Active</span></h3>
            <a href="https://tiny.utl/asknakdna/">https://tiny.utl/asknakdna/</a>
            <p>3 hours</p>
            <p>11 March 2024</p>
          </div>
        </div>
        <div className='buttonlogic'>
            <button className="review-button">TO REVIEW</button>
            <button className="shortlisted-button">SHORTLISTED</button>
        </div>
        
      </div>

      
        <div className="candidate-list">
            {candidates.map((candidate, index) => (
            <div className="candidate-item" key={index}>
                <div className="mongo-flex">
                    <img src={pro} alt="" />
                    <div>
                        <h3>{candidate.name}</h3>
                        <p>{candidate.email}</p>
                    </div>
                </div>
                <h3>{candidate.scores}</h3>
            </div>
            ))}
        </div>
      </div>
  );
}

export default Assignment;
