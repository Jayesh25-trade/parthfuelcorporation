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
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#why-us", label: "Why Us" },
    { href: "#presence", label: "Our Presence" },
    { href: "#clients", label: "Our Clients" },
    { href: "#careers", label: "Careers" },
    { href: "#contact", label: "Contact Us" },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#141618]/95 backdrop-blur-md border-b border-[#2E3338]/60 shadow-lg py-3" : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 group">
            <img src={logo} alt="Parth Fuel Corporation" className="h-10 w-10 brightness-110" />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wider text-[#ECE5D8] uppercase group-hover:text-[#D87033] transition-colors">
                Parth Fuel
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#ECE5D8]/70 uppercase font-sans font-medium">
                Corporation
              </span>
            </div>
          </a>

          {/* Nav links matching mockup design */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-xs tracking-wider uppercase font-semibold text-[#ECE5D8]/85 hover:text-[#D87033] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D87033] hover:after:w-full after:transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side CTA Badge matching mockup */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right border-r border-[#ECE5D8]/20 pr-4">
              <span className="block text-[9px] font-bold tracking-[0.2em] uppercase text-[#D87033]">
                FUELLING
              </span>
              <span className="block text-[10px] font-serif tracking-[0.15em] uppercase text-[#ECE5D8]/90">
                A CLEANER TOMORROW
              </span>
            </div>
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-[#D87033] text-[#ECE5D8] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#C25F24] transition-all shadow-md flex items-center gap-2 group"
            >
              <span>Get Quote</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>

          <button
            className="md:hidden p-2 text-[#ECE5D8]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#141618] border-b border-[#2E3338] overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="container mx-auto px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-[#ECE5D8] py-2 text-sm font-semibold uppercase tracking-wider hover:text-[#D87033]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-[#D87033] text-[#ECE5D8] px-5 py-3 rounded-md text-xs font-semibold uppercase tracking-wider mt-2"
          >
            Get Quote
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
