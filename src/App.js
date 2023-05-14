import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './Home';
import About from './About';
import ErrorPage from './ErrorPage';
import BlogPost from './BlogPost';
import CategoriesPage from './CategoriesPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<ErrorPage />}/>
        <Route path="/blogpost" element={<BlogPost />}/>
        <Route path="/CategoriesPage" element={<CategoriesPage />}/>
        </Route>
        )
)

  return (
  <RouterProvider router={router} />
  );

  }
export default App;
