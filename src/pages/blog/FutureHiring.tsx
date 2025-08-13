import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const FutureHiring: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#04091A", color: "#F3F4F6", minHeight: "100vh" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Back Button */}
            <HoverBorderGradient
                containerClassName="rounded-full h-15 w-max"
                className="flex items-center justify-center text-sm bg-background text-primary h-10 px-3 py-1"
                onClick={() => navigate("/blog")}
            // style={{ cursor: "pointer" }}
            >
              <IoMdArrowBack className="w-4 h-4 mr-1" /> Back to Blog Page
             </HoverBorderGradient>

        {/* Title */}
        <h1
          className="text-5xl font-extrabold mt-8 mb-6"
          style={{ color: "#FBBF24", textShadow: "0 0 8px #FBBF24" }}
        >
          The Future of Hiring — How AI Is Changing the Game
        </h1>

        {/* Subtitle */}
        <p className="italic text-lg mb-8 text-gray-300">
          From job seekers to employers, AI is rewriting the rules.
        </p>

        {/* Introduction */}
        <section className="mb-10 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>Introduction</h2>
          <p className="text-lg">
            Artificial Intelligence is no longer just a futuristic buzzword — it’s actively
            transforming how hiring works. From helping candidates practice to enabling employers
            to screen smarter, AI is making the process faster, fairer, and more data‑driven.
          </p>
        </section>

        {/* For Candidates */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>For Candidates</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Tailored Practice Sessions:</strong> AI adjusts mock interviews to your career goals and skill level.</li>
            <li><strong>Bias Reduction:</strong> Evaluation based on merit, not appearance or personal opinion.</li>
            <li><strong>Safe Environment:</strong> Practice without fear of judgment.</li>
          </ul>
        </section>

        {/* For Employers */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>For Employers</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Automated Screening:</strong> Shortlists candidates faster.</li>
            <li><strong>Consistent Evaluation Metrics:</strong> Every applicant is scored by the same standards.</li>
            <li><strong>Time Savings:</strong> More time for in‑depth interviews with top candidates.</li>
          </ul>
        </section>

        {/* Human + AI Combination */}
        <section className="mb-10 p-5 rounded-lg shadow-lg" style={{ background: "#1A2234" }}>
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>The Human + AI Combination</h2>
          <p>
            The best recruitment processes use AI for speed and fairness — and humans for final
            decision‑making, cultural fit assessment, and relationship‑building.
          </p>
          <p className="mt-2">
            <strong>Key Insight:</strong> The candidates who learn to work <em>with</em> AI — both in
            preparation and in understanding how it’s used in hiring — will have a massive
            competitive advantage in the job market of tomorrow.
          </p>
        </section>

        {/* Get Personalized Feedback with AI Assistants */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>
            Get Personalized Feedback with AI Assistants
          </h2>
          <p>
            One of the biggest challenges in interview preparation is knowing exactly what to
            improve. You can practice over and over, but without actionable feedback, it’s easy to
            keep making the same mistakes. That’s where AI‑powered assistants come in — transforming
            the way you prepare by giving you clear, real‑time insights on your performance.
          </p>
        </section>

        {/* How AI Feedback Works */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>How AI Feedback Works</h3>
          <p className="mb-4">
            Advanced AI assistants like Interview Sidekick and Ninjafy listen to your responses
            during mock interviews and evaluate them instantly. But they don’t just focus on the
            words you say — they look deeper:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Content Quality:</strong> Are your answers relevant, structured, and aligned with what interviewers expect?</li>
            <li><strong>Pace & Delivery:</strong> Are you speaking too fast, too slow, or using filler words that weaken your message?</li>
            <li><strong>Confidence Indicators:</strong> Does your tone, word choice, and energy convey the right level of self‑assurance?</li>
          </ul>
          <p className="mt-4">
            Every practice session becomes a data‑driven learning opportunity — identifying
            strengths to build on and pinpointing areas that need refinement, from better
            structuring answers to improving storytelling techniques.
          </p>
        </section>

        {/* Personalized Over Time */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>Personalized Over Time</h3>
          <p>
            The magic of AI feedback isn’t just in the first session — it’s in how it evolves with
            you. As you keep practicing, AI learns your style, patterns, and recurring mistakes.
            Over time, its feedback becomes sharper and more tailored, helping you focus on the
            skills that truly move the needle in your performance.
          </p>
        </section>

        {/* Why It Works */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>Why It Works</h3>
          <p className="mb-4">
            Unlike generic interview tips you might find online, this feedback is personal,
            precise, and practical. Instead of “try to be more confident,” you might hear:
          </p>
          <blockquote className="italic border-l-4 pl-4" style={{ borderColor: "#FBBF24" }}>
            “Slow down your delivery by 10% and pause briefly before answering — it will make you
            sound more thoughtful and composed.”
          </blockquote>
          <p className="mt-4">
            With such clarity, you can make immediate changes and see results in the very next
            session.
          </p>
        </section>

        {/* The Result */}
        <section className="p-5 rounded-lg shadow-lg" style={{ background: "#1A2234" }}>
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>The Result</h3>
          <p>
            You walk into your interview with <strong>polished answers, stronger delivery, and more
            confidence than ever before</strong>. And because you’ve been practicing with realistic,
            adaptive AI, the real interview feels familiar — like you’ve already been there.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FutureHiring;
