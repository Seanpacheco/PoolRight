import { useState } from 'react';
import './App.css';
import SignInLayout from '../components/Layout/SignInLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes';

const router = createBrowserRouter(AppRoutes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
