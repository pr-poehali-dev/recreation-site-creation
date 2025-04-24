import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Anchor, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: "Главная", link: "/" },
    { title: "О нас", link: "/about" },
    { title: "Домики", link: "/cottages" },
    { title: "Активности", link: "/activities" },
    { title: "Галерея", link: "/gallery" },
    { title: "Контакты", link: "/contacts" },
  ];

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Anchor className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Причал</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Booking Button (Desktop) */}
          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link to="/booking">Забронировать</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                  Забронировать
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
