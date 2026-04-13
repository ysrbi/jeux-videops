import React from 'react';
import GameCard from './composants/GameCard';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#1a1a1a', 
      minHeight: '100vh', 
      color: 'white', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <header style={{ padding: '40px', textAlign: 'center' }}>
        <h1>BOUTON JEUX</h1>
      </header>

      <main style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        padding: '20px' 
      }}>

        <GameCard 
          title="Two Ships" 
          url="http://localhost:9090" 
        />
        <GameCard 
          title="Space Word" 
          url="http://localhost:9091" 
        />
      </main>
    </div>
  );
}

export default App;