import { menus } from "@/constants/constants";
import { User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { CartButton } from "./CartButton";

export const DesktopNavbar = () => {
  return (
    <div className="max-md:hidden flex items-center justify-between py-4.5 px-6 xl:px-16">
      <Link to="/">
        <img src="/logo.png" alt="3legant logo" />
      </Link>
      <div className="space-x-8 text-secondary ">
        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.href}
            className="hover:text-primary active:text-primary"
          >
            {menu.name}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-x-4">
        <Link to="/">
          <User />
        </Link>
        <CartButton />
      </div>
    </div>
  );
};
