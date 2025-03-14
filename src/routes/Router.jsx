import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  About,
  AdminLogin,
  Admission,
  AuthContainer,
  CollegeDetails,
  Colleges,
  Dashboard,
  ForgotPassword,
  Home,
  Login,
  ManageAdmins,
  ManageColleges,
  ManageUsers,
  MyColleges,
  NotFound404,
  Profile,
  Register,
  ResetPassword,
} from "./LazyPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/colleges", element: <Colleges /> },
      { path: "/colleges/:id", element: <CollegeDetails /> },
      { path: "/admission", element: <Admission /> },
      { path: "/my-colleges", element: <MyColleges /> },
      { path: "/profile", element: <Profile /> },
      { path: "/about", element: <About /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthContainer />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "admin", element: <AdminLogin />,  },
    ],
  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      { path: "colleges", element: <ManageColleges /> },
      { path: "users", element: <ManageUsers /> },
      { path: "admins", element: <ManageAdmins /> },
    ],
  },
  { path: "*", element: <NotFound404 /> },
]);

export default router;
