import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './pages/Users';
import User from './pages/User';
import ErrorPage from './pages/ErrorPage';
import Dashboard from './pages/Dashboard';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Login from './pages/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "users",
        element: <Users />,
        errorElement: <ErrorPage />,
      },
      {
        path: "user/:id",
        element: <User />,
        errorElement: <ErrorPage />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
