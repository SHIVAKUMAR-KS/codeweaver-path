'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import { Sparkles, Mic, Play } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { GridBackground } from '@/components/ui/grid-background';
import ShinyText from '@/components/ui/shiny-text';
import GradientText from './GradientText';
import { useTheme } from '@/components/ui/theme-provider';
import CircularText from './CircularText';
import { MorphingText } from '@/components/magicui/morphing-text';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';
import { IconCloud } from '@/components/magicui/icon-cloud';
import SplineModel from '@/components/SplineModel';
import VerticalBinaryRain from './VerticalBinaryRain';
import ScrollStack, { ScrollStackItem } from './ui/ScrollStack';
import AnimatedStarButton from '@/components/ui/animated-star-button';
import Footer from './Footer';
import Navbar from './Navbar';
import logo1 from '../../public/logo1.png'
import Faqs from './Faqs';
import AdvancedFeaturesSection from './OurFeatures';
import AboutUs from './AboutUs';
import com from '../../public/com.png'
import Movinglogo from './Movinglogo';
import { MorphingTextBlock } from './MorphingBlock';

const slugs = [
  'typescript',
  'javascript',
  'java',
  'python',
  'cplusplus',
  'go',
  'rust',
  'csharp',
  'c',
  'ruby',
  'typescript',
  'javascript',
  'java',
  'python',
  'cplusplus',
  'go',
  'rust',
  'csharp',
  'c',
  'ruby',
];

const images = slugs.map(
  slug =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`
);
const morphWords = ['Dominate', 'Interview', 'with', 'Sklassics-ai'];

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LandingPage = () => {
  const [showCursor, setShowCursor] = useState(false);
  const { authUser } = useAuthStore();
  const { theme } = useTheme();
   // --- Carousel Logic for Mobile/Tablet Advanced Features ---
  const [featureIdx, setFeatureIdx] = useState(0);
  const featureCards = [

  <div className="rounded-xl shadow-xl p-5 bg-gradient-to-bl from-indigo-900 via-purple-800 to-indigo-700 text-white min-h-[550px] flex flex-col justify-between border-4" style={{ borderColor: '#9b4de7' }}>
      <div>
        <h2 className="font-bruno text-xl font-semibold mb-2">AI Film Making</h2>
        <p className="text-sm leading-relaxed">
          Create stunning cinematic videos and compelling ads effortlessly with AI-powered filmmaking and dubbing. Generate professional-grade visuals, automate editing, add realistic voiceovers in multiple languages, and bring your creative vision to life faster than ever.
        </p>

        {/* Enhanced image animation */}
        <div className="relative mt-4 group overflow-hidden rounded-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDzuXVSI_gzdtJIsBfqMn4JU7gHQnSXLKCg&s"
            alt="AI filmmaking"
            className="w-full object-cover rounded-lg 
              transition-transform duration-700 ease-in-out 
              group-hover:rotate-3 group-hover:scale-105 
              animate-slow-rotate"
          />
      
          {/* Optional overlay effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
        </div>

      </div>

  <div className="mt-6">
    <AnimatedStarButton
      onClick={() => handleNavigation('/problems')}
    >
      Try Workspace
    </AnimatedStarButton>
  </div>
</div>


  
,
    <div className="rounded-xl shadow-xl p-5 bg-gradient-to-br from-emerald-900 via-emerald-700 to-teal-800 text-white min-h-[550px] flex flex-col justify-between border-4" style={{ borderColor: '#9b4de7' }}>
      <div>
        <h2 className="font-bruno text-xl font-semibold mb-2">Report Gen-AI</h2>
        <p className="text-sm leading-relaxed">
          Generate insightful, data-driven reports effortlessly with AI tailored to your specific data stack. Whether you're working with spreadsheets, databases, cloud warehouses, or BI tools, uncover key trends, visualize metrics, and deliver actionable insights in seconds.
        </p>
        {/* Enhanced image animation */}
        <div className="relative mt-4 group overflow-hidden rounded-lg">
          <img
            src="https://www.ttnews.com/sites/default/files/2023-09/iTECH-Dysart-1200.jpg"
            alt="AI filmmaking"
            className="w-full object-cover rounded-lg 
              transition-transform duration-700 ease-in-out 
              group-hover:rotate-3 group-hover:scale-105 
              animate-slow-rotate"
          />
      
          {/* Optional overlay effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
        </div>
      </div>
      <div className="mt-6">
        <AnimatedStarButton
          onClick={() => handleNavigation(authUser ? `/profile/${authUser.id}` : '/auth/login')}
          bgColor="bg-emerald-300"
          textColor="text-emerald-900"
          borderColor="border-emerald-300"
          hoverTextColor="hover:text-emerald-300"
          hoverShadow="hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
          borderRadius="rounded-md"
        >
          View Dashboard
        </AnimatedStarButton>
      </div>
    </div>,
    <div className="rounded-xl shadow-xl p-5 bg-gradient-to-br from-[#1a1a1a] via-[#6e40c9] via-[#ff8c00] to-[#ff206e] text-white min-h-[550px] flex flex-col justify-between border-4" style={{ borderColor: '#9b4de7' }}>
      <div>
        <h2 className="font-bruno text-xl font-semibold mb-2">Alpha CTR</h2>
        <p className="text-sm leading-relaxed">
          Produce engaging short-form videos at scale with AI-driven editing, smart captions, and high-converting thumbnails optimized for maximum Alpha CTR. Analyze audience behavior, auto-generate visuals, and craft scroll-stopping content.
        </p>
        {/* Enhanced image animation */}
        <div className="relative mt-4 group overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWZpY2lhbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="AI filmmaking"
            className="w-full object-cover rounded-lg 
              transition-transform duration-700 ease-in-out 
              group-hover:rotate-3 group-hover:scale-105 
              animate-slow-rotate"
          />
      
          {/* Optional overlay effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
        </div>
      </div>
      <div className="mt-6">
        <AnimatedStarButton
          onClick={() => handleNavigation(authUser ? `/profile/${authUser.id}` : '/auth/login')}
          bgColor="bg-emerald-300"
          textColor="text-emerald-900"
          borderColor="border-emerald-300"
          hoverTextColor="hover:text-emerald-300"
          hoverShadow="hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
          borderRadius="rounded-md"
        >
          Try Workshop
        </AnimatedStarButton>
      </div>
    </div>,
    <div className="rounded-xl shadow-xl p-5 bg-gradient-to-br from-orange-600 to-red-700 text-white min-h-[550px] flex flex-col justify-between border-4"style={{ borderColor: '#9b4de7' }}>
      <div>
        <h2 className="font-bruno text-xl font-semibold mb-2">Learn, Share, and Grow Together</h2>
        <p className="text-sm leading-relaxed">
          Join a vibrant global community of coders inside Sklassics-ai Platform. Engage in real-time discussions, exchange ideas, learn from others, and grow as a developer.
        </p>
        {/* Enhanced image animation */}
        <div className="relative mt-4 group overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
            alt="AI filmmaking"
            className="w-full object-cover rounded-lg 
              transition-transform duration-700 ease-in-out 
              group-hover:rotate-3 group-hover:scale-105 
              animate-slow-rotate"
          />
      
          {/* Optional overlay effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
        </div>
      </div>
      <div className="mt-6">
        <AnimatedStarButton
          onClick={() => handleNavigation('/community')}
          bgColor="bg-orange-300"
          textColor="text-orange-900"
          borderColor="border-orange-300"
          hoverTextColor="hover:text-orange-300"
          hoverShadow="hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]"
          borderRadius="rounded-xl"
        >
          Browse Sheets
        </AnimatedStarButton>
      </div>
    </div>,
    <div className="rounded-xl shadow-xl p-5 bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 text-white min-h-[550px] flex flex-col justify-between border-4" style={{ borderColor: '#9b4de7' }}>
      <div>
        <h2 className="font-bruno text-xl font-semibold mb-2">AI Singing Voice Synthesis.</h2>
        <p className="text-sm leading-relaxed">
          Create personalized, studio-quality songs using advanced AI singing voice synthesis. Craft unique tracks with AI-generated lyrics, custom melodies, and realistic vocals in your own style, mood, or language.
        </p>
        {/* Enhanced image animation */}
        <div className="relative mt-4 group overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1724185773486-0b39642e607e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDgyMDR8MHwxfHNlYXJjaHwxfHxzaW5naW5nJTIwdm9pY2UlMjBzeW50aGVzaXMlMkMlMjBhdWRpbyUyMHNpZ25hbCUyMHByb2Nlc3NpbmclMkMlMjBtdXNpYyUyMHRlY2hub2xvZ3klMkMlMjB2b2ljZSUyMHN5bnRoZXNpc3xlbnwwfDB8fHwxNzUwMTkxOTI4fDA&ixlib=rb-4.1.0&q=80&w=500&?utm_source=numberanalytics&utm_medium=referral"
            className="w-full object-cover rounded-lg 
              transition-transform duration-700 ease-in-out 
              group-hover:rotate-3 group-hover:scale-105 
              animate-slow-rotate"
          />
      
          {/* Optional overlay effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
        </div>
      </div>
    </div>,
    <div className="rounded-xl shadow-xl p-5 bg-gradient-to-br from-black via-black to-black text-white min-h-[550px] flex flex-col justify-between border-4" style={{ borderColor: '#9b4de7' }}>
      <div>
        <h2 className="font-bruno text-xl font-semibold mb-2">AI Interview Assistant</h2>
        <p className="text-sm leading-relaxed">
          Experience realistic Mock interviews & Assessments with AI-powered feedback and comprehensive performance analysis.
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <AnimatedStarButton
          onClick={() => handleNavigation('/interview')}
          bgColor="bg-gray-300"
          textColor="text-gray-900"
          borderColor="border-gray-300"
          hoverTextColor="hover:text-gray-300"
          hoverShadow="hover:shadow-[0_0_25px_rgba(107,114,128,0.5)]"
          borderRadius="rounded-sm"
        >
          Start Interview
        </AnimatedStarButton>
        <div className="ml-3 flex-none w-16 h-14 flex items-center">
          <SplineModel />
        </div>
      </div>
    </div>,
  ];



  useEffect(() => {
    if (typeof window === 'undefined') return;
    const interval = setInterval(() => {
      setFeatureIdx(idx => (idx + 1) % featureCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featureCards.length]);

  // const handleNavigation = (path: string) => {
  //   // Replace with router or navigation as needed
  //   window.location.href = path;
  // };



  // // Setup GSAP for header and cards sequence
  // useEffect(() => {
  //   if (typeof window === 'undefined') return;

  //   // Register ScrollTrigger
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Force a small delay to ensure DOM is fully ready
  //   setTimeout(() => {
  //     // Find the header card (first ScrollStackItem)
  //     const headerCard = document.querySelector('.scroll-stack-card');
  //     if (headerCard) {
  //       // Add a class to identify it
  //       headerCard.classList.add('header-card');

  //       // Add custom styles to make it look less like a card
  //       gsap.set(headerCard, {
  //         height: 'auto',
  //         marginBottom: '60px',
  //         marginTop: '20px',
  //       });
  //     }
  //   }, 100);

  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);

  const companyLogos = [
    {
      name: 'sklassics.com',
      src: logo1,
      width: 120,
      height: 40,
    },
    {
      name: 'sklassicstech.com',
      src: logo1,
      width: 100,
      height: 136,
    },
    {
      name: 'sklassicsacademy.com',
      src:logo1,
      width: 140,
      height: 152,
    },
    {
      name: 'sklassics-lms.com',
      src: logo1,
      width: 110,
      height: 36,
    },
    {
      name: 'sklassics-ai.com',
      src: logo1,
      width: 40,
      height: 48,
    },
    {
      name: 'sklassicstutor.com',
      src: logo1,
      width: 130,
      height: 32,
    },
    {
      name: 'sklassics-quiz.com',
      src: logo1,
      width: 140,
      height: 38,
    },
    {
      name: 'hanumancars.com',
      src: logo1,
      width: 120,
      height: 42,
    },
    
  ];
  // GSAP effect for header and cards
  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      const headerCard = document.querySelector('.scroll-stack-card');
      if (headerCard) {
        headerCard.classList.add('header-card');
        gsap.set(headerCard, {
          height: 'auto',
          marginBottom: '60px',
          marginTop: '20px',
        });
      }
    }, 100);
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  const handleNavigation = (path: string) => {
    console.log(`Navigate to: ${path}`);
    // In a real app, this would use router.push(path)
  };

  return (
    <div className="relative w-full overflow-x-clip">
      {/* Vertical Binary Rain Animation */}
      <div className="hidden md:block">
        <VerticalBinaryRain />
      </div>
      {/* Navbar */}
      <div className='fixed top-0 left-0 w-full z-50'>
        <Navbar />
      </div>
      {/* Smooth Cursor - only show in hero section on large screens */}
      {showCursor && (
        <div className="hidden lg:block">
          <SmoothCursor />
        </div>
      )}

      {/* Hero Section with Animated Grid */}
      <section
        className="relative w-full hero-section"
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        {/* CircularText in top-right */}
        <div className="absolute z-20 hidden top-20 right-20 lg:block">
          <CircularText
            text="Attempt → Adapt → Advance → Ace → "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
        </div>

        {/* Replace AnimatedGridBackground with GridBackground */}
        <GridBackground>
          {/* Hero Content */}
          <div className="relative z-10 flex items-center w-full px-4 mt-8 mx-auto max-w-7xl">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mt-20">
                {/* New Feature Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 border rounded-full border-blue-500/20 backdrop-blur-sm"
                >
                  <Sparkles className="w-4 h-4 text-white-500 animate-pulse" />
                  {theme === 'light' ? (
                    <GradientText
                      colors={[
                        '#ff4079',
                        '#4079ff',
                        '#40ffaa',
                        '#4079ff',
                        '#40ffaa',
                      ]}
                      animationSpeed={3}
                      showBorder={false}
                      className="text-sm font-medium"
                    >
                      New: AI Interview Assistant
                    </GradientText>
                  ) : (
                    <ShinyText
                      text="New: AI Interview Assistant"
                      disabled={false}
                      speed={3}
                      className="text-sm font-medium"
                    />
                  )}
                  <Badge className="text-xs text-green-700 bg-green-500/20">
                    Live
                  </Badge>
                </motion.div>

                {/* New SparklesText with FlipText */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="my-6"
                >
                  <SparklesText
                      colors={{ first: '#FFFFFF', second: '#FFFFFF' }}
                      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:text-7xl font-akashi leading-relaxed mt-4 text-center md:text-left"
                    >
                      Crack Interviews 
                      <br />With 
                      AI-Powered Precision
                   </SparklesText>


                </motion.div>


                {/* Main Headline */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className="block max-w-2xl text-xl leading-relaxed text-yellow-500 md:text-2xl mt-2">
                      Practice, prepare, and perform with AI-powered mock interviews. Simulate real-world scenarios, get instant feedback, and sharpen your skills for success.

                    </span>

                </motion.div>

                <motion.div
                className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start lg:max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
  {!authUser ? (
    <>
      {/* Mobile-first shiny button */}
      <span className="block lg:hidden w-full sm:w-auto py-8">
        <button
          className="relative inline-block w-full sm:w-auto p-px text-sm font-semibold leading-6 text-white rounded-full shadow-2xl cursor-pointer bg-slate-800 group shadow-zinc-900"
          onClick={() => handleNavigation('/auth/register')}
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative z-10 flex items-center justify-center gap-2 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
            Start Your Journey
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </span>

      {/* Desktop interactive hover button */}
      <div className="hidden lg:block lg:h-12 mt-8">
        <InteractiveHoverButton
          onClick={() => handleNavigation('/auth/register')}
          className="h-full"
        >
          <span className="flex items-center justify-center gap-2 h-full">
            Start Your Journey
          </span>
        </InteractiveHoverButton>
      </div>

      {/* Common button (Explore Problems) */}
      <div className="lg:h-12 w-full sm:w-auto mt-8">
  <HoverBorderGradient
    containerClassName="rounded-full h-full"
    className="flex items-center justify-center text-base bg-background text-primary h-full w-full sm:w-auto px-5 py-2"
    onClick={() => handleNavigation('/problems')}
  >
    <Play className="w-5 h-5 mr-2" />
    Book Demo
  </HoverBorderGradient>
</div>

    </>
  ) : (
    <>
      {/* Mobile CTA */}
      <span className="block lg:hidden w-full sm:w-auto">
        <button
          className="relative inline-block w-full sm:w-auto p-px text-sm font-semibold leading-6 text-white rounded-full shadow-2xl cursor-pointer bg-slate-800 group shadow-zinc-900"
          onClick={() => handleNavigation('/problems')}
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative z-10 flex items-center justify-center gap-2 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
            Continue Learning
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </span>

      {/* Desktop CTA */}
      <div className="hidden lg:block lg:h-12">
        <InteractiveHoverButton
          onClick={() => handleNavigation('/problems')}
          className="h-full"
        >
          <span className="flex items-center justify-center gap-2 h-full">
            Continue Learning
          </span>
        </InteractiveHoverButton>
      </div>

      {/* AI Interview CTA */}
      <div className="lg:h-12 w-full sm:w-auto">
        <HoverBorderGradient
          containerClassName="rounded-full h-full"
          className="flex items-center justify-center text-base bg-background text-primary h-full w-full sm:w-auto px-5 py-2"
          onClick={() => handleNavigation('/interview')}
        >
          <Mic className="w-5 h-5 mr-2" />
          AI Interview Prep
        </HoverBorderGradient>
      </div>
    </>
  )}
</motion.div>

              </div>
            </div>
          </div>
        </GridBackground>
      </section>
      

      {/* Advanced Features Section with ScrollStack */}
      <AdvancedFeaturesSection
        featureCards={featureCards}
        featureIdx={featureIdx}
        setFeatureIdx={setFeatureIdx}
        handleNavigation={handleNavigation}
        authUser={authUser}
      />

      {/* Why Choose Sklassics-ai Section - Improve overflow handling for VelocityScroll */}
      <section className="w-full px-4 sm:pb-10 sm:mt-1   bg-gradient-to-br from-background via-background to-accent/5 ">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* <p className="mt-20 mb-8 text-2xl text-muted-foreground font-bold  ">
              Trusted by developers at top companies worldwide
            </p> */}
            <div className="text-center font-bruno text-2xl mb-8 mt-4 sm:mt-0.5 text-xl">
                  <div className="flex items-center justify-center mb-10">
                    <div className="relative w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-[#f5ac01]/30 to-[#f5ac01]">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#f5ac01] rotate-45 rounded-sm"></div>
                    </div>
                    <div className="inline-flex items-center px-2 py-1 mx-2 rounded-full bg-[#f5b210]/10 text-[#f5ac01] text-sm md:text-lg lg:text-xl font-bold">
                        {/* <!-- For mobile, show only "Trusted by" --> */}
                        <span className="block sm:inline md:hidden">Trusted by</span>

                        {/* <!-- For desktop and larger, show the full sentence --> */}
                        <span className="hidden md:inline">Trusted by developers at top companies worldwide</span>
                      </div>

                    <div className="relative w-full max-w-[200px] h-px bg-gradient-to-l from-transparent via-[#f5ac01]/30 to-[#f5ac01]">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#f5ac01] rotate-45 rounded-sm"></div>
                    </div>
                  </div>
                  
            </div>

            {/* Enhanced VelocityScroll with Company Logos */}
            {/* Logo scroller */}
      
            {/* MorphingText in bottom-left - Fix positioning */}
            
          </motion.div>
        </div>
      </section>
      
      <Movinglogo/>
      
      <MorphingTextBlock 
        texts={['Dominate', 'Interview', 'With', 'Sklassics-ai']} 
        className="text-[clamp(2rem,6vw,5rem)]  text-purple-800"
      />



      <AboutUs/>
      <Faqs />
      <Footer />
    </div>
  );
};

export default LandingPage;