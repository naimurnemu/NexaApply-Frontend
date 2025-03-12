import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home, NotFound404 } from "./LazyPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*", 
    element: <NotFound404 />
  }
]);

export default router;
