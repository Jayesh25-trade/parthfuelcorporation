import logo from "@/assets/logo.png";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141618] text-[#ECE5D8] border-t border-[#2E3338]">
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Parth Fuel Corporation" className="h-10 w-10 brightness-110" />
              <div>
                <h3 className="font-serif font-bold text-xl uppercase tracking-wider text-[#ECE5D8]">Parth Fuel</h3>
                <span className="text-[10px] tracking-[0.25em] text-[#ECE5D8]/60 uppercase font-sans">Corporation</span>
              </div>
            </div>
            <p className="text-xs text-[#ECE5D8]/70 leading-relaxed max-w-sm font-sans">
              Fuelling a Cleaner Tomorrow. High-quality coal, biomass briquettes, and pellets for a stronger, cleaner, and more sustainable India.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/in/mahesh-mal-697119422/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#1D2024] border border-[#2E3338] flex items-center justify-center text-[#ECE5D8]/80 hover:text-[#D87033] hover:border-[#D87033] transition-all">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com/parthfuelcorporation23/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#1D2024] border border-[#2E3338] flex items-center justify-center text-[#ECE5D8]/80 hover:text-[#D87033] hover:border-[#D87033] transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:col-span-2">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-[#ECE5D8]">Quick Links</h4>
            <nav className="flex flex-col gap-2.5 text-xs text-[#ECE5D8]/70">
              {[
                { href: "#about", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#products", label: "Products" },
                { href: "#services", label: "Services" },
                { href: "#presence", label: "Our Presence" },
                { href: "#careers", label: "Careers" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="hover:text-[#D87033] transition-colors text-left w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4 md:col-span-3">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-[#ECE5D8]">Get in Touch</h4>
            <div className="space-y-3 text-xs text-[#ECE5D8]/70">
              <a href="tel:+919881125511" className="flex items-center gap-2 hover:text-[#D87033] transition-colors">
                <span>📞</span> +91 9881125511
              </a>
              <a href="mailto:parthfuelcorporation23@gmail.com" className="flex items-center gap-2 hover:text-[#D87033] transition-colors break-all">
                <span>✉️</span> info@parthfuelcorporation.in / parthfuelcorporation23@gmail.com
              </a>
              <p className="flex items-start gap-2 leading-relaxed">
                <span>📍</span> Shegaon & Khamgaon, Maharashtra, India
              </p>
            </div>
          </div>

          {/* Stay Updated Newsletter */}
          <div className="space-y-4 md:col-span-3">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-[#ECE5D8]">Stay Updated</h4>
            <p className="text-xs text-[#ECE5D8]/60">Subscribe to our latest newsletter for industry updates.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }} className="flex items-center border border-[#2E3338] rounded-full p-1 bg-[#1D2024]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent px-4 py-2 text-xs text-[#ECE5D8] focus:outline-none w-full placeholder:text-[#ECE5D8]/40"
                required
              />
              <button type="submit" className="w-8 h-8 rounded-full bg-[#D87033] text-white flex items-center justify-center hover:bg-[#C25F24] transition-colors shrink-0">
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#2E3338] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#ECE5D8]/40">
          <p>© {currentYear} Parth Fuel Corporation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-[#D87033] transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-[#D87033] transition-colors">Terms of Use</a>
            <a href="#about" className="hover:text-[#D87033] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
