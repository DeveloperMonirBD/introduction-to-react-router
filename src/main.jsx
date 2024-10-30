import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import Error from './components/ErrorPage/Error.jsx';




const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
        children: [
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/users',
                loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
                element: <Users />
            },
            {
                path: '/user/:userId',
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
                element: <UserDetails />
            },
            {
                path: '/posts',
                loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
                element: <Posts />
            },
            {
                path: '/post/:postId',
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
                element: <PostDetails />
            }
        ]
    }
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>
);
