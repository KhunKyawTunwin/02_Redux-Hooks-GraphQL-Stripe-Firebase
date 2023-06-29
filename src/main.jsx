import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/user.context.jsx";
import { CategoriesProvider } from "./contexts/categories.contexy.jsx";
import { CartProvider } from "./contexts/cart.context.jsx";

import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
