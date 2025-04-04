import React from 'react'
import { PasswordInput } from '../../ui/Input/PasswordInput'

export const PasswordStep = ({ register, errors, getValues }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Create Password</h2>
        <p className="mt-2 text-sm text-gray-600">
          Choose a secure password for your account
        </p>
      </div>
      
      <div className="space-y-4">
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
            },
          })}
          error={errors.password?.message}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: value => value === getValues('password') || 'Passwords do not match',
          })}
          error={errors.confirmPassword?.message}
        />
      </div>
    </div>
  )
} 