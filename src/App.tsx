import React, { useState } from 'react';
import { Header } from './components/Header';
import { GeneratorForm } from './components/GeneratorForm';
import { QuestionPaper } from './components/QuestionPaper';
import { generateQuestionPaper } from './utils/questionGenerator';
import { Question, GeneratorConfig } from './types';

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleGenerate = (config: GeneratorConfig) => {
    const generatedQuestions = generateQuestionPaper(config);
    setQuestions(generatedQuestions);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-6">Configure Paper</h2>
            <GeneratorForm onGenerate={handleGenerate} />
          </div>

          <div className="md:col-span-1">
            {questions.length > 0 && <QuestionPaper questions={questions} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;