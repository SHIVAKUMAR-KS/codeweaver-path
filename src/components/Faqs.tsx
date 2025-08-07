import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How does AI Platform work?",
    answer: "Our platform uses advanced algorithms to analyze data and provide insights.",
  },
  {
    question: "Can I customize my dashboard?",
    answer: "Yes, you can customize your dashboard to fit your needs.",
  },
  {
    question: "Is my data secure?",
    answer: "We prioritize data security and use encryption to protect your information.",
  },
  {
    question: "What support do you offer?",
    answer: "We offer 24/7 customer support to assist you with any inquiries.",
  },
  {
    question: "How long does a typical AI interview or assessment take?",
    answer:
      "Our AI sessions typically run between 15 and 30 minutes. Whether it's a screening interview or a training/skill assessment, candidates can complete the session at a time that suits them—making the process both efficient and convenient.",
  },
  {
    question: "Is it fair to evaluate candidates using AI?",
    answer:
      "Absolutely. Our AI enhances fairness by asking every candidate the same structured questions and evaluating them in a consistent manner. This minimizes unconscious bias while ensuring that your team makes the final decision based on objective, data-driven insights.",
  },
  {
    question: "What types of roles can benefit from this system?",
    answer:
      "Our AI solution is versatile and effective across a wide range of roles—from sales and customer service to campus recruitment, blue-collar positions, and technical roles. It also adapts seamlessly for training and skill assessments by customizing questions and evaluation criteria to suit your industry and job requirements.",
  },
  {
    question: "What support do candidates receive during the process?",
    answer:
      "Candidates receive clear instructions from start to finish. The interface is intuitive and user-friendly, and we provide technical support if needed. Most candidates report finding the experience professional and comfortable.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="relative bg-[#181E29] min-h-[80vh] py-16 px-6 md:px-16 overflow-hidden">
      {/* SVG full background grid */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none pw-4">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2A3142" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Centered FAQ Title at top */}
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

      {/* 2-column layout below the title */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row gap-16 items-start">
        {/* Left side: Animation area */}
        <div className="flex-1 flex justify-center items-center select-none mt-6">
          <svg
            width={400}
            height={400}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse"
            style={{ filter: "drop-shadow(0 0 5px #f5ac01)" }}
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

        {/* Right side: FAQ content */}
        <div className="flex-1 max-w-xl w-full">
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

      {/* Extra CSS for stroke animation */}
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
