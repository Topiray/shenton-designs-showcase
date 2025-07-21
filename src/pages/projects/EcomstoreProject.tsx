import { ArrowLeft, ExternalLink, Eye, ShoppingCart, Palette, Settings, BarChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

const EcomstoreProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />


      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6">
                SaaS Platform • E-commerce • Templates
              </span>
              <h1 className="mb-6 text-foreground">
                Ecomstore.ai - Custom E-commerce Platform
              </h1>
              <p className="text-large text-muted-foreground mb-8 leading-relaxed">
                A comprehensive e-commerce platform offering a huge range of customizable templates and components. 
                Users can sign up and start selling immediately with industry-specific designs, complete backend management, 
                and conversion-optimized checkout flows across beauty, fitness, lifestyle, and retail verticals.
              </p>
            </div>


            {/* Key Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-card p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">50+ Templates</h3>
                <p className="text-sm text-muted-foreground">
                  Industry-specific designs for beauty, fitness, lifestyle, and retail
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Instant Setup</h3>
                <p className="text-sm text-muted-foreground">
                  Users can sign up and start selling within minutes
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Full Backend</h3>
                <p className="text-sm text-muted-foreground">
                  Complete management system with orders, inventory, and analytics
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Conversion Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized checkout flows and user experience patterns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-foreground">Platform Architecture</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Built a comprehensive e-commerce ecosystem that empowers entrepreneurs to launch and scale 
              their online businesses with professional-grade tools and templates.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">1. Template Library System</h3>
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground">
                  Designed and developed 50+ conversion-optimized templates across multiple industries. 
                  Each template includes customizable components, color schemes, and layout variations 
                  tailored to specific market needs.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Beauty & Skincare: Clean, minimalist designs with product focus</li>
                  <li>• Fitness & Equipment: Bold, energetic layouts with performance emphasis</li>
                  <li>• Lifestyle & Home: Warm, inviting designs with lifestyle photography</li>
                  <li>• Fashion & Apparel: Editorial layouts with visual storytelling</li>
                </ul>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl overflow-hidden">
              <img src="/ecs.png" alt="Ecomstore Template Showcase" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-card p-8 rounded-2xl overflow-hidden">
              <img src="/ecs-1.png" alt="Ecomstore Checkout Flow" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">2. Conversion-Optimized Checkout</h3>
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground">
                  Built a sophisticated checkout system with multi-step forms, shipping calculations, 
                  and payment processing. Focused on reducing cart abandonment through clear progress 
                  indicators and trust signals.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Step-by-step checkout with progress tracking</li>
                  <li>• Real-time shipping calculations and delivery options</li>
                  <li>• Multiple payment gateways and security features</li>
                  <li>• Order summary optimization and upsell opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">3. Comprehensive Backend System</h3>
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground">
                  Developed a full-featured admin dashboard for store management, including user profiles, 
                  order tracking, inventory management, and customer communication tools.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• User account management with profile customization</li>
                  <li>• Order tracking and fulfillment workflows</li>
                  <li>• Inventory management with low-stock alerts</li>
                  <li>• Customer support and communication tools</li>
                </ul>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl overflow-hidden">
              <img src="/ecs-2.png" alt="Ecomstore Backend Dashboard" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-foreground">Technical Implementation</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Built with modern web technologies for scalability, performance, and user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">React</span>
              </div>
              <h3 className="font-semibold mb-2">Frontend Framework</h3>
              <p className="text-sm text-muted-foreground">Component-based architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">API</span>
              </div>
              <h3 className="font-semibold mb-2">REST API</h3>
              <p className="text-sm text-muted-foreground">Scalable backend services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">DB</span>
              </div>
              <h3 className="font-semibold mb-2">Database</h3>
              <p className="text-sm text-muted-foreground">Optimized data structure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">$</span>
              </div>
              <h3 className="font-semibold mb-2">Payments</h3>
              <p className="text-sm text-muted-foreground">Secure payment processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-foreground">Results & Impact</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Empowering entrepreneurs to launch successful e-commerce businesses with professional tools and templates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Template Designs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5min</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Mobile Optimized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Platform Availability</div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl overflow-hidden">
            <img src="/ecs-3.png" alt="Ecomstore Results 1" className="w-full h-full object-cover rounded-2xl" />
            </div>
          <div className="bg-card p-8 rounded-2xl overflow-hidden">
            <img src="/ecs-4.png" alt="Ecomstore Results 2" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <Link
              to="/projects/jovi"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Previous: JOVI Brand Identity
            </Link>
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcomstoreProject;