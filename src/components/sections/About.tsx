import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!titleRef.current) return;
    const handleScroll = () => {
      const rect = titleRef.current!.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.5;
      if (rect.top < triggerPoint && !hasAnimated) {
        controls.start({
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            ease: [0.6, 0, 0.1, 1],
          },
        });
        setHasAnimated(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, hasAnimated]);

  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="slide-up">
            {/* About Title with animation */}
            <motion.h2
              ref={titleRef}
              className="mb-8 text-foreground"
              initial={{ x: "100vw", opacity: 0 }}
              animate={controls}
            >
              About
            </motion.h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-large">
                I design products that people love to use. With a passion for solving complex 
                problems through simple, elegant solutions, I help teams create digital products 
                that truly serve their users.
              </p>
              
              <p>
                My approach combines strategic thinking with meticulous attention to detail. 
                I believe great design happens when we understand both the business goals and 
                user needs — then find the perfect balance between the two.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-12">
              <h3 className="mb-6 text-foreground">Skills & Tools</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Design</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Figma</li>
                    <li>Sketch</li>
                    <li>Adobe Creative Suite</li>
                    <li>Design Systems</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Process</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>User Research</li>
                    <li>Prototyping</li>
                    <li>Wireframing</li>
                    <li>Testing & Iteration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Video replaces Image placeholder */}
          <div className="slide-up lg:order-first" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
              <video
                src="/port-vid-11.mp4"
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                onMouseOver={e => (e.currentTarget.controls = false)}
                onMouseOut={e => (e.currentTarget.controls = false)}
              >
                Sorry, your browser does not support embedded videos.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;