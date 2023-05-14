import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function Journal(props) {
  const [newJournal, setNewJournal] = useState(true);
  const [isJournalVisible, setJournalVisible] = useState(false);
  const [isTransitioning, setTransitioning] = useState(false);

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
          <div className='Journal'>
            <h1 className='Journal_Header'>
              Welcome to Journal it and let it go ~
            </h1>
            <h4 className='Journal_Sub_Header'>
              We placed an audio for you to listen, feel free to listen ~
            </h4>
            <textarea
              spellCheck="false"
              className='Journal_Paragraph'
              placeholder='Type about anything that is, was, or will be on your mind.. forget about spelling and/or being correct just let it out and let it go~'
            ></textarea>
            <div className='Journal_Button_Container'>
              <button className='Journal_Button' onClick={handleButtonClick}>
                Release ~
              </button>
            </div>
            <div className='Journal_Button_Container'>
              <button className='Journal_Button'>
                Analyze Sentiment of Journal ~
              </button>
            </div>
            <div className='Journal_Button_Container'>
              <button className='Journal_Button'>Receive gentle advice</button>
            </div>
            <div className='Journal_Button_Container'>
              <button className='Journal_Button'>Inspire ~</button>
            </div>
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default Journal;
