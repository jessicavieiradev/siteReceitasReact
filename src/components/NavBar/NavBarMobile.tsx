import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { MenuIcon, XIcon } from "lucide-react";

const NavBarMobile = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/siteReceitasReact/recipes`);
  };
  interface NavLinks {
    to: string;
    label: string;
  }
  const navLinks: NavLinks[] = [
    { to: "/siteReceitasReact/", label: "Home" },
    { to: "/siteReceitasReact/recipes", label: "Recipes" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="md:hidden relative">
      <button onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? <XIcon /> : <MenuIcon />}
      </button>
      {openMenu ? (
        <nav className="bg-secondary rounded-md min-w-50 p-2 absolute right-0 top-10 flex flex-col gap-4 text-primary font-primary font-bold text-center">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
          <Button onClick={handleNavigate}>Browse Recipes</Button>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBarMobile;
