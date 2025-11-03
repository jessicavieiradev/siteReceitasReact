import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import { useData } from "../DataProviderRecipes/DataProviderRecipes";

const ReadyPage = () => {
  const { rotaPrincipal } = useData();
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`${rotaPrincipal}recipes`);
  };
  const pathImage: string = `../../..${rotaPrincipal}readyPageDesktop.png`;
  const pathImageTablet: string = `../../..${rotaPrincipal}readyPageTablet.png`;
  const pathImageMobile: string = `../../..${rotaPrincipal}readyPageMobile.png`;

  return (
    <section className="container mx-auto mt-16 md:mt-24 px-4">
      <div className="relative z-10 flex flex-col gap-4 p-4 items-center text-center justify-center rounded-2xl w-full min-h-[300px] md:min-h-[400px] overflow-hidden">
        <img
          src={pathImage}
          alt="Fundo Desktop Panorâmico"
          className="
        absolute inset-0 w-full h-full object-cover
        hidden     lg:block   -z-1"
        />

        <img
          src={pathImageTablet}
          alt="Fundo Tablet -z-1"
          className="
        absolute inset-0 w-full h-full object-cover
        hidden     md:block   lg:hidden  "
        />

        <img
          src={pathImageMobile}
          alt="Fundo Celular Vertical"
          className=" -z-1
        absolute inset-0 w-full h-full object-cover
        md:hidden  "
        />
        <Title className="z-10 text-balance text-3xl md:text-4xl">
          Ready to cook smarter?
        </Title>
        <Paragraph>
          Hit the button, pick a recipe, and get dinner on the table.
        </Paragraph>
        <Button onClick={handleNavigate} className="z-10">Browse recipes</Button>
      </div>
    </section>
  );
};

export default ReadyPage;
