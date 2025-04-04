import React from 'react'
import { RegistrationStep } from './RegistrationStep'

const steps = [
  {
    title: 'School Info',
    description: 'Basic school details'
  },
  {
    title: 'Create Password',
    description: 'Set up your password'
  },
  {
    title: 'Staff Details',
    description: 'Add staff information'
  },
  {
    title: 'Complete',
    description: 'Review and finish'
  }
]

export const ProgressIndicator = ({ currentStep }) => {
  return (
    <div className="flex justify-between w-full max-w-3xl mx-auto mb-8">
      {steps.map((step, index) => (
        <RegistrationStep
          key={index}
          number={index + 1}
          isActive={currentStep === index + 1}
          isCompleted={currentStep > index + 1}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  )
} 