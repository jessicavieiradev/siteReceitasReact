import { NavLink, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import NavBar from "../NavBar/NavBar";
import NavBarMobile from "../NavBar/NavBarMobile";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/recipes`);
  };
  return (
    <header className="fixed top-0 w-full bg-background p-4 border-b border-b-gray-300">
      <div className="mx-auto container flex justify-between items-center">
        <NavLink
          to="/siteReceitasReact/"
          className="text-xl font-serif text-primary"
        >
          Global Recipes Finder
        </NavLink>
        <NavBar />
        <NavBarMobile />
        <Button onClick={handleNavigate} className="hidden md:block">
          Browse Recipes
        </Button>
      </div>
    </header>
  );
};

export default Header;
