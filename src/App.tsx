import MainLayout from '@layouts/Main/MainLayout'
import ContactPage from '@pages/Contact/ContactPage'
import HomePage from '@pages/Home/HomePage'
import React from 'react'
import { redirect, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => redirect('/about'),
      },
      {
        path: '/about',
        element: <HomePage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
])

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
