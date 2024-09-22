import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './css/fma-general.css';
import './css/fma-responsive.css';
import './css/homeStyle.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Bloga from './pages/Blog-details';

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />},
  {path: '/contact-us', element: <Contact />},
  {path: '/services', element: <Services />},
  {path: '/portfolio', element: <Portfolio />},
  {path: '/blog', element: <Blog />},
  {path: '/blog-details', element: <Blog Details />},
 
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
