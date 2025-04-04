import React from 'react'

export const SelectInput = ({ field, options, placeholder, disabled }) => (
  <div className="relative">
    <select
      {...field}
      className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white pr-10"
      disabled={disabled}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
) 