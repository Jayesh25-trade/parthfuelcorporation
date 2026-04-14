import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#industries", label: "Industries" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3">
            <img src={logo} alt="Parth Fuel Corporation" className="h-10 w-10" />
            <span className={`font-bold text-lg hidden sm:block transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
              Parth Fuel Corporation
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium tracking-wide hover:opacity-70 ${scrolled ? "text-foreground" : "text-white"}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:opacity-90"
            >
              Get Quote
            </button>
          </nav>

          <button
            className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-background border-b border-border overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="container mx-auto px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-foreground py-2 text-base font-medium hover:text-primary"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-semibold mt-2"
          >
            Get Quote
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
