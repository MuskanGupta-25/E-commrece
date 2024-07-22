import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from '../authSlice';
import { Link } from 'react-router-dom';

export default function Login() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();


  return (
    <>

      <div className="mt-20 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-Black">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" bg-transparent block w-full rounded-md border-2 py-1.5 text-black shadow-sm  sm:text-sm sm:leading-6 hover:backdrop-brightness-50 hover:text-white "
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-blue-600 hover:text-black">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=" bg-transparent block w-full rounded-md border-2 py-1.5 text-black shadow-sm  sm:text-sm sm:leading-6 hover:backdrop-brightness-50 hover:text-white "
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-transparent border-2 px-3 py-1.5 text-1.5xl font-semibold leading-6 text-black shadow-sm hover:backdrop-brightness-50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-gray-500 "
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-white">
            Not a member?{' '}
            <Link to="/signup" className="font-semibold leading-6 text-blue-600 hover:text-black">
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}