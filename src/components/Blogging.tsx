import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IoMdArrowBack } from "react-icons/io";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Panel Interview",
    excerpt: "What Is a Panel Interview? Advantages, Challenges, and Best Practices",
    content:
      "Explore the ins and outs of panel interviews—what they are, how they work, and why organizations use them. Uncover their key benefits, potential challenges, and expert-backed tips to ensure a structured, fair, and efficient hiring process.",
  },
  {
    id: 2,
    title: "Interview Scorecard",
    excerpt: "The Ultimate Guide to Interview Scorecards (With Free Template)",
    content:
      "Master the art of structured interviewing with our comprehensive guide to interview scorecards. Learn how they drive consistency, eliminate bias, and support data-driven hiring decisions. Includes a downloadable template to help you get started right away.",
  },
  {
    id: 3,
    title: "Recruitment ROI",
    excerpt: "How to Measure and Improve Your Recruitment ROI",
    content:
      "Unlock the secrets to maximizing the return on your recruitment investment. This guide walks you through essential metrics, how to calculate recruitment ROI, and actionable strategies to reduce costs and improve hiring outcomes.",
  },
  {
    id: 4,
    title: "AI Interview Prep: Transforming How You Succeed",
    excerpt: "See how AI-driven interview platforms make prep smarter and faster than ever.",
    content:
      "AI interview tools offer practice sessions with realistic feedback, tailored to your target role. With instant analytics on your speaking, coding, and problem-solving, you’ll turn weaknesses into strengths. Top platforms even generate custom questions and adaptive interview flows based on the companies you target. Level up your preparation and walk into interviews more confident than ever.",
  },
  {
    id: 5,
    title: "How AI Analyzes Your Interview: What Recruiters See",
    excerpt: "Curious what data recruiters really look at? Here’s how AI platforms read you.",
    content:
      "Modern AI interview platforms assess everything from your communication clarity to technical skills. They use video and audio analysis to score your professionalism, business acumen, and body language. Recruiters can review highlights and data-driven recommendations, making the process more objective and efficient for both sides.",
  },
  {
    id: 6,
    title: "Get Personalized Feedback with AI Assistants",
    excerpt: "Ready to perfect your answers? AI mock interviews break down your every response.",
    content:
      "Advanced AI assistants like Interview Sidekick and Ninjafy analyze responses in real time, giving targeted feedback on your pace, content, and confidence. Now, every practice session is a learning opportunity, as the AI gets to know your style and weaknesses, providing ever-sharper feedback with each attempt.",
  },
  // ---- Additional Static Content ----
  {
    id: 7,
    title: "Future of AI in Recruitment",
    excerpt: "How artificial intelligence is revolutionizing hiring processes in 2025.",
    content:
      "AI is streamlining recruitment with automated resume screening, skill-matching algorithms, and predictive analytics. By reducing human bias and improving candidate matching, organizations are filling roles faster while ensuring higher quality hires. In the coming years, AI will evolve to provide even more accurate cultural fit predictions and engagement scoring.",
  },
  {
    id: 8,
    title: "Soft Skills Assessment with AI",
    excerpt: "Why AI-driven soft skills evaluation is becoming a game-changer for employers.",
    content:
      "Beyond technical abilities, AI can now evaluate communication, adaptability, emotional intelligence, and leadership qualities. Using tone analysis, scenario-based simulations, and sentiment scoring, platforms can give recruiters a 360-degree understanding of a candidate’s soft skills — enabling better hiring decisions.",
  },
  {
    id: 9,
    title: "AI Video Interview Tips",
    excerpt: "Practical tips to ace your AI-powered interview video calls.",
    content:
      "With AI now analyzing facial expressions, eye movement, speech clarity, and even confidence levels, candidates must prepare differently. Ensure proper lighting, maintain eye contact with the camera, and speak clearly. Practice with AI mock interview tools to adjust pacing and tone for maximum impact.",
  }
];

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedPosts((prev) =>
      prev.includes(id) ? prev.filter((postId) => postId !== id) : [...prev, id]
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#04091A",
        color: "#F3F4F6",
        fontFamily: "Inter, sans-serif",
        padding: 0,
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-10">
        <HoverBorderGradient
          containerClassName="rounded-full h-15 w-max"
          className="flex items-center justify-center text-sm bg-background text-primary h-10 px-3 py-1"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <IoMdArrowBack className="w-4 h-4 mr-1" /> Back to Home
        </HoverBorderGradient>

        <h1 className="text-4xl font-bold mb-7 mt-4" style={{ color: "#FBBF24" }}>
          AI Interview Insights
        </h1>

        <div className="grid gap-7">
          {blogPosts.map((post) => {
            const isExpanded = expandedPosts.includes(post.id);
            const shortContent = post.content.slice(0, 150) + "...";

            return (
              <div
                key={post.id}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1.5px solid #1F2937",
                  borderRadius: "1.1rem",
                  padding: "1.7rem",
                  boxShadow: "0 2px 20px 0 rgba(0,0,0,0.09)",
                }}
                className="hover:border-amber-400 transition"
              >
                <h2 className="text-2xl font-semibold mb-1" style={{ color: "#FBBF24" }}>
                  {post.title}
                </h2>
                <p className="text-neutral-400 mb-3" style={{ color: "#A3A3A3" }}>
                  {post.excerpt}
                </p>
                <div className="mb-4 text-neutral-100" style={{ color: "#F3F4F6" }}>
                  {isExpanded ? post.content : shortContent}
                </div>
                <button
                  onClick={() => toggleExpand(post.id)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#FBBF24",
                    fontWeight: "bold",
                    cursor: "pointer",
                    padding: 0,
                    textDecoration: "underline",
                  }}
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              </div>
            );
          })}
        </div>

        {/* ---- More Blogs Button ---- */}
        <div className="flex justify-center mt-10">
          <HoverBorderGradient
            containerClassName="rounded-full h-15 w-max"
            className="flex items-center justify-center text-sm bg-background text-primary h-10 px-5 py-2"
            onClick={() => (window.location.href = "https://sklassics.com/blog/")}
            style={{ cursor: "pointer" }}
          >
            Explore More Blogs →
          </HoverBorderGradient>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
