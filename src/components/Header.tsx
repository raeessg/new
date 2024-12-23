import React from 'react';
import { Brain } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-4">
        <Brain className="h-12 w-12 text-indigo-600" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        AI Question Paper Generator
      </h1>
      <p className="text-lg text-gray-600">
        Generate custom question papers on any topic
      </p>
    </div>
  );
}