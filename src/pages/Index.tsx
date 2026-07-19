import { useState } from "react";
import Layout from "@/components/Layout";
import { 
  Leaf, Flame, Droplets, Ruler, Package, Factory, FlaskConical, Shirt, 
  FileText, Gauge, Truck, ShieldCheck, BadgeCheck, IndianRupee, Clock, 
  Phone, Mail, MapPin, ChevronRight, Zap, Award, Globe, Users, FileCheck, X,
  Plus, HelpCircle, Instagram, Linkedin
} from "lucide-react";
import { toast } from "sonner";

// Existing static assets
import truckImg from "@/assets/truck-loading.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"briquettes" | "pellets" | "indonesian-coal">("briquettes");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [fabOpen, setFabOpen] = useState(false);
  const [selectedCoalSize, setSelectedCoalSize] = useState<"0-50" | "0-10" | "8-25" | "8-20" | "20-50">("8-25");

  const coalSizesDetails: Record<string, { name: string; desc: string; mediaType: "image" | "video"; src: string }> = {
    "0-50": {
      name: "0-50 mm (Run of Mine / Mixed Coal)",
      desc: "A versatile mix of fine coal dust, small granules, and medium-sized chunks up to 50mm. Sourced directly and screened for general industrial combustion and large-scale boilers.",
      mediaType: "image",
      src: "/coal-0-50.png"
    },
    "0-10": {
      name: "0-10 mm (Coal Dust / Fine Screenings)",
      desc: "Finely screened coal particles and dust, ranging from 0mm to 10mm. Ideal for specialized pulverized coal injection systems and stoker boilers requiring fine fuel.",
      mediaType: "image",
      src: "/coal-0-10.png"
    },
    "8-25": {
      name: "8-25 mm (Premium Double-Screened Nut Coal)",
      desc: "Premium grade double-screened coal, sized between 8mm and 25mm. Exceptionally clean and uniform with zero dust, ensuring optimal airflow and maximum thermal efficiency in boilers.",
      mediaType: "video",
      src: "/8-25.mp4"
    },
    "8-20": {
      name: "8-20 mm (Uniform Screened Coal)",
      desc: "Clean, double-screened coal chunks sizing 8mm to 20mm. Very uniform size distribution, free of fines and dust, designed for automated feeding systems and consistent heat output.",
      mediaType: "image",
      src: "/coal-8-20.png"
    },
    "20-50": {
      name: "20-50 mm (Large Screened Stove Coal)",
      desc: "Larger sized coal chunks ranging from 20mm to 50mm (roughly egg-sized). Offers long-lasting combustion with clean burning profiles, ideal for heavy industrial stoker boilers.",
      mediaType: "image",
      src: "/coal-20-50.png"
    }
  };

  // Form submission with Resend API direct call & fail-safe mailto fallback
  const handleInquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("userName") as string;
    const email = formData.get("userEmail") as string;
    const phone = formData.get("userPhone") as string;
    const fuelType = formData.get("fuelType") as string;
    const message = formData.get("userMsg") as string;

    const emailSubject = `Fuel Enquiry from ${name} - Parth Fuel Corporation`;
    const emailBody = `Hello Parth Fuel Corporation,

I would like to make an enquiry regarding fuel solutions.

Name: ${name}
Email: ${email}
Phone: ${phone}
Fuel Interest: ${fuelType}
Monthly Requirement / Message:
${message}

Regards,
${name}`;

    toast.loading("Sending enquiry...", { id: "inquiry" });

    try {
      // Direct call to Resend API
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer re_FMquLAi5_6w1TpczRh4tZjqdhKMzvZayk"
        },
        mode: "cors",
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: "parthfuelcorporation23@gmail.com",
          subject: emailSubject,
          html: `<p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Phone:</strong> ${phone}</p>
                 <p><strong>Fuel Interest:</strong> ${fuelType}</p>
                 <p><strong>Message:</strong></p>
                 <p>${message.replace(/\n/g, "<br/>")}</p>`,
          reply_to: email
        })
      });

      if (response.ok) {
        toast.success("Enquiry sent successfully via Resend!", { id: "inquiry" });
        e.currentTarget.reset();
      } else {
        throw new Error("Resend API rejected request");
      }
    } catch (error) {
      console.warn("Direct Resend email submission blocked by browser CORS policy or domain verification. Redirecting to mailto client...", error);
      
      // Fail-safe mailto fallback
      const mailtoUrl = `mailto:parthfuelcorporation23@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;
      toast.success("Opening your mail app to complete the submission...", { id: "inquiry" });
      e.currentTarget.reset();
    }
  };

  const handleCareerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("careerName") as string;
    const email = formData.get("careerEmail") as string;
    const phone = formData.get("careerPhone") as string;
    const position = formData.get("careerPosition") as string;
    const message = formData.get("careerMessage") as string;

    const emailSubject = `Job Application: ${position} - ${name}`;
    const emailBody = `Hello Parth Fuel Corporation Hiring Team,

I would like to submit my application for the following position.

Full Name: ${name}
Email Address: ${email}
Contact Number: ${phone}
Desired Position: ${position}
Cover Message / Qualifications:
${message}

Regards,
${name}`;

    toast.loading("Sending application...", { id: "career" });

    try {
      // Direct call to Resend API
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer re_FMquLAi5_6w1TpczRh4tZjqdhKMzvZayk"
        },
        mode: "cors",
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: "parthfuelcorporation23@gmail.com",
          subject: emailSubject,
          html: `<p><strong>Position Applied For:</strong> ${position}</p>
                 <p><strong>Full Name:</strong> ${name}</p>
                 <p><strong>Email Address:</strong> ${email}</p>
                 <p><strong>Contact Number:</strong> ${phone}</p>
                 <p><strong>Message / Qualifications:</strong></p>
                 <p>${message.replace(/\n/g, "<br/>")}</p>`,
          reply_to: email
        })
      });

      if (response.ok) {
        toast.success("Application submitted successfully via Resend!", { id: "career" });
        e.currentTarget.reset();
      } else {
        throw new Error("Resend API rejected request");
      }
    } catch (error) {
      console.warn("Direct Resend career submission blocked. Redirecting to mailto client...", error);

      // Fail-safe mailto fallback
      const mailtoUrl = `mailto:parthfuelcorporation23@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;
      toast.success("Opening your mail app to complete the submission...", { id: "career" });
      e.currentTarget.reset();
    }
  };

  const briquetteImages = [
    { src: "/briquettes-sample-1.jpeg", label: "Premium Briquettes Batch" },
    { src: "/briquettes-sample-2.jpeg", label: "Eco-Agro Briquettes Close-up" },
    { src: "/briquettes-sample-3.jpeg", label: "Industrial Packaging Ready" },
    { src: "/briquettes-sample-4.jpeg", label: "Briquettes Load Shipment" }
  ];

  const faqs = [
    {
      q: "How do biomass briquettes compare with raw imported coal?",
      a: "Biomass briquettes are a clean, carbon-neutral alternative with a steady GCV of ~3500 kcal/kg. They contain significantly lower sulphur emissions and average only 8-10% ash compared to high-ash coal types, thereby preventing boiler grid fouling and reducing cleaning costs."
    },
    {
      q: "What sizing options are available for industrial boilers?",
      a: "We offer biomass briquettes in 90mm and 70mm diameters. For automated pneumatic or gravity-fed stoker boilers, we offer biomass pellets in uniform diameters ranging from 6mm to 25mm."
    },
    {
      q: "How does Parth Fuel Corporation prevent moisture during monsoon season?",
      a: "Our central warehouse in Khamgaon features sealed roof systems and elevated concrete bays to prevent ground moisture absorption. Additionally, all bulk dispatches during monsoon are secured under heavy-duty waterproof tarpaulins."
    },
    {
      q: "What is the typical delivery turnaround time for bulk orders?",
      a: "For clusters in Maharashtra and adjacent regions, we offer a 24-to-48 hour delivery timeline. For southern deliveries (like Tamil Nadu), we coordinate bulk dispatches via railway rake containers or heavy road fleet networks with live ETA updates."
    },
    {
      q: "How do you ensure transparency in weight and grades?",
      a: "We operate strictly under our 5-Point Operational Principles. Every delivery includes official mines/weigh-bridge receipts, is secured with single-use numbered security locks, and is backed by a representative batch lab test report."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-105 filter brightness-50"
            src="/godown-video.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/45" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <Leaf className="text-primary" size={20} />
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Eco-Friendly Biomass · Imported Indonesian Coal · Dual Energy Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              Sustainable Fuel.<br />
              <span className="text-primary">Reliable Delivery.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              Parth Fuel Corporation delivers top-tier eco-friendly biomass briquettes, pellets, and high-performance imported Indonesian coal, driving energy security for your production facilities.
            </p>
            <p className="text-base text-primary-foreground/60 mb-8 max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
              Direct warehouse linkages, robust logistics, and a 900 MT monthly capacity. Serving Maharashtra, Tamil Nadu, and beyond.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              <a href="#contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-base hover:opacity-90 flex items-center gap-2">
                Get a Quote <ChevronRight size={18} />
              </a>
              <a href="#products" className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-foreground/10">
                Explore Fuels
              </a>
              <a 
                href="/parthfuelcorporation.pdf" 
                download 
                className="bg-card text-foreground border border-border px-8 py-4 rounded-md font-semibold text-base hover:bg-muted flex items-center gap-2 shadow-sm"
              >
                <FileText size={18} className="text-primary" /> Download Profile PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground py-8 border-y border-primary-foreground/10 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "900 MT", label: "Monthly Capacity" },
              { value: "5800+", label: "Indo Coal GCV (kcal)" },
              { value: "3500+", label: "Briquette GCV (kcal)" },
              { value: "Since 2022", label: "Industry Service" },
            ].map((stat) => (
              <div key={stat.label} className="p-2 border-r last:border-r-0 border-primary-foreground/10">
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight">{stat.value}</div>
                <div className="text-xs md:text-sm text-primary-foreground/70 uppercase tracking-widest mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us & Leadership */}
      <section id="about" className="py-20 md:py-28 bg-background scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Powering Industrial Energy Solutions</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Who We Are</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Parth Fuel Corporation, established in 2022 and based in Shegaon, Maharashtra, is a dedicated manufacturer and supplier of solid fuels. We specialize in producing eco-friendly biomass briquettes and pellets from high-quality agro-waste (such as Soyabean and Corn raw materials) and supplying premium-grade imported Indonesian coal.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                By integrating strict quality assessments, direct port linkages, and a versatile logistics model, we facilitate smooth fuel procurement for major boilers, paper mills, textiles, and chemical plants across Maharashtra, Tamil Nadu, and other industrial states.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-bold text-primary mb-1">Vision</h4>
                  <p className="text-xs text-muted-foreground">To become a landmark supplier of high-grade agro-waste fuels and imported coal, ensuring eco-balance and supply reliability.</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-bold text-primary mb-1">Mission</h4>
                  <p className="text-xs text-muted-foreground">To construct cost-effective, prompt solid fuel distribution networks that guarantee delivery timelines and GCV limits.</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-bold text-primary mb-1">Values</h4>
                  <p className="text-xs text-muted-foreground">Operating with strict accountability, transparency in weights, and commitment to carbon offset technologies.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <img src="/briquette-machine.png" alt="Biomass briquette manufacturing machine inside our facility" className="rounded-lg shadow-xl w-full object-cover h-[400px]" loading="lazy" />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-5 rounded-lg shadow-lg hidden sm:block">
                <div className="text-2xl font-bold">900 MT</div>
                <div className="text-sm text-primary-foreground/80">Monthly Production</div>
              </div>
            </div>
          </div>

          {/* Founder Profile */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/30 transition-colors" />
                  <img 
                    src="/owner-mahesh-mal.jpeg" 
                    alt="Owner Mahesh Mal" 
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary relative z-10 shadow-lg"
                  />
                </div>
              </div>
              <div className="md:col-span-8 space-y-4 text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-primary font-bold">Message from Leadership</p>
                <h3 className="text-3xl font-extrabold text-foreground">Mahesh Mal</h3>
                <p className="text-sm font-semibold text-muted-foreground">Founder & Managing Director</p>
                <div className="relative">
                  <span className="text-5xl text-primary/10 absolute -top-6 -left-3 font-serif">“</span>
                  <p className="text-muted-foreground italic text-lg leading-relaxed relative z-10">
                    At Parth Fuel Corporation, our priority is to simplify industrial fuel procurement. We provide our clients with tailored solid fuel options, combining sustainable biomass solutions with high-GCV imported Indonesian coal, backed by clean billing, uncompromised weights, and structural transparency. We believe our clients' success is built on energy stability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Operational framework */}
      <section id="services" className="py-20 md:py-28 bg-card scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">End-to-End Solid Fuel Logistics</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">We don't just trade coal and briquettes—we manage the full supply loop to keep your manufacturing boilers running flawlessly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Factory, title: "Agro-Waste Processing", desc: "Converting organic soyabean and corn inputs into dense, high-GCV bio-energy briquettes, alongside sawdust and soya pellets." },
              { icon: Truck, title: "Bulk Distribution", desc: "Dedicated heavy fleet logistics to distribute tons of fuel directly from our yards and warehouses to your boilers." },
              { icon: FileCheck, title: "Procurement & Port Logistics", desc: "Assisting industries in managing fuel deliveries from imports, maintaining consistent stockpiles at our Khamgaon unit." }
            ].map((srv) => (
              <div key={srv.title} className="bg-background rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <srv.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{srv.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>

          {/* Operational Principles (5-Point Transparency) */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-12">Our 5-Point Operational Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Mines Receipts", desc: "We provide official weigh-bridge and loading receipts to keep logistics clear and auditable." },
                { step: "02", title: "Security Seal", desc: "Tamper-proof seals are locked on all cargo trucks to eliminate weight and grade variations." },
                { step: "03", title: "Live Dispatch", desc: "SMS and email updates containing Truck Numbers, Quantity, and ETA are sent upon yard exit." },
                { step: "04", title: "Quality Audit", desc: "Batch samples are certified to guarantee calorific values align with specifications." },
                { step: "05", title: "Monthly Review", desc: "We regularly review client feedback to optimize delivery frequency and yard operations." }
              ].map((p) => (
                <div key={p.step} className="space-y-3 relative text-center md:text-left">
                  <div className="text-4xl font-extrabold text-primary-foreground/20">{p.step}</div>
                  <h4 className="font-bold text-lg">{p.title}</h4>
                  <p className="text-primary-foreground/75 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products & Interactive Showcase */}
      <section id="products" className="py-20 md:py-28 bg-background scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Our Product Range</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">High-performance Solid Fuels</h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: "briquettes", label: "Biomass Briquettes" },
              { id: "pellets", label: "Biomass Pellets" },
              { id: "indonesian-coal", label: "Imported Indonesian Coal" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-full text-sm font-semibold border transition-all ${activeTab === tab.id ? "bg-primary border-primary text-primary-foreground shadow-md" : "bg-card border-border hover:bg-muted text-foreground"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content: Biomass Briquettes */}
          {activeTab === "briquettes" && (
            <div className="space-y-12 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Looping Sample Video */}
                <div className="rounded-xl overflow-hidden shadow-lg bg-black relative group aspect-video">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                    src="/briquettes-sample-video.mp4"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider z-10">
                    Briquettes Showcase Video
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <Leaf className="text-primary" size={24} /> Biomass Briquettes Details
                  </h3>
                  <p className="text-muted-foreground">
                    Made from high-quality agricultural residues: Soyabean and Corn. Our briquettes provide a reliable, clean-burning solid fuel solution with low moisture and balanced GCV parameters.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-card p-3 rounded border border-border">
                      <h4 className="font-bold text-sm text-primary mb-1">Standard Sizing</h4>
                      <p className="text-xs text-muted-foreground">Available in 90mm and 70mm diameters to support diverse burner and boiler designs.</p>
                    </div>
                    <div className="bg-card p-3 rounded border border-border">
                      <h4 className="font-bold text-sm text-primary mb-1">Raw Materials</h4>
                      <p className="text-xs text-muted-foreground">Soyabean and Corn.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample Photo Gallery */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-foreground">Product Inspection Gallery (Click to expand)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {briquetteImages.map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setLightboxImage(img.src)}
                      className="cursor-pointer overflow-hidden rounded-lg shadow-sm border border-border group relative aspect-square"
                    >
                      <img 
                        src={img.src} 
                        alt={img.label} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-xs font-semibold">
                        View Sample
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-foreground text-center">Briquettes Lab Values by Raw Material</h4>
                <div className="overflow-x-auto rounded-xl border border-border bg-card">
                  <table className="w-full text-left border-collapse text-sm min-w-[600px]">
                    <thead>
                      <tr className="bg-muted text-foreground border-b border-border">
                        <th className="p-4 font-bold">Briquette Type</th>
                        <th className="p-4 font-bold">Raw Material</th>
                        <th className="p-4 font-bold">GCV (kcal/kg)</th>
                        <th className="p-4 font-bold">Ash Content</th>
                        <th className="p-4 font-bold">Moisture</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Soyabean Briquettes", material: "Soyabean", gcv: "3500 (±200)", ash: "Less than 10%", moisture: "Less than 10%" },
                        { type: "Corn Briquettes", material: "Corn", gcv: "3500 (±200)", ash: "Less than 10%", moisture: "Less than 10%" }
                      ].map((row, idx) => (
                        <tr key={idx} className="border-b border-border hover:bg-muted/30">
                          <td className="p-4 font-semibold text-foreground">{row.type}</td>
                          <td className="p-4 text-muted-foreground">{row.material}</td>
                          <td className="p-4 font-semibold">{row.gcv}</td>
                          <td className="p-4">{row.ash}</td>
                          <td className="p-4">{row.moisture}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content: Biomass Pellets */}
          {activeTab === "pellets" && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <Droplets className="text-primary" size={24} /> High-Density Biomass Pellets
                  </h3>
                  <p className="text-muted-foreground">
                    Our biomass pellets are manufactured to high compression standards, ensuring high bulk density and low dust. They are ideal for automated feeding systems, small to medium boilers, and environmental-grade stoves.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-card p-4 rounded border border-border">
                      <h4 className="font-bold text-sm text-primary mb-1">Diameter Sizing</h4>
                      <p className="text-xs text-muted-foreground">Processed uniformly in sizes ranging from 6mm to 25mm.</p>
                    </div>
                    <div className="bg-card p-4 rounded border border-border">
                      <h4 className="font-bold text-sm text-primary mb-1">Eco Sourcing</h4>
                      <p className="text-xs text-muted-foreground">Sawdust and Soya raw inputs.</p>
                    </div>
                  </div>
                </div>
                <img src="/biomass-pellets.png" alt="Biomass wood pellets close-up" className="rounded-xl shadow-lg h-[300px] w-full object-cover" />
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-foreground text-center">Pellets Lab Values by Raw Material</h4>
                <div className="overflow-x-auto rounded-xl border border-border bg-card">
                  <table className="w-full text-left border-collapse text-sm min-w-[600px]">
                    <thead>
                      <tr className="bg-muted text-foreground border-b border-border">
                        <th className="p-4 font-bold">Pellet Type</th>
                        <th className="p-4 font-bold">Raw Material</th>
                        <th className="p-4 font-bold">GCV (kcal/kg)</th>
                        <th className="p-4 font-bold">Ash Content</th>
                        <th className="p-4 font-bold">Moisture</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Sawdust Pellets", material: "Sawdust", gcv: "4000 to 4200", ash: "Less than 5%", moisture: "6%" },
                        { type: "Soya Pellets", material: "Soya Husk", gcv: "Above 3600", ash: "10%", moisture: "10%" }
                      ].map((row, idx) => (
                        <tr key={idx} className="border-b border-border hover:bg-muted/30">
                          <td className="p-4 font-semibold text-foreground">{row.type}</td>
                          <td className="p-4 text-muted-foreground">{row.material}</td>
                          <td className="p-4 font-semibold">{row.gcv}</td>
                          <td className="p-4">{row.ash}</td>
                          <td className="p-4">{row.moisture}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content: Indonesian Coal */}
          {activeTab === "indonesian-coal" && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <Zap className="text-accent" size={24} /> Imported Indonesian Coal
                  </h3>
                  <p className="text-muted-foreground">
                    We exclusively import high-grade Indonesian coal, valued for its high volatile matter, easy ignition, and low ash output. Ideal for power generation, metallurgy, and chemical process boilers.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <BadgeCheck className="text-accent" size={18} /> High calorific potential up to 6500 kcal/kg (GAD)
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <BadgeCheck className="text-accent" size={18} /> Clean burning characteristics, low ash and sulphur
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                      <BadgeCheck className="text-accent" size={18} /> Available in multiple screened sizing options
                    </li>
                  </ul>
                </div>
                <img src="/industrial-coal.png" alt="Industrial coal storage heap in India" className="rounded-xl shadow-lg h-[300px] w-full object-cover" />
              </div>

              {/* Screening Sizes Showcase */}
              <div className="space-y-6 pt-6">
                <h4 className="font-bold text-lg text-foreground text-center">Available Sizing & Screened Options</h4>
                
                {/* Size Selector Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {Object.keys(coalSizesDetails).map((sizeKey) => (
                    <button
                      key={sizeKey}
                      onClick={() => setSelectedCoalSize(sizeKey as any)}
                      className={`px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all ${selectedCoalSize === sizeKey ? "bg-primary border-primary text-primary-foreground shadow-md" : "bg-card border-border hover:bg-muted text-foreground"}`}
                    >
                      {sizeKey} mm
                    </button>
                  ))}
                </div>

                {/* Display Area */}
                <div className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Media container */}
                    <div className="rounded-lg overflow-hidden bg-black aspect-video relative group border border-border shadow-md">
                      {coalSizesDetails[selectedCoalSize].mediaType === "video" ? (
                        <video 
                          key={selectedCoalSize}
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                          className="w-full h-full object-cover"
                          src={coalSizesDetails[selectedCoalSize].src}
                        />
                      ) : (
                        <img 
                          key={selectedCoalSize}
                          src={coalSizesDetails[selectedCoalSize].src} 
                          alt={coalSizesDetails[selectedCoalSize].name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider z-10 font-mono">
                        {selectedCoalSize} mm Sample
                      </div>
                    </div>

                    {/* Description container */}
                    <div className="space-y-4 text-left">
                      <h5 className="text-xl font-bold text-primary">{coalSizesDetails[selectedCoalSize].name}</h5>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {coalSizesDetails[selectedCoalSize].desc}
                      </p>
                      <div className="pt-2">
                        <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                          Ready for Dispatch
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 md:py-28 bg-primary text-primary-foreground scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-primary-foreground/75 font-semibold text-sm tracking-wider uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">The Parth Fuel Corporation Edge</h2>
            <p className="text-primary-foreground/75 mt-3 max-w-2xl mx-auto">We maintain structural operational superiority, ensuring quality fuels reach your plants securely.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Uncompromising Quality", desc: "Dual verification systems with certified lab test reports provided for every solid fuel shipment." },
              { icon: Users, title: "Dedicated Site Staff", desc: "We place dedicated employees at warehouse areas and port sites to coordinate smooth loading and logistics." },
              { icon: ShieldCheck, title: "Secure Weight Protocols", desc: "Tamper-proof seal locks on trucks prevent weight discrepancies and maintain grade integrity." },
              { icon: Clock, title: "Reliable Logistics", desc: "Established road networks keep transit delays at zero, supplying dry fuels even in peak monsoon seasons." },
              { icon: IndianRupee, title: "Best Market Value", desc: "Direct importer linkages remove unnecessary trade channels, keeping pricing highly competitive." },
              { icon: Leaf, title: "Carbon Offset Bio-Fuel", desc: "High-GCV biomass briquettes and pellets that enable cleaner combustion and support industrial emission targets." }
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-all text-center md:text-left space-y-4">
                <div className="bg-primary-foreground/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto md:mx-0">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-primary-foreground/75 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Presence (Logistics & Port map) */}
      <section id="presence" className="py-20 md:py-28 bg-card scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Our Presence</p>
              <h2 className="text-3xl md:text-4xl font-extrabold">Serving Key Industrial Hubs</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                With corporate offices in Shegaon, Maharashtra, we have created an expansive logistics and port linkage map. We manage client deliveries across Maharashtra, Tamil Nadu, and surrounding industrial states, utilizing major port entries for importing high-grade Indonesian coal.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {["Shegaon (HQ)", "Khamgaon Unit", "Akola", "Erandol"].map((city) => (
                  <div key={city} className="flex items-center gap-2 bg-background p-3 rounded-lg border border-border font-semibold text-sm">
                    <MapPin className="text-primary shrink-0" size={16} />
                    <span>{city}</span>
                  </div>
                ))}
              </div>

            </div>
            {/* Godown Video */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-black relative group aspect-video">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
                src="/godown-video.mp4"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider z-10">
                Godown Operations Video
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section id="clients" className="py-20 md:py-28 bg-background scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Our Clients</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Trusted by Diverse Industrial Sectors</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">We provide dependable solid fuel supplies across a wide range of industry sectors.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16 text-center">
            {[
              { icon: Factory, label: "Cement Plants" },
              { icon: FlaskConical, label: "Chemicals" },
              { icon: Shirt, label: "Textile Mills" },
              { icon: FileText, label: "Paper Mills" },
              { icon: Droplets, label: "Distilleries" },
              { icon: Gauge, label: "Boiler Operations" },
              { icon: Globe, label: "Export Sectors" }
            ].map((ind) => (
              <div key={ind.label} className="bg-card border border-border rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-sm transition-shadow">
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <ind.icon className="text-primary" size={18} />
                </div>
                <p className="font-semibold text-xs text-foreground">{ind.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Siddharth Carbochem Products Ltd",
              "Rishabh Metal and Chemicals Pvt. Ltd.",
              "Sahyadri Industries",
            ].map((client) => (
              <div key={client} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BadgeCheck className="text-primary" size={20} />
                </div>
                <p className="font-bold text-foreground text-sm">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 md:py-28 bg-card scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Careers</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Join Parth Fuel Corporation</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                We are constantly searching for hard-working individuals to join our warehouse, laboratory, and field operations teams. At Parth Fuel Corporation, we support mid-term assessments and professional development programs to help you grow your capabilities in the solid fuel sector.
              </p>
              <div className="space-y-4">
                {[
                  "Mid-term and annual performance reviews",
                  "Comprehensive safety protocols for all colliery and port teams",
                  "Skill development programs in solid fuel laboratory analysis"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-xl mb-6">Career Application Form</h3>
              <form onSubmit={handleCareerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-muted-foreground">Full Name</label>
                    <input required name="careerName" type="text" className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <input required name="careerEmail" type="email" className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-muted-foreground">Contact No.</label>
                    <input required name="careerPhone" type="tel" className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm" placeholder="+91 ..." />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-muted-foreground">Desired Position</label>
                    <select required name="careerPosition" className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm">
                      <option>Field Staff (Colliery / Port)</option>
                      <option>Lab Technician</option>
                      <option>Logistics Coordinator</option>
                      <option>Sales & Marketing</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-muted-foreground">Cover Message</label>
                  <textarea required name="careerMessage" rows={3} className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none" placeholder="Tell us about yourself..." />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity text-sm">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-3">Answers to critical questions regarding fuel procurement and logistics.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-background rounded-xl border border-border overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-foreground hover:bg-muted/20 transition-colors text-base"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="text-primary shrink-0" size={20} />
                    {faq.q}
                  </span>
                  <Plus 
                    className={`text-muted-foreground transition-transform duration-300 shrink-0 ${openFaqIndex === idx ? "rotate-45 text-primary" : ""}`} 
                    size={20} 
                  />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaqIndex === idx ? "max-h-60 opacity-100 border-t border-border" : "max-h-0 opacity-0"}`}
                >
                  <p className="p-6 text-sm leading-relaxed text-muted-foreground bg-muted/10">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 md:py-28 bg-background scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">Contact Us</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Let's Discuss Your Fuel Needs</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Connect with our commercial desk for bulk orders, price quotes, customized fuel options, or logistics contracts.
              </p>
              <div className="space-y-4 pt-4">
                <a href="tel:+919881125511" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg"><Phone className="text-primary" size={20} /></div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold uppercase">Call Helpline</div>
                    <span className="text-lg font-bold">+91 9881125511</span>
                  </div>
                </a>
                <a href="mailto:parthfuelcorporation23@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg"><Mail className="text-primary" size={20} /></div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold uppercase">Email Us</div>
                    <span className="text-lg font-bold break-all">parthfuelcorporation23@gmail.com</span>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="bg-primary/10 p-3 rounded-lg"><MapPin className="text-primary" size={20} /></div>
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold uppercase">Main Office</div>
                    <span className="text-base font-bold">Parth Fuel Corporation, Shegaon, Maharashtra - 444203, India</span>
                  </div>
                </div>
                <div className="flex gap-4 pt-4 border-t border-border mt-4">
                  <a href="https://www.instagram.com/parthfuelcorporation23/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold text-sm">
                    <Instagram size={18} className="text-primary" /> Instagram
                  </a>
                  <a href="https://www.linkedin.com/in/mahesh-mal-697119422/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold text-sm">
                    <Linkedin size={18} className="text-primary" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-xl mb-6">Quick Enquiry Form</h3>
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-muted-foreground">Name</label>
                    <input required name="userName" type="text" className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-muted-foreground">Email</label>
                    <input required name="userEmail" type="email" className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-muted-foreground">Phone</label>
                    <input required name="userPhone" type="tel" className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm" placeholder="+91 ..." />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-muted-foreground">Fuel Interest</label>
                    <select name="fuelType" className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm">
                      <option value="Biomass Briquettes">Biomass Briquettes</option>
                      <option value="Biomass Pellets">Biomass Pellets</option>
                      <option value="Imported Indonesian Coal">Imported Indonesian Coal</option>
                      <option value="Custom Energy Blend">Custom Energy Blend</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea required name="userMsg" rows={4} className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none" placeholder="Provide your monthly MT requirements..." />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-semibold hover:opacity-90 transition-opacity text-sm">
                  Send Fuel Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button (FAB) Hub */}
      <div className="fixed bottom-6 right-6 z-[80] flex flex-col items-end gap-3">
        {fabOpen && (
          <div className="flex flex-col gap-2 mb-1 animate-[fade-in_0.2s_ease-out_forwards]">
            <a 
              href="tel:+919881125511" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
              title="Call Helpline"
            >
              <Phone size={20} />
            </a>
            <a 
              href="mailto:parthfuelcorporation23@gmail.com" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
              title="Email Us"
            >
              <Mail size={20} />
            </a>
          </div>
        )}
        <button
          onClick={() => setFabOpen(!fabOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground shadow-2xl transition-all duration-300 ${fabOpen ? "bg-muted-foreground hover:bg-muted-foreground/90 rotate-45" : "bg-primary hover:bg-primary/95 animate-pulse"}`}
          aria-label="Toggle contact buttons"
        >
          {fabOpen ? <X size={26} /> : <Phone size={26} />}
        </button>
      </div>

      {/* Lightbox Modal for Gallery */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-white p-3 rounded-full z-10 transition-colors"
          >
            <X size={24} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Expanded inspection sample" 
            className="max-w-full max-h-[85vh] rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </Layout>
  );
};

export default Index;
