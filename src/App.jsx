import React, { useEffect, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Loader from "./component/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <React.StrictMode>
      {loading ? <Loader /> : <RouterProvider router={router}></RouterProvider>}
    </React.StrictMode>
  );
}

export default App;
