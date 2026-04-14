import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Parth Fuel Corporation" className="h-10 w-10" />
              <h3 className="font-bold text-lg">Parth Fuel Corporation</h3>
            </div>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              Manufacturer & supplier of biomass briquettes and industrial coal. Sustainable energy solutions for industries across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-background/50">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#about", label: "About Us" },
                { href: "#products", label: "Products" },
                { href: "#industries", label: "Industries" },
                { href: "#why-us", label: "Why Choose Us" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-background/60 hover:text-background transition-colors text-left w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-background/50">Products</h4>
            <div className="flex flex-col gap-3 text-sm text-background/60">
              <span>Biomass Briquettes</span>
              <span>Industrial Coal</span>
              <span>Custom Fuel Solutions</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-background/50">Contact Us</h4>
            <div className="space-y-3 text-sm text-background/60">
              <p>📍 Shegaon, Maharashtra, India</p>
              <a href="tel:+919881125511" className="block hover:text-background transition-colors">📞 +91 9881125511</a>
              <a href="mailto:parthfuelcorporation23@gmail.com" className="block hover:text-background transition-colors break-all">📧 parthfuelcorporation23@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {currentYear} Parth Fuel Corporation. All rights reserved.
          </p>
          <p className="text-xs text-background/40">
            Sustainable Energy for a Better Tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
