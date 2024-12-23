import React from 'react';
import { Question } from '../types';
import { questionTypes } from '../utils/questionTypes';

interface Props {
  question: Question;
  index: number;
}

export function QuestionItem({ question, index }: Props) {
  return (
    <li className="border-b border-gray-100 pb-4">
      <div className="flex justify-between items-start">
        <p className="text-lg">
          <span className="font-medium mr-2">Q{index + 1}.</span>
          {question.text}
        </p>
        <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">
          [{question.marks} marks]
        </span>
      </div>
      <div className="mt-2 flex gap-2">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {question.difficulty}
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {questionTypes[question.type]}
        </span>
      </div>
    </li>
  );
}