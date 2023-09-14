import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Relationship = () => {
    const questions = [
        {
          question: 'How often do you and your friends engage in activities that you enjoy together?',
        },
        {
            question: 'How much do you feel comfortable sharing your opinions and disagreements with your friends?',
          },
          {
            question: 'How much supported do you feel by your friends during challenging times?',
          },
          {
            question: 'How satisfied are you with the level of trust in your current romantic relationship?',
          },
          {
            question: 'To what extent do you and your partner communicate openly and honestly?',
          },
          {
            question: 'How well do you feel your partner listens to your concerns and feelings?',
          },
          {
            question: 'How comfortable are you discussing personal matters with your family members?',
          },
          {
            question: 'How often do you feel supported by your family when facing challenges?',
          },
           {
            question: 'Do you feel understood by your family members when you express your thoughts and feelings?',
          },
          {
            question: 'How often do you feel you can be yourself in your relationships?',
          },
          {
            question: 'how satisfied are you with the overall quality of your relationships?',
          },
          {
            question: 'How often do you engage in acts of kindness and support with the people in your life?',
          },
          {
            question: 'How well do you manage conflicts and disagreements in your relationships?',
          },
      ];
    
    

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [error, setError] = useState('');
  const [quizInfo, setQuizInfo] = useState(new Map());

  const handleAnswerSelect = (number,question) => {
    setSelectedAnswer(number);
    setQuizInfo((prevQuizInfo) => new Map(prevQuizInfo.set(question, number)));
  };

 

//   async function handleSubmit(e) {
//     e.preventDefault();
//     console.log(quizInfo);
//     try {
//     //   await axios.post('http://localhost:8000/answers', {
//     //     quizInfo: Object.fromEntries(quizInfo),
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      setError('');
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer('');
    } else {
      setError('Please select an option');
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];

    return (
      <div className="p-4">
        {error && (
          <div className="bg-red-200 text-red-800 py-2 px-4 rounded-md mb-4">
            {error}
          </div>
        )}
        <h2 className="text-xl font-semibold mb-2 p-4">{question.question}</h2>
        <ul className="flex flex-wrap justify-center max-w-xl mx-auto">
          <div className="p-4">
            {Array.from(Array(5).keys()).map((number) => (
              <label key={number} className="mr-6 mb-4">
                <input
                  type="radio"
                  name="answer"
                  value={number + 1}
                  checked={selectedAnswer === number + 1}
                  onChange={() => handleAnswerSelect(number + 1, question.question)}
                  className="mr-2 appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-black checked:border-transparent"
                />
                <span>{number + 1}</span>
              </label>
            ))}
          </div>
        </ul>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleNextQuestion}
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const showSiteBlocker = false;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto bg-white p-4 rounded shadow-lg">
        
        {currentQuestion < questions.length ? (
          renderQuestion()
        ) : (
          <>
            <div className='text-xl font-bold mb-6'>
            Your Quiz has been completed. Click on Submit button to see your score.
             </div>
            <Link to = "/support" className="w-full bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Relationship;
