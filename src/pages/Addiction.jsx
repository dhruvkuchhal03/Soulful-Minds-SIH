import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate, Link } from 'react-router-dom';


const Addiction = () => {
    const navigate=useNavigate();

    const questions = [
        {
          question: 'Have you ever felt a strong craving or urge to use a substance (e.g., alcohol, drugs) to cope with stress or emotions?',
        },
        {
          question: 'Have you ever used a substance in larger amounts or for longer periods than you initially intended?',
        },
        {
          question: 'Have you ever experienced withdrawal symptoms (e.g., irritability, anxiety) when trying to stop or reduce substance use?',
        },
        {
            question: 'Do you find it difficult to control your consumption of caffeine (e.g., coffee, energy drinks)?',
          },
          {
            question: 'Have you ever felt the need to engage in excessive gaming or gambling to feel satisfied?',
          },
          {
            question: 'Do you find it hard to cut down on your consumption of sugary or high-calorie foods?',
          },
          {
            question: 'Have you experienced financial difficulties as a result of spending money on your addiction?',
          },
          {
            question: 'Have you ever neglected important responsibilities or relationships because of your addiction or substance use?',
          },
          {
            question: 'Have you tried to quit or cut down your addiction?',
          },
          {
            question: 'Do you find that you need to use increasing amounts of a substance to achieve the desired satisfaction?',
          },
          {
            question: 'Do you continue to use substances or engage in addictive behaviors despite knowing they have negative consequences on your health or well-being?',
          },
          {
            question: 'Do you spend a significant amount of time obtaining, using, or recovering from your addiction?',
          },
          {
            question: 'Do you feel guilty or ashamed about your addiction?',
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

 

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(quizInfo);
    try {
      await axios.post('http://localhost:8000/answers', {
        quizInfo: Object.fromEntries(quizInfo),
      })
      .then(res=>{
        navigate("/addictionSupp")
      })
      
    } catch (e) {
      console.log(e);
    }
  }

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
          <Link to = "/addictionSupp" className="w-full bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
              Submit
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Addiction;
