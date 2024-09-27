import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext'; // Import QuizContext

const QuizList = () => {
  // Quizzes array updated with different categories and levels
  const quizzes = [
    { id: 1, title: 'React Quiz', description: 'Test your React knowledge', category: 'Web Development', level: 'Intermediate', key: 'reactQuiz' },
    { id: 2, title: 'JavaScript Quiz', description: 'Test your JS skills', category: 'Web Development', level: 'Beginner', key: 'javascriptQuiz' },
    { id: 3, title: 'CSS Mastery', description: 'Advanced CSS Concepts and Techniques', category: 'Web Design', level: 'Advanced', key: 'cssMastery' },
    { id: 4, title: 'HTML Basics', description: 'Fundamentals of HTML for Beginners', category: 'Web Development', level: 'Beginner',key: "htmlBasics" },
    { id: 5, title: 'General Knowledge', description: 'Boost your GK with this quiz!', category: 'General', level: 'Intermediate',key: "generalKnowledge" },
    { id: 6, title: 'Math Puzzles', description: 'Challenge your math problem-solving skills', category: 'Mathematics', level: 'Advanced',key: "mathPuzzles" },
    { id: 7, title: 'History Quiz', description: 'Explore the past with this history quiz', category: 'History', level: 'Intermediate',key: "historyQuiz" },
    { id: 8, title: 'Science Trivia', description: 'Test your science knowledge', category: 'Science', level: 'Beginner',key: "scienceTrivia" },
    { id: 9, title: 'Geography Quiz', description: 'Test your knowledge of the world', category: 'Geography', level: 'Intermediate', key: "geographyQuiz" },
    { id: 10, title: 'Literature Quiz', description: 'Explore classic and modern literature', category: 'Arts', level: 'Advanced',key: "literatureQuiz" }
  ];

  const navigate = useNavigate();
  const { selectQuiz } = useContext(QuizContext); // Use selectQuiz from context

  const handleQuizSelect = (quizKey) => {
    selectQuiz(quizKey); // Select the quiz
    navigate('/quiz'); // Navigate to the QuizPage
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-green-700">Available Quizzes</h1>
      {quizzes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quizzes.map(quiz => (
            <div
              key={quiz.id}
              className="p-6 border border-blue-200 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105"
              onClick={() => handleQuizSelect(quiz.key)} // Call handleQuizSelect with quiz key
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">{quiz.title}</h2>
              <p className="text-gray-600">{quiz.description}</p>
              <p className="text-sm text-gray-500 mt-2">Category: {quiz.category}</p>
              <p className="text-sm text-gray-500">Difficulty: {quiz.level}</p>
              <div className="mt-4 text-right">
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => handleQuizSelect(quiz.key)} // Start quiz when button is clicked
                >
                  Start Quiz
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No quizzes available at the moment.</p>
      )}
    </div>
  );
};

export default QuizList;
