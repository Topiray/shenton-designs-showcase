import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

const ThirdStrandProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-foreground">
              Third Strand Studio
            </h1>
            <p className="text-large text-muted-foreground mb-8">
              A full-suite creative and development agency building high-performing digital products for startups, web3 projects, SaaS platforms, and emerging consumer brands. Leading every aspect of the studio&apos;s identity and offering—from branding to development.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Creative Agency
              </span>
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Brand Identity
              </span>
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Full-Stack Development
              </span>
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Motion Design
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-foreground mb-4">My Role</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Lead Designer</li>
                <li>Brand Identity Development</li>
                <li>Motion Design</li>
                <li>Frontend Development</li>
                <li>Digital Strategy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground mb-4">Tools Used</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Figma</li>
                <li>React & Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Adobe Creative Suite</li>
                <li>3D Animation Tools</li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground mb-4">Duration</h3>
              <p className="text-muted-foreground">12 months</p>
              
              <h3 className="text-foreground mb-4 mt-6">Team</h3>
              <p className="text-muted-foreground">1 Lead Designer (me), 2 Developers, 1 Content Strategist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="mb-12 text-foreground text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Identity System",
                description: "End-to-end visual identity with motion-ready assets and guidelines"
              },
              {
                title: "Conversion-Focused Landing Pages",
                description: "High-performing funnel systems designed for maximum conversion"
              },
              {
                title: "Modular UI Kit",
                description: "Scalable design system for internal tools and client projects"
              },
              {
                title: "Real-Time Content Framework",
                description: "Agency site with dynamic case study builder and content management"
              },
              {
                title: "Motion Principles",
                description: "Hover-state animations and micro-interactions baked into every component"
              },
              {
                title: "Full-Stack Development",
                description: "React, Tailwind, and Framer Motion with SEO optimization"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border">
                <h3 className="text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="mb-12 text-foreground text-center">
            Design Process
          </h2>
          
          <div className="space-y-16">
            {/* Hero Section Design */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-foreground mb-4">1. Hero Section</h3>
                <p className="text-muted-foreground mb-6">
                  Led with clarity and confidence. Designed a bold landing section communicating Third Strand&apos;s core value: &quot;Design, code, and strategy that builds what others can&apos;t.&quot; Used ultra-clean typography, soft depth layering, and subtle 3D hover interactions.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ultra-clean typography hierarchy</li>
                  <li>• Soft depth layering effects</li>
                  <li>• A/B tested CTA optimization</li>
                </ul>
              </div>
              <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img src="/thirdstrand.png" alt="Third Strand Studio Hero Section" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>

            {/* Service Breakdown */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img src="/tss-service.png" alt="Service Breakdown Visual" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-foreground mb-4">2. Service Breakdown Funnel</h3>
                <p className="text-muted-foreground mb-6">
                  Built an interactive breakdown of services—Web Design, SaaS Development, Web3, Branding—each animated on scroll with a parallax-driven structure. Each section includes sharp iconography, modular text blocks, and visual demos of deliverables.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Parallax-driven scroll animations</li>
                  <li>• Interactive service demonstrations</li>
                  <li>• Modular content architecture</li>
                </ul>
              </div>
            </div>

            {/* Portfolio Engine */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-foreground mb-4">3. Studio Portfolio Engine</h3>
                <p className="text-muted-foreground mb-6">
                  Designed a flexible case study builder in Figma that powers both the public portfolio and internal pitch decks. Each showcase includes problem framing, solution storytelling, visuals, and defined results with editorial spacing and subtle motion.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Flexible case study templates</li>
                  <li>• Editorial spacing and typography</li>
                  <li>• Scroll-triggered animations</li>
                </ul>
              </div>
              <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img src="/tss-portfolio.png" alt="Portfolio Engine Visual" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>

            {/* Design System */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img src="/tss-design.png" alt="Design System Visual" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-foreground mb-4">4. Design System & Component Library</h3>
                <p className="text-muted-foreground mb-6">
                  Developed a branded design system and interactive component library used across all studio client work. Built in Figma with full token logic, breakpoint responsiveness, and pre-wired animation states including icon sets, shadows, and motion timing.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Comprehensive token system</li>
                  <li>• Responsive breakpoint logic</li>
                  <li>• Pre-wired animation states</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="mb-12 text-foreground text-center">
            Design Approach
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-foreground mb-4">Confidence Through Precision</h3>
              <p className="text-muted-foreground mb-8">
                The entire brand tone was crafted to exude clarity and control. Design isn&apos;t loud—it&apos;s deliberate. Motion is never ornamental, always informative. Typography choices leaned on space, rather than color or clutter, to carry hierarchy.
              </p>
              
              <h3 className="text-foreground mb-4">Motion as Identity</h3>
              <p className="text-muted-foreground">
                We incorporated micro-interactions and scroll-based animations as a signature—anchoring user attention, creating delight, and helping communicate sophistication.
              </p>
            </div>
            
            <div>
              <h3 className="text-foreground mb-4">Built to Convert</h3>
              <p className="text-muted-foreground mb-8">
                Landing pages were designed with clear CTA flows, pricing anchors, and credibility boosters. Each step of the funnel was engineered using conversion data, feedback loops, and real usage metrics.
              </p>
              
              <h3 className="text-foreground mb-4">Developer-First Handoff</h3>
              <p className="text-muted-foreground">
                All frontend components were built or spec&apos;d for seamless React integration using Tailwind, Framer Motion, and custom animation logic. Paired with detailed documentation and design tokens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="mb-12 text-foreground text-center">
            Results & Impact
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                metric: "20+",
                description: "High-converting landing pages built using our system"
              },
              {
                metric: "3x",
                description: "Increase in average session time post-launch"
              },
              {
                metric: "40%",
                description: "Increase in qualified leads"
              },
              {
                metric: "100%",
                description: "Reusable framework for faster builds"
              }
            ].map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-foreground mb-6 text-center">Target User Personas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Startup founders seeking product, brand, and tech all-in-one",
                "Creative directors and marketing leads needing executional firepower", 
                "Web3 builders looking for professional-grade UX/UI and landing systems",
                "Agencies and partners seeking white-label design and development support"
              ].map((persona, index) => (
                <div key={index} className="p-4 bg-card rounded-lg border">
                  <p className="text-muted-foreground">• {persona}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center">
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThirdStrandProject;