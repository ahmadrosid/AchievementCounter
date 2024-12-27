import React from 'react';
import { Counter } from './components/Counter';
import { Trophy } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="py-6 flex items-center gap-2">
          <Trophy className="w-8 h-8 text-green-500" />
          <span className="text-xl font-bold">Achievement Counter</span>
        </header>

        {/* Main Content */}
        <main className="flex items-center justify-center min-h-[80vh]">
          <div className="bg-zinc-900 p-12 rounded-xl shadow-lg max-w-md w-full">
            <Counter />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;