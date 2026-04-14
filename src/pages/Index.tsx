import Layout from "@/components/Layout";
import { Leaf, Flame, Droplets, Ruler, Package, Factory, FlaskConical, Shirt, FileText, Gauge, Truck, ShieldCheck, BadgeCheck, IndianRupee, Clock, Phone, Mail, MapPin, ChevronRight, Zap } from "lucide-react";
import heroImg from "@/assets/briquettes-stack.jpg";
import factoryImg from "@/assets/factory.jpg";
import truckImg from "@/assets/truck-loading.jpg";
import rawImg from "@/assets/raw-material.jpg";
import coalImg from "@/assets/coal-material.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Biomass briquettes" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <Leaf className="text-primary" size={20} />
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Eco-friendly · Cost-effective · High Performance</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              Sustainable Fuel.<br />
              <span className="text-primary">Reliable Supply.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              Providing both eco-friendly biomass briquettes and high-performance industrial coal for complete fuel solutions.
            </p>
            <p className="text-base text-primary-foreground/60 mb-8 max-w-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
              Manufactured from agro-waste with 900 MT monthly capacity. Trusted by industries across Maharashtra.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              <a href="#contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-base hover:opacity-90 flex items-center gap-2">
                Get a Quote <ChevronRight size={18} />
              </a>
              <a href="#products" className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-foreground/10">
                View Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "900 MT", label: "Monthly Capacity" },
              { value: "5400+", label: "kcal/kg Coal GCV" },
              { value: "3800+", label: "kcal/kg Briquette GCV" },
              { value: "Since 2022", label: "Established" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Powering Industries with Reliable Energy</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Parth Fuel Corporation, established in 2022 and based in Maharashtra, is a growing manufacturer and supplier of biomass briquettes and industrial coal. We specialize in converting agro-waste materials like sawdust and groundnut shells into high-efficiency solid fuel, while also supplying premium-grade industrial coal.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With a monthly production capacity of 900 MT, we are committed to delivering consistent quality, timely supply, and dual fuel solutions to industries across India.
              </p>
            </div>
            <div className="relative">
              <img src={factoryImg} alt="Manufacturing facility" className="rounded-lg shadow-lg w-full" loading="lazy" width={1920} height={1080} />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-5 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">900 MT</div>
                <div className="text-sm text-primary-foreground/80">Monthly Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Our Products</p>
            <h2 className="text-3xl md:text-4xl font-bold">Dual Fuel Solutions for Every Need</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">We supply both eco-friendly biomass briquettes and high-performance industrial coal for diverse energy needs.</p>
          </div>

          {/* Biomass Briquettes */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg"><Leaf className="text-primary" size={24} /></div>
              Biomass Briquettes
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <img src={rawImg} alt="Raw materials for briquettes" className="rounded-lg shadow-lg w-full" loading="lazy" width={1920} height={1080} />
              <div>
                <ul className="space-y-5">
                  {[
                    { icon: Leaf, text: "Made from sawdust, groundnut shells & agro-waste" },
                    { icon: Flame, text: "High GCV (>3800 kcal/kg) for efficient combustion" },
                    { icon: Droplets, text: "Low moisture (<10%) & ash content (<7–9%)" },
                    { icon: Ruler, text: "Uniform size: 90mm / 90×150mm" },
                    { icon: Package, text: "Packaging: 50kg / Jumbo Bags / Loose" },
                    { icon: Gauge, text: "Eco-friendly alternative to traditional coal" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2.5 rounded-lg shrink-0">
                        <item.icon className="text-primary" size={20} />
                      </div>
                      <span className="text-foreground text-base">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Briquette Specs */}
            <div className="mt-10 bg-background rounded-xl p-8 shadow-sm border border-border">
              <h4 className="text-lg font-bold mb-6 text-center">Briquette Specifications</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {[
                  { label: "GCV", value: "3800+ kcal/kg" },
                  { label: "Moisture", value: "< 10%" },
                  { label: "Ash Content", value: "< 7–9%" },
                  { label: "Size", value: "90mm / 90×150mm" },
                  { label: "Packaging", value: "50kg / Jumbo / Loose" },
                ].map((spec) => (
                  <div key={spec.label} className="text-center p-4 rounded-lg bg-card">
                    <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                    <div className="text-lg font-bold text-foreground">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industrial Coal */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="bg-accent/10 p-2 rounded-lg"><Zap className="text-accent" size={24} /></div>
              Industrial Coal
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <img src={coalImg} alt="Industrial coal" className="rounded-lg shadow-lg w-full order-2 lg:order-1" loading="lazy" width={1280} height={864} />
              <div className="order-1 lg:order-2">
                <ul className="space-y-5">
                  {[
                    { icon: Flame, text: "High-quality coal suitable for industrial boilers" },
                    { icon: Gauge, text: "GCV: ~5400 kcal/kg (±200) for maximum efficiency" },
                    { icon: Droplets, text: "Moisture: ~35% (±3%)" },
                    { icon: Package, text: "Ash Content: ~8% (±1%)" },
                    { icon: Ruler, text: "Size: 25–50 mm for uniform combustion" },
                    { icon: ShieldCheck, text: "Consistent performance and reliable combustion" },
                    { icon: Factory, text: "Ideal for continuous industrial operations" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-4">
                      <div className="bg-accent/10 p-2.5 rounded-lg shrink-0">
                        <item.icon className="text-accent" size={20} />
                      </div>
                      <span className="text-foreground text-base">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Coal Specs */}
            <div className="mt-10 bg-background rounded-xl p-8 shadow-sm border border-border">
              <h4 className="text-lg font-bold mb-6 text-center">Coal Specifications</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { label: "GCV", value: "~5400 kcal/kg" },
                  { label: "Moisture", value: "~35% (±3%)" },
                  { label: "Ash Content", value: "~8% (±1%)" },
                  { label: "Size", value: "25–50 mm" },
                ].map((spec) => (
                  <div key={spec.label} className="text-center p-4 rounded-lg bg-card">
                    <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                    <div className="text-lg font-bold text-foreground">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Industries We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold">Trusted Across Sectors</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Our dual fuel solutions power operations across diverse industrial segments.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Factory, label: "Food Processing" },
              { icon: FlaskConical, label: "Chemical Industries" },
              { icon: Shirt, label: "Textile Mills" },
              { icon: FileText, label: "Paper & Packaging" },
              { icon: Gauge, label: "Boiler Industries" },
            ].map((ind) => (
              <div key={ind.label} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ind.icon className="text-primary" size={24} />
                </div>
                <p className="font-semibold text-sm">{ind.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Capability */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Supply Capability</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Large-Scale, Reliable Delivery</h2>
              <div className="space-y-6">
                {[
                  { icon: Gauge, title: "900 MT Monthly Capacity", desc: "Consistent large-volume production of briquettes and coal" },
                  { icon: Truck, title: "Pan-Maharashtra Supply", desc: "Bulk supply across Maharashtra & nearby states" },
                  { icon: ShieldCheck, title: "Quality Certified", desc: "Consistent quality with test certificates for every batch" },
                  { icon: Clock, title: "Timely Logistics", desc: "Strong road transport network for on-time delivery" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <item.icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img src={truckImg} alt="Truck loading" className="rounded-lg shadow-lg w-full" loading="lazy" width={1920} height={1080} />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Our Clients</p>
            <h2 className="text-3xl md:text-4xl font-bold">Trusted by Industry Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Siddharth Carbochem Products Ltd",
              "Rishabh Metal and Chemicals Pvt. Ltd.",
              "Sahyadri Industries",
            ].map((client) => (
              <div key={client} className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BadgeCheck className="text-primary" size={24} />
                </div>
                <p className="font-semibold text-foreground">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-primary-foreground/70 font-semibold text-sm tracking-wider uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold">The Parth Fuel Advantage</h2>
            <p className="text-primary-foreground/70 mt-3 max-w-2xl mx-auto">We supply both eco-friendly biomass briquettes and high-performance industrial coal for diverse energy needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Flame, title: "Multiple Fuel Options", desc: "Briquettes + Coal for diverse industrial energy needs" },
              { icon: Truck, title: "Reliable Bulk Supply", desc: "900 MT monthly capacity with on-time delivery" },
              { icon: ShieldCheck, title: "Consistent Quality", desc: "Strict quality control with test certificates" },
              { icon: Gauge, title: "Strong Logistics Network", desc: "Pan-Maharashtra road transport for timely supply" },
              { icon: IndianRupee, title: "Competitive Pricing", desc: "Best value without compromising quality" },
              { icon: Leaf, title: "Sustainability Focus", desc: "Green biomass fuel from agro-waste materials" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
                <item.icon className="mx-auto mb-3" size={28} />
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Contact Us</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Discuss Your Fuel Needs</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Reach out for bulk orders, pricing, or any queries about our biomass briquettes and industrial coal supply.
              </p>
              <div className="space-y-5">
                <a href="tel:+919881125511" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg"><Phone className="text-primary" size={20} /></div>
                  <span className="text-lg">+91 9881125511</span>
                </a>
                <a href="mailto:parthfuelcorporation23@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg"><Mail className="text-primary" size={20} /></div>
                  <span className="text-lg break-all">parthfuelcorporation23@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="bg-primary/10 p-3 rounded-lg"><MapPin className="text-primary" size={20} /></div>
                  <span className="text-lg">Shegaon, Maharashtra, India</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+91 ..." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your fuel requirements..." />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
