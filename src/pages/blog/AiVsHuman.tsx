import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AIVsHuman: React.FC = () => {
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
          style={{ color: "#FBBF24", textShadow: "0 0 2px #FBBF24" }}
        >
          AI vs. Human Interviewers — What’s the Difference?
        </h1>

        {/* Subtitle */}
        <p className="italic text-lg mb-6 text-gray-300">
          The ultimate comparison to help you prepare smarter, not harder.
        </p>

        {/* Introduction */}
        <section className="mb-10 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>
            Introduction
          </h2>
          <p className="text-lg">
            If you’ve ever practiced with an AI mock interviewer and thought,{" "}
            <em>“But will this really prepare me for a human panel?”</em>, you’re not alone.
            Both AI and human interviewers have unique strengths - and knowing the differences
            can help you prepare more effectively.
          </p>
        </section>

        {/* 1. Speed & Availability */}
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>
            1. Speed & Availability
          </h3>
          <p>
            <strong>AI:</strong> Ready 24/7. You can practice in the morning, at midnight,
            or during your commute.
          </p>
          <p>
            <strong>Human:</strong> Requires scheduling, sometimes with days or weeks of waiting.
          </p>
        </section>

        {/* 2. Feedback Quality */}
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>
            2. Feedback Quality
          </h3>
          <p>
            <strong>AI:</strong> Objective, data-driven, and instant. It notices things humans
            might overlook, like filler words, pace, or facial expressions.
          </p>
          <p>
            <strong>Human:</strong> Provides context, emotional insights, and
            industry-specific advice - but may be biased.
          </p>
        </section>

        {/* 3. Flexibility */}
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>
            3. Flexibility
          </h3>
          <p>
            <strong>AI:</strong> Can instantly adapt difficulty, switch to different interviewing
            styles, or mimic various industries.
          </p>
          <p>
            <strong>Human:</strong> Limited by personal experience but can share nuanced,
            real-world scenarios.
          </p>
        </section>

        {/* 4. Emotional Connection */}
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>
            4. Emotional Connection
          </h3>
          <p>
            <strong>AI:</strong> Stays neutral and performance-focused.
          </p>
          <p>
            <strong>Human:</strong> Offers encouragement, empathy, and mentorship.
          </p>
        </section>

        {/* Best Strategy */}
        <section className="p-5 rounded-lg shadow-lg" style={{ background: "#1A2234" }}>
          <p className="text-lg font-semibold mb-2" style={{ color: "#FBBF24" }}>
            Best Strategy:
          </p>
          <p>
            Combine AI practice for <strong>technical precision</strong> with human coaching
            for <strong>emotional readiness</strong>. This way, you get the best of both worlds.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AIVsHuman;
