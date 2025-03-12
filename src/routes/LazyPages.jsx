import MakeLazy from "../utils/MakeLazy";

const Home = MakeLazy(() => import("../pages/Home"));
const NotFound404 = MakeLazy(() => import("../pages/NotFound404"));

export { Home, NotFound404 };

