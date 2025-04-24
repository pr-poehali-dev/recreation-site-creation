import { Tent, Fish, Bike, Utensils, Wifi, Trees } from "lucide-react";

const features = [
  {
    icon: <Tent className="h-10 w-10 text-primary" />,
    title: "Уютные домики",
    description: "Комфортабельные домики с удобствами для проживания в любой сезон"
  },
  {
    icon: <Fish className="h-10 w-10 text-primary" />,
    title: "Рыбалка",
    description: "Отличная рыбалка на озере с богатым разнообразием рыбы"
  },
  {
    icon: <Bike className="h-10 w-10 text-primary" />,
    title: "Активный отдых",
    description: "Велопрогулки, квадроциклы, пешие маршруты по лесным тропам"
  },
  {
    icon: <Utensils className="h-10 w-10 text-primary" />,
    title: "Ресторан",
    description: "Ресторан с местной кухней и свежими экологичными продуктами"
  },
  {
    icon: <Wifi className="h-10 w-10 text-primary" />,
    title: "Wi-Fi",
    description: "Бесплатный Wi-Fi на всей территории базы отдыха"
  },
  {
    icon: <Trees className="h-10 w-10 text-primary" />,
    title: "Экологичность",
    description: "Чистый воздух, экологичная территория и природные материалы"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
