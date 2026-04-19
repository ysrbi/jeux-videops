import React from 'react';
import GameCard from './composants/GameCard';

function App() {
  return (
    <div className="main-wrapper">
      <div className="stars-overlay"></div>
      
      {/* Éléments de décor HUD pour remplir les coins */}
      <div className="hud-corner top-left">LATENCY: 24ms // OS: V-0.3</div>
      <div className="hud-corner top-right">COORD: 48.8566° N, 2.3522° E</div>
      <div className="hud-side left-bar"></div>
      <div className="hud-side right-bar"></div>

      <header className="main-header">
        <h1 className="cyber-title">GAME CENTER</h1>
        <div className="status-container">
          <div className="scanning-line"></div>
          <p className="status-text"><span className="blink">●</span> SYSTEM ONLINE // SECTOR: DEVOPS-01</p>
        </div>
      </header>

      <main className="cards-grid">
        <GameCard title="Two Ships" url="games/two_ships/index.html" />
        <GameCard title="Space Word" url="games/space_word/index.html" />
      </main>

      <footer className="footer-hud">
        <p>© 2026 CYBER-STATION DEPLOYMENT // ENCRYPTED CONNECTION // BY YOUSRA ROUIBI </p>
      </footer>

      <style jsx>{`
        .main-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          background: radial-gradient(circle at center, #1a1b26 0%, #050508 100%);
        }

        .main-header {
          margin-bottom: 60px;
          z-index: 10;
        }

        .cyber-title {
          font-size: 5rem;
          color: white;
          text-shadow: 0 0 20px var(--neon-magenta), 0 0 40px var(--neon-magenta);
          letter-spacing: 15px;
        }

        .cards-grid {
          display: flex;
          gap: 60px;
          z-index: 5;
        }

        /*contour*/
        .hud-corner {
          position: absolute;
          padding: 20px;
          font-family: monospace;
          color: var(--neon-cyan);
          font-size: 0.8rem;
          opacity: 0.5;
        }
        .top-left { top: 0; left: 0; border-left: 2px solid var(--neon-cyan); border-top: 2px solid var(--neon-cyan); margin: 20px; }
        .top-right { top: 0; right: 0; border-right: 2px solid var(--neon-cyan); border-top: 2px solid var(--neon-cyan); margin: 20px; }

        .hud-side {
          position: absolute;
          width: 2px;
          height: 300px;
          background: linear-gradient(transparent, var(--neon-cyan), transparent);
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.3;
        }
        .left-bar { left: 40px; }
        .right-bar { right: 40px; }

        .footer-hud {
          position: absolute;
          bottom: 30px;
          font-family: monospace;
          color: var(--neon-magenta);
          font-size: 0.7rem;
          letter-spacing: 3px;
          opacity: 0.6;
        }

        @keyframes blinker { 50% { opacity: 0; } }
        .blink { animation: blinker 1.5s step-end infinite; color: var(--neon-cyan); }
      `}</style>
    </div>
  );
}

export default App;