import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

const RentalMasterProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-foreground">
              RentalMaster.ai
            </h1>
            <p className="text-large text-muted-foreground mb-8">
              An AI-powered rental property management platform designed to give hosts and property managers complete control over their listings, bookings, and income—without the high commission fees of traditional platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                SaaS Platform
              </span>
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Property Management
              </span>
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                AI Integration
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
                <li>Lead UI/UX Designer</li>
                <li>Product Strategy</li>
                <li>User Research & Testing</li>
                <li>Design System Creation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground mb-4">Tools Used</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Figma</li>
                <li>Adobe Creative Suite</li>
                <li>React Components</li>
                <li>User Testing Tools</li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground mb-4">Duration</h3>
              <p className="text-muted-foreground">6 months</p>
              
              <h3 className="text-foreground mb-4 mt-6">Team</h3>
              <p className="text-muted-foreground">1 Designer (me), 3 Developers, 1 Product Manager</p>
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
                title: "AI-Generated Content",
                description: "Smart property descriptions and automated pricing optimization"
              },
              {
                title: "Zero Commission Fees",
                description: "Complete ownership without platform fees eating into profits"
              },
              {
                title: "Custom Branding",
                description: "Branded landing pages and personalized property URLs"
              },
              {
                title: "Integrated Payments",
                description: "Seamless Stripe integration for secure booking transactions"
              },
              {
                title: "Smart Automation",
                description: "Automated guest communication and check-in workflows"
              },
              {
                title: "Admin Dashboard",
                description: "Comprehensive property and income management interface"
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
                  Designed a conversion-focused hero section that clearly communicates RentalMaster's value proposition: "Effortless Property Management Powered by AI." The layout features bold typography, a primary CTA, and a soft gradient background to convey trust and innovation.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Clear value proposition messaging</li>
                  <li>• Prominent call-to-action placement</li>
                  <li>• Trust-building visual elements</li>
                </ul>
              </div>
              <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img src="/rm.png" alt="RentalMaster Hero" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>

            {/* Feature Tiles */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img src="/rm-1.png" alt="RentalMaster Feature Tile" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-foreground mb-4">2. Feature Tiles Grid</h3>
                <p className="text-muted-foreground mb-6">
                  Developed a modular tile layout to showcase key platform benefits like "Zero Fees," "Smart Automation," and "Full Customization." Each tile uses consistent iconography and microinteractions to enhance scannability while reinforcing brand trust.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Modular component system</li>
                  <li>• Consistent visual hierarchy</li>
                  <li>• Interactive hover states</li>
                </ul>
              </div>
            </div>

            {/* AI Flow */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-foreground mb-4">3. AI Flow & Customization UX</h3>
                <p className="text-muted-foreground mb-6">
                  Created an intuitive flow for hosts to build AI-powered listings with dynamic modifiers. The system guides users step-by-step with live previews and contextual tooltips, ensuring ease of use for non-technical users.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Step-by-step guided workflow</li>
                  <li>• Real-time preview system</li>
                  <li>• Contextual help and tooltips</li>
                </ul>
              </div>
              <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img src="/rm-2.png" alt="RentalMaster AI Flow" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>

            {/* Dashboard */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img src="/rm-dash.png" alt="RentalMaster Dashboard" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-foreground mb-4">4. Dashboard Interface</h3>
                <p className="text-muted-foreground mb-6">
                  Designed a clean, data-centric dashboard where users can manage listings, track income, handle guest check-ins, and monitor bookings at a glance. Prioritized simplicity, accessibility, and hierarchy for property managers working across multiple devices.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mobile-optimized interface</li>
                  <li>• Clear data visualization</li>
                  <li>• Intuitive navigation system</li>
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
              <h3 className="text-foreground mb-4">Ownership-First Design</h3>
              <p className="text-muted-foreground mb-8">
                Everything in the UI reinforces the message: this is your business. From editable brand colors and logo uploads to personalized property URLs, the platform design encourages autonomy.
              </p>
              
              <h3 className="text-foreground mb-4">Mobile-Optimized</h3>
              <p className="text-muted-foreground">
                A mobile-first strategy ensured every feature—especially time-sensitive actions like messaging guests or viewing check-in codes—was easy to use on any device.
              </p>
            </div>
            
            <div>
              <h3 className="text-foreground mb-4">Scalable & Modular</h3>
              <p className="text-muted-foreground mb-8">
                Built a component-based system in Figma with reusable tiles, sections, and layouts for fast iteration and future features like referral systems and discount codes.
              </p>
              
              <h3 className="text-foreground mb-4">Developer-Friendly</h3>
              <p className="text-muted-foreground">
                Structured designs with labeled components, annotations, and auto-layouts for seamless implementation by dev teams using React.
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
                metric: "70%",
                description: "Reduction in admin time through AI workflows"
              },
              {
                metric: "0%",
                description: "Commission fees for host empowerment"
              },
              {
                metric: "100%",
                description: "Mobile-responsive interface"
              },
              {
                metric: "Global",
                description: "Ready for multi-language expansion"
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
                "Independent vacation rental owners in Mexico",
                "Small property managers handling 2-10 properties", 
                "Airbnb hosts frustrated by high commission fees",
                "Digital-first entrepreneurs in real estate"
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

export default RentalMasterProject;