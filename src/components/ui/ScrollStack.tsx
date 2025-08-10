import { useRef, useCallback, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Noise component for the glitter effect
const Noise = () => (
  <svg
    className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay"
    viewBox="0 0 200 200"
  >
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.65"
        numOctaves="3"
        stitchTiles="stitch"
      />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ScrollStackItem = ({ children, itemClassName = '' }) => {
  // Check if this is a header card (no styling) based on className
  const isHeaderCard = itemClassName.includes('bg-transparent');

  return (
    <div
      className={`scroll-stack-card relative w-full ml-2 h-80 mx-auto ${itemClassName}`}
      style={{
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
      }}
    >
      {!isHeaderCard ? (
        <div
          className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-[40px]"
          style={{
            boxShadow:
              '0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)',
          }}
        >
          <div className="h-full px-4 py-8 sm:px-10">{children}</div>
        </div>
      ) : (
        <div className="h-full">{children}</div>
      )}
    </div>
  );
};

const ScrollStack = ({ children, className = '', itemDistance = 1000 }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const lenisRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scrollTriggersRef = useRef([]);

  // Setup GSAP ScrollTrigger for card stacking
  const setupScrollTriggers = useCallback(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const container = containerRef.current;
    const cards = Array.from(container.querySelectorAll('.scroll-stack-card'));
    cardsRef.current = cards;

    // Clear any existing scroll triggers
    scrollTriggersRef.current.forEach(trigger => trigger.kill());
    scrollTriggersRef.current = [];

    // Create a timeline for stacking cards
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'center bottom',
        end: `+=${cards.length * itemDistance + 1000}`,
        pin: true,
        scrub: 0.5,
        anticipatePin: 1, // Smoother pinning
      },
    });

    scrollTriggersRef.current.push(timeline.scrollTrigger);

    // Set initial state for all cards
  cards.forEach((card, i) => {
  if (i === 0) {
    // First card stays fixed at the center
    gsap.set(card, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: cards.length, // Always on top
      opacity: 1,
      pointerEvents: 'auto'
    });
  } else {
    // Other cards are movable
    gsap.set(card, {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: cards.length - i,
      opacity: 0, // Initially hidden
      pointerEvents: 'none',
      y: '50%' // Stacked vertically
    });
  }
});


for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  const prevCard = cards[i - 1];

  // Fade out previous card only
  if (prevCard) {
    timeline.to(prevCard, {
      opacity: 0,
      pointerEvents: 'none',
      duration: 0.4,
      ease: 'power1.in',
    }, i);
  }

  // Fade in current card only
  timeline.to(card, {
    opacity: 1,
    pointerEvents: 'auto',
    duration: 0.6,
    ease: 'power2.out',
  }, i);
}


// For each card, fade in ONLY that one, fade out previous
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  const prevCard = cards[i - 1];

  // Fade out previous card
  if (prevCard) {
    timeline.to(
      prevCard,
      {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.4,
        ease: 'power1.in',
      },
      i
    );
  }

  // Fade in current card, center
  timeline.to(
    card,
    {
      opacity: 1,
      pointerEvents: 'auto',
      duration: 0.6,
      ease: 'power2.out',
    },
    i
  );
}

    // First card is already visible in the middle

    // Make first card more visible with responsive positioning
    timeline.to(
      cards[0] as gsap.TweenTarget,
      {
        y: () => {
          // Set different y values based on screen width
          if (window.innerWidth < 340) return '-60%'; // mobile
          if (window.innerWidth < 440) return '-60%';
          if (window.innerWidth < 650) return '-70%'; // mobile
          if (window.innerWidth < 770) return '-90%'; // tablet/medium
          return '-95%'; // desktop
        },
        ease: 'power2.inOut',
      },
      0
    );

    // Sequential stacking - each card waits for previous to finish
    for (let i = 1; i < cards.length; i++) {
      const yPosition = -40 + i * 10;

      timeline.to(
        cards[i] as gsap.TweenTarget,
        {
          y: `${yPosition}%`,
          opacity: 1,
          ease: 'power2.inOut',
          duration: 1,
        },
        i * 1
      );
    }

    return () => {
      scrollTriggersRef.current.forEach(trigger => trigger.kill());
      scrollTriggersRef.current = [];
    };
  }, [itemDistance]);

  // its updated code for scroll triggers for cards stacking
//   const setupScrollTriggers = useCallback(() => {
//   if (typeof window === 'undefined' || !containerRef.current) return;

//   const isDesktop = window.innerWidth >= 1024;
//   const container = containerRef.current;
//   const cards = Array.from(container.querySelectorAll('.scroll-stack-card'));
//   cardsRef.current = cards;

//   scrollTriggersRef.current.forEach(trigger => trigger.kill());
//   scrollTriggersRef.current = [];

//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: container,
//       start: 'center center',
//       end: `+=${cards.length * itemDistance + 1000}`,
//       pin: true,
//       scrub: 0.5,
//       anticipatePin: 1,
//     },
//   });

//   scrollTriggersRef.current.push(timeline.scrollTrigger);

//   if (isDesktop) {
//     // Desktop: Full overlap, only one card visible at a time
//     cards.forEach((card, i) => {
//       gsap.set(card as gsap.TweenTarget, {
//         position: 'absolute',
//         top: '50%',
//         left: 0,
//         right: 0,
//         y: '100%',
//         zIndex: cards.length - i,
//         opacity: 0,
//       });

//       const model = (card as Element).querySelector('.w-32.h-32') as HTMLElement;
//       if (model) {
//         model.style.zIndex = '100';
//       }
//     });

//     for (let i = 0; i < cards.length; i++) {
//       const card = cards[i];
//       const prevCard = cards[i - 1];

//       if (prevCard) {
//         // Fade out previous card
//         timeline.to(prevCard as gsap.TweenTarget, {
//           opacity: 0,
//           duration: 0.3,
//           ease: 'power2.out',
//         }, i);
//       }

//       // Fade in current card
//       timeline.to(card as gsap.TweenTarget, {
//         y: '-50%',
//         opacity: 1,
//         duration: 0.5,
//         ease: 'power2.inOut',
//       }, i);
//     }
//   } else {
//     // Mobile: Keep original stacked effect
//     cards.forEach((card, i) => {
//       gsap.set(card as gsap.TweenTarget, {
//         position: 'absolute',
//         top: '50%',
//         left: 0,
//         right: 0,
//         y: i === 0 ? '-50%' : '100%',
//         zIndex: cards.length - i,
//         opacity: i === 0 ? 1 : 0,
//       });

//       const model = (card as Element).querySelector('.w-32.h-32') as HTMLElement;
//       if (model) {
//         model.style.zIndex = '100';
//       }
//     });

//     timeline.to(
//       cards[0] as gsap.TweenTarget,
//       {
//         y: () => {
//           if (window.innerWidth < 340) return '-60%';
//           if (window.innerWidth < 440) return '-60%';
//           if (window.innerWidth < 650) return '-70%';
//           if (window.innerWidth < 770) return '-90%';
//           return '-95%';
//         },
//         ease: 'power2.inOut',
//       },
//       0
//     );

//     for (let i = 1; i < cards.length; i++) {
//       const yPosition = -40 + i * 10;

//       timeline.to(
//         cards[i] as gsap.TweenTarget,
//         {
//           y: `${yPosition}%`,
//           opacity: 1,
//           ease: 'power2.inOut',
//           duration: 1,
//         },
//         i * 1
//       );
//     }
//   }

//   return () => {
//     scrollTriggersRef.current.forEach(trigger => trigger.kill());
//     scrollTriggersRef.current = [];
//   };
// }, [itemDistance]);

  // Setup Lenis smooth scrolling
  const setupLenis = useCallback(() => {
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    const raf = time => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };

    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return lenis;
  }, []);

  // Initialize everything
  useEffect(() => {
    setupLenis();
    setupScrollTriggers();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      scrollTriggersRef.current.forEach(trigger => trigger.kill());
    };
  }, [setupLenis, setupScrollTriggers]);

  return (
    <div className={`relative w-full ${className}`.trim()} ref={containerRef}>
      <div className="px-4 md:px-20">{children}</div>
    </div>
  );
};

export default ScrollStack;