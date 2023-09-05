import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
]);

function App() {
  return (
    <>
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
    </>
  );
}

export default App;
