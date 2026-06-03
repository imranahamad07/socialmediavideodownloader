import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 md:p-12">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          About Reel Downloader
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Fast • Simple • Secure
        </p>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-center">
          Our Instagram Reel Downloader helps you save your favorite reels
          quickly and easily. Just paste the reel link, click download, and
          enjoy offline viewing anytime.
        </p>

        {/* Features */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">

          <div className="bg-gray-100 rounded-xl p-4 text-center">
            <h3 className="font-semibold text-gray-800">⚡ Fast</h3>
            <p className="text-sm text-gray-600 mt-1">
              Instant reel processing
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-4 text-center">
            <h3 className="font-semibold text-gray-800">🔒 Safe</h3>
            <p className="text-sm text-gray-600 mt-1">
              No login required
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-4 text-center">
            <h3 className="font-semibold text-gray-800">📱 Simple</h3>
            <p className="text-sm text-gray-600 mt-1">
              Easy one-click download
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Reel Downloader. All rights reserved.
        </div>

      </div>
    </div>
  );
}