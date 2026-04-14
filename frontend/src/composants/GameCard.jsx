import React from 'react';

const GameCard = ({ title, url
 }) => {
  return (
    <div style={{ 
      margin: '20px', 
      padding: '20px', 
      border: '1px solid #444', 
      borderRadius: '10px', 
      width: '250px',
      backgroundColor: '#2c2f33'
    }}>
      <h2>{title}</h2>
      <button 
        onClick={() => window.open(url, '_blank')}
        style={{ 
          padding: '10px 20px', 
          cursor: 'pointer', 
          backgroundColor: '#61dafb', 
          border: 'none', 
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
      >
        Jouer
      </button>
    </div>
  );
};

export default GameCard;