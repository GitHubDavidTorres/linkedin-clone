import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>

      {newsArticle(
        'Understanding Rare Rain Events in the Driest Desert on Earth',
        'A new study reveals the atmospheric paths of storm events that can deliver a decade’s worth of rain in a few hours to the Atacama Desert.'
      )}

      {newsArticle(
        ' Moon Knight Trailer: Welcome To Oscar Isaacs Nightmare World',

        'Oscar Isaac leads a double life of Steven Grant and Marc Spector in this thrilling new series'
      )}
      {newsArticle(
        'Argentina leave Lionel Messi out of squad for Chile and Colombia fixtures',

        'Paris Saint-Germain relieved by Messi chance to rest'
      )}
    </div>
  );
}

export default Widgets;
