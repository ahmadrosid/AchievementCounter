import { useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Plus } from 'lucide-react';

export function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => {
      if (prev >= 10) return prev;
      const newCount = prev + 1;
      if (newCount === 10) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
      return newCount;
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-7xl font-bold text-green-500">{count}</div>
      <button
        onClick={handleClick}
        disabled={count >= 10}
        className="flex items-center gap-2 px-8 py-4 bg-green-500 text-black font-semibold rounded-full
                 hover:bg-green-400 transform hover:scale-105 transition-all duration-200
                 active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-green-500"
      >
        <Plus size={24} />
        <span>Increment</span>
      </button>
      {count === 10 && (
        <div className="text-xl font-medium text-green-500 animate-bounce">
          🎉 Congratulations! 🎉
        </div>
      )}
    </div>
  );
}
