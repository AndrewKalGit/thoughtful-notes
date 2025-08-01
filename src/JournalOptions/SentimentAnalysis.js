import React from 'react';

function SentimentAnalysis ({ journalData }) {

const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const result = sentiment.analyze(journalData.text);    

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
        </>
    );
}

export default SentimentAnalysis;
