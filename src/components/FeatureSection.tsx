import { Ship, Fish, Swim, Home, Utensils, Sun } from "lucide-react";

const features = [
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Комфортное проживание",
    description: "Уютные домики со всеми удобствами на берегу Бурейского водохранилища"
  },
  {
    icon: <Fish className="h-10 w-10 text-primary" />,
    title: "Отличная рыбалка",
    description: "Богатые рыбой места, где можно поймать отличный улов"
  },
  {
    icon: <Swim className="h-10 w-10 text-primary" />,
    title: "Водные развлечения",
    description: "Купание, катание на лодках и другие водные развлечения"
  },
  {
    icon: <Sun className="h-10 w-10 text-primary" />,
    title: "Пляжный отдых",
    description: "Оборудованные места для загара и отдыха у воды"
  },
  {
    icon: <Ship className="h-10 w-10 text-primary" />,
    title: "Прогулки на катере",
    description: "Возможность арендовать катер для прогулок по водохранилищу"
  },
  {
    icon: <Utensils className="h-10 w-10 text-primary" />,
    title: "Зона барбекю",
    description: "Оборудованные места для приготовления шашлыка и барбекю"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-100"
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
