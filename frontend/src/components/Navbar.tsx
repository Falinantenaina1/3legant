import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
  return (
    <nav>
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  );
};
