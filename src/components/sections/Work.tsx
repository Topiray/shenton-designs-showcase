import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Unify - Customer Communication Platform",
    description: "A SaaS landing page centralizing customer communications into one smart inbox",
    category: "SaaS Landing Page",
    image: <img src="/unify.png" alt="Unify Thumbnail" className="w-full h-full object-cover" />,
    tags: ["UI/UX", "SaaS", "Landing Page"],
    link: "/projects/unify",
  },
  {
    id: 2,
    title: "RentalMaster.ai - AI Property Management",
    description: "AI-powered rental platform with zero commission fees and complete host control",
    category: "SaaS Platform",
    image: <img src="/rental.png" alt="RentalMaster Thumbnail" className="w-full h-full object-cover" />,
    tags: ["AI Integration", "Property Management", "SaaS"],
    link: "/projects/rentalmaster",
  },
  {
    id: 3,
    title: "MiCasaDAO - Tokenized Real Estate",
    description: "Decentralized platform bridging property and liquidity through blockchain tokenization",
    category: "Web3 Platform",
    image: <img src="/micasadao.png" alt="MiCasaDAO Thumbnail" className="w-full h-full object-cover" />,
    tags: ["Web3", "Real Estate", "DAO"],
    link: "/projects/micasadao",
  },
  {
    id: 4,
    title: "Third Strand Studio - Creative Agency",
    description: "Full-suite creative agency brand identity and high-performing digital products",
    category: "Creative Agency",
    image: <img src="/thirdstrand.png" alt="Third Strand Thumbnail" className="w-full h-full object-cover" />,
    tags: ["Brand Identity", "Motion Design", "Full-Stack"],
    link: "/projects/thirdstrand",
  },
  {
    id: 5,
    title: "Kitsumon - MOBA Game Design",
    description: "Multiplayer battle arena with creature collection and tactical combat UI/UX design",
    category: "Game Design",
    image: <img src="/kitsumon.png" alt="Kitsumon Thumbnail" className="w-full h-full object-cover" />,
    tags: ["Game UI/UX", "Animation", "Texture Art"],
    link: "/projects/kitsumon",
  },
  {
    id: 6,
    title: "JOVI - Premium Supplement Brand",
    description: "Complete brand identity and packaging design for premium wellness supplement line",
    category: "Brand Identity",
    image: <img src="/jovi.png" alt="Jovi Thumbnail" className="w-full h-full object-cover" />,
    tags: ["Branding", "Packaging", "Market Positioning"],
    link: "/projects/jovi",
  },
  {
    id: 7,
    title: "Ecomstore.ai - E-commerce Platform",
    description: "Comprehensive platform with 50+ customizable templates for instant online store creation",
    category: "SaaS Platform",
    image: <img src="/ecomstore.png" alt="Ecomstore Thumbnail" className="w-full h-full object-cover" />,
    tags: ["E-commerce", "Templates", "SaaS"],
    link: "/projects/ecomstore",
  },
  {
    id: 8,
    title: "Foodstore.ai - Restaurant Platform",
    description: "Unified solution for restaurants managing in-house orders, collection, and delivery operations",
    category: "Restaurant Platform",
    image: <img src="/foodstore.png" alt="Foodstore Thumbnail" className="w-full h-full object-cover" />,
    tags: ["Restaurant Tech", "Order Management", "Platform"],
    link: "/projects/foodstore",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

const Work = () => {
  return (
    <section id="work" className="py-24 lg:py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="mb-6 text-foreground">
            Selected Work
          </h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my approach to solving design challenges 
            and creating meaningful user experiences.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={tileVariants}
              className="group cursor-pointer slide-up block"
            >
              <Link
                to={project.link || "#"}
              >
                <div className="bg-card rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.025] group-hover:shadow-2xl">
                  {/* Project Image */}
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center text-6xl overflow-hidden">
                    <div className="w-full h-full transition-transform duration-500 group-hover:scale-110">
                      {project.image}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 ml-4" />
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;