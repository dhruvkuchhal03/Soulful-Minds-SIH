import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Academics = () => {
    const questions = [
        {
          question: 'How often do you worry about your academic performance?',
        },
        {
            question: 'How much pressure do you feel to excel academically?',
        },
        {
            question: 'Do you often experience stress or anxiety related to academic workload?',
        },
        {
            question: 'How much your sleep cycle is affected due to academics?',
        },
        {
            question: 'How much does the fear of failure affect your mental well-being? ',
        },
        {
            question: 'how much satisfied you are with your current academic performance?',
        },
        {
            question: 'How often do you compare your academic achievements to others?',
        },
        {
            question: 'How frequently do you feel isolated or lonely due to academic pressures?',
        },
        {
            question: 'How often does academic stress affect your appetite and eating habits?',
        },
        {
            question: 'How much time you give to your hobbies?',
        },
        {
            question: 'Do you spend a significant amount of time preparing for your academics?',
        },
        {
            question: 'How good is your work life balance?',
        },
        {
            question: 'How often do you experience feelings of burnout related to academics?',
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
            <Link to = "/academicsSupp" className="w-full bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </Link>
            </>
        )}
      </div>
    </div>
  );
};

export default Academics;
