import React from 'react';
import './FoxAvatar.css';

const FoxAvatar = ({ isSpeaking, isListening }) => {
  return (
    <div className={`fox-container ${isListening ? 'listening' : ''} ${isSpeaking ? 'talking' : ''}`}>
      <div className="fox">
        <div className="head">
          <div className="eyes">
            <div className="eye left"></div>
            <div className="eye right"></div>
          </div>
          <div className="sides">
            <div className="side left"></div>
            <div className="side right"></div>
          </div>
        </div>
        <div className="ears">
          <div className="ear left"></div>
          <div className="ear right"></div>
        </div>
      </div>
    </div>
  );
};

export default FoxAvatar; 