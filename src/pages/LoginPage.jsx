import React from 'react'
import Tile from '../components/ui/Tile.jsx'
import { Form } from 'react-router-dom'

const LoginPage = () => {
  return (
    <Tile className="max-w-md mx-auto mt-20 p-8">
      <Form method="post" className="flex flex-col">
        <h2 className="font-semibold text-2xl mb-6 text-center">Login to Your Account</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white/80 mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="
              w-full px-4 py-2
              bg-white/10 text-white
              border border-white/20
              rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-white/80 mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="
              w-full px-4 py-2
              bg-white/10 text-white
              border border-white/20
              rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="
            w-full px-4 py-2
            bg-blue-600 text-white
            rounded-md
            hover:bg-blue-700
            transition-colors duration-200
          "
        >
          Login
        </button>
      </Form>
    </Tile>
  )
}

export async function loginAction({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')

  console.log('Login attempt:', { email, password })

  // Here you would typically handle authentication logic,
  // such as sending a request to your backend server.

  return null
}

export default LoginPage
