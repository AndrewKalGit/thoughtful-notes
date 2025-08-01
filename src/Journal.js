import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import SentimentAnalysis from './JournalOptions/SentimentAnalysis';

function Journal( props ) {
  const [journalData, setJournalData] = useState({})

  const handleJournalSubmit = (e) => {
    e.preventDefault();
    const text = e.target.elements.text.value;
    setJournalData({ text });
  };

  const [newJournal, setNewJournal] = useState(true);
  const [isJournalVisible, setJournalVisible] = useState(false);
  const [isTransitioning, setTransitioning] = useState(false);
  const [isSentiment, setIsSentiment] = useState(true);
  const [isAdvice, setIsAdvice] = useState(true);
  const [isInspire, setIsInspire] = useState(true);

  const handleExitAdvice = () => {
    if (!isTransitioning && isJournalVisible && !isAdvice) {
    setIsAdvice(!isAdvice);  
  }
  }

  const handleExitInspire = () => {
    if (!isTransitioning && isJournalVisible && !isInspire) {
    setIsInspire(!isInspire);  
  }
  }

  const handleExitSentiment = () => {
    if (!isTransitioning && isJournalVisible && !isSentiment) {
    setIsSentiment(!isSentiment);  
  }
  }


  const handleSentimentAnalysis = () => {
    if (!isTransitioning && isJournalVisible && isSentiment) {
      setIsSentiment(!isSentiment);
    }
  }

  const handleButtonClick = () => {
    if (!isTransitioning && isJournalVisible) {
      setJournalVisible(false);
      setTransitioning(true);
    }
  };

  const handleTransitionExited = () => {
    if (!isJournalVisible) {
      setNewJournal(true);
      setTransitioning(false);
    }
  };

  const handleNewJournalClick = () => {
    setNewJournal(false);
    setJournalVisible(true);
  };

  return (
    <>
      <div className="Journal_Container">
        {!isJournalVisible && (
          <CSSTransition
            in={newJournal}
            timeout={1500}
            classNames="fade-new-journal"
            unmountOnExit
          >
            <button
              className="Journal_Button_Start"
              onClick={handleNewJournalClick}
            >
              Start New Journal
            </button>
          </CSSTransition>
        )}
        <CSSTransition
          in={isJournalVisible}
          timeout={1500}
          classNames="fade"
          unmountOnExit
          onExited={handleTransitionExited}
        >
          <form 
          onSubmit={handleJournalSubmit}
          className='Journal'>
            <h1 className='Journal_Header'>
              Welcome to Journal it and let it go ~
            </h1>
            <h4 className='Journal_Sub_Header'>
              We placed an audio for you to listen, feel free to listen ~
              <br/>
              <br/>
              Sometimes it's good to have a concrete sense of your feelings. 
              Click '[Click to see Sentiment Score]' to get the overall sentiment score of your journal entry. 
            </h4>
            <textarea
              htmlFor='text'
              type='text'
              id='text'
              name='name'
              spellCheck="true"
              className='Journal_Paragraph'
              placeholder='Type about anything that is, was, or will be on your mind.. then take action and control of your words with the options below'
            >
            </textarea>
               {!isSentiment && (
                 <SentimentAnalysis journalData={journalData}>
              </SentimentAnalysis>

            )}
            <div className='Journal_Button_Container'>
              <button className='Journal_Button'
              onClick={handleSentimentAnalysis}
              type="submit"
              >
               [Click to see Sentiment Score]
              </button>
              Andrew J. Kal 
            </div>
            {/* <div className='Journal_Button_Container'>
              <button className='Journal_Button'>Receive gentle advice ~</button>
              <button onClick={handleExitAdvice} className='Journal_Button_Coral'>
                [x]
              </button>
            </div>
            <div className='Journal_Button_Container'>
              <button className='Journal_Button'>Inspire ~</button>
              <button onClick={handleExitInspire} className='Journal_Button_Coral'>
                [x]
              </button>
            </div> */}
          </form>
        </CSSTransition>
      </div>
    </>
  );
}

export default Journal;
