import React from 'react';
import { Question } from '../types';
import { QuestionItem } from './QuestionItem';

interface Props {
  questions: Question[];
}

export function QuestionPaper({ questions }: Props) {
  const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="border-b-2 border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-center">Question Paper</h2>
        <p className="text-gray-600 text-center mt-2">Total Marks: {totalMarks}</p>
      </div>
      
      <ol className="space-y-6">
        {questions.map((question, index) => (
          <QuestionItem 
            key={question.id} 
            question={question} 
            index={index}
          />
        ))}
      </ol>
    </div>
  );
}