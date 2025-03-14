import MakeLazy from "../../utils/MakeLazy";

const Footer = MakeLazy(() => import("./Footer"));
const Loader = MakeLazy(() => import("./Loader"));
const Modal = MakeLazy(() => import("./Modal"));
const Navbar = MakeLazy(() => import("./Navbar"));
const Toast = MakeLazy(() => import("./Toast"));

export { Footer, Loader, Modal, Navbar, Toast };
