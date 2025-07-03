import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-300 px-4">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full overflow-hidden">

        {/* Left Section with Background Image */}
        <div
          className="w-1/2 bg-cover bg-center p-8 hidden md:flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/your-image.jpg')" }} // replace with your image path
        >
          {/* Optional overlay text */}
          <div className="bg-white bg-opacity-80 p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Hilfbox!</h1>
            <p className="text-center text-gray-600">
              We are a community, together helping thousands of people out there who are struggling.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-2">Get Started</h2>
          <p className="text-sm text-gray-600 mb-6">
            Already have an account? <a href="#" className="text-green-600 font-medium">Sign In</a>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Name"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-500 py-2"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

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
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-500 py-2"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                {...register('password', { required: 'Password is required' })}
                placeholder="Password"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-500 py-2"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Submit */}
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded mt-4 hover:bg-green-600 transition">
              Sign Up
            </button>
          </form>

          {/* Social Buttons */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 mb-4">Or sign up with</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white shadow p-2 rounded-full"><img src={asset} alt="Google" className="w-6" /></button>
              <button className="bg-white shadow p-2 rounded-full"><img src="/twitter-icon.png" alt="Twitter" className="w-6" /></button>
              <button className="bg-white shadow p-2 rounded-full"><img src="/facebook-icon.png" alt="Facebook" className="w-6" /></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUp;