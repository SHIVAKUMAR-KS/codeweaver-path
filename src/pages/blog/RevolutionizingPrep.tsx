import React from "react";
// import Footer from "./Footer";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const RevolutionizingPrep: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#04091A", color: "#F3F4F6", minHeight: "100vh" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <HoverBorderGradient
            containerClassName="rounded-full h-15 w-max"
            className="flex items-center justify-center text-sm bg-background text-primary h-10 px-3 py-1"
            onClick={() => navigate("/blog")}
        // style={{ cursor: "pointer" }}
        >
          <IoMdArrowBack className="w-4 h-4 mr-1" /> Back to Blog Page
         </HoverBorderGradient>

        <h1
          className="text-5xl font-extrabold mt-8 mb-8"
          style={{ color: "#FBBF24", textShadow: "0 0 8px #FBBF24" }}
        >
          How AI Is Revolutionizing Interview Preparation
        </h1>

        <p className="text-lg max-w-3xl mb-8">
          In the competitive job market, preparing for an interview is no longer just about rehearsing answers.
          Today, technology — especially Artificial Intelligence — is transforming the way candidates prepare and how recruiters assess talent.
        </p>

        <section className="mb-10 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>
            Why AI Interview Practice Works
          </h2>
          <p className="mb-4">
            Traditional mock interviews rely on another person’s availability, experience, and perspective.
            AI-powered interview platforms solve these limitations by offering:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>24/7 availability - practice anytime, anywhere.</li>
            <li>Role-specific simulations - from software engineering to sales.</li>
            <li>Instant, objective feedback - no sugarcoating, just insights you can act on.</li>
          </ul>
        </section>

        <section className="mb-10 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>
            What You Can Expect
          </h2>
          <p className="mb-4">
            An AI interview coach can mimic the style, tone, and difficulty of real interviews.
            It can ask follow-up questions, analyze your answers, and highlight areas like:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Clarity of communication</li>
            <li>Confidence and tone</li>
            <li>Technical accuracy</li>
            <li>Structure of responses</li>
          </ul>
        </section>

        <section className="mb-10 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>
            Beyond Practice - Building Confidence
          </h2>
          <p className="text-lg">
            The real value of AI interview prep isn’t just improving answers — it’s building confidence.
            When you know what to expect and have trained under realistic conditions, walking into an interview feels less intimidating and more like a conversation you’ve already mastered.
          </p>
        </section>

        <section className="mb-10 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>
            The Future of Hiring
          </h2>
          <p className="text-lg mb-4">
            As AI tools become more sophisticated, recruiters may use them not only for screening but also for training candidates internally.
            This means AI-based interview prep isn’t just a trend — it’s becoming an essential skill-building tool for professionals at every career stage.
          </p>
          <p className="text-lg font-semibold flex items-center" style={{ color: "#FBBF24" }}>
            💡 Takeaway: Whether you’re a student, job seeker, or hiring manager, AI interview practice can save time, reduce stress, and give you a competitive edge.
          </p>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default RevolutionizingPrep;
