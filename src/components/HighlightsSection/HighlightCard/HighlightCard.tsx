import Paragraph from "../../Paragraph/Paragraph";
import Title from "../../Title/Title";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HighlightCard = ({ icon, title, description }: CardProps) => {
  return (
    <div className="text-start space-y-2 flex-1 md:max-w-[400px]">
      <span className="inline-block">{icon}</span>
      <Title as="h3" className="text-md text-xl md:text-2xl font-bold">{title}</Title>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default HighlightCard;
