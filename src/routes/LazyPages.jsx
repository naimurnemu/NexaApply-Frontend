import MakeLazy from "../utils/MakeLazy";

const Home = MakeLazy(() => import("../pages/public/Home"));
const Colleges = MakeLazy(() => import("../pages/user/Colleges"));
const CollegeDetails = MakeLazy(() => import("../pages/user/CollegeDetails"));
const Admission = MakeLazy(() => import("../pages/user/Admission"));
const MyColleges = MakeLazy(() => import("../pages/user/MyColleges"));
const Profile = MakeLazy(() => import("../pages/user/Profile"));
const Login = MakeLazy(() => import("../pages/auth/Login"));
const Register = MakeLazy(() => import("../pages/auth/Register"));
const ForgotPassword = MakeLazy(() => import("../pages/auth/ForgotPassword"));
const ResetPassword = MakeLazy(() => import("../pages/auth/ResetPassword"));
const AdminLogin = MakeLazy(() => import("../pages/admin/AdminLogin"));
const Dashboard = MakeLazy(() => import("../pages/admin/Dashboard"));
const ManageColleges = MakeLazy(() => import("../pages/admin/ManageColleges"));
const ManageUsers = MakeLazy(() => import("../pages/admin/ManageUsers"));
const About = MakeLazy(() => import("../pages/public/About"));
const NotFound404 = MakeLazy(() => import("../pages/public/NotFound404"));
const AuthContainer = MakeLazy(() => import("../pages/public/AuthContainer"));

export {
  Home,
  NotFound404,
  Colleges,
  CollegeDetails,
  Admission,
  MyColleges,
  Profile,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  AdminLogin,
  Dashboard,
  ManageColleges,
  ManageUsers,
  About,
  AuthContainer
};
