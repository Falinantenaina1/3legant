import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export const CartButton = () => {
  return (
    <Link to="/" className="flex gap-x-1">
      <ShoppingCart className="size-5" />
      <div className="flex items-center justify-center size-5 bg-black rounded-full text-white text-xs">
        2
      </div>
    </Link>
  );
};
