import React from 'react'
import { Input } from '../../ui/Input/Input'
import { SelectInput } from '../../ui/Input/SelectInput'

const staffRoles = [
  { value: 'principal', label: 'Principal' },
  { value: 'vice_principal', label: 'Vice Principal' },
  { value: 'administrator', label: 'Administrator' },
  { value: 'other', label: 'Other' }
]

export const StaffDetailsStep = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Staff Details</h2>
        <p className="mt-2 text-sm text-gray-600">
          Please provide your role and school address
        </p>
      </div>
      
      <div className="space-y-4">
        <SelectInput
          label="Staff Role"
          options={staffRoles}
          placeholder="Select your role"
          {...register('staffRole', {
            required: 'Staff role is required',
          })}
          error={errors.staffRole?.message}
        />

        <Input
          label="Street Address"
          type="text"
          placeholder="Enter street address"
          {...register('streetAddress', {
            required: 'Street address is required',
          })}
          error={errors.streetAddress?.message}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="City"
            type="text"
            placeholder="Enter city"
            {...register('city', {
              required: 'City is required',
            })}
            error={errors.city?.message}
          />

          <Input
            label="State/Province"
            type="text"
            placeholder="Enter state/province"
            {...register('state', {
              required: 'State/Province is required',
            })}
            error={errors.state?.message}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Postal Code"
            type="text"
            placeholder="Enter postal code"
            {...register('postalCode', {
              required: 'Postal code is required',
            })}
            error={errors.postalCode?.message}
          />

          <Input
            label="Country"
            type="text"
            placeholder="Enter country"
            {...register('country', {
              required: 'Country is required',
            })}
            error={errors.country?.message}
          />
        </div>
      </div>
    </div>
  )
} 