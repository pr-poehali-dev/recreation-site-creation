import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Лесная Гавань</h3>
            <p className="mb-4">База отдыха на берегу живописного озера с уютными домиками и развлечениями для всей семьи.</p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://facebook.com" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <p>Красивое озеро, Экологичный район, Природная область</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <a href="tel:+7XXXXXXXXXX" className="hover:text-accent transition-colors">+7 (XXX) XXX-XX-XX</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@lesnaya-gavan.ru" className="hover:text-accent transition-colors">info@lesnaya-gavan.ru</a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <nav className="grid grid-cols-1 gap-2">
              <Link to="/" className="hover:text-accent transition-colors">Главная</Link>
              <Link to="/cottages" className="hover:text-accent transition-colors">Домики</Link>
              <Link to="/activities" className="hover:text-accent transition-colors">Развлечения</Link>
              <Link to="/gallery" className="hover:text-accent transition-colors">Галерея</Link>
              <Link to="/contacts" className="hover:text-accent transition-colors">Контакты</Link>
              <Link to="/booking" className="hover:text-accent transition-colors">Бронирование</Link>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Лесная Гавань. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
