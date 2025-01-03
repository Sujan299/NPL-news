import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <p className="text-gray-600 mb-6 text-center">
          Have a question or feedback about our blogging app? Reach out to us using the form below or via email.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-8 text-center">
          <p className="text-gray-700">Or email us directly at:</p>
          <a href="mailto:contact@bloggingapp.com" className="text-blue-500 hover:underline">
            contact@bloggingapp.com
          </a>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://twitter.com" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://facebook.com" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://instagram.com" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
