import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import {HoverBorderGradient} from '@/components/ui/hover-border-gradient'
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
      "Discover what a panel interview is, its benefits, challenges, and best practices to streamline hiring and ensure fair evaluation.",
  },
  {
    id: 2,
    title: "Interview Scorecard",
    excerpt: "The Ultimate Guide to Interview Scorecards (With Free Template)",
    content:
      "Learn how interview scorecards improve hiring by ensuring fair, consistent, and data-driven candidate evaluations. Free template!",
  },
  {
    id: 3,
    title: "Recruitment ROI",
    excerpt: "How to Measure and Improve Your Recruitment ROI",
    content:
      "Learn how to measure and improve recruitment ROI with key metrics, calculation methods, and strategies for better hiring results.",
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
          containerClassName="rounded-full h-10 w-max"                    // Lower height and tighter width
          className="flex items-center justify-center text-sm bg-background text-primary h-10 px-3 py-1" // Smaller text & padding
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <IoMdArrowBack  className="w-4 h-4 mr-1" />   {/* Smaller icon */}
          Back to Home
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
      </div>
      <Footer/>
    </div>

    
  );
};

export default Blog;
