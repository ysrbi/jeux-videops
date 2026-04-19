import React from 'react';

const GameCard = ({ title, url }) => {
  return (
    <div className="card-container">
      <div className="card-frame">
        <div className="scanline"></div>
        <div className="content">
          <div className="glitch-title" data-text={title}>{title}</div>
          <div className="deco-line"></div>
          <button className="cyber-btn" onClick={() => window.open(url, '_blank')}>
            <span className="btn-text">INITIALIZE MISSION</span>
            <span className="btn-glitch"></span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .card-container {
          padding: 2px;
          background: linear-gradient(45deg, var(--neon-cyan), transparent, var(--neon-magenta));
          border-radius: 15px;
          margin: 30px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .card-container:hover {
          box-shadow: 0 0 40px var(--neon-cyan), 0 0 10px var(--neon-magenta);
          transform: translateY(-15px) scale(1.02);
        }

        .card-frame {
          background: var(--glass-bg);
          padding: 60px 40px;
          border-radius: 13px;
          backdrop-filter: blur(15px);
          position: relative;
          overflow: hidden;
          width: 380px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glitch-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: white;
          text-transform: uppercase;
          margin-bottom: 40px;
          letter-spacing: 4px;
          text-align: center;
          text-shadow: 2px 2px var(--neon-magenta);
        }

        .deco-line {
          width: 60px;
          height: 4px;
          background: var(--neon-cyan);
          margin-bottom: 40px;
          box-shadow: 0 0 10px var(--neon-cyan);
        }

        .cyber-btn {
          background: transparent;
          border: 2px solid var(--neon-cyan);
          color: var(--neon-cyan);
          padding: 20px 40px;
          cursor: pointer;
          position: relative;
          width: 100%;
          font-family: var(--font-cyber);
          font-weight: bold;
          font-size: 1.1rem;
          letter-spacing: 3px;
          transition: all 0.3s;
          overflow: hidden;
        }

        .cyber-btn:hover {
          background: var(--neon-cyan);
          color: #000;
          box-shadow: 0 0 30px var(--neon-cyan);
        }

        .scanline {
          width: 100%;
          height: 3px;
          background: rgba(0, 243, 255, 0.15);
          position: absolute;
          top: 0;
          left: 0;
          animation: scan 4s linear infinite;
          z-index: 1;
        }

        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
    </div>
  );
};

export default GameCard;