import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/css/style.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact.jsx";
import Shop from "./Components/Shop.jsx";
import Navbar from "./Components/Navbar.jsx";
import ProductDetail from "./Components/ProductDetail.jsx";
import Registration from "./Components/Registration.jsx";
import Login from "./Components/Login.jsx";
import Cart from "./Components/Cart.jsx";
import Checkout from "./Components/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navbar /> },
      { path: "/shop", element: <Shop /> },
      { path: "/contact", element: <Contact /> },
      { path: "/details", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
  {
    path: "/reg",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
