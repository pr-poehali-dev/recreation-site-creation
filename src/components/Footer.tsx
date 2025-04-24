import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Anchor, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="h-6 w-6" />
              <span className="font-bold text-xl">Причал</span>
            </div>
            <p className="mb-6 text-blue-100">
              База отдыха на берегу Бурейского водохранилища. Идеальное место для отдыха, 
              рыбалки и водных развлечений.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/cottages" className="text-blue-100 hover:text-white transition-colors">
                  Домики
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-blue-100 hover:text-white transition-colors">
                  Активности
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-blue-100 hover:text-white transition-colors">
                  Галерея
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-blue-100 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>info@prichal-base.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>Бурейское водохранилище, берег у п. Талакан</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Бронирование</h3>
            <p className="text-blue-100 mb-4">
              Забронируйте отдых на базе «Причал» прямо сейчас по цене 1500 ₽ с человека в сутки
            </p>
            <Button asChild size="sm" className="w-full bg-white text-primary hover:bg-blue-50">
              <Link to="/booking">Забронировать</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} База отдыха «Причал». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
