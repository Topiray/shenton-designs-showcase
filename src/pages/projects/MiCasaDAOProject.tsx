import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

const MiCasaDAOProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-foreground">
              MiCasaDAO
            </h1>
            <p className="text-large text-muted-foreground mb-8">
              A decentralized real estate investment platform that bridges property and liquidity through tokenization. Built to democratize access to property investment, empowering users to own fractions of tokenized assets and vote on key decisions.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Web3
              </span>
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Real Estate
              </span>
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Tokenization
              </span>
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                DAO
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
                <li>Lead Product Designer</li>
                <li>UX Design & Animation</li>
                <li>Frontend Design</li>
                <li>Design System Architecture</li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground mb-4">Tools Used</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Figma</li>
                <li>Framer</li>
                <li>React Components</li>
                <li>Web3 Design Patterns</li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground mb-4">Duration</h3>
              <p className="text-muted-foreground">8 months</p>
              
              <h3 className="text-foreground mb-4 mt-6">Team</h3>
              <p className="text-muted-foreground">1 Designer (me), 4 Developers, 1 Product Manager, 1 Blockchain Engineer</p>
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
                title: "Tokenized Real Estate",
                description: "Real-time ownership tracking of fractional property shares"
              },
              {
                title: "Governance System",
                description: "Investor voting on key property decisions and platform updates"
              },
              {
                title: "Yield Interface",
                description: "Projected returns dashboard for liquidity providers"
              },
              {
                title: "Seamless Onboarding",
                description: "Smooth flows for both investors and property owners"
              },
              {
                title: "Blockchain Dashboards",
                description: "Transparent, blockchain-backed performance tracking"
              },
              {
                title: "Modular Components",
                description: "Scalable design system built for global expansion"
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
                  Crafted a high-impact landing section introducing MiCasaDAO's mission: "Bridging Property and Liquidity." A clean layout with large, bold typography, animated tokens transitioning into buildings, and a sharp CTA conveys both innovation and trust.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bold typography with clear messaging</li>
                  <li>• Animated token-to-building transitions</li>
                  <li>• Trust-building visual elements</li>
                </ul>
              </div>
              <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img src="/mcd.png" alt="MiCasaDAO Hero" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>

            {/* Three-Step Flow */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img src="/mcd-three.png" alt="MiCasaDAO Three Step Flow" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-foreground mb-4">2. Three-Step User Flow</h3>
                <p className="text-muted-foreground mb-6">
                  Designed an animated 3-step explainer to introduce users to how MiCasaDAO works—Invest, Vote, Earn. Each tile features microinteractions and icon-led visuals that reinforce simplicity, while subtle motion directs attention and aids comprehension.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Interactive step-by-step guidance</li>
                  <li>• Microinteractions for engagement</li>
                  <li>• Clear visual progression</li>
                </ul>
              </div>
            </div>

            {/* Investor Dashboard */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-foreground mb-4">3. Investor Dashboard UI</h3>
                <p className="text-muted-foreground mb-6">
                  Built a comprehensive dashboard for users to view owned properties, track predicted yields, and participate in votes. Focused on clear hierarchy, light/dark mode accessibility, and responsive layouts for tablet/mobile investors on the go.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real-time portfolio tracking</li>
                  <li>• Voting interface integration</li>
                  <li>• Mobile-optimized design</li>
                </ul>
              </div>
              <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img src="/mcd-1.png" alt="MiCasaDAO Investor Dashboard" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>

                        {/* Property Onboarding */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img src="/mcd.png" alt="MiCasaDAO Three Step Flow" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-foreground mb-4">4. Property Onboarding UX</h3>
                <p className="text-muted-foreground mb-6">
                  Created a streamlined flow for property owners to fractionalize their assets. From KYC to smart contract linking, every step includes progressive disclosure and educational modals to reduce friction and build trust in this new tech-forward process.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                <li>• Progressive disclosure patterns</li>
                  <li>• Educational modal system</li>
                  <li>• Smart contract integration UX</li>
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
              <h3 className="text-foreground mb-4">Web3 with Warmth</h3>
              <p className="text-muted-foreground mb-8">
                While blockchain can feel intimidating, my design direction made MiCasaDAO feel human, approachable, and professional. Soft shadows, confident typography, and motion that reinforces clarity all contribute to user trust.
              </p>
              
              <h3 className="text-foreground mb-4">Scalable Design System</h3>
              <p className="text-muted-foreground">
                Built a robust component library in Figma with reusable layouts, variant toggles, and clear documentation—ready for rapid scaling and multi-region expansion.
              </p>
            </div>
            
            <div>
              <h3 className="text-foreground mb-4">Mobile-First + Investor-Centric</h3>
              <p className="text-muted-foreground mb-8">
                Prioritized a seamless mobile experience for quick property insights, voting actions, and balance tracking. Interactions were optimized for passive investors checking in on performance or yield forecasts.
              </p>
              
              <h3 className="text-foreground mb-4">Developer-Ready</h3>
              <p className="text-muted-foreground">
                Worked closely with the engineering team to ensure clean handoff with well-labeled components, responsive logic, and motion specs for animation frameworks.
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
                metric: "MVP",
                description: "Launched with full investor and owner flows"
              },
              {
                metric: "Web3",
                description: "Blend of DeFi familiarity with real estate professionalism"
              },
              {
                metric: "Global",
                description: "Ready for multilingual expansion and regulatory adaptation"
              },
              {
                metric: "Trust",
                description: "Positioned as credible player in tokenized property space"
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
                "Crypto-native investors looking for stable yields",
                "Property owners seeking liquidity without full sale", 
                "Institutional funds exploring tokenized real estate exposure",
                "DeFi users looking to diversify into real-world asset classes"
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

export default MiCasaDAOProject;