import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const Main = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/siteReceitasReact/recipes`);
  };
  const caminhoImagem = "../../../siteReceitasReact/heroImage.png";
  const caminhoImagemMobile = "../../../siteReceitasReact/heroImageMobile.png";

  //container main
  const mainStyle: string =
    "container mx-auto mt-32 md:mt-40 p-2 text-center text-balance space-y-8";

  //text
  const containerContentStyle: string =
    "flex flex-col-reverse items-center gap-4";
  const titleStyle: string = "text-primary font-text text-[18px] text-balance";
  const paragraphStyle: string =
    "text-primary font-extrabold text-4xl md:text-5xl font-primary";

  //image
  const containerImageStyle: string =
    "max-w-[1080px] md:h-[550px] h-[400px] overflow-hidden rounded-md mx-auto";
  const containerImageStyleMobile: string =
    "w-full h-full overflow-hidden rounded-md";
  const imageStyle: string = "w-full h-full object-cover object-center";

  return (
    <main className={mainStyle}>
      <div className={containerContentStyle}>
        <h1 className={titleStyle}>
          Quick Dinner and Lunch: Easy International Recipes for Everyday Life
        </h1>
        <p className={paragraphStyle}>
          <span
            className="inline-block bg-[linear-gradient(to_bottom,transparent_50%,var(--color-emphasis)50%)] bg-no-repeat 
    bg-size-full px-1"
          >
            Quick Recipes.
          </span>{" "}
          Incredible Results.
        </p>
      </div>
      <Button onClick={handleNavigate}>Start exploring</Button>
      <div></div>
      <div className={`hidden md:block ${containerImageStyle}`}>
        <img src={caminhoImagem} alt="A man cooking" className={imageStyle} />
      </div>
      <div className={`block md:hidden ${containerImageStyleMobile}`}>
        <img
          src={caminhoImagemMobile}
          alt="A man cooking"
          className={imageStyle}
        />
      </div>
    </main>
  );
};

export default Main;
