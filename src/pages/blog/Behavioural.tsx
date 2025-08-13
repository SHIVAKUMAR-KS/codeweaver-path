import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Behavioural: React.FC = () => {
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
          Mastering Behavioral Interview Questions with AI
        </h1>

        {/* Subtitle */}
        <p className="italic text-lg mb-6 text-gray-300">
          How to turn tricky storytelling questions into your biggest advantage.
        </p>

        {/* Introduction */}
        <section className="mb-10 max-w-4xl">
          <h2
            className="text-2xl font-semibold mb-3"
            style={{ color: "#FBBF24" }}
          >
            Introduction
          </h2>
          <p className="text-lg">
            Behavioral interview questions can make even confident candidates nervous.
            They require not just an answer, but a compelling <em>story</em> — one that shows your
            skills in action. AI can help you refine these stories until they’re natural
            and persuasive.
          </p>
        </section>

        {/* Why Behavioral Questions Matter */}
        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-3"
            style={{ color: "#FBBF24" }}
          >
            Why Behavioral Questions Matter
          </h2>
          <p>Employers use them to evaluate:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Problem-solving skills</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Decision-making under pressure</li>
          </ul>
        </section>

        {/* How AI Helps */}
        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-3"
            style={{ color: "#FBBF24" }}
          >
            How AI Helps
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Generates Role-Specific Scenarios:</strong> 
              <br />AI creates mock interview
              questions tailored to your field.
            </li>
            <li>
              <strong>Analyzes Story Structure:</strong> 
              <br />Checks if your answer follows a logical,
              engaging flow.
            </li>
            <li>
              <strong>Tracks Progress Over Time:</strong>
              <br /> Shows measurable improvements in clarity,
              confidence, and delivery.
            </li>
          </ul>
        </section>

        {/* STAR Method */}
        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-3"
            style={{ color: "#FBBF24" }}
          >
            The STAR Method in Action
          </h2>
          <p className="mb-4">
            AI encourages you to break your answer into:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Situation:</strong> The background
            </li>
            <li>
              <strong>Task:</strong> Your responsibility
            </li>
            <li>
              <strong>Action:</strong> What you did
            </li>
            <li>
              <strong>Result:</strong> The outcome
            </li>
          </ul>
          <p className="mt-4">
            By practicing with AI, you’ll naturally begin to structure all your responses this way.
          </p>
          <p className="italic mt-2">
            💡 <strong>Pro Tip:</strong> Keep your STAR answers between 1–2 minutes and focus heavily on <strong>Results</strong> — that’s what sticks in the interviewer’s mind.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Behavioural;
