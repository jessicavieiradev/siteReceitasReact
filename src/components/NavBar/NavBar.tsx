import { NavLink } from "react-router-dom";
import { useData } from "../DataProviderRecipes/DataProviderRecipes";

const NavBar = () => {
  const { rotaPrincipal } = useData();  
  interface NavLinks {
    to: string;
    label: string;
  }
  const navLinks:NavLinks[] = [
    { to: `${rotaPrincipal}`, label: "Home" },
    { to: `${rotaPrincipal}recipes`, label: "Recipes" },
  ];

  const baseClasses: string = "cursor-pointer";
  const activeClasses: string =
    "underline decoration-secondary decoration-[3px] underline-offset-[4px]";
  return (
    <nav className="hidden md:flex gap-8 text-primary font-primary font-bold">
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.label === "Home"}
          className={
            ({ isActive }) =>
              isActive
                ? `${baseClasses} ${activeClasses}`
                : baseClasses
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
