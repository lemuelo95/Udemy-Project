import React from 'react'

export const RegistrationStep = ({ number, isActive, isCompleted, title, description }) => (
  <div className="flex-1 relative">
    <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center border-2 
      ${isCompleted ? 'bg-blue-500 border-blue-500' : isActive ? 'border-blue-500 bg-white' : 'border-gray-300 bg-white'}`}>
      {isCompleted ? (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <span className={`text-sm font-medium ${isActive ? 'text-blue-500' : 'text-gray-500'}`}>{number}</span>
      )}
    </div>
    <div className="text-center mt-2">
      <div className={`text-sm font-medium ${isActive ? 'text-blue-500' : 'text-gray-500'}`}>{title}</div>
      <div className="text-xs text-gray-400 mt-1">{description}</div>
    </div>
    {number < 4 && (
      <div className={`absolute top-4 left-1/2 w-full h-0.5 
        ${isCompleted ? 'bg-blue-500' : 'bg-gray-300'}`}>
      </div>
    )}
  </div>
) 