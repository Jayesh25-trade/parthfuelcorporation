import { useState } from "react";
import Layout from "@/components/Layout";
import { 
  Leaf, Flame, Droplets, Ruler, Package, Factory, FlaskConical, Shirt, 
  FileText, Gauge, Truck, ShieldCheck, IndianRupee, Clock, 
  Phone, Mail, MapPin, ChevronRight, Zap, Award, Globe, Users, FileCheck, X,
  Plus, HelpCircle, Instagram, Linkedin, Anchor, CheckCircle2, ArrowRight, Layers, Search, ShieldAlert, MessageSquare
} from "lucide-react";
import { toast } from "sonner";

// Static assets
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
      mediaType: "video",
      src: "/8-25.mp4"
    },
    "0-10": {
      name: "0-10 mm (Coal Dust / Fine Screenings)",
      desc: "Finely screened coal particles and dust, ranging from 0mm to 10mm. Ideal for specialized pulverized coal injection systems and stoker boilers requiring fine fuel.",
      mediaType: "video",
      src: "/8-25.mp4"
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
      mediaType: "video",
      src: "/8-25.mp4"
    },
    "20-50": {
      name: "20-50 mm (Large Screened Stove Coal)",
      desc: "Larger sized coal chunks ranging from 20mm to 50mm (roughly egg-sized). Offers long-lasting combustion with clean burning profiles, ideal for heavy industrial stoker boilers.",
      mediaType: "video",
      src: "/8-25.mp4"
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
        toast.success("Enquiry sent successfully!", { id: "inquiry" });
        e.currentTarget.reset();
      } else {
        throw new Error("Resend API rejected request");
      }
    } catch (error) {
      const mailtoUrl = `mailto:parthfuelcorporation23@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;
      toast.success("Opening mail app to complete submission...", { id: "inquiry" });
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
        toast.success("Application submitted successfully!", { id: "career" });
        e.currentTarget.reset();
      } else {
        throw new Error("Resend API rejected request");
      }
    } catch (error) {
      const mailtoUrl = `mailto:parthfuelcorporation23@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;
      toast.success("Opening mail app to complete submission...", { id: "career" });
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
      {/* 1. HERO SECTION (Matching Mockup Design) */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-[#141618]">
        {/* Background Video with Fast loading + Poster */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/godown-poster.jpg')" }}
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            poster="/godown-poster.jpg"
            className="w-full h-full object-cover filter brightness-50"
            src="/godown-video.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141618]/95 via-[#141618]/80 to-[#141618]/60" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 md:py-40">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#ECE5D8] leading-[1.08] tracking-tight">
              More Than Fuel<br />
              A Cleaner<br />
              <span className="text-[#D87033] italic">Tomorrow</span>
            </h1>

            <p className="text-base md:text-lg text-[#ECE5D8]/80 max-w-xl font-sans font-light leading-relaxed">
              High-quality coal and briquettes for a stronger, cleaner and more sustainable India.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-5">
              <a 
                href="#products" 
                className="bg-[#141618]/80 border border-[#D87033] text-[#ECE5D8] px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#D87033] hover:text-white transition-all shadow-lg flex items-center gap-3 group"
              >
                <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">→</span>
                <span>Explore Our Products</span>
              </a>

              <a 
                href="/parthfuelcorporation.pdf" 
                download 
                className="text-[#ECE5D8]/70 hover:text-[#ECE5D8] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 py-2"
              >
                <FileText size={15} className="text-[#D87033]" /> Download Profile PDF
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Right Badge (Matching Mockup) */}
        <div className="absolute bottom-8 right-8 lg:right-12 z-10 text-right hidden sm:block">
          <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-[#D87033]">
            PEOPLE · PLANET · PROGRESS
          </span>
          <span className="block text-xs font-serif italic text-[#ECE5D8]/50">
            Parth Fuel Corporation
          </span>
        </div>
      </section>

      {/* 2. STATS BAR (Parchment Paper - Matching Mockup) */}
      <section className="bg-[#ECE5D8] text-[#1F2226] py-10 border-y border-[#DDD5C4] relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#DDD5C4]">
            {[
              { value: "900 MT", label: "Monthly Capacity" },
              { value: "5800+", label: "Indo Coal GCV (kcal)" },
              { value: "3500+", label: "Briquette GCV (kcal)" },
              { value: "Since 2022", label: "Growing Stronger" },
            ].map((stat, idx) => (
              <div key={stat.label} className={`space-y-1 ${idx !== 0 ? 'pl-4' : ''}`}>
                <div className="text-3xl md:text-4xl font-serif font-bold text-[#1F2226] tracking-tight">{stat.value}</div>
                <div className="text-[11px] font-semibold text-[#6E747B] uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STORY / ROOTED IN PURPOSE (Matching Mockup Design) */}
      <section id="about" className="py-24 md:py-32 bg-[#ECE5D8] text-[#1F2226] relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#D87033]"></span>
                <span className="text-[#D87033] text-xs font-bold tracking-[0.25em] uppercase">OUR STORY</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1F2226] leading-tight">
                Rooted<br />in Purpose
              </h2>

              <p className="text-[#6E747B] text-base leading-relaxed font-sans max-w-lg">
                Parth Fuel Corporation was founded with a simple belief — reliable energy can build a stronger, cleaner and more self-reliant India. We specialize in high-quality imported coal, briquettes and biomass solutions, serving industries across the nation with integrity, efficiency and long-term commitment.
              </p>

              <div className="pt-2">
                <a 
                  href="#why-us" 
                  className="inline-flex items-center gap-3 border border-[#1F2226] text-[#1F2226] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#1F2226] hover:text-[#ECE5D8] transition-all"
                >
                  <span>Our Journey</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Vintage Collage Frame (Matching Mockup Stamp & Card Design) */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md bg-[#F7F2E9] p-4 shadow-xl border border-[#DDD5C4] rounded-sm transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Main Vintage Photo */}
                <div className="overflow-hidden border border-[#DDD5C4] relative group aspect-video md:aspect-[4/3]">
                  <img 
                    src="/briquette-machine.png" 
                    alt="Industrial plant facility" 
                    className="w-full h-full object-cover filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-amber-950/10 pointer-events-none" />
                </div>

                {/* Hand Stamp & Handwritten Postal Box */}
                <div className="mt-4 pt-3 border-t border-dashed border-[#DDD5C4] flex items-center justify-between">
                  <div className="font-script text-[#D87033] text-xl font-bold">
                    Reliable Fuel · Stronger Industries · Brighter India
                  </div>
                  
                  {/* Stamp Badge */}
                  <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#D87033]/60 flex flex-col items-center justify-center text-[8px] font-bold text-[#D87033] uppercase leading-none transform -rotate-12">
                    <span>INDIA</span>
                    <span>2022</span>
                    <span>POSTAL</span>
                  </div>
                </div>

                {/* Postcard Kraft Badge */}
                <div className="absolute -top-4 -right-4 bg-[#DFD6C4] p-4 border border-[#C5BBA7] shadow-md hidden sm:block max-w-[160px]">
                  <p className="font-serif text-xs font-bold tracking-wider text-[#1F2226] uppercase mb-1">
                    CLEAN ENERGY
                  </p>
                  <p className="text-[10px] text-[#6E747B] font-sans">
                    STRONG INDUSTRIES BRIGHTER INDIA
                  </p>
                  <Leaf className="text-[#D87033] mt-2" size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PRODUCTS / POWERING INDUSTRIES RESPONSIBLY (Dark Theme - Matching Mockup) */}
      <section id="products" className="py-24 md:py-32 bg-[#141618] text-[#ECE5D8] scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#D87033]"></span>
                <span className="text-[#D87033] text-xs font-bold tracking-[0.25em] uppercase">OUR PRODUCTS</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#ECE5D8] leading-tight">
                Powering Industries<br />Responsibly
              </h2>

              <p className="text-[#ECE5D8]/70 text-sm font-sans leading-relaxed">
                From imported Indonesian coal to high-performance biomass briquettes, we deliver dependable fuel solutions for diverse industrial needs.
              </p>
            </div>

            {/* Tab Selection */}
            <div className="flex flex-wrap gap-2 bg-[#1D2024] p-1.5 rounded-full border border-[#2E3338]">
              {[
                { id: "briquettes", label: "Biomass Briquettes" },
                { id: "pellets", label: "Biomass Pellets" },
                { id: "indonesian-coal", label: "Indonesian Coal" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${activeTab === tab.id ? "bg-[#D87033] text-white shadow-md" : "text-[#ECE5D8]/70 hover:text-white"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3 Featured Product Overview Cards (Matching Mockup 3 Column Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                img: "/industrial-coal.png", 
                title: "Imported Coal", 
                subtitle: "Consistent quality for higher efficiency", 
                tabId: "indonesian-coal" 
              },
              { 
                img: "/briquette-factory.png", 
                title: "Biomass Briquettes", 
                subtitle: "Cleaner. Greener. Cost-effective.", 
                tabId: "briquettes" 
              },
              { 
                img: "/biomass-pellets.png", 
                title: "Biomass Pellets", 
                subtitle: "Sustainable fuel for a greener tomorrow.", 
                tabId: "pellets" 
              }
            ].map((pCard) => (
              <div 
                key={pCard.title}
                onClick={() => setActiveTab(pCard.tabId as any)}
                className={`bg-[#1D2024] rounded-xl overflow-hidden border border-[#2E3338] hover:border-[#D87033] transition-all cursor-pointer group shadow-lg ${activeTab === pCard.tabId ? 'ring-2 ring-[#D87033]' : ''}`}
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={pCard.img} 
                    alt={pCard.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D2024] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-[#ECE5D8] group-hover:text-[#D87033] transition-colors">{pCard.title}</h3>
                  <p className="text-xs text-[#ECE5D8]/60 font-sans leading-relaxed">{pCard.subtitle}</p>
                  <div className="pt-2 flex items-center justify-between text-xs text-[#D87033] font-semibold uppercase tracking-wider">
                    <span>View Specifications</span>
                    <span className="w-6 h-6 rounded-full border border-[#D87033] flex items-center justify-center group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Active Product Technical Details & Lab Values */}
          <div className="bg-[#1D2024] rounded-2xl border border-[#2E3338] p-8 md:p-12">
            {/* Briquettes Tab */}
            {activeTab === "briquettes" && (
              <div className="space-y-10 animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="rounded-xl overflow-hidden shadow-lg bg-black relative aspect-video bg-cover bg-center" style={{ backgroundImage: "url('/briquettes-poster.jpg')" }}>
                    <video 
                      autoPlay loop muted playsInline preload="auto" poster="/briquettes-poster.jpg"
                      className="w-full h-full object-cover"
                      src="/briquettes-sample-video.mp4"
                    />
                    <div className="absolute top-4 left-4 bg-[#D87033] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      Briquettes Processing Video
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-[#ECE5D8]">Biomass Briquettes Specifications</h3>
                    <p className="text-xs text-[#ECE5D8]/70 leading-relaxed font-sans">
                      Manufactured from premium agro-waste materials including Soyabean and Corn. Designed to deliver consistent calorific outputs while reducing industrial carbon footprint.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-3 bg-[#141618] rounded-lg border border-[#2E3338]">
                        <h4 className="text-xs font-bold text-[#D87033] mb-1">Standard Sizing</h4>
                        <p className="text-[11px] text-[#ECE5D8]/70">Available in 90mm and 70mm diameters.</p>
                      </div>
                      <div className="p-3 bg-[#141618] rounded-lg border border-[#2E3338]">
                        <h4 className="text-xs font-bold text-[#D87033] mb-1">Raw Inputs</h4>
                        <p className="text-[11px] text-[#ECE5D8]/70">100% Soyabean & Corn agro residue.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sample Lightbox Gallery */}
                <div className="space-y-4 pt-4 border-t border-[#2E3338]">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#ECE5D8]">Product Gallery (Click to enlarge)</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {briquetteImages.map((img, idx) => (
                      <div key={idx} onClick={() => setLightboxImage(img.src)} className="cursor-pointer overflow-hidden rounded-lg border border-[#2E3338] aspect-square relative group">
                        <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-xs text-white font-semibold">
                          Inspect Batch
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lab Values Table */}
                <div className="space-y-4 pt-4 border-t border-[#2E3338]">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#ECE5D8] text-center">Certified Lab Values by Raw Material</h4>
                  <div className="overflow-x-auto rounded-xl border border-[#2E3338] bg-[#141618]">
                    <table className="w-full text-left text-xs min-w-[500px]">
                      <thead>
                        <tr className="bg-[#2E3338]/50 text-[#ECE5D8] border-b border-[#2E3338]">
                          <th className="p-3.5 font-bold uppercase tracking-wider">Briquette Type</th>
                          <th className="p-3.5 font-bold uppercase tracking-wider">Raw Material</th>
                          <th className="p-3.5 font-bold uppercase tracking-wider">GCV (kcal/kg)</th>
                          <th className="p-3.5 font-bold uppercase tracking-wider">Ash Content</th>
                          <th className="p-3.5 font-bold uppercase tracking-wider">Moisture</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#2E3338]">
                        {[
                          { type: "Soyabean Briquettes", material: "Soyabean", gcv: "3500 (±200)", ash: "Less than 10%", moisture: "Less than 10%" },
                          { type: "Corn Briquettes", material: "Corn", gcv: "3500 (±200)", ash: "Less than 10%", moisture: "Less than 10%" }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#1D2024]">
                            <td className="p-3.5 font-semibold text-[#D87033]">{row.type}</td>
                            <td className="p-3.5 text-[#ECE5D8]/80">{row.material}</td>
                            <td className="p-3.5 font-semibold">{row.gcv}</td>
                            <td className="p-3.5 text-[#ECE5D8]/70">{row.ash}</td>
                            <td className="p-3.5 text-[#ECE5D8]/70">{row.moisture}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Pellets Tab */}
            {activeTab === "pellets" && (
              <div className="space-y-10 animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-[#ECE5D8]">High-Density Biomass Pellets</h3>
                    <p className="text-xs text-[#ECE5D8]/70 leading-relaxed font-sans">
                      Manufactured under high mechanical compression for uniform density, zero dusting, and effortless feeding in stoker boilers and automated combustion units.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-3 bg-[#141618] rounded-lg border border-[#2E3338]">
                        <h4 className="text-xs font-bold text-[#D87033] mb-1">Diameter Range</h4>
                        <p className="text-[11px] text-[#ECE5D8]/70">6mm to 25mm uniform pellets.</p>
                      </div>
                      <div className="p-3 bg-[#141618] rounded-lg border border-[#2E3338]">
                        <h4 className="text-xs font-bold text-[#D87033] mb-1">Eco Sourcing</h4>
                        <p className="text-[11px] text-[#ECE5D8]/70">Sawdust and Soya raw inputs.</p>
                      </div>
                    </div>
                  </div>
                  <img src="/biomass-pellets.png" alt="Biomass wood pellets close-up" className="rounded-xl shadow-lg h-[260px] w-full object-cover border border-[#2E3338]" />
                </div>

                <div className="space-y-4 pt-4 border-t border-[#2E3338]">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#ECE5D8] text-center">Pellet Technical Lab Specifications</h4>
                  <div className="overflow-x-auto rounded-xl border border-[#2E3338] bg-[#141618]">
                    <table className="w-full text-left text-xs min-w-[500px]">
                      <thead>
                        <tr className="bg-[#2E3338]/50 text-[#ECE5D8] border-b border-[#2E3338]">
                          <th className="p-3.5 font-bold uppercase tracking-wider">Pellet Type</th>
                          <th className="p-3.5 font-bold uppercase tracking-wider">Raw Material</th>
                          <th className="p-3.5 font-bold uppercase tracking-wider">GCV (kcal/kg)</th>
                          <th className="p-3.5 font-bold uppercase tracking-wider">Ash Content</th>
                          <th className="p-3.5 font-bold uppercase tracking-wider">Moisture</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#2E3338]">
                        {[
                          { type: "Sawdust Pellets", material: "Sawdust", gcv: "4000 to 4200", ash: "Less than 5%", moisture: "6%" },
                          { type: "Soya Pellets", material: "Soya Husk", gcv: "Above 3600", ash: "10%", moisture: "10%" }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#1D2024]">
                            <td className="p-3.5 font-semibold text-[#D87033]">{row.type}</td>
                            <td className="p-3.5 text-[#ECE5D8]/80">{row.material}</td>
                            <td className="p-3.5 font-semibold">{row.gcv}</td>
                            <td className="p-3.5 text-[#ECE5D8]/70">{row.ash}</td>
                            <td className="p-3.5 text-[#ECE5D8]/70">{row.moisture}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Indonesian Coal Tab */}
            {activeTab === "indonesian-coal" && (
              <div className="space-y-10 animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-[#ECE5D8]">Imported Indonesian Coal</h3>
                    <p className="text-xs text-[#ECE5D8]/70 leading-relaxed font-sans">
                      High volatile matter, rapid ignition, low ash content, and superior calorific potential up to 6500 kcal/kg GAD.
                    </p>
                    <ul className="space-y-2 text-xs text-[#ECE5D8]/80">
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D87033]" /> High Gross As-Received (GAR) calorific value</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D87033]" /> Multiple double-screened sizing options for stoker boilers</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D87033]" /> Direct port linkages to minimize handling loss</li>
                    </ul>
                  </div>
                  <img src="/industrial-coal.png" alt="Indonesian Coal Heap" className="rounded-xl shadow-lg h-[260px] w-full object-cover border border-[#2E3338]" />
                </div>

                {/* Sizing Selector */}
                <div className="space-y-6 pt-4 border-t border-[#2E3338]">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#ECE5D8] text-center">Available Screening Sizing Options</h4>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {Object.keys(coalSizesDetails).map((sizeKey) => (
                      <button
                        key={sizeKey}
                        onClick={() => setSelectedCoalSize(sizeKey as any)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${selectedCoalSize === sizeKey ? "bg-[#D87033] border-[#D87033] text-white" : "bg-[#141618] border-[#2E3338] text-[#ECE5D8]/70 hover:text-white"}`}
                      >
                        {sizeKey} mm
                      </button>
                    ))}
                  </div>

                  <div className="bg-[#141618] rounded-xl border border-[#2E3338] p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                      <div className="rounded-lg overflow-hidden bg-black aspect-video relative border border-[#2E3338] bg-cover bg-center" style={{ backgroundImage: "url('/8-25-poster.jpg')" }}>
                        {coalSizesDetails[selectedCoalSize].mediaType === "video" ? (
                          <video 
                            key={selectedCoalSize}
                            autoPlay loop muted playsInline preload="auto" poster="/8-25-poster.jpg"
                            className="w-full h-full object-cover"
                            src={coalSizesDetails[selectedCoalSize].src}
                          />
                        ) : (
                          <img 
                            key={selectedCoalSize}
                            src={coalSizesDetails[selectedCoalSize].src} 
                            alt={coalSizesDetails[selectedCoalSize].name} 
                            className="w-full h-full object-cover"
                          />
                        )}
                        <div className="absolute top-3 left-3 bg-[#D87033] text-white px-2.5 py-1 rounded text-[10px] font-mono uppercase font-bold">
                          {selectedCoalSize} mm Sample
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h5 className="text-lg font-serif font-bold text-[#D87033]">{coalSizesDetails[selectedCoalSize].name}</h5>
                        <p className="text-xs text-[#ECE5D8]/70 leading-relaxed font-sans">
                          {coalSizesDetails[selectedCoalSize].desc}
                        </p>
                        <div className="pt-2">
                          <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-[#D87033]/20 text-[#D87033] px-3 py-1 rounded-full border border-[#D87033]/30">
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
        </div>
      </section>

      {/* 5. WHY CHOOSE PARTH / A RESPONSIBLE ENERGY PARTNER (Parchment Paper - Matching Mockup) */}
      <section id="why-us" className="py-24 md:py-32 bg-[#ECE5D8] text-[#1F2226] relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#D87033]"></span>
              <span className="text-[#D87033] text-xs font-bold tracking-[0.25em] uppercase">WHY CHOOSE PARTH</span>
              <span className="h-px w-8 bg-[#D87033]"></span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1F2226]">
              A Responsible<br />Energy Partner
            </h2>
          </div>

          {/* 4 Icon Badges Grid (Matching Mockup Layout) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {[
              { icon: ShieldCheck, title: "Assured Quality" },
              { icon: Truck, title: "Timely Delivery" },
              { icon: MapPin, title: "Pan-India Supply" },
              { icon: Leaf, title: "Sustainable Solutions" }
            ].map((badge) => (
              <div key={badge.title} className="bg-[#F7F2E9] border border-[#DDD5C4] rounded-xl p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#1F2226] text-[#ECE5D8] flex items-center justify-center mx-auto">
                  <badge.icon size={22} className="text-[#D87033]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#1F2226]">{badge.title}</h3>
              </div>
            ))}
          </div>

          {/* Calligraphic Note */}
          <div className="text-center">
            <span className="font-script text-3xl text-[#D87033] font-bold inline-block transform -rotate-1">
              "Energy today, A better tomorrow"
            </span>
          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS / FROM SOURCE TO YOUR INDUSTRY (Dark Theme - Matching Mockup) */}
      <section id="services" className="py-24 md:py-32 bg-[#141618] text-[#ECE5D8] scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#D87033]"></span>
              <span className="text-[#D87033] text-xs font-bold tracking-[0.25em] uppercase">OUR PROCESS</span>
              <span className="h-px w-8 bg-[#D87033]"></span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#ECE5D8]">
              From Source<br />to Your Industry
            </h2>
          </div>

          {/* 4 Step Connected Circle Timeline (Matching Mockup) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative max-w-5xl mx-auto mb-20">
            {[
              { icon: Anchor, step: "Sourcing", desc: "from trusted global partners" },
              { icon: Search, step: "Quality Check", desc: "at every stage" },
              { icon: Truck, step: "Efficient Logistics", desc: "across India" },
              { icon: Factory, step: "On-Time Supply", desc: "to your facility" }
            ].map((st, i) => (
              <div key={st.step} className="text-center space-y-4 relative z-10 group">
                <div className="w-16 h-16 rounded-full bg-[#1D2024] border-2 border-[#2E3338] group-hover:border-[#D87033] text-[#ECE5D8] flex items-center justify-center mx-auto transition-colors shadow-lg">
                  <st.icon size={26} className="text-[#D87033]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#ECE5D8]">{st.step}</h3>
                <p className="text-xs text-[#ECE5D8]/60 font-sans">{st.desc}</p>
              </div>
            ))}
          </div>

          {/* 5-Point Operational Transparency Details */}
          <div className="bg-[#1D2024] rounded-2xl p-8 md:p-12 border border-[#2E3338]">
            <h3 className="text-2xl font-serif font-bold text-center mb-10 text-[#ECE5D8]">Our 5-Point Operational Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left">
              {[
                { step: "01", title: "Mines Receipts", desc: "Official weigh-bridge receipts for every dispatch." },
                { step: "02", title: "Security Seal", desc: "Single-use numbered lock seals on all cargo trucks." },
                { step: "03", title: "Live Dispatch", desc: "SMS/Email notifications with Truck No. and Live ETA." },
                { step: "04", title: "Quality Audit", desc: "Batch test certificates provided for calorific values." },
                { step: "05", title: "Monthly Review", desc: "Regular client feedback to continuously streamline logistics." }
              ].map((p) => (
                <div key={p.step} className="space-y-2 bg-[#141618] p-5 rounded-xl border border-[#2E3338]">
                  <div className="text-2xl font-serif font-bold text-[#D87033]">{p.step}</div>
                  <h4 className="font-bold text-sm text-[#ECE5D8]">{p.title}</h4>
                  <p className="text-xs text-[#ECE5D8]/60 font-sans leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRUSTED BY DIVERSE INDUSTRIES (Parchment Paper - Matching Mockup) */}
      <section id="clients" className="py-24 md:py-32 bg-[#ECE5D8] text-[#1F2226] scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#D87033] text-xs font-bold tracking-[0.25em] uppercase">TRUSTED BY</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2226]">
              DIVERSE INDUSTRIES
            </h2>
          </div>

          {/* Industry Icons Grid (Matching Mockup) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto mb-12 text-center">
            {[
              { icon: Factory, label: "Power Plants" },
              { icon: Factory, label: "Cement" },
              { icon: Layers, label: "Steel" },
              { icon: Shirt, label: "Textile" },
              { icon: FlaskConical, label: "Chemical" },
              { icon: Droplets, label: "Food Processing" },
              { icon: FileText, label: "Paper & Pulp" },
              { icon: Globe, label: "More" }
            ].map((ind) => (
              <div key={ind.label} className="bg-[#F7F2E9] border border-[#DDD5C4] rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-[#D87033] transition-colors shadow-sm">
                <ind.icon size={22} className="text-[#D87033]" />
                <span className="text-[11px] font-semibold text-[#1F2226] font-sans">{ind.label}</span>
              </div>
            ))}
          </div>

          {/* Calligraphic Script */}
          <div className="text-right max-w-5xl mx-auto">
            <span className="font-script text-3xl text-[#D87033] font-bold inline-block transform rotate-2">
              "Industries Grow, Nations Grow"
            </span>
          </div>
        </div>
      </section>

      {/* 8. FOUNDER & LEADERSHIP PROFILE (Mahesh Mal - Retained & Styled) */}
      <section className="py-20 bg-[#141618] text-[#ECE5D8] border-t border-[#2E3338]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-[#1D2024] rounded-2xl border border-[#2E3338] p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center">
                <img 
                  src="/owner-mahesh-mal.jpeg" 
                  alt="Mahesh Mal" 
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#D87033] shadow-xl"
                />
              </div>
              <div className="md:col-span-8 space-y-3 text-center md:text-left">
                <span className="text-xs uppercase tracking-[0.2em] text-[#D87033] font-bold">Leadership</span>
                <h3 className="text-3xl font-serif font-bold text-[#ECE5D8]">Mahesh Mal</h3>
                <p className="text-xs font-semibold text-[#ECE5D8]/60 uppercase tracking-wider">Founder & Managing Director</p>
                <p className="text-xs text-[#ECE5D8]/70 italic leading-relaxed font-sans pt-2">
                  "At Parth Fuel Corporation, our priority is to simplify industrial fuel procurement. We provide our clients with tailored solid fuel options, combining sustainable biomass solutions with high-GCV imported Indonesian coal, backed by clean billing, uncompromised weights, and structural transparency."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION BANNER (CTA - Matching Mockup Split Card) */}
      <section id="contact" className="py-24 bg-[#ECE5D8] text-[#1F2226] scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
            {/* Left Photo */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden min-h-[280px] relative border border-[#DDD5C4]">
              <img src="/raw-material-biomass.jpg" alt="High quality agricultural biomass raw material" className="w-full h-full object-cover" />
            </div>

            {/* Middle Main CTA Card */}
            <div className="lg:col-span-5 bg-[#141618] text-[#ECE5D8] rounded-2xl p-8 md:p-10 flex flex-col justify-between space-y-6 border border-[#2E3338]">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
                  Let's Build<br />a Cleaner, Stronger<br />Tomorrow
                </h3>
                <p className="text-xs text-[#ECE5D8]/70 font-sans leading-relaxed">
                  Get in touch with our team for customized fuel solutions tailored to your industry needs.
                </p>
              </div>

              <a 
                href="#inquiry-form" 
                className="inline-flex items-center gap-3 bg-[#D87033] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#C25F24] transition-all w-fit shadow-md"
              >
                <span>Request a Quote</span>
                <span>→</span>
              </a>
            </div>

            {/* Right Parchment Script Box */}
            <div className="lg:col-span-3 bg-[#F7F2E9] rounded-2xl p-8 border border-[#DDD5C4] flex flex-col items-center justify-center text-center space-y-3">
              <Leaf className="text-[#D87033]" size={28} />
              <span className="font-script text-2xl text-[#1F2226] font-bold">
                Sustainable Fuels for a Stronger Bharat
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. INTERACTIVE INQUIRY FORM & CAREERS SECTION (All functional features retained) */}
      <section id="inquiry-form" className="py-20 bg-[#141618] text-[#ECE5D8] border-t border-[#2E3338]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Direct Fuel Quote Form */}
            <div className="bg-[#1D2024] p-8 md:p-10 rounded-2xl border border-[#2E3338]">
              <h3 className="text-2xl font-serif font-bold text-[#ECE5D8] mb-2">Request Fuel Quote</h3>
              <p className="text-xs text-[#ECE5D8]/60 mb-6">Send your monthly requirement directly to our team.</p>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ECE5D8]/80 mb-1">Your Name</label>
                  <input type="text" name="userName" required className="w-full bg-[#141618] border border-[#2E3338] rounded-lg px-4 py-2.5 text-xs text-[#ECE5D8] focus:border-[#D87033] focus:outline-none" placeholder="e.g. Rahul Sharma" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ECE5D8]/80 mb-1">Email Address</label>
                    <input type="email" name="userEmail" required className="w-full bg-[#141618] border border-[#2E3338] rounded-lg px-4 py-2.5 text-xs text-[#ECE5D8] focus:border-[#D87033] focus:outline-none" placeholder="name@company.com" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ECE5D8]/80 mb-1">Phone Number</label>
                    <input type="tel" name="userPhone" required className="w-full bg-[#141618] border border-[#2E3338] rounded-lg px-4 py-2.5 text-xs text-[#ECE5D8] focus:border-[#D87033] focus:outline-none" placeholder="+91 9876543210" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ECE5D8]/80 mb-1">Fuel Interest</label>
                  <select name="fuelType" required className="w-full bg-[#141618] border border-[#2E3338] rounded-lg px-4 py-2.5 text-xs text-[#ECE5D8] focus:border-[#D87033] focus:outline-none">
                    <option value="Biomass Briquettes">Biomass Briquettes (Soyabean / Corn)</option>
                    <option value="Biomass Pellets">Biomass Pellets (Sawdust / Soya)</option>
                    <option value="Indonesian Coal">Imported Indonesian Coal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ECE5D8]/80 mb-1">Requirement / Details</label>
                  <textarea name="userMsg" rows={3} required className="w-full bg-[#141618] border border-[#2E3338] rounded-lg px-4 py-2.5 text-xs text-[#ECE5D8] focus:border-[#D87033] focus:outline-none" placeholder="Specify monthly quantity (MT) & delivery destination"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#D87033] text-white py-3 rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#C25F24] transition-colors shadow-md">
                  Submit Fuel Enquiry
                </button>
              </form>
            </div>

            {/* Careers Application Form */}
            <div id="careers" className="bg-[#1D2024] p-8 md:p-10 rounded-2xl border border-[#2E3338] scroll-mt-20">
              <h3 className="text-2xl font-serif font-bold text-[#ECE5D8] mb-2">Join Our Team</h3>
              <p className="text-xs text-[#ECE5D8]/60 mb-6">Explore logistics, yard operations, and lab auditing roles.</p>

              <form onSubmit={handleCareerSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ECE5D8]/80 mb-1">Full Name</label>
                  <input type="text" name="careerName" required className="w-full bg-[#141618] border border-[#2E3338] rounded-lg px-4 py-2.5 text-xs text-[#ECE5D8] focus:border-[#D87033] focus:outline-none" placeholder="Your Full Name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ECE5D8]/80 mb-1">Email</label>
                    <input type="email" name="careerEmail" required className="w-full bg-[#141618] border border-[#2E3338] rounded-lg px-4 py-2.5 text-xs text-[#ECE5D8] focus:border-[#D87033] focus:outline-none" placeholder="name@email.com" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ECE5D8]/80 mb-1">Contact Phone</label>
                    <input type="tel" name="careerPhone" required className="w-full bg-[#141618] border border-[#2E3338] rounded-lg px-4 py-2.5 text-xs text-[#ECE5D8] focus:border-[#D87033] focus:outline-none" placeholder="+91 Phone Number" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ECE5D8]/80 mb-1">Desired Position</label>
                  <input type="text" name="careerPosition" required className="w-full bg-[#141618] border border-[#2E3338] rounded-lg px-4 py-2.5 text-xs text-[#ECE5D8] focus:border-[#D87033] focus:outline-none" placeholder="e.g. Warehouse Supervisor / Logistics Executive" />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ECE5D8]/80 mb-1">Cover Message</label>
                  <textarea name="careerMessage" rows={3} required className="w-full bg-[#141618] border border-[#2E3338] rounded-lg px-4 py-2.5 text-xs text-[#ECE5D8] focus:border-[#D87033] focus:outline-none" placeholder="Briefly describe your experience"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#141618] border border-[#D87033] text-[#D87033] py-3 rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#D87033] hover:text-white transition-colors">
                  Submit Career Application
                </button>
              </form>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="mt-20 max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-serif font-bold text-center text-[#ECE5D8]">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#1D2024] border border-[#2E3338] rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full px-6 py-4 text-left font-serif font-bold text-sm text-[#ECE5D8] flex items-center justify-between hover:text-[#D87033] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-lg">{openFaqIndex === idx ? "−" : "+"}</span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 pb-4 text-xs text-[#ECE5D8]/70 font-sans leading-relaxed border-t border-[#2E3338]/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
          <div className="relative max-w-4xl w-full">
            <img src={lightboxImage} alt="Sample inspection" className="w-full max-h-[85vh] object-contain rounded-lg" />
            <button className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black">
              <X size={20} />
            </button>
          </div>
        </div>
      )}
      {/* Floating Action Button (FAB) - Quick Call, WhatsApp & Email */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {fabOpen && (
          <div className="bg-[#1D2024] border border-[#2E3338] rounded-2xl p-4 shadow-2xl space-y-3 min-w-[240px] animate-fade-in text-xs text-[#ECE5D8]">
            <div className="font-serif font-bold text-sm text-[#D87033] border-b border-[#2E3338] pb-2">
              Parth Fuel Corporation
            </div>
            
            <a 
              href="tel:+919881125511" 
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#141618] hover:bg-[#2E3338] transition-colors text-[#ECE5D8] group"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={15} />
              </div>
              <div>
                <span className="block font-bold text-emerald-400">Call Now</span>
                <span className="text-[11px] text-[#ECE5D8]/70">+91 9881125511</span>
              </div>
            </a>

            <a 
              href="https://wa.me/919881125511?text=Hello%20Parth%20Fuel%20Corporation,%20I%20am%20interested%20in%20your%20fuel%20products." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#141618] hover:bg-[#2E3338] transition-colors text-[#ECE5D8] group"
            >
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <MessageSquare size={15} />
              </div>
              <div>
                <span className="block font-bold text-green-400">WhatsApp Chat</span>
                <span className="text-[11px] text-[#ECE5D8]/70">+91 9881125511</span>
              </div>
            </a>

            <a 
              href="mailto:parthfuelcorporation23@gmail.com" 
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#141618] hover:bg-[#2E3338] transition-colors text-[#ECE5D8] group"
            >
              <div className="w-8 h-8 rounded-full bg-[#D87033] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={15} />
              </div>
              <div>
                <span className="block font-bold text-[#D87033]">Send Email</span>
                <span className="text-[10px] text-[#ECE5D8]/70 break-all">parthfuelcorporation23@gmail.com</span>
              </div>
            </a>
          </div>
        )}

        <button
          onClick={() => setFabOpen(!fabOpen)}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all transform hover:scale-105 border-2 border-emerald-400/40"
          aria-label="Quick Call & WhatsApp"
        >
          {fabOpen ? <X size={24} /> : <Phone size={24} className="animate-pulse" />}
        </button>
      </div>
    </Layout>
  );
};

export default Index;
