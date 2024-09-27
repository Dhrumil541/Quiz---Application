import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const ScoreSummary = () => {
  const { score, quizData } = useContext(QuizContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Score: {score} / {quizData.length}</h1>
      <div className="flex flex-col space-y-2">
        {quizData.map((question, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <p className="font-bold">{question.question}</p>
            <p>Your Answer: {question.yourAnswer}</p>
            <p>Correct Answer: {question.correctAnswer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreSummary;
