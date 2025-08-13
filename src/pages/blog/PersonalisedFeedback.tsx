import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PersonalisedFeedback: React.FC = () => {
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

        {/* Heading */}
        <h1
          className="text-5xl font-extrabold mt-8 mb-6"
          style={{ color: "#FBBF24", textShadow: "0 0 8px #FBBF24" }}
        >
          Get Personalized Feedback with AI Assistants: The Smart Way to Prepare for Interviews
        </h1>

        {/* Subtitle */}
        <p className="italic text-lg mb-8 text-gray-300">
          Practice alone can only take you so far — here’s how AI feedback transforms your preparation.
        </p>

        {/* Introduction */}
        <section className="mb-10 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>Introduction</h2>
          <p>
            Preparing for an interview is like rehearsing for a performance — you can practice endlessly,
            but without a coach to point out what’s working and what isn’t, you risk repeating the same
            mistakes. For years, candidates relied on friends, mentors, or gut instinct for feedback.
            Now, AI-powered assistants are changing the game — giving you clear, data-backed, real-time
            insights so you know exactly what to fix before the big day.
          </p>
        </section>

        {/* How AI Feedback Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#FBBF24" }}>How AI Feedback Works</h2>
          <p className="mb-4">
            AI interview assistants like Interview Sidekick and Ninjafy don’t just “listen” to your answers —
            they analyze your delivery from multiple angles:
          </p>

          {/* 1. Content Quality */}
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>1. Content Quality</h3>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>Are your answers relevant to the question?</li>
            <li>Do they follow a logical structure like the STAR method?</li>
            <li>Are they aligned with what hiring managers expect for the role?</li>
          </ul>
          <p className="italic mb-6">
            Example: If you’re interviewing for a project management role, AI may point out that your 
            answers lean too heavily on technical details and lack leadership examples.
          </p>

          {/* 2. Pace & Delivery */}
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>2. Pace & Delivery</h3>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>Are you speaking too fast and sounding nervous?</li>
            <li>Too slow, making you seem unsure?</li>
            <li>Do you overuse filler words like “um,” “you know,” or “like”?</li>
          </ul>
          <p className="italic mb-6">
            Example: The AI might suggest, “Reduce your speaking speed by 15% and pause after each key
            point to emphasize impact.”
          </p>

          {/* 3. Confidence Indicators */}
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>3. Confidence Indicators</h3>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>Does your tone convey self-assurance?</li>
            <li>Are you projecting energy and enthusiasm?</li>
            <li>Is your word choice strong and decisive?</li>
          </ul>
          <p>
            Confidence isn’t just in <em>what</em> you say — it’s in <em>how</em> you say it. AI breaks this 
            down with metrics and actionable advice.
          </p>
        </section>

        {/* Every Practice Session */}
        <section className="mb-10 p-5 rounded-lg shadow-lg" style={{ background: "#1A2234" }}>
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>
            Every Practice Session Becomes a Data-Driven Lesson
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Instant identification of strengths.</li>
            <li>Targeted focus on weak spots.</li>
            <li>Concrete, actionable recommendations for next time.</li>
          </ul>
          <p className="mt-3">
            Your second practice session is already stronger than your first — and improvements compound over time.
          </p>
        </section>

        {/* Personalized Over Time */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>Personalized Over Time</h2>
          <p>
            The real magic happens with consistent practice — AI learns your speaking patterns,
            common mistakes, and improvement curve. Over time, its feedback becomes sharper and
            tailored uniquely to you.
          </p>
          <p className="italic mt-2">
            Example: Instead of “sound more confident,” you might get — “Pause for two seconds before
            answering challenging questions to sound more composed.”
          </p>
        </section>

        {/* Why AI Feedback Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>Why AI Feedback Works So Well</h2>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>Personal:</strong> Based on <em>your</em> actual performance.</li>
            <li><strong>Precise:</strong> Measures exact areas for improvement.</li>
            <li><strong>Practical:</strong> Offers specific actions to implement instantly.</li>
          </ul>
          <p>
            When you can apply changes immediately and see results in your next practice session,
            progress feels motivating — and fast.
          </p>
        </section>

        {/* The End Result */}
        <section className="p-5 rounded-lg shadow-lg" style={{ background: "#1A2234" }}>
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>The End Result</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Sharper, more relevant, and better-structured answers.</li>
            <li>Confident, engaging delivery.</li>
            <li>Real interviews feel less like a test — more like a conversation.</li>
          </ul>
          <p className="mt-3">
            💡 <strong>Pro Tip:</strong> Combine AI feedback with human mock interviews for the best
            results — AI gives you objective insights; humans provide emotional and cultural context.
          </p>
        </section>

      </div>
    </div>
  );
};

export default PersonalisedFeedback;
