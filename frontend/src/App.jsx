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
          url="/jeux-videops/games/two_ships/index.html" 
        />
        <GameCard 
          title="Space Word" 
          url="/jeux-videops/games/space_word/index.html"
        />
      </main>
    </div>
  );
}

export default App;