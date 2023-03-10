import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/index';
import GithubProfile from './pages/[...githubProfile]';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/repos/:githubProfile',
        element: <GithubProfile />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
