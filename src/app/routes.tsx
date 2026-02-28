import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Services from './pages/Services';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'services',
        Component: Services,
      },
      {
        path: 'portfolio',
        Component: Portfolio,
      },
      {
        path: 'portfolio/:id',
        Component: ProjectDetail,
      },
      {
        path: 'contact',
        Component: Contact,
      },
      {
        path: 'careers',
        Component: Careers,
      },
      {
        path: '*',
        Component: () => (
          <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
              <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
              <a
                href="/"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-medium hover:shadow-lg transition-all duration-300 inline-block"
              >
                Go Home
              </a>
            </div>
          </div>
        ),
      },
    ],
  },
]);