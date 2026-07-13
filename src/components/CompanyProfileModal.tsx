import { useState } from "react";
import { 
  X, ChevronLeft, ChevronRight, Download, Eye, FileText, 
  Award, ShieldCheck, Truck, Users, Clock, Leaf, MapPin, 
  Flame, Compass, Ship, Calendar, Mail, Phone, Factory 
} from "lucide-react";
import logo from "@/assets/logo.png";

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const slides = [
  // Slide 1: Cover
  {
    type: "cover",
    title: "Parth Fuel Corporation",
    subtitle: "LEADERS IN INDUSTRIAL BIOMASS ENERGY & IMPORTED COAL",
    tagline: "Your Partner in Energy Security & Sustainable Growth",
    footer: "Corporate Profile 2026 · www.parthfuelcorporation.com"
  },
  // Slide 2: Contents
  {
    type: "contents",
    title: "Document Contents",
    subtitle: "Strategic energy supply framework",
    items: [
      { num: "01", name: "Corporate Identity & Aspects" },
      { num: "02", name: "Operational Strengths" },
      { num: "03", name: "Premium Fuel Products" },
      { num: "04", name: "Logistics & Sieve Infrastructure" },
      { num: "05", name: "Supply Network & Linkages" },
      { num: "06", name: "B2B Service Transparency" },
      { num: "07", name: "Target Industry Sectors" },
      { num: "08", name: "Quality Assurance & Contact" }
    ]
  },
  // Slide 3: Brand Aspects
  {
    type: "aspects",
    title: "Brand Aspects",
    subtitle: "Vision, Mission & Core Values",
    vision: "To lead India's transition to sustainable industrial energy by manufacturing high-grade biomass fuels and sourcing premium imported coal, ensuring cost efficiency and carbon reduction.",
    mission: "Building solid, transparent energy supply lines that eliminate weight discrepancies and deliver certified calorific value on time, keeping industrial boilers running continuously.",
    values: "Operational accountability, carbon-offset innovation, B2B partnership commitment, and complete transparency in weights and billing."
  },
  // Slide 4: Strengths
  {
    type: "strengths",
    title: "Operational Strengths",
    subtitle: "Why industries choose Parth Fuel Corporation",
    points: [
      { title: "900 MT Monthly Supply", desc: "High-volume biomass manufacturing capacity ensuring non-stop solid fuel deliveries." },
      { title: "Sieve Sizing Expertise", desc: "Advanced screening equipment to deliver exact coal sizes requested by clients." },
      { title: "Anti-Tamper Lock Seals", desc: "Numbered security seals applied to all transport trucks to prevent grade variation." },
      { title: "Dedicated Site Coordination", desc: "Experienced staff stationed at ports and warehouses to oversee quality loading." }
    ]
  },
  // Slide 5: Products
  {
    type: "products",
    title: "Solid Fuel Products",
    subtitle: "Technical specifications portfolio",
    briquettes: {
      title: "Biomass Briquettes (Soyabean & Corn)",
      gcv: "3500 (±200) kcal/kg",
      ash: "Less than 10%",
      moisture: "Less than 10%",
      sizes: "90mm & 70mm diameters"
    },
    pellets: {
      title: "Biomass Pellets (Sawdust & Soya)",
      gcv: "3600 - 4200 kcal/kg",
      ash: "Less than 5% (Sawdust) / 10% (Soya)",
      moisture: "6% - 10%",
      sizes: "6mm to 25mm stoker size"
    },
    coal: {
      title: "Imported Indonesian Coal",
      gcv: "Up to 6500 kcal/kg (GAD)",
      ash: "7% to 12% depending on GAR grade",
      moisture: "High Volatile Matter, Low Sulphur (<0.9%)",
      sizes: "Screened 25-50mm, Rom 0-200mm"
    }
  },
  // Slide 6: Infrastructure
  {
    type: "infrastructure",
    title: "Infrastructure & Logistics",
    subtitle: "Built for volume and protection",
    details: [
      "Sieve screening equipment at our central Khamgaon yard to isolate custom sizes.",
      "Heavy JCB loaders and mechanical weigh scales to maintain loading schedules.",
      "Elevated concrete storage bays at Wani and Khamgaon to completely eliminate soil and moisture ingress.",
      "Waterproof cargo transport fleet secured under heavy-duty tarpaulins during transit."
    ]
  },
  // Slide 7: Network
  {
    type: "network",
    title: "Supply Network & Port Linkages",
    subtitle: "Strategic distribution nodes",
    import: "Exclusive import linkages through key Maharashtra maritime entries: Dharamtar Port, Jaigad Port, and Dighi Port.",
    warehouses: "Central processing and warehousing hubs situated in Khamgaon and Wani to coordinate domestic supplies.",
    distribution: "Prompt delivery pipelines supplying B2B industrial belts across Pan-Maharashtra, Tamil Nadu, and neighbouring states."
  },
  // Slide 8: Services
  {
    type: "services",
    title: "B2B Service Transparency",
    subtitle: "Our 5-Point Operational Principles",
    points: [
      { step: "01", title: "Mines Weight Receipts", desc: "Provided to clients to verify origin weights and prevent shipping errors." },
      { step: "02", title: "Truck Security Seal", desc: "Tamper-proof seals locked on every cargo load to ensure grade integrity." },
      { step: "03", title: "Live Dispatch Alerts", desc: "SMS and email updates containing Truck Numbers, Net Weight, and ETA." },
      { step: "04", title: "Lab Batch Quality Audit", desc: "Represented GCV test reports sent with every solid fuel consignment." },
      { step: "05", title: "Monthly Client Review", desc: "Scheduled audits to calibrate delivery frequencies and stoker needs." }
    ]
  },
  // Slide 9: Industries
  {
    type: "industries",
    title: "Sectors We Serve",
    subtitle: "Driving B2B manufacturing energy",
    sectors: [
      "Cement & Steel Plants",
      "Chemical Processing Units",
      "Textile & Yarn Mills",
      "Paper & Pulp Industries",
      "Distilleries & Breweries",
      "Boiler & Thermal Plants",
      "Metals & Alloy Smelters"
    ]
  },
  // Slide 10: Promise & Contact
  {
    type: "contact",
    title: "Our Energy Promise",
    subtitle: "Parth Fuel Corporation",
    promise: "We commit to delivering consistent calorific values, exact billable weights, and reliable cargo logistics, ensuring your B2B boiler utilities perform at peak efficiency 365 days a year.",
    hq: "Shegaon, Maharashtra - 444203, India",
    warehouse: "Khamgaon MIDC, Maharashtra - 444303, India",
    helpline: "+91 9881125511",
    email: "parthfuelcorporation23@gmail.com"
  }
];

const CompanyProfileModal = ({ isOpen, onClose }: CompanyProfileModalProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 animate-fade-in print:bg-white print:p-0">
      {/* Main Overlay Window */}
      <div className="bg-card border border-border w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[85vh] print:h-auto print:border-none print:shadow-none print:w-full">
        {/* Modal Controls Bar */}
        <div className="bg-muted px-6 py-4 flex items-center justify-between border-b border-border print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="text-primary" size={20} />
            <span className="font-bold text-sm text-foreground uppercase tracking-wider">Parth Fuel Corporation - B2B Profile Viewer</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrint}
              className="bg-primary text-primary-foreground hover:opacity-90 px-4 py-2 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-opacity"
            >
              <Download size={14} /> Print / Save PDF
            </button>
            <button 
              onClick={onClose}
              className="bg-background border border-border text-foreground hover:bg-muted p-2 rounded-md transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Slide Canvas Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 flex items-center justify-center bg-background/50 print:bg-white print:p-0">
          <div className="w-full max-w-4xl aspect-[16/10] bg-card border border-border rounded-xl shadow-md p-8 md:p-12 flex flex-col justify-between relative print:aspect-auto print:border-none print:shadow-none print:p-0 print:max-w-full">
            
            {/* Top Branding Banner (Print-Safe) */}
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Parth Fuel" className="h-10 w-auto object-contain" />
                <div>
                  <h4 className="text-base font-extrabold text-foreground tracking-wide">PARTH FUEL CORPORATION</h4>
                  <p className="text-[10px] text-primary uppercase font-bold tracking-widest">Solid Fuel & Coal Solutions</p>
                </div>
              </div>
              <div className="text-right text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                Slide {currentSlide + 1} / {slides.length}
              </div>
            </div>

            {/* Slide Content Switcher */}
            <div className="flex-1 flex flex-col justify-center py-4">
              {/* Slide 1: Cover */}
              {slides[currentSlide].type === "cover" && (
                <div className="text-center space-y-6 animate-fade-in">
                  <div className="bg-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                    <Flame size={48} className="animate-pulse" />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-primary font-bold text-sm md:text-base tracking-widest uppercase">
                    {slides[currentSlide].subtitle}
                  </p>
                  <div className="h-1 w-24 bg-primary mx-auto my-2" />
                  <p className="text-muted-foreground text-base max-w-xl mx-auto italic">
                    "{slides[currentSlide].tagline}"
                  </p>
                </div>
              )}

              {/* Slide 2: Contents */}
              {slides[currentSlide].type === "contents" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center md:text-left mb-4">
                    <h2 className="text-2xl font-extrabold text-foreground">{slides[currentSlide].title}</h2>
                    <p className="text-xs text-primary uppercase tracking-widest font-semibold">{slides[currentSlide].subtitle}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {slides[currentSlide].items?.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 bg-muted/20 p-3 rounded-lg border border-border">
                        <span className="text-lg font-extrabold text-primary">{item.num}</span>
                        <span className="text-sm font-semibold text-foreground">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Slide 3: Brand Aspects */}
              {slides[currentSlide].type === "aspects" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-extrabold text-foreground">{slides[currentSlide].title}</h2>
                    <p className="text-xs text-primary uppercase tracking-widest font-semibold">{slides[currentSlide].subtitle}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    <div className="p-5 bg-muted/20 rounded-xl border border-border space-y-2">
                      <h4 className="font-extrabold text-primary text-sm flex items-center gap-1.5 uppercase">
                        <Eye size={16} /> Vision
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{slides[currentSlide].vision}</p>
                    </div>
                    <div className="p-5 bg-muted/20 rounded-xl border border-border space-y-2">
                      <h4 className="font-extrabold text-primary text-sm flex items-center gap-1.5 uppercase">
                        <Compass size={16} /> Mission
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{slides[currentSlide].mission}</p>
                    </div>
                    <div className="p-5 bg-muted/20 rounded-xl border border-border space-y-2">
                      <h4 className="font-extrabold text-primary text-sm flex items-center gap-1.5 uppercase">
                        <Award size={16} /> Values
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{slides[currentSlide].values}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Slide 4: Strengths */}
              {slides[currentSlide].type === "strengths" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-extrabold text-foreground">{slides[currentSlide].title}</h2>
                    <p className="text-xs text-primary uppercase tracking-widest font-semibold">{slides[currentSlide].subtitle}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    {slides[currentSlide].points?.map((pt, idx) => (
                      <div key={idx} className="p-4 bg-muted/20 rounded-lg border border-border flex gap-4">
                        <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center text-primary shrink-0">
                          {idx === 0 && <Factory size={18} />}
                          {idx === 1 && <FileText size={18} />}
                          {idx === 2 && <ShieldCheck size={18} />}
                          {idx === 3 && <Users size={18} />}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm text-foreground">{pt.title}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{pt.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Slide 5: Products */}
              {slides[currentSlide].type === "products" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-extrabold text-foreground">{slides[currentSlide].title}</h2>
                    <p className="text-xs text-primary uppercase tracking-widest font-semibold">{slides[currentSlide].subtitle}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    <div className="p-4 bg-muted/20 border border-border rounded-xl space-y-2">
                      <h4 className="font-extrabold text-sm text-primary uppercase tracking-wider">{slides[currentSlide].briquettes?.title}</h4>
                      <div className="text-[11px] space-y-1 text-muted-foreground">
                        <div><strong>GCV:</strong> {slides[currentSlide].briquettes?.gcv}</div>
                        <div><strong>Ash Content:</strong> {slides[currentSlide].briquettes?.ash}</div>
                        <div><strong>Moisture:</strong> {slides[currentSlide].briquettes?.moisture}</div>
                        <div><strong>Sizes:</strong> {slides[currentSlide].briquettes?.sizes}</div>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/20 border border-border rounded-xl space-y-2">
                      <h4 className="font-extrabold text-sm text-primary uppercase tracking-wider">{slides[currentSlide].pellets?.title}</h4>
                      <div className="text-[11px] space-y-1 text-muted-foreground">
                        <div><strong>GCV:</strong> {slides[currentSlide].pellets?.gcv}</div>
                        <div><strong>Ash Content:</strong> {slides[currentSlide].pellets?.ash}</div>
                        <div><strong>Moisture:</strong> {slides[currentSlide].pellets?.moisture}</div>
                        <div><strong>Sizes:</strong> {slides[currentSlide].pellets?.sizes}</div>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/20 border border-border rounded-xl space-y-2">
                      <h4 className="font-extrabold text-sm text-primary uppercase tracking-wider">{slides[currentSlide].coal?.title}</h4>
                      <div className="text-[11px] space-y-1 text-muted-foreground">
                        <div><strong>GCV GAD:</strong> {slides[currentSlide].coal?.gcv}</div>
                        <div><strong>Ash Range:</strong> {slides[currentSlide].coal?.ash}</div>
                        <div><strong>Features:</strong> {slides[currentSlide].coal?.moisture}</div>
                        <div><strong>Dimensions:</strong> {slides[currentSlide].coal?.sizes}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Slide 6: Infrastructure */}
              {slides[currentSlide].type === "infrastructure" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-extrabold text-foreground">{slides[currentSlide].title}</h2>
                    <p className="text-xs text-primary uppercase tracking-widest font-semibold">{slides[currentSlide].subtitle}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {slides[currentSlide].details?.map((desc, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-muted/20 p-4 rounded-lg border border-border">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                        <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Slide 7: Network */}
              {slides[currentSlide].type === "network" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-extrabold text-foreground">{slides[currentSlide].title}</h2>
                    <p className="text-xs text-primary uppercase tracking-widest font-semibold">{slides[currentSlide].subtitle}</p>
                  </div>
                  <div className="space-y-4 pt-4 text-xs md:text-sm">
                    <div className="p-4 bg-muted/20 border border-border rounded-lg flex items-start gap-3">
                      <Ship className="text-primary shrink-0" size={18} />
                      <div>
                        <strong className="text-foreground">Import Port Corridors:</strong>
                        <p className="text-muted-foreground mt-0.5">{slides[currentSlide].import}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/20 border border-border rounded-lg flex items-start gap-3">
                      <Factory className="text-primary shrink-0" size={18} />
                      <div>
                        <strong className="text-foreground">Regional Stockpiles:</strong>
                        <p className="text-muted-foreground mt-0.5">{slides[currentSlide].warehouses}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/20 border border-border rounded-lg flex items-start gap-3">
                      <MapPin className="text-primary shrink-0" size={18} />
                      <div>
                        <strong className="text-foreground">Supply Reach:</strong>
                        <p className="text-muted-foreground mt-0.5">{slides[currentSlide].distribution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Slide 8: Services */}
              {slides[currentSlide].type === "services" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-extrabold text-foreground">{slides[currentSlide].title}</h2>
                    <p className="text-xs text-primary uppercase tracking-widest font-semibold">{slides[currentSlide].subtitle}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-2">
                    {slides[currentSlide].points?.map((pt, idx) => (
                      <div key={idx} className="p-3 bg-muted/20 border border-border rounded-lg text-center space-y-2 flex flex-col justify-between">
                        <span className="text-2xl font-extrabold text-primary/45">{pt.step}</span>
                        <h4 className="font-bold text-xs text-foreground leading-tight">{pt.title}</h4>
                        <p className="text-[10px] text-muted-foreground leading-relaxed">{pt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Slide 9: Industries */}
              {slides[currentSlide].type === "industries" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-extrabold text-foreground">{slides[currentSlide].title}</h2>
                    <p className="text-xs text-primary uppercase tracking-widest font-semibold">{slides[currentSlide].subtitle}</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 pt-6 max-w-2xl mx-auto">
                    {slides[currentSlide].sectors?.map((sec, idx) => (
                      <span key={idx} className="bg-primary/10 text-primary border border-primary/20 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Slide 10: Promise & Contact */}
              {slides[currentSlide].type === "contact" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 items-center">
                    <div className="md:col-span-7 space-y-4">
                      <h4 className="font-extrabold text-sm text-primary uppercase tracking-wider flex items-center gap-1.5">
                        <Award size={16} /> Quality Commitment
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic">
                        "{slides[currentSlide].promise}"
                      </p>
                    </div>
                    <div className="md:col-span-5 bg-muted/20 border border-border rounded-xl p-4 space-y-3 text-xs">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary shrink-0" />
                        <span className="text-muted-foreground"><strong>HQ:</strong> {slides[currentSlide].hq}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-primary shrink-0" />
                        <span className="text-muted-foreground"><strong>Helpline:</strong> {slides[currentSlide].helpline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-primary shrink-0" />
                        <span className="text-muted-foreground break-all"><strong>Email:</strong> {slides[currentSlide].email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Footer Banner (Print-Safe) */}
            <div className="border-t border-border pt-4 mt-6 flex items-center justify-between text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
              <span>Parth Fuel Corporation © 2026</span>
              <span className="print:hidden">Use left/right arrows to browse</span>
              <span>Your Partner in Energy</span>
            </div>
          </div>
        </div>

        {/* Slide Control Navigation Buttons (Hidden in Print) */}
        <div className="bg-muted px-6 py-4 flex items-center justify-between border-t border-border print:hidden">
          <button 
            onClick={prevSlide}
            className="bg-background border border-border text-foreground hover:bg-muted px-4 py-2 rounded-md text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            <ChevronLeft size={16} /> Previous Slide
          </button>
          <div className="flex gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${currentSlide === idx ? "bg-primary" : "bg-border hover:bg-muted-foreground/30"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="bg-background border border-border text-foreground hover:bg-muted px-4 py-2 rounded-md text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            Next Slide <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Full Print-Ready Document Layout (Printed only on window.print()) */}
      <div className="hidden print:block absolute top-0 left-0 w-[210mm] text-foreground bg-white font-sans">
        {slides.map((slide, sIdx) => (
          <div 
            key={sIdx} 
            className="w-[210mm] h-[297mm] p-[15mm] box-border flex flex-col justify-between border border-gray-100 bg-white"
            style={{ pageBreakAfter: "always", breakAfter: "page" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-green-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-green-900 flex items-center justify-center text-white font-black text-lg">P</div>
                <div>
                  <h4 className="text-xs font-black text-gray-900 uppercase tracking-wider">PARTH FUEL CORPORATION</h4>
                  <p className="text-[8px] text-green-800 font-bold uppercase tracking-widest">Solid Fuel & Coal Solutions</p>
                </div>
              </div>
              <div className="text-right text-[8px] text-gray-400 uppercase tracking-widest font-bold">
                Section 0{sIdx + 1}
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 flex flex-col justify-center py-8">
              {slide.type === "cover" && (
                <div className="text-center space-y-8">
                  <div className="w-20 h-20 rounded-full border-4 border-green-800 flex items-center justify-center text-green-900 mx-auto">
                    <span className="font-extrabold text-4xl">P</span>
                  </div>
                  <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                    {slide.title}
                  </h1>
                  <div className="h-1 w-20 bg-green-800 mx-auto" />
                  <p className="text-green-800 font-extrabold text-sm uppercase tracking-widest leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <p className="text-gray-500 text-sm max-w-md mx-auto italic pt-4">
                    "{slide.tagline}"
                  </p>
                </div>
              )}

              {slide.type === "contents" && (
                <div className="space-y-6">
                  <div className="mb-4">
                    <h2 className="text-xl font-extrabold text-gray-900">{slide.title}</h2>
                    <p className="text-[9px] text-green-800 uppercase tracking-wider font-bold">{slide.subtitle}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {slide.items?.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 border border-gray-200 p-3 rounded bg-gray-50">
                        <span className="text-sm font-extrabold text-green-800">{item.num}</span>
                        <span className="text-xs font-semibold text-gray-700">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === "aspects" && (
                <div className="space-y-6">
                  <div className="mb-4">
                    <h2 className="text-xl font-extrabold text-gray-900">{slide.title}</h2>
                    <p className="text-[9px] text-green-800 uppercase tracking-wider font-bold">{slide.subtitle}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-800 pl-4 space-y-1">
                      <h4 className="text-xs font-extrabold text-green-900 uppercase">Vision</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{slide.vision}</p>
                    </div>
                    <div className="border-l-4 border-green-800 pl-4 space-y-1">
                      <h4 className="text-xs font-extrabold text-green-900 uppercase">Mission</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{slide.mission}</p>
                    </div>
                    <div className="border-l-4 border-green-800 pl-4 space-y-1">
                      <h4 className="text-xs font-extrabold text-green-900 uppercase">Core Values</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{slide.values}</p>
                    </div>
                  </div>
                </div>
              )}

              {slide.type === "strengths" && (
                <div className="space-y-6">
                  <div className="mb-4">
                    <h2 className="text-xl font-extrabold text-gray-900">{slide.title}</h2>
                    <p className="text-[9px] text-green-800 uppercase tracking-wider font-bold">{slide.subtitle}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {slide.points?.map((pt, idx) => (
                      <div key={idx} className="p-3 border border-gray-200 bg-gray-50 rounded space-y-1">
                        <h4 className="font-extrabold text-xs text-gray-900">{pt.title}</h4>
                        <p className="text-[10px] text-gray-500 leading-relaxed">{pt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === "products" && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <h2 className="text-xl font-extrabold text-gray-900">{slide.title}</h2>
                    <p className="text-[9px] text-green-800 uppercase tracking-wider font-bold">{slide.subtitle}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 border border-gray-200 rounded bg-gray-50">
                      <h4 className="font-extrabold text-xs text-green-900 uppercase">{slide.briquettes?.title}</h4>
                      <p className="text-[10px] text-gray-500 mt-1">
                        GCV: {slide.briquettes?.gcv} | Ash: {slide.briquettes?.ash} | Moisture: {slide.briquettes?.moisture} | Sizes: {slide.briquettes?.sizes}
                      </p>
                    </div>
                    <div className="p-3 border border-gray-200 rounded bg-gray-50">
                      <h4 className="font-extrabold text-xs text-green-900 uppercase">{slide.pellets?.title}</h4>
                      <p className="text-[10px] text-gray-500 mt-1">
                        GCV: {slide.pellets?.gcv} | Ash: {slide.pellets?.ash} | Moisture: {slide.pellets?.moisture} | Sizes: {slide.pellets?.sizes}
                      </p>
                    </div>
                    <div className="p-3 border border-gray-200 rounded bg-gray-50">
                      <h4 className="font-extrabold text-xs text-green-900 uppercase">{slide.coal?.title}</h4>
                      <p className="text-[10px] text-gray-500 mt-1">
                        GCV: {slide.coal?.gcv} | Ash: {slide.coal?.ash} | Features: {slide.coal?.moisture} | Sizing: {slide.coal?.sizes}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {slide.type === "infrastructure" && (
                <div className="space-y-6">
                  <div className="mb-4">
                    <h2 className="text-xl font-extrabold text-gray-900">{slide.title}</h2>
                    <p className="text-[9px] text-green-800 uppercase tracking-wider font-bold">{slide.subtitle}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {slide.details?.map((desc, idx) => (
                      <div key={idx} className="flex gap-2 border border-gray-200 p-3 rounded bg-gray-50 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-800 mt-1.5 shrink-0" />
                        <p className="text-[10px] text-gray-600 leading-normal">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === "network" && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <h2 className="text-xl font-extrabold text-gray-900">{slide.title}</h2>
                    <p className="text-[9px] text-green-800 uppercase tracking-wider font-bold">{slide.subtitle}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 border border-gray-200 rounded bg-gray-50 text-[10px] leading-relaxed">
                      <strong className="text-gray-900 uppercase block mb-0.5">Maritime Import Linkages:</strong>
                      <span className="text-gray-600">{slide.import}</span>
                    </div>
                    <div className="p-3 border border-gray-200 rounded bg-gray-50 text-[10px] leading-relaxed">
                      <strong className="text-gray-900 uppercase block mb-0.5">Central Stockpiles:</strong>
                      <span className="text-gray-600">{slide.warehouses}</span>
                    </div>
                    <div className="p-3 border border-gray-200 rounded bg-gray-50 text-[10px] leading-relaxed">
                      <strong className="text-gray-900 uppercase block mb-0.5">Inland Supply Corridors:</strong>
                      <span className="text-gray-600">{slide.distribution}</span>
                    </div>
                  </div>
                </div>
              )}

              {slide.type === "services" && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <h2 className="text-xl font-extrabold text-gray-900">{slide.title}</h2>
                    <p className="text-[9px] text-green-800 uppercase tracking-wider font-bold">{slide.subtitle}</p>
                  </div>
                  <div className="space-y-2">
                    {slide.points?.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-3 border border-gray-100 p-2.5 rounded bg-gray-50">
                        <span className="text-xs font-bold text-green-800 shrink-0">{pt.step}</span>
                        <div>
                          <h4 className="font-extrabold text-[10px] text-gray-900 uppercase tracking-wider leading-tight">{pt.title}</h4>
                          <p className="text-[9px] text-gray-500 leading-normal mt-0.5">{pt.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === "industries" && (
                <div className="space-y-6">
                  <div className="mb-4">
                    <h2 className="text-xl font-extrabold text-gray-900">{slide.title}</h2>
                    <p className="text-[9px] text-green-800 uppercase tracking-wider font-bold">{slide.subtitle}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                    {slide.sectors?.map((sec, idx) => (
                      <div key={idx} className="border border-green-800 bg-green-50/30 text-green-900 p-2.5 rounded text-center text-xs font-bold uppercase tracking-wider">
                        {sec}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === "contact" && (
                <div className="space-y-6">
                  <div className="border-l-4 border-green-800 pl-4 space-y-2">
                    <h4 className="text-xs font-extrabold text-green-900 uppercase">Quality Commitment</h4>
                    <p className="text-xs text-gray-600 leading-relaxed italic">
                      "{slide.promise}"
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border border-gray-200 p-4 bg-gray-50 rounded text-xs text-gray-700">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-wider">Main Office</h4>
                      <p>{slide.hq}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-wider">Warehouse Unit</h4>
                      <p>{slide.warehouse}</p>
                    </div>
                    <div className="mt-2">
                      <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-wider">Helpline</h4>
                      <p>{slide.helpline}</p>
                    </div>
                    <div className="mt-2">
                      <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-wider">Email Contact</h4>
                      <p>{slide.email}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 pt-3 flex items-center justify-between text-[8px] text-gray-400 uppercase tracking-widest font-bold">
              <span>Parth Fuel Corporation © 2026</span>
              <span>Your Partner in Energy Security & Growth</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyProfileModal;
