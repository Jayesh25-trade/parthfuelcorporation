import { useState } from "react";
import { MapPin, Ship, ShieldCheck, Flame, Compass } from "lucide-react";

interface NodeDetail {
  title: string;
  subtitle: string;
  description: string;
  stats: string;
  icon: any;
}

const NODES_DATA: Record<string, NodeDetail> = {
  indonesia: {
    title: "Indonesia (East Kalimantan)",
    subtitle: "Direct Sourcing Port",
    description: "Exclusive partnerships with major Indonesian collieries. Sourcing premium Indonesian GAR grades directly to guarantee uninterrupted supply.",
    stats: "Indonesian GAR 3400 - 6000",
    icon: Compass
  },
  ports: {
    title: "Maharashtra Ports",
    subtitle: "Jaigad, Dighi & Dharamtar",
    description: "Major maritime entry portals. Received bulk shipments of Indonesian coal are discharged, custom-cleared, and loaded for immediate dispatch.",
    stats: "Bulk Custom Clearance Hubs",
    icon: Ship
  },
  khamgaon: {
    title: "Khamgaon Warehouse & Sieve Plant",
    subtitle: "Processing & Screening Unit",
    description: "Our central storage node where imported coal is sieve-screened into standard sizes (25-50mm) and biomass products are stockpiled.",
    stats: "900 MT Active Stock Capacity",
    icon: ShieldCheck
  },
  shegaon: {
    title: "Shegaon Headquarters",
    subtitle: "Corporate Command & Desk",
    description: "The commercial heart of Parth Fuel Corporation. Manages invoicing, quota documentation, lab-reports, and logistics coordination.",
    stats: "ESTD. 2022 Corporate HQ",
    icon: Flame
  },
  delivery_nodes: {
    title: "Maharashtra Delivery Clusters",
    subtitle: "Wani, Nagpur, Akola, Amravati",
    description: "Active road network transport pipelines directly supplying manufacturing boilers and paper mills within hours.",
    stats: "24/7 Dispatch Schedules",
    icon: MapPin
  },
  tamilnadu: {
    title: "Tamil Nadu Industrial Belt",
    subtitle: "Southern Delivery Node",
    description: "Catering to the southern textile, chemical, and distillery clusters, coordinating bulk delivery directly via container rakes.",
    stats: "Bulk Boiler Fuel Supply",
    icon: MapPin
  }
};

const RouteMap = () => {
  const [activeNode, setActiveNode] = useState<string | null>("shegaon");

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive SVG Map */}
        <div className="lg:col-span-7 relative bg-background border border-border rounded-xl p-4 overflow-hidden aspect-[4/3] flex items-center justify-center">
          <svg
            viewBox="0 0 800 600"
            className="w-full h-full text-muted-foreground select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Definitions for gradients and markers */}
            <defs>
              <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary)/0.03)" />
                <stop offset="100%" stopColor="hsl(var(--primary)/0.08)" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--primary))" />
              </linearGradient>
            </defs>

            {/* Stylized background representing ocean and land border */}
            <rect width="800" height="600" fill="url(#oceanGrad)" rx="8" />

            {/* Simulated Land Outlines */}
            <path
              d="M 120,50 L 170,120 L 220,180 L 210,250 L 190,300 L 220,380 L 280,480 L 320,550 L 340,570 L 330,480 L 310,400 L 360,330 L 480,260 L 590,200 L 680,180 L 730,120 L 780,80 L 800,200 L 800,600 L 0,600 L 0,50 Z"
              fill="hsl(var(--card)/0.4)"
              stroke="hsl(var(--border)/0.2)"
              strokeWidth="2"
            />

            {/* Supply routes (Ocean shipping and Land transport lanes) */}
            {/* 1. Indonesia -> Maharashtra Ports */}
            <path
              d="M 720,480 Q 500,520 230,360"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="3"
              strokeDasharray="6 4"
              className="animate-[dash_15s_linear_infinite]"
            />

            {/* 2. Ports -> Khamgaon */}
            <path
              d="M 230,360 L 300,280"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* 3. Khamgaon -> Shegaon */}
            <path
              d="M 300,280 L 340,260"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="3 3"
            />

            {/* 4. Khamgaon -> Maharashtra Clusters */}
            <path
              d="M 300,280 Q 380,220 440,230"
              fill="none"
              stroke="hsl(var(--primary)/0.6)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* 5. Ports/Khamgaon -> Tamil Nadu */}
            <path
              d="M 300,280 Q 260,380 290,490"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              strokeDasharray="5 5"
            />

            {/* Dynamic Map Nodes */}
            {/* Indonesia Node */}
            <g
              className="cursor-pointer group"
              onClick={() => setActiveNode("indonesia")}
            >
              <circle cx="720" cy="480" r="14" fill="hsl(var(--accent)/0.15)" className="group-hover:fill-accent/25 transition-colors" />
              <circle cx="720" cy="480" r="6" fill="hsl(var(--accent))" />
              <circle cx="720" cy="480" r="10" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none" className="animate-ping opacity-75" />
              <text x="720" y="510" textAnchor="middle" className="text-[11px] font-bold fill-muted-foreground group-hover:fill-foreground transition-colors">Indonesia Port</text>
            </g>

            {/* Ports Node */}
            <g
              className="cursor-pointer group"
              onClick={() => setActiveNode("ports")}
            >
              <circle cx="230" cy="360" r="14" fill="hsl(var(--accent)/0.15)" className="group-hover:fill-accent/25 transition-colors" />
              <circle cx="230" cy="360" r="6" fill="hsl(var(--accent))" />
              <text x="170" y="365" className="text-[11px] font-bold fill-muted-foreground group-hover:fill-foreground transition-colors">Maharashtra Ports</text>
            </g>

            {/* Khamgaon Node */}
            <g
              className="cursor-pointer group"
              onClick={() => setActiveNode("khamgaon")}
            >
              <circle cx="300" cy="280" r="16" fill="hsl(var(--primary)/0.15)" className="group-hover:fill-primary/25 transition-colors" />
              <circle cx="300" cy="280" r="7" fill="hsl(var(--primary))" />
              <circle cx="300" cy="280" r="12" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" className="animate-pulse" />
              <text x="240" y="285" className="text-[11px] font-bold fill-muted-foreground group-hover:fill-primary transition-colors">Khamgaon Warehouse</text>
            </g>

            {/* Shegaon HQ Node */}
            <g
              className="cursor-pointer group"
              onClick={() => setActiveNode("shegaon")}
            >
              <circle cx="340" cy="260" r="18" fill="hsl(var(--primary)/0.2)" className="group-hover:fill-primary/30 transition-colors" />
              <circle cx="340" cy="260" r="8" fill="hsl(var(--primary))" />
              <circle cx="340" cy="260" r="14" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" className="animate-ping opacity-60" />
              <text x="340" y="235" textAnchor="middle" className="text-[12px] font-extrabold fill-foreground">Shegaon (HQ)</text>
            </g>

            {/* Maharashtra Clusters Node */}
            <g
              className="cursor-pointer group"
              onClick={() => setActiveNode("delivery_nodes")}
            >
              <circle cx="440" cy="230" r="12" fill="hsl(var(--primary)/0.15)" className="group-hover:fill-primary/25 transition-colors" />
              <circle cx="440" cy="230" r="5" fill="hsl(var(--primary))" />
              <text x="440" y="215" textAnchor="middle" className="text-[11px] font-bold fill-muted-foreground group-hover:fill-foreground transition-colors">Nagpur & Wani</text>
            </g>

            {/* Tamil Nadu Node */}
            <g
              className="cursor-pointer group"
              onClick={() => setActiveNode("tamilnadu")}
            >
              <circle cx="290" cy="490" r="14" fill="hsl(var(--primary)/0.15)" className="group-hover:fill-primary/25 transition-colors" />
              <circle cx="290" cy="490" r="6" fill="hsl(var(--primary))" />
              <circle cx="290" cy="490" r="10" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" className="animate-pulse" />
              <text x="290" y="520" textAnchor="middle" className="text-[11px] font-bold fill-muted-foreground group-hover:fill-foreground transition-colors">Tamil Nadu Cluster</text>
            </g>
          </svg>

          {/* Helper Legend */}
          <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur border border-border p-3 rounded-lg text-xs space-y-1">
            <div className="flex items-center gap-2 font-bold text-foreground mb-1">
              <Compass size={12} className="text-primary" /> Legend
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">Parth Hubs & Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="text-muted-foreground">Sourcing & Sea Ports</span>
            </div>
          </div>
        </div>

        {/* Node Information Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border-b border-border pb-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-primary">Supply Network Node</h3>
            <p className="text-muted-foreground text-xs">Click on any node in the map to inspect our operations.</p>
          </div>

          {activeNode && NODES_DATA[activeNode] ? (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0">
                  {(() => {
                    const NodeIcon = NODES_DATA[activeNode].icon;
                    return <NodeIcon size={24} />;
                  })()}
                </div>
                <div>
                  <h4 className="font-extrabold text-xl text-foreground leading-tight">
                    {NODES_DATA[activeNode].title}
                  </h4>
                  <p className="text-xs font-semibold text-primary">
                    {NODES_DATA[activeNode].subtitle}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {NODES_DATA[activeNode].description}
              </p>
              <div className="p-4 bg-background border border-border rounded-lg flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-semibold">Node Capacity / Output:</span>
                <span className="font-bold text-foreground uppercase">{NODES_DATA[activeNode].stats}</span>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-background border border-dashed border-border rounded-xl">
              <p className="text-sm text-muted-foreground">Select a node from the map to view specifics.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </div>
  );
};

export default RouteMap;
