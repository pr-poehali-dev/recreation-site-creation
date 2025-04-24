import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Placeholder for background image */}
      <div className="absolute inset-0 bg-secondary/20 bg-[url('/placeholder.svg')] bg-cover bg-center" />
      
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative container h-full mx-auto px-4 flex flex-col justify-center items-start text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl mb-4 animate-fade-in">
          Отдых на природе в уютных домиках
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-8 animate-fade-in">
          База отдыха «Лесная Гавань» — идеальное место для отдыха с семьей, друзьями и коллегами на берегу живописного озера.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="animate-fade-in">
            <Link to="/booking">Забронировать</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white/20 hover:bg-white/30 animate-fade-in">
            <Link to="/cottages">Смотреть домики</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
