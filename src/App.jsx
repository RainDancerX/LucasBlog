/*
 * @Author: lucas Liu lantasy.io@gmail.com
 * @Date: 2024-10-22 13:24:42
 * @LastEditTime: 2024-10-27 22:34:46
 * @Description:
 */
import React from 'react';
import './styles/normalize.css';
import './App.css';
import { RouterProvider } from '@tanstack/react-router';
import router from './routes/index.js';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
