import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { X } from 'lucide-react';

interface OptionsPanelProps {
  onClose: () => void;
}

export const OptionsPanel: React.FC<OptionsPanelProps> = ({ onClose }) => {
  const { gameState, updateSettings } = useContext(GameContext);

  const speeds = [
    { label: 'Slow', value: 150 },
    { label: 'Normal', value: 100 },
    { label: 'Fast', value: 50 }
  ];

  const colors = [
    { label: 'Green', value: '#4ade80' },
    { label: 'Blue', value: '#60a5fa' },
    { label: 'Purple', value: '#a78bfa' },
    { label: 'Pink', value: '#f472b6' },
    { label: 'Orange', value: '#fb923c' },
    { label: 'Yellow', value: '#facc15' }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative max-w-md w-full mx-4">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25"></div>
        <div className="relative bg-gray-900 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Game Options</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Game Speed</h3>
              <div className="grid grid-cols-3 gap-2">
                {speeds.map((speed) => (
                  <button
                    key={speed.value}
                    onClick={() => updateSettings({ speed: speed.value })}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      gameState.speed === speed.value
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    {speed.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Snake Alpha Color</h3>
              <div className="grid grid-cols-6 gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => updateSettings({ snakeColors: [color.value, gameState.snakeColors[1]] })}
                    className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                      gameState.snakeColors[0] === color.value
                        ? 'border-white shadow-lg'
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Snake Beta Color</h3>
              <div className="grid grid-cols-6 gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => updateSettings({ snakeColors: [gameState.snakeColors[0], color.value] })}
                    className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                      gameState.snakeColors[1] === color.value
                        ? 'border-white shadow-lg'
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};