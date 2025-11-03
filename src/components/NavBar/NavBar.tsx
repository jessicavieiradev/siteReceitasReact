import { NavLink } from "react-router-dom";

const NavBar = () => {
  interface NavLinks {
    to: string;
    label: string;
  }
  const navLinks:NavLinks[] = [
    { to: "/siteReceitasReact/", label: "Home" },
    { to: "/siteReceitasReact/recipes", label: "Recipes" },
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
