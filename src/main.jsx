import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';

import { Toaster } from 'react-hot-toast';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import AuthProvider from './providers/AuthProvider';

// Create a client

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProvider>
  </StrictMode>
);
