import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedStarButton from "@/components/ui/animated-star-button";
import SplineModel from "./SplineModel";

gsap.registerPlugin(ScrollTrigger);

// --- Card Component ---
const FeatureCard = React.forwardRef<HTMLDivElement, any>(
  (
    { title, description, buttonText, buttonAction, buttonColor, bgGradient },
    ref
  ) => {
    const colorMap = {
      indigo: { bg: "bg-indigo-300", text: "text-indigo-900", border: "border-indigo-300" },
      emerald: { bg: "bg-emerald-300", text: "text-emerald-900", border: "border-emerald-300" },
      orange: { bg: "bg-orange-300", text: "text-orange-900", border: "border-orange-300" },
    };
    return (
      <div
        ref={ref}
        className={` feature-card w-full max-w-[1250px] rounded-none min-h-[120px] md:min-h-[400px] p-8 py-12 ${bgGradient}
         shadow-xl transition-all transform-gpu flex flex-col justify-center mx-auto`}
        style={{ willChange: "transform" }}
      >
        <h2 className="font-bruno text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
          {title}
        </h2>
        <div className="mt-6 text-lg text-neutral-200 flex-1">{description}</div>
        <div className="mt-8">
          <AnimatedStarButton
            onClick={buttonAction}
            bgColor={colorMap[buttonColor].bg}
            textColor={colorMap[buttonColor].text}
            borderColor={colorMap[buttonColor].border}
            hoverTextColor={`hover:${colorMap[buttonColor].bg.replace("bg-", "text-")}`}
            hoverShadow="hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            borderRadius="rounded-full"
          >
            {buttonText}
          </AnimatedStarButton>
        </div>
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

interface AdvancedFeaturesSectionProps {
  featureCards: React.ReactNode[];
  featureIdx: number;
  setFeatureIdx: React.Dispatch<React.SetStateAction<number>>;
  handleNavigation: (path: string) => void;
  authUser: any;
}

const AdvancedFeaturesSection: React.FC<AdvancedFeaturesSectionProps> = ({
  featureCards,
  featureIdx,
  setFeatureIdx,
  handleNavigation,
  authUser,
}) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Scroll shuffle/entrance
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      if (headerRef.current && cardRefs.current[0]) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 1, y: 0 },
          {
            opacity: 0,
            y: -80,
            pointerEvents: "none",
            scrollTrigger: {
              trigger: cardRefs.current[0],
              start: "top center",
              end: "+=100",
              scrub: true,
            },
          }
        );
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=" + 440 * featureCards.length,
          scrub: 0.5,
          pin: true,
        },
      });

      // position all cards top-aligned
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, {
          position: "absolute",
          top: "10%", // top alignment
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: featureCards.length - i,
          opacity: i === 0 ? 1 : 0,
          pointerEvents: i === 0 ? "auto" : "none",
          y: i === 0 ? "0%" : "100%",
          scale: i === 0 ? 1 : 0.96,
        });
      });

      // animate transitions
      cardRefs.current.forEach((card, i) => {
        if (i > 0 && card) {
          tl.to(
            card,
            {
              opacity: 1,
              y: "0%",
              scale: 1,
              pointerEvents: "auto",
              duration: 0.75,
              ease: "power3.out",
            },
            i
          );
          tl.to(
            cardRefs.current[i - 1],
            {
              opacity: 0,
              pointerEvents: "none",
              scale: 0.96,
              duration: 0.6,
              ease: "power2.in",
            },
            i
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [featureCards.length]);

  // Cards with intro paragraph + list
  const cardsToRender = [
    <FeatureCard
      ref={(el) => {
        cardRefs.current[0] = el;
      }}
      key="free-coins"
      title="Login & Get Free Coins"
      description={
        <div>
          <p className="mb-2">Get rewarded instantly when you join.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Sign up and start practicing right away — no strings attached.</li>
            <li>Free coins the moment you join.</li>
            <li>No payment needed to get started.</li>
            <li>Try out the platform before buying more coins.</li>
          </ul>
        </div>
      }
      buttonText="Get Started"
      buttonAction={() => handleNavigation("/auth/login")}
      buttonColor="indigo"
      bgGradient="bg-gradient-to-br from-background via-background to-accent/5"

    />,
    <FeatureCard
      ref={(el) => {
        cardRefs.current[1] = el;
      }}
      key="choose-domain"
      title="Choose Your Domain & Level"
      description={
        <div>
          <p className="mb-2">Pick your field, set your level, and let’s get to work.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Domains like Python, Java, NLP, ML, DL, CV, and more.</li>
            <li>3 skill levels — Beginner, Moderate, High.</li>
            <li>Each level has 5 stages that get trickier as you go.</li>
            <li>5 AI-powered questions in every stage.</li>
            <li>Progress at your own pace, one stage at a time.</li>
          </ul>
        </div>
      }
      buttonText="Select Domain"
      buttonAction={() =>
        handleNavigation(authUser ? `/profile/${authUser.id}` : "/auth/login")
      }
      buttonColor="emerald"
      bgGradient="bg-gradient-to-br from-background via-background to-accent/5"
    />,
    <FeatureCard
      ref={(el) => {
        cardRefs.current[2] = el;
      }}
      key="resume-interview"
      title="Resume-Based & Job Description-Based Interviews"
      description={
        <div>
          <p className="mb-2">
            Upload your resume and job description to get interview questions tailored to your
            skills and target role.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>AI scans your resume for your skills and projects.</li>
            <li>Reads the job description to see what the role needs.</li>
            <li>Generates relevant, tailored questions for your profile.</li>
            <li>Feels like a real interview for the job you’re targeting.</li>
          </ul>
        </div>
      }
      buttonText="Start Interview"
      buttonAction={() =>
        handleNavigation(authUser ? `/profile/${authUser.id}` : "/auth/login")
      }
      buttonColor="orange"
      bgGradient="bg-gradient-to-br from-background via-background to-accent/5"
    />,
    <FeatureCard
      ref={(el) => {
        cardRefs.current[3] = el;
      }}
      key="resume-score"
      title="Resume Score Checker"
      description={
        <div>
          <p className="mb-2">See how your resume stacks up for a specific job — instantly.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Upload your resume and the job description.</li>
            <li>Get a match score and keyword alignment.</li>
            <li>See exactly where you can improve.</li>
            <li>Make your resume more ATS and recruiter-friendly.</li>
          </ul>
        </div>
      }
      buttonText="Check Resume"
      buttonAction={() =>
        handleNavigation(authUser ? `/profile/${authUser.id}` : "/auth/login")
      }
      buttonColor="orange"
      bgGradient="bg-gradient-to-br from-background via-background to-accent/5"
    />,
    <FeatureCard
      ref={(el) => {
        cardRefs.current[4] = el;
      }}
      key="performance-insights"
      title="Detailed Performance Insights"
      description={
        <div>
          <p className="mb-2">See exactly how you did — and how to get even better.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Technical score so you know how solid your answers were.</li>
            <li>Grammar & communication score to help you sound clear and confident.</li>
            <li>Download your answers to review anytime.</li>
            <li>Track your progress and watch yourself improve with every session.</li>
          </ul>
        </div>
      }
      buttonText="View Insights"
      buttonAction={() =>
        handleNavigation(authUser ? `/profile/${authUser.id}` : "/auth/login")
      }
      buttonColor="orange"
      bgGradient="bg-gradient-to-br from-background via-background to-accent/5"
    />,
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 text-white">
      {/* Desktop */}
      <section className="hidden lg:block w-full px-0 pt-16 relative z-10">
        <div className="mx-auto max-w-none font-bruno font-bold">
          {/* HEADER with "Our Features" */}
          <div
            ref={headerRef}
            className="sticky top-0 left-0 right-0 z-20 backdrop-blur-lgbg-gradient-to-br from-background via-background to-accent/5 rounded-xl shadow-lg py-6 transition-transform"
          >
            <div className="flex items-center justify-center w-full mb-4 mt-2">
              {/* Left arrow */}
              <div className="relative w-[120px] h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-yellow-400">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full" />
              </div>
              {/* Our Features */}
              <div className="inline-flex items-center px-4 py-1 mx-6 rounded-full bg-cyan-400/10 text-yellow-500 text-lg font-bold whitespace-nowrap shadow">
                Our Features
              </div>
              {/* Right arrow */}
              <div className="relative w-[120px] h-px bg-gradient-to-l from-transparent via-cyan-400/30 to-yellow-500">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-500 rounded-full" />
              </div>
            </div>
            <h2 className="mb-2 text-5xl md:text-7xl font-akashi text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 text-center">
              Engineered for Excellence
            </h2>
            <p className="font-bruno text-xl max-w-4xl mx-auto leading-relaxed text-cyan-400/80 text-center">
              In today’s job market, being ready for anything is key. Our AI-powered interview
              coach lets you practice with realistic simulations, get instant feedback, and
              quickly improve your skills. Whether you’re preparing for your dream role or hiring
              top talent, we help you walk into any interview with confidence.
            </p>
          </div>

          {/* Card animation container */}
          <div
            ref={containerRef}
            className="relative w-full max-w-none px-0 mt-1 mb-2"
            style={{ minHeight: 750 }}
          >
            {cardsToRender.map((node, idx) => (
              <div
                key={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
                className="scroll-stack-card w-full"
                style={{ perspective: 1200 }}
              >
                <div className="mb-2 text-5xl md:text-5xl font-akashi text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 text-center">
                  How It Works
                   <div className="absolute right-16 bottom-10 w-30 h-32 flex items-center justify-center z-50">
                  <SplineModel />
                </div>
                </div>
                {node}
              </div>
              
            ))}
          </div>
        </div>
      </section>
        {/* Mobile carousel */}
      <section className="block lg:hidden w-full px-1 max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-4 mt-2">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-full mb-4 mt-2">
              {/* Left arrow */}
              <div className="relative w-[120px] h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-yellow-400">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full" />
              </div>
              {/* Our Features */}
              <div className="inline-flex items-center px-4 py-1 mx-2 rounded-full bg-cyan-400/10 text-yellow-500 text-lg font-bold whitespace-nowrap shadow">
                Our Features
              </div>
              {/* Right arrow */}
              <div className="relative w-[120px] h-px bg-gradient-to-l from-transparent via-cyan-400/30 to-yellow-500">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-500 rounded-full" />
              </div>
            </div>
          </div>
          <h2 className="mb-2 text-2xl font-bold font-akashi tracking-wide">
            Engineered for Excellence
          </h2>
          <p className="font-bruno text-sm max-w-xs mx-auto leading-normal text-[#f5ac01]">
            Ace Every Interview with Confidence. Conduct seamless, automated interviews which save time and ensure quality.
          </p>
        </div>
          <div className="mb-2 text-2xl md:text-7xl font-akashi text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 text-center">How It Works</div>



        {/* Carousel */}
        <div className="relative w-full">
          {featureCards[featureIdx]}
          <div className="flex items-center justify-center gap-6 mt-4">
            <button
              aria-label="Previous"
              className="rounded-full bg-gray-700/80 hover:bg-gray-400 text-white w-10 h-10 flex items-center justify-center shadow"
              onClick={() => setFeatureIdx(idx => idx === 0 ? featureCards.length - 1 : idx - 1)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              aria-label="Next"
              className="rounded-full bg-gray-700/80 hover:bg-gray-400 text-white w-10 h-10 flex items-center justify-center shadow"
              onClick={() => setFeatureIdx(idx => (idx + 1) % featureCards.length)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
          {/* Dots */}
          <div className="flex items-center justify-center mt-4 gap-1">
            {featureCards.map((_, idx) => (
              <span key={idx} className={`inline-block w-2 h-2 rounded-full transition ${featureIdx === idx ? 'bg-[#f5ac01]' : 'bg-gray-400'}`} />
            ))}
          </div>
        </div>
      </section>
    </section>

    
  );
};

export default AdvancedFeaturesSection;
