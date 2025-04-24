import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CottageCard = ({ title, price, image, link }: { title: string; price: string; image: string; link: string }) => (
  <Card className="overflow-hidden">
    <div className="h-48 bg-muted overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
      />
    </div>
    <CardContent className="p-5">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-3">от {price} ₽ / сутки</p>
      <Button asChild variant="outline" className="w-full">
        <Link to={link}>Подробнее</Link>
      </Button>
    </CardContent>
  </Card>
);

const Index = () => {
  const cottages = [
    { title: "Стандарт", price: "3 500", image: "/placeholder.svg", link: "/cottages/standard" },
    { title: "Комфорт", price: "5 000", image: "/placeholder.svg", link: "/cottages/comfort" },
    { title: "Люкс", price: "7 000", image: "/placeholder.svg", link: "/cottages/lux" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <FeatureSection />
        
        {/* Cottages Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">Наши домики</h2>
              <Button asChild variant="outline">
                <Link to="/cottages">Все домики</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cottages.map((cottage, index) => (
                <CottageCard key={index} {...cottage} />
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">О базе отдыха «Лесная Гавань»</h2>
                <p className="text-lg mb-4">
                  Наша база отдыха расположена в живописном уголке природы на берегу красивого озера, 
                  окруженного лесом.
                </p>
                <p className="text-lg mb-6">
                  Мы предлагаем комфортабельные домики для проживания, разнообразные активности
                  для отдыха и развлечений, а также ресторан с вкусной домашней кухней.
                </p>
                <Button asChild>
                  <Link to="/contacts">Как добраться</Link>
                </Button>
              </div>
              <div className="bg-muted-foreground/10 h-80 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="База отдыха Лесная Гавань"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Отзывы гостей</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Гость {index + 1}</h4>
                      <p className="text-sm text-muted-foreground">Июль 2023</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {index === 0 
                      ? "Отличное место для отдыха от городской суеты! Уютный домик, чистый воздух, красивая природа. Обязательно приедем снова!"
                      : index === 1 
                        ? "Потрясающая атмосфера единения с природой. Хорошо организованная территория, внимательный персонал. Рекомендую!"
                        : "Идеальное место для семейного отдыха. Ребенок был в восторге от рыбалки и велопрогулок. Домик чистый и комфортный."}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
