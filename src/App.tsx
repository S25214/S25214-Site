import React, { useState } from 'react';
import { Trophy, Swords, Settings } from 'lucide-react';
import { GameBoard } from './components/GameBoard';
import { ScoreBoard } from './components/ScoreBoard';
import { OptionsPanel } from './components/OptionsPanel';
import { GameProvider } from './context/GameContext';

function App() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <GameProvider>
      <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(91, 37, 255, 0.03) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(255, 37, 91, 0.03) 0%, transparent 40%)
            `
          }}
        />
        
        <div className="relative z-10">
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
              <h1 className="relative flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800">
                <Trophy className="text-yellow-400 w-6 h-6" />
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Snake Battle
                </span>
                <Swords className="text-purple-400 w-6 h-6" />
              </h1>
            </div>

            <div className="flex items-start gap-4">
              <ScoreBoard />
              <button
                onClick={() => setShowOptions(!showOptions)}
                className="relative group p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800 hover:bg-gray-800/80 transition-colors"
              >
                <Settings className="w-6 h-6 text-purple-400" />
              </button>
            </div>
          </div>
          
          <GameBoard />
          {showOptions && <OptionsPanel onClose={() => setShowOptions(false)} />}
        </div>
      </div>
    </GameProvider>
  );
}

export default App;