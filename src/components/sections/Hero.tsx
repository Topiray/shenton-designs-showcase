import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HERO_HEADLINE_STATIC = "I'm a product designer passionate about designing for";
const ROTATING_WORDS = [
  "non-profits",
  "creators",
  "ecommerce",
  "healthcare",
  "education",
  "communities",
  "startups",
  "web3",
];

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setFade(true);
      }, 350); // fade out before changing word
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center px-6 lg:px-8 py-16 bg-background ultra:py-28 ultra:px-0 overflow-hidden">
      {/* Blurred, faint background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10 blur-3xl pointer-events-none z-0"
        src="/port-vid-11.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="w-full max-w-7xl ultra:max-w-[1800px] mx-auto grid grid-cols-1 [@media(min-width:1020px)]:grid-cols-2 gap-12 items-center ultra:px-24 ultra:gap-24">
        {/* Left: Hero Text */}
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl ultra:text-5xl font-semibold text-foreground mb-2 ultra:mb-4">Mathew Shenton</h2>
          <p className="text-base md:text-lg ultra:text-2xl text-muted-foreground mb-2 ultra:mb-4">
            Product Designer / UI/UX Designer / Front-End Designer
          </p>
          <h1 className="mb-6 text-foreground max-w-lg text-[30px] xl:text-4xl 2xl:text-5xl ultra:text-6xl flex flex-wrap ultra:mb-10" aria-label={`${HERO_HEADLINE_STATIC} ${ROTATING_WORDS[wordIndex]}`}> 
            {/* Animate in each word of the static part */}
            {HERO_HEADLINE_STATIC.split(" ").map((word, i, arr) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  marginRight: i === arr.length - 1 ? 0 : "0.4em",
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateX(0)" : "translateX(-16px)",
                  transition: `opacity 0.5s cubic-bezier(.4,0,.2,1) ${i * 0.08}s, transform 0.5s cubic-bezier(.4,0,.2,1) ${i * 0.08}s`,
                }}
                className={i === arr.length - 1 ? "ultra:leading-[1.05]" : "ultra:leading-[1.05]"}
              >
                {word}{i === arr.length - 1 && <>&nbsp;</>}
              </span>
            ))}
            {/* Rotating word */}
            <span
              className="inline-block text-primary font-bold transition-all duration-500 text-[30px] xl:text-4xl 2xl:text-5xl ultra:text-6xl whitespace-nowrap"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateX(0px)" : "translateX(26px)",
                transition: `opacity 0.5s cubic-bezier(.4,0,.2,1) ${HERO_HEADLINE_STATIC.split(" ").length * 0.08}s, transform 0.5s cubic-bezier(.4,0,.2,1) ${HERO_HEADLINE_STATIC.split(" ").length * 0.08}s`,
              }}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border hover:bg-muted transition-all duration-300 group fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <ArrowDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors group-hover:translate-y-0.5 transform transition-transform" />
            </button>
            <button
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 px-6 py-3 text-muted-foreground group-hover:text-foreground transition-colors group-hover:translate-y-0.5 transform transition-transform rounded-full border border-border font-light hover:bg-muted hover:border-border duration-300 group fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              See my work
            </button>
          </div>
        </div>
        {/* Right: Hero Video */}
        <div className="flex [@media(min-width:1020px)]:justify-end justify-start">
          <div className="aspect-video w-full max-w-2xl lg:max-w-3xl bg-muted rounded-2xl overflow-hidden shadow-lg border border-border">
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
    </section>
  );
};

export default Hero;