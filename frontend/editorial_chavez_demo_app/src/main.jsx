import ReactDOM from 'react-dom/client'
import Login from './login.jsx'
import Catalog from './catalog.jsx';
import BookComments from './BookComments.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Login/>
  },
  {
    path: '/catalog',
    element: <Catalog/>
  },
  {
    path: '/catalog/book/:isbnBook',
    element: <BookComments />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( <RouterProvider router={router}/> );
