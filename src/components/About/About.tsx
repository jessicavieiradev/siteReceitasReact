import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";

const About = () => {
  const caminhoImagem = "../../../aboutImage.png";
  // "

  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 w-full items-center mt-16 md:mt-24 px-4 gap-4">
      <div className="flex flex-col gap-4">
        <Title className="md:text-balance text-3xl md:text-4xl">
          Discover Delicious and Easy Recipes for Your Everyday Life
        </Title>
        <Paragraph>
          From quick dinners to special desserts, our collection offers homemade
          recipes for all tastes and skill levels.
        </Paragraph>
        <Paragraph>
          Find inspiration, fresh ingredients, and step-by-step instructions to
          create amazing dishes without any hassle.
        </Paragraph>
      </div>
      <div className="w-full h-full">
        <img className="object-cover h-full md:max-h-[400px] w-full rounded-2xl" src={caminhoImagem} alt="" />
      </div>
    </section>
  );
};

export default About;
