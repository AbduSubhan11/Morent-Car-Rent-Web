import HeroSection from "@/components/HeroSection";
import PopularCar from "@/components/PopularCar";
import RecommendationCar from "@/components/RecommendationCar";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PopularCar heading="Popular Car" />
      <RecommendationCar />
    </div>
  );
}
