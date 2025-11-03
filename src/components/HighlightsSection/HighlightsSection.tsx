import { GlobeIcon, SearchIcon, SmileIcon } from "lucide-react";
import Title from "../Title/Title";
import HighlightCard from "./HighlightCard/HighlightCard";

const HighlightsSection = () => {
  return (
    <section className="container mx-auto flex flex-col items-center text-center mt-16 md:mt-24 space-y-4 px-4 border-b border-gray-100">
      <Title className="text-3xl md:text-4xl">What you'll get</Title>
      <div className="flex flex-col md:flex-row gap-4">
        <HighlightCard
          icon={<SmileIcon />}
          title="Cook with confidence"
          description="Follow clear and simple instructions, with tips for delicious results at every step."
        />
        <HighlightCard
          icon={<GlobeIcon />}
          title="Recipes for Everyone"
          description="Explore the wide variety and find the recipe that best suits you."
        />
        <HighlightCard
          icon={<SearchIcon />}
          title="Find in Seconds"
          description="Filter by name and jump straight to the recipe you need."
        />
      </div>
    </section>
  );
};

export default HighlightsSection;
