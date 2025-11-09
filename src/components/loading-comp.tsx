import Image from "next/image";
import React from "react";

type Props = {
  message?: string;
};

const LoadingComp = ({ message = "Loading..." }: Props) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center p-6">
      {/* Logo with Animation */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse" />
        <div className="relative bg-white p-6 rounded-full shadow-lg">
          <Image
            src="/images/Gasflow.png"
            alt="Gasflow Logo"
            width={64}
            height={64}
            className="w-16 h-16"
          />
        </div>
      </div>

      {/* Brand Name */}
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
        Gasflow
      </h1>

      {/* Loading Message */}
      <p className="text-gray-600 text-lg mb-8 text-center max-w-md">
        {message}
      </p>

      {/* Professional Loading Animation */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
      </div>

      {/* Subtitle */}
      <p className="text-sm text-gray-500 mt-6 text-center">
        Setting up your experience...
      </p>
    </div>
  );
};

export default LoadingComp;
