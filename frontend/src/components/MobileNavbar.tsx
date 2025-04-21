import { menus } from "@/constants/constants";
import {
  Facebook,
  HeartIcon,
  Instagram,
  Menu,
  Search,
  ShoppingCart,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CartButton } from "./CartButton";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export const MobileNavbar = () => {
  return (
    <div className="flex items-center justify-between md:hidden py-4.5 px-6">
      <div className="flex items-center gap-x-2">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <img src="/logo.png" alt="3legant logo" />
              </SheetTitle>
            </SheetHeader>
            <div className="h-full px-4 pb-4 flex flex-col justify-between">
              <div>
                <div className="relative">
                  <Input
                    type="search"
                    className="pl-10 text-black/70"
                    placeholder="search"
                  />
                  <Search className="absolute top-1/2 -translate-y-1/2 left-2 text-black/20" />
                </div>
                <div className="flex flex-col">
                  {menus.map((menu) => (
                    <div key={menu.name} className="">
                      <Link className="block py-2" to={menu.href}>
                        {menu.name}
                      </Link>
                      <Separator />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <div>
                    <Link to="/" className="flex justify-between py-2">
                      <span>Cart</span>
                      <div className="flex items-center gap-x-1">
                        <ShoppingCart className="text-black/60" />
                        <div className="flex items-center justify-center size-4 bg-black rounded-full text-white text-xs">
                          2
                        </div>
                      </div>
                    </Link>
                    <Separator />
                    <Link to="/" className="flex justify-between py-2">
                      <span>Whislist</span>
                      <div className="flex items-center gap-x-1">
                        <HeartIcon className="text-black/60" />
                        <div className="flex items-center justify-center size-4 bg-black rounded-full text-white text-xs">
                          2
                        </div>
                      </div>
                    </Link>
                    <Separator />
                  </div>
                </div>
                <Button className="w-full">Sign In</Button>
                <div className="flex gap-x-2">
                  <Link to="/">
                    <Instagram />
                  </Link>
                  <Link to="/">
                    <Facebook />
                  </Link>
                  <Link to="/">
                    <Youtube />
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <Link to="/">
          <img src="/logo.png" alt="3legant logo" />
        </Link>
      </div>
      <div>
        <CartButton />
      </div>
    </div>
  );
};
