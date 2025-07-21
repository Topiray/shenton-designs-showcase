import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

const FoodstoreProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Restaurant Platform
            </div>
            <h1 className="mb-6 text-foreground">
              Foodstore.ai
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive restaurant platform enabling free sign-up for restaurants to sell products online, 
              manage collection and delivery orders, and streamline both in-house and online operations in one unified solution.
            </p>
          </div>

          <div className="aspect-[16/10] bg-muted rounded-2xl mb-16 flex items-center justify-center overflow-hidden">
            <img src="/fs.png" alt="Foodstore Platform Overview" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="mb-6 text-foreground">
                Key Features
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Free Restaurant Onboarding</h3>
                    <p className="text-muted-foreground">Zero-cost platform entry with comprehensive setup tools and guided onboarding flow</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Unified Order Management</h3>
                    <p className="text-muted-foreground">Single dashboard managing in-house dining, collection, and delivery orders seamlessly</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Multi-Channel Sales Platform</h3>
                    <p className="text-muted-foreground">Online storefront, mobile apps, and in-store POS integration for maximum reach</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Real-Time Order Tracking</h3>
                    <p className="text-muted-foreground">Live order status updates for customers and internal kitchen management systems</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
              <img src="/fs-3.png" alt="Foodstore Mobile App Interface" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-foreground">
              Design Process
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Building a comprehensive restaurant ecosystem that bridges online ordering, 
              in-house operations, and customer experience into one cohesive platform.
            </p>
          </div>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
                  <img src="/fs-1.png" alt="Foodstore Restaurant Dashboard" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                  01. Restaurant Management
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Comprehensive Restaurant Hub
                </h3>
                <p className="text-muted-foreground mb-6">
                  Designed an intuitive dashboard that consolidates menu management, order tracking, 
                  customer data, and analytics into a single interface. Restaurant owners can manage 
                  their entire operation without switching between multiple systems.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Real-time order queue with kitchen display integration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Dynamic menu editing with instant online updates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Integrated payment processing and financial reporting
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                  02. Customer Experience
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Seamless Ordering Journey
                </h3>
                <p className="text-muted-foreground mb-6">
                  Created an optimized customer experience that works across web and mobile platforms. 
                  The interface adapts to different ordering scenarios - dine-in, collection, or delivery - 
                  while maintaining consistency and ease of use.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Progressive web app with offline menu browsing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Smart recommendations based on order history
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    One-tap reordering and favorite meal saving
                  </li>
                </ul>
              </div>
              <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
                <img src="/fs-2.png" alt="Foodstore Customer Mobile App" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
                  <img src="/fs-5.png" alt="Foodstore Analytics Dashboard" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                  03. Operations & Analytics
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Data-Driven Insights
                </h3>
                <p className="text-muted-foreground mb-6">
                  Built comprehensive analytics and reporting tools that help restaurant owners 
                  understand their business performance, optimize operations, and make informed 
                  decisions about menu pricing, staffing, and inventory management.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Real-time sales tracking and performance metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Customer behavior analysis and retention insights
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Inventory management with automated low-stock alerts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-foreground">
              Design Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                User-Centric Design
              </h3>
              <p className="text-muted-foreground text-sm">
                Every interface element prioritizes the end user experience, whether it's a hungry customer or a busy restaurant manager.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Performance First
              </h3>
              <p className="text-muted-foreground text-sm">
                Optimized for speed with sub-3-second load times and instant order processing to handle peak dinner rush periods.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">📱</div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Mobile Optimized
              </h3>
              <p className="text-muted-foreground text-sm">
                Progressive web app architecture ensures consistent experience across all devices and connection speeds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">🔧</div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Scalable Architecture
              </h3>
              <p className="text-muted-foreground text-sm">
                Modular design system that grows with restaurant needs, from single location to multi-chain operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-foreground">
              Results & Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-card rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Restaurants Onboarded</div>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Faster Order Processing</div>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Increase in Online Orders</div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 lg:p-12">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Successfully launched platform with zero onboarding fees for restaurant partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Achieved 98% uptime during peak ordering periods across all restaurant locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Reduced average order processing time from 8 minutes to under 2 minutes</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Integrated payment processing resulted in 25% faster checkout completion</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Mobile app achieved 4.8-star rating with 50K+ downloads in first quarter</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Customer retention rate increased by 35% through personalized ordering experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-foreground">
              Target Users
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-xl">👨‍🍳</div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Restaurant Owners</h3>
              <p className="text-sm text-muted-foreground">Independent and chain restaurants looking to expand their digital presence and streamline operations</p>
            </div>

            <div className="bg-card rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-xl">🍽️</div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Food Service Managers</h3>
              <p className="text-sm text-muted-foreground">Operations managers seeking unified systems for in-house and online order management</p>
            </div>

            <div className="bg-card rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-xl">📱</div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Digital-First Customers</h3>
              <p className="text-sm text-muted-foreground">Tech-savvy diners who prefer online ordering for convenience and contactless transactions</p>
            </div>

            <div className="bg-card rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-xl">🚀</div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Food Entrepreneurs</h3>
              <p className="text-sm text-muted-foreground">New restaurant ventures and cloud kitchens looking for cost-effective platform solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-6 lg:px-8 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link 
              to="/projects/ecomstore" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous: Ecomstore.ai
            </Link>
            
            <Link to="/#work" className="text-center">
              <Button variant="outline">
                View All Projects
              </Button>
            </Link>

            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Next Project Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodstoreProject;