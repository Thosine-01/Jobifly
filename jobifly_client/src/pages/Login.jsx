import React, {useState} from 'react'
import { assets } from '../assets/assets'
import { useForm } from 'react-hook-form'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign In')
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className='container flex gap-8 items-center'>
      <div className='w-1/2 p-8 h-[85vh]'>
        <img src={assets.loggingImg} alt="Logging" className='w-full h-[100%]' />
      </div>

      <div className='w-1/2'>
        <h2 className='text-2xl font-bold mb-2'>Get Started with Jobifly</h2>

        {
          currentState == 'Sign In'
          ? <p className='text-sm text-gray-600 mb-6'>Dont have an Account? <span onClick={() => setCurrentState('Sign Up')} className="text-amber-600 font-medium">Sign Up</span></p>
          :<p className='text-sm text-gray-600 mb-6'>Already have an account? <span onClick={()=> setCurrentState('Sign In')} className="text-amber-600 font-medium">Sign In</span></p>

        }
        

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            {currentState == 'Sign In'? '': <div>
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Name"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-amber-700 py-2"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>}

            {/* Email */}
            <div>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
                placeholder="Email"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-amber-700 py-2"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                {...register('password', { required: 'Password is required' })}
                placeholder="Password"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-amber-700 py-2"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Submit */}
            <button type="submit" className="w-full bg-amber-700 text-white py-2 rounded mt-4 hover:bg-emerald-950 transition">
              {currentState}
            </button>
        </form>

            <div className="mt-6 text-center">
            <p className="text-gray-500 mb-4">Or sign up with</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white shadow p-1 "><img src={assets.google} alt="Google" className="w-8" /></button>
              <button className="bg-white shadow p-1 "><img src={assets.githubLogo} alt="github" className="w-8" /></button>
              <button className="bg-white shadow p-1 "><img src={assets.linkedinlogo} alt="Facebook" className="w-8" /></button>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Login
