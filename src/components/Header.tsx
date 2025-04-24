import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneCall, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Лесная Гавань</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-base font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/cottages" className="text-base font-medium hover:text-primary transition-colors">
            Домики
          </Link>
          <Link to="/activities" className="text-base font-medium hover:text-primary transition-colors">
            Развлечения
          </Link>
          <Link to="/gallery" className="text-base font-medium hover:text-primary transition-colors">
            Галерея
          </Link>
          <Link to="/contacts" className="text-base font-medium hover:text-primary transition-colors">
            Контакты
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+7XXXXXXXXXX" className="flex items-center gap-2 text-base font-medium">
            <PhoneCall className="h-5 w-5 text-primary" />
            <span>+7 (XXX) XXX-XX-XX</span>
          </a>
          <Button asChild>
            <Link to="/booking">Забронировать</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 border-t">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/cottages" 
              className="text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Домики
            </Link>
            <Link 
              to="/activities" 
              className="text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Развлечения
            </Link>
            <Link 
              to="/gallery" 
              className="text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Галерея
            </Link>
            <Link 
              to="/contacts" 
              className="text-base font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <a 
              href="tel:+7XXXXXXXXXX" 
              className="flex items-center gap-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <PhoneCall className="h-5 w-5 text-primary" />
              <span>+7 (XXX) XXX-XX-XX</span>
            </a>
            <Button asChild className="w-full">
              <Link to="/booking" onClick={() => setIsMenuOpen(false)}>Забронировать</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
