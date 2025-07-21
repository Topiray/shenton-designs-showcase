import { ArrowLeft, Palette, Package, Sparkles, Target, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

const JOVIProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm mb-8">
            <Palette className="w-4 h-4" />
            Brand Identity & Packaging Design
          </div>
          
          <h1 className="mb-6 text-foreground">
            JOVI - Premium Supplement Brand Identity
          </h1>
          
          <p className="text-large text-muted-foreground max-w-3xl mx-auto mb-8">
            JOVI approached me to create a complete brand identity system for their new premium supplement line. 
            The challenge was positioning them as a trusted, science-backed wellness brand in a crowded market 
            while maintaining a fresh, approachable aesthetic that appeals to health-conscious millennials and Gen Z.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Package className="w-4 h-4" />
              Packaging Design
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              Brand Identity
            </span>
            <span className="flex items-center gap-1">
              <Target className="w-4 h-4" />
              Market Positioning
            </span>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="px-6 lg:px-8 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="mb-6 text-foreground">Key Features</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  Complete visual identity system with logo, typography, and color palette
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  Premium packaging design for supplement bottles and secondary packaging
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  Brand guidelines and style guide for consistent application
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  Product line architecture for multiple supplement categories
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  Marketing collateral templates and social media assets
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  Iconography system for supplement benefits and ingredients
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  Scalable design system for future product launches and expansions
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Project Scope</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Timeline</span>
                  <span className="text-foreground">8 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Industry</span>
                  <span className="text-foreground">Health & Wellness</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Target Market</span>
                  <span className="text-foreground">Premium Supplements</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deliverables</span>
                  <span className="text-foreground">50+ Assets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-16 text-foreground">Design Process</h2>
          
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Brand Discovery & Strategy</h3>
              </div>
              <div className="lg:col-span-4">
                <p className="text-muted-foreground mb-4">
                  Conducted comprehensive brand discovery sessions to understand JOVI's mission, values, and target audience. 
                  Analyzed competitor landscapes and identified opportunities for differentiation in the premium supplement space.
                </p>
                <p className="text-muted-foreground">
                  Developed brand positioning focused on "science-backed wellness made accessible" with emphasis on transparency, 
                  quality, and community. Established core brand attributes: trustworthy, innovative, approachable, and premium.
                </p>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm italic text-muted-foreground">
                    Brand Discovery Workshop & Competitive Analysis
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Visual Identity System</h3>
              </div>
              <div className="lg:col-span-4">
                <p className="text-muted-foreground mb-4">
                  Created a distinctive logo mark combining a modern wordmark with subtle wellness-inspired iconography. 
                  Developed a vibrant color palette anchored by a signature gradient that conveys energy and vitality.
                </p>
                <p className="text-muted-foreground">
                  Selected typography that balances scientific credibility with approachable warmth. Established visual 
                  principles around clean layouts, strategic use of white space, and premium material aesthetics.
                </p>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm italic text-muted-foreground">
                    Logo Design & Brand Identity System
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Product Packaging Design</h3>
              </div>
              <div className="lg:col-span-4">
                <p className="text-muted-foreground mb-4">
                  Designed premium supplement packaging that stands out on shelves while communicating trust and efficacy. 
                  Created a modular system allowing for easy product line extensions with consistent brand recognition.
                </p>
                <p className="text-muted-foreground">
                  Incorporated clear benefit messaging, ingredient highlights, and regulatory compliance while maintaining 
                  clean, modern aesthetics. Developed unique iconography for different supplement categories and benefits.
                </p>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm italic text-muted-foreground">
                    Package Design & Product Line Architecture
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Brand Guidelines & System</h3>
              </div>
              <div className="lg:col-span-4">
                <p className="text-muted-foreground mb-4">
                  Compiled comprehensive brand guidelines covering logo usage, color applications, typography hierarchy, 
                  and packaging standards. Created templates for marketing materials, social media, and future product launches.
                </p>
                <p className="text-muted-foreground">
                  Established a scalable design system with clear rules for brand application across digital and print touchpoints. 
                  Provided detailed specifications for manufacturing and quality control.
                </p>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm italic text-muted-foreground">
                    Brand Guidelines & Asset Library
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="px-6 lg:px-8 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-16 text-foreground">Design Approach</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Premium Positioning</h3>
              <p className="text-muted-foreground mb-6">
                Positioned JOVI as a premium yet accessible wellness brand through sophisticated design choices, 
                high-quality materials, and clear value communication.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">Science-Backed Credibility</h3>
              <p className="text-muted-foreground">
                Balanced approachable aesthetics with scientific credibility through clean layouts, 
                evidence-based messaging, and transparent ingredient communication.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Scalable System</h3>
              <p className="text-muted-foreground mb-6">
                Built a flexible design system that allows for rapid product line expansion while maintaining 
                consistent brand recognition and shelf impact.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">Market Differentiation</h3>
              <p className="text-muted-foreground">
                Created distinctive visual identity that cuts through category noise while appealing to 
                health-conscious consumers seeking premium, trustworthy supplement brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-16 text-foreground">Results & Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">3x</h3>
              <p className="text-muted-foreground">Brand recognition increase in target market</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">5</h3>
              <p className="text-muted-foreground">Product lines launched using the design system</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">85%</h3>
              <p className="text-muted-foreground">Customer approval rating for new packaging</p>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Key Achievements</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                Successfully launched complete brand identity with strong market differentiation
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                Created scalable packaging system supporting rapid product line expansion
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                Established premium positioning in competitive supplement market
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                Delivered comprehensive brand guidelines ensuring consistent future applications
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                Achieved strong customer approval and improved shelf presence
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Target Personas */}
      <section className="px-6 lg:px-8 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-16 text-foreground">User Personas Targeted</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Health-Conscious Millennials</h3>
              <p className="text-muted-foreground text-sm">
                Active professionals seeking premium supplements to support their wellness goals, 
                valuing transparency and science-backed formulations.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Wellness-Focused Gen Z</h3>
              <p className="text-muted-foreground text-sm">
                Digital natives prioritizing holistic health and sustainability, attracted to brands 
                with authentic values and premium aesthetics.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Fitness Enthusiasts</h3>
              <p className="text-muted-foreground text-sm">
                Athletes and gym-goers looking for effective supplementation to optimize performance 
                and recovery with trusted, high-quality products.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">Premium Health Investors</h3>
              <p className="text-muted-foreground text-sm">
                Affluent consumers willing to invest in premium supplements, seeking brands that 
                reflect their lifestyle and values through superior quality and presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-6 text-foreground">Ready to Build Your Brand?</h2>
          <p className="text-large text-muted-foreground mb-8">
            Let's create a brand identity that sets you apart in your market and resonates with your target audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/">View More Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JOVIProject;