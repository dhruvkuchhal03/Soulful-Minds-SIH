import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function AdminLogin() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post('http://localhost:8000/admin', {
          email,
          password,
        })
        .then((res) => {
          if (res.data === 'exist') {
            history('/admindashboard', { state: { id: email } });
          } else if (res.data === 'notexist') {
            alert('Invalid Credentials!');
          }
        })
        .catch((e) => {
          alert('wrong details');
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full flex-1 text-center">
        <div className="bg-white items-center justify-center rounded-2xl shadow-2xl flex w-2/5 max-w-4xl">
          <div className="w-full">
            <div className="text-3xl font-bold text-blue-500 mt-10">
              Admin Login
            </div>

            <form action="POST">
              <div className="flex flex-col items-center mt-4">
                <div className="m-4 w-1/2">
                  <input
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="name@mail.com"
                  />
                </div>
                <div className="m-4 w-1/2">
                  <input
                    type="password"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Password"
                  />
                </div>
                <div className="m-4">
                  <button
                    onClick={submit}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>

            <div>or</div>

            <div className="mb-6 ">
              <Link
                className="hover:underline text-blue-500 hover:text-blue-900"
                to="/"
              >
                Click here{' '}
              </Link>
              to return to the Home page
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
