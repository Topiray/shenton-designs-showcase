import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const UnifyProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />   
      <main className="pt-20">
    
        {/* Hero Section */}
        <section className="px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="text-sm text-muted-foreground mb-4 block">SaaS Landing Page Design</span>
              <h1 className="mb-6 text-foreground">
                Unify - Customer Communication Platform
              </h1>
              <p className="text-large text-muted-foreground mb-8 max-w-3xl">
                A full-stack landing page for a SaaS product that centralizes all customer communications 
                into one smart inbox, improving support response times and stopping customer loss from 
                fragmented conversations.
              </p>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-medium text-foreground mb-2">My Role</h3>
                <p className="text-muted-foreground text-sm">Lead UI/UX Designer</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Timeline</h3>
                <p className="text-muted-foreground text-sm">8 weeks</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Tools</h3>
                <p className="text-muted-foreground text-sm">Figma, Adobe Creative Suite</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Project Image */}
        <section className="px-6 lg:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-muted rounded-2xl aspect-[16/10] flex items-center justify-center overflow-hidden">
              <img src="/ob.png" alt="Unify Main Landing Page" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-foreground">Project Overview</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Unify is a multichannel communication platform that allows support teams to route messages 
                to specific departments, manage customer tickets collaboratively, and view all past 
                communications from a customer across platforms in a single thread.
              </p>
              
              <h3 className="text-foreground mb-4">Key Features</h3>
              <ul className="text-muted-foreground space-y-2 mb-8">
                <li>• Route messages to specific departments</li>
                <li>• Manage customer tickets collaboratively</li>
                <li>• Unified customer communication history</li>
                <li>• Real-time team performance metrics</li>
                <li>• Enterprise-grade security and data protection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-foreground">Design Process</h2>
            
            <div className="space-y-12">
              {/* Hero Section */}
              <div>
                <h3 className="text-foreground mb-4">1. Hero Section</h3>
                <p className="text-muted-foreground mb-6">
                  Created a clear value proposition with animated brand icons showing integrations 
                  across email, SMS, and social platforms. The primary CTA "Start Free Trial" 
                  drives immediate action.
                </p>
                <div className="bg-muted rounded-xl aspect-[16/9] flex items-center justify-center overflow-hidden">
                  <img src="/ob-1.png" alt="Unify Hero Section" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>

              {/* Problem-Solution */}
              <div>
                <h3 className="text-foreground mb-4">2. Problem-Solution Visual</h3>
                <p className="text-muted-foreground mb-6">
                  Designed a compelling comparison graphic showing "Communication Chaos" versus 
                  a unified system, backed by statistics to drive urgency and explain ROI.
                </p>
                <div className="bg-muted rounded-xl aspect-[16/9] flex items-center justify-center overflow-hidden">
                  <img src="/ob-problem.png" alt="Unify Problem-Solution" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>

              {/* Authentication Flow */}
              <div>
                <h3 className="text-foreground mb-4">3. Security & Authentication</h3>
                <p className="text-muted-foreground mb-6">
                  Designed a comprehensive security flow including multi-factor authentication, 
                  account verification, and enterprise-grade security features.
                </p>
                <div className="bg-muted rounded-xl aspect-[16/9] flex items-center justify-center overflow-hidden">
                  <img src="/ob-5.png" alt="Unify Authentication Flow" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>

              {/* Dashboard Interface */}
              <div>
                <h3 className="text-foreground mb-4">4. Dashboard Interface</h3>
                <p className="text-muted-foreground mb-6">
                  Created an intuitive dashboard that centralizes all customer communications, 
                  featuring receipt management, team collaboration, and unified messaging.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <img src="/ob-3.png" alt="Unify Dashboard Overview" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <img src="/ob-4.png" alt="Unify Messaging Interface" className="w-full h-full object-cover rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Approach */}
        <section className="px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-foreground">Design Approach</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-foreground mb-3">Simplicity and Depth</h3>
                <p className="text-muted-foreground text-sm">
                  A light, optimistic interface with focused pops of color (reds and purples) 
                  that guide the eye across content while maintaining visual clarity.
                </p>
              </div>
              
              <div>
                <h3 className="text-foreground mb-3">Responsive Layouts</h3>
                <p className="text-muted-foreground text-sm">
                  Mobile-first design approach ensuring scalability across all screen sizes 
                  and optimal user experience on any device.
                </p>
              </div>
              
              <div>
                <h3 className="text-foreground mb-3">Modular Components</h3>
                <p className="text-muted-foreground text-sm">
                  Reusable sections that support rapid iteration for future features 
                  and A/B testing capabilities.
                </p>
              </div>
              
              <div>
                <h3 className="text-foreground mb-3">Developer-Friendly</h3>
                <p className="text-muted-foreground text-sm">
                  Consistent spacing, components, and annotated specifications 
                  for seamless developer handoff.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-foreground">Results & Impact</h2>
            
            <div className="bg-card rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-foreground mb-4">Key Achievements</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Built for high conversion with repeatable marketing sections</li>
                    <li>• Clear value proposition articulation for different user personas</li>
                    <li>• Flexible pricing structure that's easy to maintain and expand</li>
                    <li>• Comprehensive design system for future scalability</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-foreground mb-4">User Personas Targeted</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Support agents seeking efficiency</li>
                    <li>• Team managers requiring oversight</li>
                    <li>• Enterprise leads demanding security</li>
                    <li>• Startup teams needing scalability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="px-6 lg:px-8 pb-24 pt-16 bg-neutral-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-white">Interested in working together?</h2>
            <p className="mb-8 max-w-2xl mx-auto text-white/80">
              I'm always excited to take on new design challenges and help bring 
              innovative products to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="text-neutral-900">
                <a href="/">Back Home</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UnifyProject;