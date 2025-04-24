import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Anchor, Fish, Swim, Droplets, Sun, Tent } from "lucide-react";

const PriceCard = () => (
  <Card className="overflow-hidden border-2 border-primary/20 bg-blue-50/50 shadow-md">
    <CardContent className="p-6">
      <h3 className="text-2xl font-semibold mb-3 text-primary">Стоимость проживания</h3>
      <div className="flex items-center justify-center mb-4">
        <span className="text-4xl font-bold">1500 ₽</span>
        <span className="text-lg ml-2">/ сутки с человека</span>
      </div>
      <ul className="space-y-2 mb-6">
        <li className="flex items-center">
          <Droplets className="h-5 w-5 text-primary mr-2" />
          <span>Доступ к водохранилищу</span>
        </li>
        <li className="flex items-center">
          <Tent className="h-5 w-5 text-primary mr-2" />
          <span>Комфортное проживание</span>
        </li>
        <li className="flex items-center">
          <Fish className="h-5 w-5 text-primary mr-2" />
          <span>Возможность рыбалки</span>
        </li>
      </ul>
      <Button asChild className="w-full">
        <Link to="/booking">Забронировать</Link>
      </Button>
    </CardContent>
  </Card>
);

const ActivityCard = ({ title, icon, description }: { title: string; icon: React.ReactNode; description: string }) => (
  <Card className="overflow-hidden transition-all hover:shadow-md hover:-translate-y-1 duration-300">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary/10 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const Index = () => {
  const activities = [
    {
      title: "Рыбалка",
      icon: <Fish className="h-6 w-6 text-primary" />,
      description: "Великолепная рыбалка на Бурейском водохранилище с богатым разнообразием рыбы"
    },
    {
      title: "Водные развлечения",
      icon: <Swim className="h-6 w-6 text-primary" />,
      description: "Купание, катание на лодках и водных мотоциклах, прогулки вдоль береговой линии"
    },
    {
      title: "Пляжный отдых",
      icon: <Sun className="h-6 w-6 text-primary" />,
      description: "Комфортные пляжные зоны с шезлонгами и навесами для спокойного отдыха на природе"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Pricing Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Отдыхайте с комфортом</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">База отдыха «Причал»</h3>
                <p className="text-lg mb-6">
                  Расположена на живописном берегу Бурейского водохранилища, где вы можете насладиться
                  красотой природы, свежим воздухом и чистой водой.
                </p>
                <p className="text-lg mb-6">
                  Мы предлагаем комфортное размещение, разнообразные развлечения на воде и возможность
                  отличной рыбалки в одном из самых живописных мест региона.
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <Link to="/about">Подробнее о базе</Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="max-w-md w-full">
                  <PriceCard />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FeatureSection />
        
        {/* Activities Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl font-bold mb-4 md:mb-0">Активности на воде</h2>
              <div className="flex items-center text-primary">
                <Anchor className="h-6 w-6 mr-2" />
                <span className="font-medium">Бурейское водохранилище</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <ActivityCard key={index} {...activity} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link to="/activities">Все активности</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Gallery Preview */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Фотогалерея</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src="/placeholder.svg"
                    alt={`База отдыха Причал фото ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild variant="outline">
                <Link to="/gallery">Смотреть все фото</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы отдохнуть на Бурейском водохранилище?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Забронируйте свой отдых прямо сейчас и получите незабываемые впечатления
              от пребывания на базе отдыха «Причал»
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              <Link to="/booking">Забронировать</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
