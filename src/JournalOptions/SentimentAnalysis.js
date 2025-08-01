import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function SentimentAnalysis ({ journalData }) {

const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const result = sentiment.analyze(journalData.text);    
    
  const handleButtonClick = () => {
    if (!isTransitioning && isJournalVisible) {
      setJournalVisible(false);
      setTransitioning(true);
    }
  };
    
    return (
        <>
            <h5>
                Positivity Score (Correct spelling for more accuracy):
            </h5>
            <p>
                <strong> '0' is neutral, negative numbers are negative and positive numbers are positive </strong>
            </p>
            <p className="journalData">
                Score: {result.score}
            </p>
            <button className='Journal_Button' onClick={handleButtonClick}>
                Release ~
              </button>
        </>
    );
}

export default SentimentAnalysis;
