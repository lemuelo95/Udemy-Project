import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/Button'
import { ProgressIndicator } from './ProgressIndicator/ProgressIndicator'
import { SchoolInfoStep } from './FormSteps/SchoolInfoStep'
import { PasswordStep } from './FormSteps/PasswordStep'
import { StaffDetailsStep } from './FormSteps/StaffDetailsStep'

export const AuthForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const { register, handleSubmit, formState: { errors }, getValues } = useForm({
    mode: 'onChange'
  })

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1)
  }

  const onSubmit = (data) => {
    if (currentStep < 3) {
      handleNextStep()
    } else {
      console.log('Form submitted:', data)
      // Handle form submission
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <SchoolInfoStep register={register} errors={errors} />
      case 2:
        return <PasswordStep register={register} errors={errors} getValues={getValues} />
      case 3:
        return <StaffDetailsStep register={register} errors={errors} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <ProgressIndicator currentStep={currentStep} />
        
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {renderStep()}
            
            <div className="flex justify-between">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevStep}
                >
                  Previous
                </Button>
              )}
              
              <Button
                type="submit"
                className={currentStep === 1 ? 'w-full' : 'ml-auto'}
              >
                {currentStep === 3 ? 'Complete Registration' : 'Next'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 