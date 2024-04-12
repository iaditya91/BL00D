import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../Images/background.jpg';
import { FaDna, FaEnvelope, FaLock } from 'react-icons/fa';
import { FaAmbulance } from 'react-icons/fa'; // Import the blood drop icon

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign-in request to the server
      const response = await axios.post('/api/signin', { email, password });
      const { token, userId } = response.data;

      // Reset form fields
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full opacity-95">
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center text-indigo-600">
          <span className="text-green-500">Blood App</span>
          <FaDna className="text-red-600 mx-2" /> {/* Blood drop icon */}
          
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex items-center border rounded bg-gray-100 px-3 py-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="bg-gray-100 w-full focus:outline-none"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center border rounded bg-gray-100 px-3 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="bg-gray-100 w-full focus:outline-none"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;