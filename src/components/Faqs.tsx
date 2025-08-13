import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is AI Interview?",
    answer: "AI Interview is a smart platform that helps job seekers prepare for interviews using artificial intelligence. It simulates real interview scenarios and provides instant feedback on performance.",
  },
  {
    question: "How accurate is the feedback?",
    answer: "Our AI models are trained on thousands of interview patterns and recruiter insights, making feedback highly relevant and actionable",
  },
  {
    question: " What kind of feedback do I get after the interview?",
    answer: "You will receive a technical accuracy score for each question, along with a grammar and communication score. Additionally, you'll get an overall interview performance score. All your answers will also be available for download and review.",
  },
  {
    question: "Do I need special software to use it?",
    answer: "No. AI Interview runs directly in your browser and works on desktop, tablet, and mobile devices.",
  },
  {
    question: "What is a Resume-Based Interview?",
    answer:
      "The AI will read your resume and job description, then create a custom interview session with questions directly relevant to your experience and the target job.",
  },
  {
    question: "How does the coin system work?",
    answer:
      "You buy coins, and each interview costs 100 coins. You can purchase coins anytime, and they are instantly credited to your account.",
  },
  {
    question: " Can recruiters use this platform?",
    answer:
      "Absolutely. Recruiters can use AI Interview to create customized interview assessments and screen candidates efficiently.",
  },
  {
    question: "Do coins expire?",
    answer:
      "No, your coins never expire.",
  },
  {
    question: "How accurate is the resume score?",
    answer:
      "Our AI uses job description parsing and keyword matching to give you an accurate relevance score.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="relative bg-[#181E29] min-h-[80vh] py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 overflow-hidden">
      {/* SVG background grid */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2A3142" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Title */}
      <div className="relative z-10 mb-16 flex justify-center">
        <div className="text-3xl font-bold font-bruno text-[#f5ac01]">
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-[#f5ac01]/30 to-[#f5ac01]">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#f5ac01] rotate-45 rounded-sm"></div>
            </div>
            <div className="inline-flex items-center px-2 mx-2 rounded-full bg-[#f5b210]/10 text-[#f5ac01] text-lg font-bold whitespace-nowrap text-center">
              Frequently asked questions
            </div>
            <div className="relative w-full max-w-[200px] h-px bg-gradient-to-l from-transparent via-[#f5ac01]/30 to-[#f5ac01]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#f5ac01] rotate-45 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
        {/* Left: SVG animation */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse w-[250px] sm:w-[300px] md:w-[350px] lg:w-[420px] xl:w-[480px]"
            style={{ filter: "drop-shadow(0 0 6px #f5ac01)" }}
          >
            <circle cx="100" cy="100" r="90" stroke="#f5ac01" strokeWidth="3" fill="none" />
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="#f5ac01"
              strokeWidth="2"
              fill="none"
              strokeDasharray="283"
              strokeDashoffset="0"
              className="stroke-animation"
            />
            <circle
              cx="100"
              cy="100"
              r="30"
              stroke="#f5ac01"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="188"
              strokeDashoffset="188"
              className="stroke-animation delay-1000"
            />
            <circle cx="100" cy="100" r="10" fill="#f5ac01" opacity="0.6" className="animate-bounce" />
          </svg>
        </div>

        {/* Right: FAQ List */}
        <div className="w-full lg:w-1/2 max-w-2xl">
          <div className="w-full bg-transparent">
            {faqData.map((item, idx) => (
              <div key={idx} className="border-b border-gray-700">
                <button
                  className={`w-full text-left py-5 px-2 flex justify-between items-center transition-colors duration-300 ease-in-out ${
                    openIndex === idx ? "text-cyan-400" : "text-gray-200 hover:text-cyan-300"
                  } focus:outline-none`}
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className={`text-base ${openIndex === idx ? "font-extrabold" : "font-semibold"}`}>
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ease-in-out ${
                      openIndex === idx ? "rotate-180 stroke-cyan-400" : "stroke-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === idx && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="px-2 pb-5 text-yellow-300 font-semibold text-sm"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        .stroke-animation {
          animation: dashoffset 4s linear infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        @keyframes dashoffset {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 283;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQ;
