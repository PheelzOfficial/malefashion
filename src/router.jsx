// import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import CheckOut from "./pages/CheckOut/CheckOut";
import ShopDetails from "./pages/Shop/ShopDetails/ShopDetails";
import BlogDetails from "./pages/Blog/BlogDetails/BlogDetails";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ProtectedRoute from "./Context/ProtectedRoute";

export const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/shop", element: <Shop /> },
  { path: "/product/details/:productId", element: <ShopDetails /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  {
    path: "/cart",
    element: (
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    ),
  },
  {
    path: "/checkout",
    element: (
      <ProtectedRoute>
        <CheckOut />
      </ProtectedRoute>
    ),
  },
  { path: "/blog/details", element: <BlogDetails /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
