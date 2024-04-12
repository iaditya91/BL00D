import React, { useState } from 'react';
import { FaSearch, FaQuestionCircle, FaHeadset, FaComments, FaTimes } from 'react-icons/fa';
import Navbar from './Navbar';

const SupportPage = () => {
  const [showTopics, setShowTopics] = useState(false);
  const [showMessageForm, setShowMessageForm] = useState(false);

  const topics = [
    'Topic 1',
    'Topic 2',
    'Topic 3',
    'Topic 4',
    'Topic 5',
    'Topic 6',
    'Topic 7',
    'Topic 8',
  ];

  const faqData = [
    {
      question: 'How do I place an order?',
      answer:
        'To place an order, simply visit our website, browse through our products, add the desired items to your cart, and proceed to checkout. You can securely complete your payment through our secure payment gateway.',
    },
    {
      question: 'What are your shipping options?',
      answer:
        'We offer several shipping options, including standard ground shipping, expedited shipping, and international shipping. The available options and costs will be displayed during the checkout process.',
    },
    {
      question: 'Do you offer any warranties or guarantees?',
      answer:
        'Yes, we offer a one-year warranty on all our products. If you encounter any issues or defects within the warranty period, please contact our customer support team for assistance.',
    },
  ];

  const handleRequestCall = () => {
    const supportNumber = 'Call Support Number for US: xxx, India: xxx';
    window.open(`tel:${supportNumber}`, '_blank');
  };

  const handleShowMessageForm = () => {
    setShowMessageForm(true);
  };

  const handleCloseMessageForm = () => {
    setShowMessageForm(false);
  };

  const handleMessageFormSubmit = (name, email, message) => {
    // Handle form submission logic here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setShowMessageForm(false);
  };

  return (
    <>
    <Navbar/>

    <div className="bg-pink-100 min-h-screen flex flex-col items-center justify-center">
      <header className="bg-pink-500 text-white py-4 w-full text-center">
        <h1 className="text-2l font-bold">Hello, How can we help you?</h1>
      </header>

      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl w-full">
          <div
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer"
            onClick={() => setShowTopics(!showTopics)}
          >
            <FaSearch className="text-pink-500 text-4l mb-2" />
            <h3 className="text-lg font-semibold">Browse Topics</h3>
          </div>
          <div
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer"
            onClick={() => setShowTopics(!showTopics)}
          >
            <FaQuestionCircle className="text-pink-500 text-4l mb-2" />
            <h3 className="text-lg font-semibold">Frequent Topics</h3>
          </div>
          <div
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer"
            onClick={handleRequestCall}
          >
            <FaHeadset className="text-pink-500 text-4l mb-2" />
            <h3 className="text-lg font-semibold">Request a Call</h3>
          </div>
          <div
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer"
            onClick={handleShowMessageForm}
          >
            <FaComments className="text-pink-500 text-4l mb-2" />
            <h3 className="text-lg font-semibold">Leave a Msg</h3>
          </div>
        </div>
      </div>

      {showTopics && (
        <div className="mt-8 max-w-3xl w-full">
          <h3 className="text-l font-semibold mb-4">Topics:</h3>
          <ul className="list-disc pl-6">
            {topics.map((topic, index) => (
              <li key={index} className="mb-2">
                {topic}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-16 max-w-3xl w-full">
        <h2 className="text-2l font-bold mb-4">Frequently Asked Question</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-3xl w-full">
        <div className="bg-pink-600 rounded-lg p-8 text-white flex flex-col items-center">
          <h3 className="text-2l font-bold mb-4">You still have a question?</h3>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-white text-pink-600 py-2 px-4 rounded-lg font-semibold"
              onClick={handleShowMessageForm}
            >
              I live chat
            </button>
            <button
              className="bg-white text-pink-600 py-2 px-4 rounded-lg font-semibold"
              onClick={handleRequestCall}
            >
              Request a Call
            </button>
          </div>
        </div>
      </div>

      {showMessageForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 relative">
          <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseMessageForm}
            >
              <FaTimes />
            </button>
            <h3 className="text-l font-semibold mb-4">Leave a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const email = e.target.email.value;
                const message = e.target.message.value;
                handleMessageFormSubmit(name, email, message);
              }}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-semibold mb-1">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-pink-500 text-white py-2 px-4 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default SupportPage;