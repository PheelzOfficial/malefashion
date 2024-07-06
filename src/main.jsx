import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ContextProvider } from "./Context/useContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
        <RouterProvider router={router}></RouterProvider>
      </ContextProvider>
    </QueryClientProvider>
    {/* <App /> */}
  </React.StrictMode>
);
