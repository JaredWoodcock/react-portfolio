import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Bootstrap and customs CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
// Import main App component and other pages
import App from './App.jsx'
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        // Sets AboutMePage as the index page/root route
        index: true,
        element: <AboutMePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);