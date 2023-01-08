import { NavbarItemPropsInterface } from "./index.d";

const NavbarItem = ({ title, classProps }: NavbarItemPropsInterface) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

export default NavbarItem;
