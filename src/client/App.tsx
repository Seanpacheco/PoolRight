import { useState } from 'react';
import './App.css';
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
