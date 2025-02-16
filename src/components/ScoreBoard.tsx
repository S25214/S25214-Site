import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { Sword } from 'lucide-react';

export const ScoreBoard: React.FC = () => {
  const { gameState } = useContext(GameContext);

  return (
    <div className="flex gap-4">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition"></div>
        <div className="relative px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800">
          <div className="flex items-center gap-2">
            <Sword className="w-4 h-4" style={{ color: gameState.snakeColors[0] }} />
            <span className="font-bold text-2xl">{gameState.scores[0]}</span>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition"></div>
        <div className="relative px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800">
          <div className="flex items-center gap-2">
            <Sword className="w-4 h-4" style={{ color: gameState.snakeColors[1] }} />
            <span className="font-bold text-2xl">{gameState.scores[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};