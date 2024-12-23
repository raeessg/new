import React from 'react';
import { Difficulty, GeneratorConfig } from '../types';

interface Props {
  onGenerate: (config: GeneratorConfig) => void;
}

const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];
const MIN_QUESTIONS = 1;
const MAX_QUESTIONS = 10;

export function GeneratorForm({ onGenerate }: Props) {
  const [topic, setTopic] = React.useState('');
  const [difficulty, setDifficulty] = React.useState<Difficulty>('medium');
  const [questionCount, setQuestionCount] = React.useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    onGenerate({ 
      topic: topic.trim(), 
      difficulty,
      questionCount: Math.min(Math.max(questionCount, MIN_QUESTIONS), MAX_QUESTIONS)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
          Topic
        </label>
        <input
          type="text"
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter any topic (e.g., React, Machine Learning, History)"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
          Difficulty
        </label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as Difficulty)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          {difficulties.map((d) => (
            <option key={d} value={d}>
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="questionCount" className="block text-sm font-medium text-gray-700">
          Number of Questions
        </label>
        <div className="mt-1 flex items-center gap-3">
          <input
            type="number"
            id="questionCount"
            value={questionCount}
            onChange={(e) => setQuestionCount(parseInt(e.target.value) || 5)}
            min={MIN_QUESTIONS}
            max={MAX_QUESTIONS}
            className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <span className="text-sm text-gray-500">
            (Min: {MIN_QUESTIONS}, Max: {MAX_QUESTIONS})
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Generate Question Paper
      </button>
    </form>
  );
}