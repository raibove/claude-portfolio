import React from 'react';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans p-6">
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">How Can We Help You?</h2>
        <p className="mb-4">We're here to help with any questions or issues you may have with our application. Here are some ways to get support:</p>

        <h3 className="text-xl font-semibold mb-2">1. FAQ</h3>
        <p className="mb-4">Check our <a href="#" className="text-blue-500 hover:underline">Frequently Asked Questions</a> for quick answers to common questions.</p>

        <h3 className="text-xl font-semibold mb-2">2. Email Support</h3>
        <p className="mb-4">For personal assistance, please email us at <a href="mailto:shwetakale144@gmail.com" className="text-blue-500 hover:underline">shwetakale144@gmail.com</a>. We aim to respond within 24 hours.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">App Support and Links</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Download our app for iOS</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Download our app for Android</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">App user guide</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Report a bug</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Request a feature</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Support;