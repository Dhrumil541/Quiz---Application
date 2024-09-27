import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import QuizList from './components/QuizList';
import QuizPage from './components/QuizPage';
import ScoreSummary from './components/ScoreSummary';

const App = () => {
  return (
    <QuizProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<QuizList />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/result" element={<ScoreSummary />} />
          </Routes>
        </div>
      </Router>
    </QuizProvider>
  );
};

export default App;
