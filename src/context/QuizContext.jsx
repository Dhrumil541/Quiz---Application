import React, { createContext, useState } from 'react';

// Create a QuizContext
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // Define multiple quizzes
  const [quizData, setQuizData] = useState({
    reactQuiz: [
      {
        question: 'What is React?',
        options: ['A library', 'A framework', 'A language', 'None of the above'],
        correctAnswer: 'A library',
      },
      {
        question: 'What is a component?',
        options: ['A part of the app', 'A type of function', 'A type of variable', 'None of the above'],
        correctAnswer: 'A part of the app',
      },
      {
        question: 'Which of the following is a React lifecycle method?',
        options: ['componentDidMount', 'init', 'onLoad', 'none of the above'],
        correctAnswer: 'componentDidMount',
      },
      {
        question: 'What is the virtual DOM?',
        options: ['A representation of the actual DOM', 'A database', 'A programming language', 'None of the above'],
        correctAnswer: 'A representation of the actual DOM',
      },
      {
        question: 'What is JSX?',
        options: ['A syntax extension for JavaScript', 'A programming language', 'A library', 'None of the above'],
        correctAnswer: 'A syntax extension for JavaScript',
      },
      {
        question: 'How do you create a class component in React?',
        options: ['class MyComponent extends React.Component', 'function MyComponent()', 'const MyComponent = () =>', 'None of the above'],
        correctAnswer: 'class MyComponent extends React.Component',
      },
      {
        question: 'What is the purpose of the useEffect hook?',
        options: ['To manage side effects', 'To manage state', 'To create components', 'None of the above'],
        correctAnswer: 'To manage side effects',
      },
      {
        question: 'Which method is used to update the state in a class component?',
        options: ['setState', 'updateState', 'changeState', 'None of the above'],
        correctAnswer: 'setState',
      },
      {
        question: 'What is the default export in a module?',
        options: ['The main component of the module', 'All functions', 'An object', 'None of the above'],
        correctAnswer: 'The main component of the module',
      },
      {
        question: 'What is the use of keys in React?',
        options: ['To uniquely identify elements', 'To create components', 'To manage state', 'None of the above'],
        correctAnswer: 'To uniquely identify elements',
      }
     
    ],
    javascriptQuiz: [
      {
        question: "Which of the following is not a primitive data type in JavaScript?",
        options: ["String", "Boolean", "Object", "Number"],
        correctAnswer: "Object"
      },
      {
        question: "Which method is used to parse a JSON string in JavaScript?",
        options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "stringifyJSON()"],
        correctAnswer: "JSON.parse()"
      },
      {
        question: "What is the output of: console.log(typeof NaN);",
        options: ["Number", "String", "Undefined", "Object"],
        correctAnswer: "Number"
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        options: ["=", "==", "===", "=>"],
        correctAnswer: "="
      },
      {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        options: ["const", "let", "var", "constant"],
        correctAnswer: "const"
      },
      {
        question: "Which built-in method returns the length of a string?",
        options: ["length()", "size()", "index()", "length"],
        correctAnswer: "length"
      },
      {
        question: "Which of the following is the correct way to create an array in JavaScript?",
        options: ["var arr = []", "var arr = {}", "var arr = ()", "var arr = <>"],
        correctAnswer: "var arr = []"
      },
      {
        question: "Which method is used to remove the last element from an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        correctAnswer: "pop()"
      },
      {
        question: "What will the following code output: console.log('5' + 5);",
        options: ["10", "'55'", "NaN", "Error"],
        correctAnswer: "'55'"
      },
      {
        question: "Which of the following is a looping structure in JavaScript?",
        options: ["for", "while", "do-while", "All of the above"],
        correctAnswer: "All of the above"
      }
    
    ],
    cssMastery: [
        {
          question: "What does CSS stand for?",
          options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
          correctAnswer: "Cascading Style Sheets"
        },
        {
          question: "Which property is used to change the font of an element?",
          options: ["font-family", "font-style", "text-font", "font-weight"],
          correctAnswer: "font-family"
        },
        {
          question: "Which CSS property controls the text size?",
          options: ["text-size", "font-size", "text-style", "text-font"],
          correctAnswer: "font-size"
        },
        {
          question: "How do you add a background color in CSS?",
          options: ["background-color", "color-background", "bg-color", "background"],
          correctAnswer: "background-color"
        },
        {
          question: "Which HTML tag is used to define an inline style?",
          options: ["<style>", "<css>", "<script>", "<styles>"],
          correctAnswer: "<style>"
        },
        {
          question: "How do you select an element with id 'header' in CSS?",
          options: ["#header", ".header", "header", "*header"],
          correctAnswer: "#header"
        },
        {
          question: "What is the correct CSS syntax to change the text color of all <p> elements to blue?",
          options: ["p {color: blue;}", "p {text-color: blue;}", "p {color: 'blue';}", "p {text-color: 'blue';}"],
          correctAnswer: "p {color: blue;}"
        },
        {
          question: "Which CSS property is used to change the text style to italic?",
          options: ["font-style: italic;", "font: italic;", "text-style: italic;", "font-variant: italic;"],
          correctAnswer: "font-style: italic;"
        },
        {
          question: "How do you create a flexbox in CSS?",
          options: ["display: flex;", "flex: 1;", "display: box;", "flex-direction: row;"],
          correctAnswer: "display: flex;"
        },
        {
          question: "What is the default value of the position property?",
          options: ["static", "relative", "absolute", "fixed"],
          correctAnswer: "static"
        }
      ],
      htmlBasics: [
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlink and Text Markup Language", "None of the above"],
          correctAnswer: "Hyper Text Markup Language"
        },
        {
          question: "Which HTML tag is used to define an internal style sheet?",
          options: ["<style>", "<css>", "<script>", "<styles>"],
          correctAnswer: "<style>"
        },
        {
          question: "Which tag is used to create a hyperlink?",
          options: ["<link>", "<a>", "<href>", "<url>"],
          correctAnswer: "<a>"
        },
        {
          question: "Which HTML element defines the title of a document?",
          options: ["<title>", "<head>", "<meta>", "<header>"],
          correctAnswer: "<title>"
        },
        {
          question: "What is the correct HTML for adding a background color?",
          options: ["<body bg='color'>", "<body style='background-color: color'>", "<body background='color'>", "<background color='color'>"],
          correctAnswer: "<body style='background-color: color'>"
        },
        {
          question: "Which HTML attribute is used to specify an alternate text for an image?",
          options: ["alt", "src", "title", "image"],
          correctAnswer: "alt"
        },
        {
          question: "What does the <br> tag do?",
          options: ["Inserts a line break", "Inserts a paragraph", "Inserts a horizontal line", "Inserts a page break"],
          correctAnswer: "Inserts a line break"
        },
        {
          question: "Which HTML element is used to define an unordered list?",
          options: ["<ol>", "<ul>", "<li>", "<list>"],
          correctAnswer: "<ul>"
        },
        {
          question: "What is the correct way to comment in HTML?",
          options: ["<!-- comment -->", "// comment", "# comment", "/* comment */"],
          correctAnswer: "<!-- comment -->"
        },
        {
          question: "Which HTML element is used to define a table?",
          options: ["<table>", "<tr>", "<td>", "<th>"],
          correctAnswer: "<table>"
        }
      ],
      generalKnowledge: [
        {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          correctAnswer: "Paris"
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          correctAnswer: "Mars"
        },
        {
          question: "What is the largest mammal in the world?",
          options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
          correctAnswer: "Blue Whale"
        },
        {
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["China", "Japan", "Thailand", "South Korea"],
          correctAnswer: "Japan"
        },
        {
          question: "What is the smallest country in the world?",
          options: ["Vatican City", "Monaco", "Nauru", "Malta"],
          correctAnswer: "Vatican City"
        },
        {
          question: "Who wrote the Declaration of Independence?",
          options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
          correctAnswer: "Thomas Jefferson"
        },
        {
          question: "Which element has the chemical symbol 'O'?",
          options: ["Oxygen", "Gold", "Hydrogen", "Carbon"],
          correctAnswer: "Oxygen"
        },
        {
          question: "What is the currency of Japan?",
          options: ["Yen", "Won", "Dollar", "Peso"],
          correctAnswer: "Yen"
        },
        {
          question: "Which is the longest river in the world?",
          options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
          correctAnswer: "Nile"
        },
        {
          question: "What is the hardest natural substance on Earth?",
          options: ["Gold", "Diamond", "Iron", "Platinum"],
          correctAnswer: "Diamond"
        }
      ],
      mathPuzzles: [
        {
          question: "What is 5 + 5?",
          options: ["10", "15", "20", "25"],
          correctAnswer: "10"
        },
        {
          question: "What is the square root of 64?",
          options: ["6", "7", "8", "9"],
          correctAnswer: "8"
        },
        {
          question: "What is 15% of 200?",
          options: ["30", "25", "20", "35"],
          correctAnswer: "30"
        },
        {
          question: "What is 12 multiplied by 8?",
          options: ["80", "88", "90", "96"],
          correctAnswer: "96"
        },
        {
          question: "What is the next prime number after 7?",
          options: ["8", "9", "10", "11"],
          correctAnswer: "11"
        },
        {
          question: "How many sides does a pentagon have?",
          options: ["5", "6", "4", "8"],
          correctAnswer: "5"
        },
        {
          question: "What is 100 divided by 5?",
          options: ["15", "20", "25", "30"],
          correctAnswer: "20"
        },
        {
          question: "What is the sum of angles in a triangle?",
          options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
          correctAnswer: "180 degrees"
        },
        {
          question: "What is 8 factorial (8!)?",
          options: ["40320", "720", "128", "256"],
          correctAnswer: "40320"
        },
        {
          question: "What is the value of π (pi) approximately?",
          options: ["3.14", "2.14", "4.14", "5.14"],
          correctAnswer: "3.14"
        }
      ],
      historyQuiz: [
        {
          question: "Who was the first president of the United States?",
          options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
          correctAnswer: "George Washington"
        },
        {
          question: "What year did World War I begin?",
          options: ["1914", "1918", "1939", "1945"],
          correctAnswer: "1914"
        },
        {
          question: "Who wrote the 'I Have a Dream' speech?",
          options: ["Martin Luther King Jr.", "Malcolm X", "Nelson Mandela", "Rosa Parks"],
          correctAnswer: "Martin Luther King Jr."
        },
        {
          question: "Which empire was ruled by Genghis Khan?",
          options: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "British Empire"],
          correctAnswer: "Mongol Empire"
        },
        {
          question: "What was the main cause of the American Civil War?",
          options: ["Taxation", "Slavery", "Territorial expansion", "States' rights"],
          correctAnswer: "Slavery"
        },
        {
          question: "Who discovered America?",
          options: ["Christopher Columbus", "Ferdinand Magellan", "Leif Erikson", "Marco Polo"],
          correctAnswer: "Christopher Columbus"
        },
        {
          question: "What event sparked World War II?",
          options: ["Attack on Pearl Harbor", "Invasion of Poland", "Bombing of Hiroshima", "Fall of Berlin Wall"],
          correctAnswer: "Invasion of Poland"
        },
        {
          question: "Which ancient civilization built the pyramids?",
          options: ["Aztecs", "Maya", "Egyptians", "Romans"],
          correctAnswer: "Egyptians"
        },
        {
          question: "What was the first man-made satellite?",
          options: ["Apollo 11", "Sputnik", "Hubble", "Voyager"],
          correctAnswer: "Sputnik"
        },
        {
          question: "Who was known as the Iron Lady?",
          options: ["Margaret Thatcher", "Angela Merkel", "Golda Meir", "Indira Gandhi"],
          correctAnswer: "Margaret Thatcher"
        }
      ],
      scienceTrivia: [
        {
          question: "What is H2O commonly known as?",
          options: ["Water", "Hydrogen Peroxide", "Oxygen", "Hydrogen"],
          correctAnswer: "Water"
        },
        {
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
          correctAnswer: "Mitochondria"
        },
        {
          question: "What is the speed of light?",
          options: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "1,000,000 km/s"],
          correctAnswer: "300,000 km/s"
        },
        {
          question: "What gas do plants absorb from the atmosphere?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          correctAnswer: "Carbon Dioxide"
        },
        {
          question: "What is the chemical symbol for Gold?",
          options: ["Au", "Ag", "Pb", "Fe"],
          correctAnswer: "Au"
        },
        {
          question: "What is the basic unit of life?",
          options: ["Atom", "Molecule", "Cell", "Organism"],
          correctAnswer: "Cell"
        },
        {
          question: "What is the main gas found in the Earth's atmosphere?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          correctAnswer: "Nitrogen"
        },
        {
          question: "What is the process of water vapor turning into liquid called?",
          options: ["Evaporation", "Condensation", "Precipitation", "Transpiration"],
          correctAnswer: "Condensation"
        },
        {
          question: "What is the most abundant element in the universe?",
          options: ["Oxygen", "Hydrogen", "Carbon", "Helium"],
          correctAnswer: "Hydrogen"
        },
        {
          question: "Which planet is known for its rings?",
          options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
          correctAnswer: "Saturn"
        }
      ],
      geographyQuiz: [
        {
          question: "What is the largest continent?",
          options: ["Africa", "Asia", "North America", "Australia"],
          correctAnswer: "Asia"
        },
        {
          question: "Which country has the longest coastline?",
          options: ["Australia", "Canada", "United States", "Russia"],
          correctAnswer: "Canada"
        },
        {
          question: "What is the capital of Australia?",
          options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
          correctAnswer: "Canberra"
        },
        {
          question: "Which is the smallest continent by land area?",
          options: ["Australia", "Europe", "Antarctica", "South America"],
          correctAnswer: "Australia"
        },
        {
          question: "Which river flows through Egypt?",
          options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
          correctAnswer: "Nile"
        },
        {
          question: "What is the highest mountain in the world?",
          options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
          correctAnswer: "Mount Everest"
        },
        {
          question: "Which ocean is the largest?",
          options: ["Atlantic", "Indian", "Arctic", "Pacific"],
          correctAnswer: "Pacific"
        },
        {
          question: "Which desert is the largest in the world?",
          options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
          correctAnswer: "Sahara"
        },
        {
          question: "What is the capital of Canada?",
          options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
          correctAnswer: "Ottawa"
        },
        {
          question: "Which country is both in Europe and Asia?",
          options: ["Russia", "Turkey", "Kazakhstan", "Greece"],
          correctAnswer: "Turkey"
        }
      ],
      literatureQuiz: [
        {
          question: "Who wrote 'Pride and Prejudice'?",
          options: ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "Mark Twain"],
          correctAnswer: "Jane Austen"
        },
        {
          question: "What is the first book in the Harry Potter series?",
          options: ["Harry Potter and the Chamber of Secrets", "Harry Potter and the Philosopher's Stone", "Harry Potter and the Goblet of Fire", "Harry Potter and the Order of the Phoenix"],
          correctAnswer: "Harry Potter and the Philosopher's Stone"
        },
        {
          question: "Who is the author of '1984'?",
          options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Margaret Atwood"],
          correctAnswer: "George Orwell"
        },
        {
          question: "What is the main theme of 'To Kill a Mockingbird'?",
          options: ["Racial injustice", "Friendship", "Love", "War"],
          correctAnswer: "Racial injustice"
        },
        {
          question: "Who wrote 'The Great Gatsby'?",
          options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "Mark Twain"],
          correctAnswer: "F. Scott Fitzgerald"
        },
        {
          question: "In which novel does the character 'Ishmael' appear?",
          options: ["Moby Dick", "The Whale", "The Old Man and the Sea", "The Catcher in the Rye"],
          correctAnswer: "Moby Dick"
        },
        {
          question: "Who wrote 'The Odyssey'?",
          options: ["Homer", "Virgil", "Ovid", "Socrates"],
          correctAnswer: "Homer"
        },
        {
          question: "What is the name of Sherlock Holmes's companion?",
          options: ["John Watson", "Arthur Conan Doyle", "Dr. Who", "Agatha Christie"],
          correctAnswer: "John Watson"
        },
        {
          question: "Which book begins with 'Call me Ishmael'?",
          options: ["Moby Dick", "The Old Man and the Sea", "The Great Gatsby", "1984"],
          correctAnswer: "Moby Dick"
        },
        {
          question: "Who wrote 'The Catcher in the Rye'?",
          options: ["J.D. Salinger", "F. Scott Fitzgerald", "John Steinbeck", "Mark Twain"],
          correctAnswer: "J.D. Salinger"
        }
      ]
    
   
  });

  const [currentQuiz, setCurrentQuiz] = useState('reactQuiz'); // Default quiz
  const [score, setScore] = useState(0);

  // Function to select a quiz
  const selectQuiz = (quizName) => {
    setCurrentQuiz(quizName);
    setScore(0); // Reset score when new quiz is selected
  };

  return (
    <QuizContext.Provider value={{ quizData, currentQuiz, setScore, score, selectQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};
