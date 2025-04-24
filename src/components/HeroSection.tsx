import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Anchor } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Placeholder for background image */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center" />
      
      <div className="absolute inset-0 bg-blue-900/40" />
      
      <div className="relative container h-full mx-auto px-4 flex flex-col justify-center items-start text-white">
        <div className="flex items-center mb-4 animate-fade-in">
          <Anchor className="h-6 w-6 mr-2" />
          <span className="font-medium">База отдыха на Бурейском водохранилище</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl mb-4 animate-fade-in">
          «Причал» — ваш уютный берег
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-8 animate-fade-in">
          Отдых на живописном берегу Бурейского водохранилища: рыбалка, купание и потрясающие виды природы
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="animate-fade-in bg-blue-600 hover:bg-blue-700">
            <Link to="/booking">Забронировать за 1500 ₽/сутки</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white/20 hover:bg-white/30 animate-fade-in">
            <Link to="/gallery">Фотогалерея</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
