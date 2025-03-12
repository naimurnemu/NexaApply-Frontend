import MakeLazy from "../utils/MakeLazy";

const Button = MakeLazy(() => import("./Button"));

export {
  Button,
};