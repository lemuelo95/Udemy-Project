import { Form } from './ui/form.jsx'
import { useForm } from 'react-hook-form'
import { FormField, FormItem, FormControl, FormMessage } from './ui/form.jsx'
import { useState } from 'react'

const RegistrationStep = ({ number, isActive, isCompleted, title, description }) => (
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
);

const PasswordInput = ({ field, placeholder, disabled }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative">
      <input
        {...field}
        type={showPassword ? "text" : "password"}
        className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
        placeholder={placeholder}
        disabled={disabled}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2"
      >
        {showPassword ? (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
          </svg>
        )}
      </button>
    </div>
  )
}

const SelectInput = ({ field, options, placeholder, disabled }) => (
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
);

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSignUp, setIsSignUp] = useState(false)
  
  const loginForm = useForm({
    defaultValues: {
      schoolName: '',
      password: ''
    }
  })

  const signUpForm = useForm({
    defaultValues: {
      adminName: '',
      schoolName: '',
      schoolEmail: '',
      password: '',
      confirmPassword: '',
      staffCount: '',
      schoolAddress: ''
    }
  })

  const onLoginSubmit = async (data) => {
    try {
      setIsLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Login data:', data)
    } catch (error) {
      console.error('Login error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleNextStep = async (data) => {
    try {
      setIsLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log(`Step ${currentStep} data:`, data)
      setCurrentStep(prev => prev + 1)
    } catch (error) {
      console.error('Step submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const renderLogin = () => (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome, Log into you account
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          It is our great pleasure to have you on board!
        </p>
      </div>

      <Form {...loginForm}>
        <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="mt-8 space-y-6">
          <FormField
            control={loginForm.control}
            name="schoolName"
            rules={{ required: 'School name is required' }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    {...field}
                    type="text"
                    className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter the name of school"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={loginForm.control}
            name="password"
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput
                    field={field}
                    placeholder="Enter Password"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </span>
            ) : (
              'Login'
            )}
          </button>

          <div className="text-center text-sm">
            <span className="text-gray-600">Don't have an account? </span>
            <button
              type="button"
              onClick={() => {
                setIsSignUp(true)
                loginForm.reset()
              }}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </Form>
    </>
  )

  const renderStepOne = () => (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome, create your school account
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          It is our great pleasure to have you on board!
        </p>
      </div>

      <Form {...signUpForm}>
        <form onSubmit={signUpForm.handleSubmit(handleNextStep)} className="mt-8 space-y-6">
          <FormField
            control={signUpForm.control}
            name="adminName"
            rules={{ required: 'Admin name is required' }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    {...field}
                    type="text"
                    className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter the name of admin"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={signUpForm.control}
            name="schoolName"
            rules={{ required: 'School name is required' }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    {...field}
                    type="text"
                    className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter the name of school"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={signUpForm.control}
            name="schoolEmail"
            rules={{
              required: 'School email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    {...field}
                    type="email"
                    className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter the school email"
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating account...
              </span>
            ) : (
              'Next'
            )}
          </button>

          <div className="text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <button
              type="button"
              onClick={() => {
                setIsSignUp(false)
                setCurrentStep(1)
                signUpForm.reset()
              }}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </Form>
    </>
  )

  const renderStepTwo = () => (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Udemy school, Choose your password
        </h1>
      </div>

      <Form {...signUpForm}>
        <form onSubmit={signUpForm.handleSubmit(handleNextStep)} className="mt-8 space-y-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Choose a password</label>
              <FormField
                control={signUpForm.control}
                name="password"
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput field={field} placeholder="••••••••" disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
              <FormField
                control={signUpForm.control}
                name="confirmPassword"
                rules={{
                  required: 'Please confirm your password',
                  validate: (value) => value === signUpForm.getValues('password') || 'Passwords do not match'
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput field={field} placeholder="••••••••" disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <p className="text-sm text-gray-500">Must be at least 8 characters.</p>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Setting password...
                </span>
              ) : (
                'Next'
              )}
            </button>
          </div>
        </form>
      </Form>
    </>
  )

  const renderStepThree = () => (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Udemy school, Choose your staffs
        </h1>
      </div>

      <Form {...signUpForm}>
        <form onSubmit={signUpForm.handleSubmit(handleNextStep)} className="mt-8 space-y-6">
          <div className="space-y-6">
            <FormField
              control={signUpForm.control}
              name="staffCount"
              rules={{ required: 'Number of staff is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <SelectInput
                      field={field}
                      placeholder="Number of staff"
                      options={[
                        { value: '1-10', label: '1-10 staff members' },
                        { value: '11-50', label: '11-50 staff members' },
                        { value: '51-200', label: '51-200 staff members' },
                        { value: '201-500', label: '201-500 staff members' },
                        { value: '500+', label: 'More than 500 staff members' }
                      ]}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={signUpForm.control}
              name="schoolAddress"
              rules={{ required: 'School address is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <textarea
                      {...field}
                      className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] resize-none"
                      placeholder="School address"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving details...
                </span>
              ) : (
                'Next'
              )}
            </button>
          </div>
        </form>
      </Form>
    </>
  )

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-md w-full space-y-8 p-8">
          {!isSignUp && renderLogin()}
          {isSignUp && currentStep === 1 && renderStepOne()}
          {isSignUp && currentStep === 2 && renderStepTwo()}
          {isSignUp && currentStep === 3 && renderStepThree()}
        </div>
      </div>

      {isSignUp && (
        <div className="w-full bg-white py-8 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-between relative">
              <RegistrationStep
                number={1}
                isActive={currentStep === 1}
                isCompleted={currentStep > 1}
                title="Your details"
                description="Name and email"
              />
              <RegistrationStep
                number={2}
                isActive={currentStep === 2}
                isCompleted={currentStep > 2}
                title="Choose a password"
                description="Choose a secure password"
              />
              <RegistrationStep
                number={3}
                isActive={currentStep === 3}
                isCompleted={currentStep > 3}
                title="Invite your team"
                description="Start collaborating"
              />
              <RegistrationStep
                number={4}
                isActive={currentStep === 4}
                isCompleted={currentStep > 4}
                title="Upload school's document"
                description="For account verification"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 