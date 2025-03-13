import MakeLazy from "../../utils/MakeLazy";

const AdminActions = MakeLazy(() => import("./AdminActions"));
const CollegeTable = MakeLazy(() => import("./CollegeTable"));
const DashboardStats = MakeLazy(() => import("./DashboardStats"));
const ManageAdminsForm = MakeLazy(() => import("./ManageAdminsForm"));
const UserTable = MakeLazy(() => import("./UserTable"));

export {
  AdminActions,
  CollegeTable,
  DashboardStats,
  ManageAdminsForm,
  UserTable,
};
