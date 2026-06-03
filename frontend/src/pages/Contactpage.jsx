import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE INFO */}
        <div className="bg-blue-600 text-white p-10 flex flex-col justify-center">
          
          <h1 className="text-3xl font-bold mb-4">
            Get in Touch
          </h1>

          <p className="text-blue-100 leading-relaxed">
            Have any questions about our Instagram Reel Downloader?  
            Feel free to contact us. We’re here to help you with any issue,
            feedback, or suggestion.
          </p>

          <div className="mt-6 space-y-3 text-sm text-blue-100">
            <p>📧 support@reeldownloader.com</p>
            <p>📍 India</p>
            <p>⚡ Response within 24 hours</p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-10">

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Form
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-11 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-11 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full h-11 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="button"
              className="w-full bg-blue-600 text-white h-11 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}