import React, { useContext, useState } from 'react';
import { QuizContext } from '../context/QuizContext';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const { quizData, setScore, score, currentQuiz } = useContext(QuizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Get the specific quiz data based on currentQuiz
  const selectedQuizData = quizData[currentQuiz];

  // Check if quizData is available
  if (!selectedQuizData || selectedQuizData.length === 0) {
    return <div className="flex justify-center items-center h-screen text-lg">No quizzes available. Please add some quizzes.</div>;
  }

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setErrorMessage('');
  };

  const handleNext = () => {
    // Check if an answer is selected
    if (selectedAnswer === null) {
      setErrorMessage('Please select an answer before proceeding to the next question.');
      return;
    }

    // Update score if the answer is correct
    if (selectedAnswer === selectedQuizData[currentQuestionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    // Move to the next question or finish the quiz
    if (currentQuestionIndex + 1 < selectedQuizData.length) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setErrorMessage('');
    } else {
      setQuizComplete(true);
    }
  };

  if (quizComplete) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-3xl mb-4">Quiz Complete!</h2>
        <p className="text-lg">You scored {score} out of {selectedQuizData.length}!</p>
        <button 
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => navigate('/')}
        >
          Back to Quiz List
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
        <h2 className="text-2xl mb-2 text-center font-bold text-indigo-600">
          Question {currentQuestionIndex + 1} of {selectedQuizData.length}
        </h2>
        <h2 className="text-2xl mb-6 text-center font-bold text-indigo-600">
          {selectedQuizData[currentQuestionIndex]?.question} {/* Optional chaining for safety */}
        </h2>
        <div className="flex flex-col space-y-4">
          {selectedQuizData[currentQuestionIndex]?.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`p-3 border rounded-lg transition duration-200 
                ${selectedAnswer === option ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
            >
              {option}
            </button>
          ))}
        </div>
        
        {/* Conditional error message display */}
        {errorMessage && (
          <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
        )}
        
        <button 
          onClick={handleNext} 
          className="mt-6 p-3 w-full bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
