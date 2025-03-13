import MakeLazy from "../../utils/MakeLazy";

const Button = MakeLazy(() => import("./Button"));
const Footer = MakeLazy(() => import("./Footer"));
const Input = MakeLazy(() => import("./Input"));
const Loader = MakeLazy(() => import("./Loader"));
const Modal = MakeLazy(() => import("./Modal"));
const Navbar = MakeLazy(() => import("./Navbar"));
const Toast = MakeLazy(() => import("./Toast"));

export { Button, Footer, Input, Loader, Modal, Navbar, Toast };
