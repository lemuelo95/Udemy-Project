import React from 'react'
import { Input } from '../../ui/Input/Input'

export const SchoolInfoStep = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Create School Account</h2>
        <p className="mt-2 text-sm text-gray-600">
          Welcome! Let's get started with your school's information.
        </p>
      </div>
      
      <div className="space-y-4">
        <Input
          label="Admin Name"
          type="text"
          placeholder="Enter admin name"
          {...register('adminName', {
            required: 'Admin name is required',
          })}
          error={errors.adminName?.message}
        />

        <Input
          label="School Name"
          type="text"
          placeholder="Enter school name"
          {...register('schoolName', {
            required: 'School name is required',
          })}
          error={errors.schoolName?.message}
        />

        <Input
          label="School Email"
          type="email"
          placeholder="Enter school email"
          {...register('schoolEmail', {
            required: 'School email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          error={errors.schoolEmail?.message}
        />
      </div>
    </div>
  )
} 