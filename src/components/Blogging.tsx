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
    title: "How AI Is Revolutionizing Interview Preparation.",
    excerpt: "In the competitive job market, preparing for an interview is no longer just about rehearsing answers.",
    content:
      " Today, technology — especially Artificial Intelligence — is transforming the way candidates prepare and how recruiters assess talent.",
  },
  {
    id: 2,
    title: "5 Common Interview Mistakes and How AI Can Help You Avoid Them.",
    excerpt: "Your dream job could be just one interview away — but are you unknowingly sabotaging your chances?",
    content:
      "You’ve updated your resume, researched the company, and even practiced answers in the mirror. But then… the interview comes, and despite being the most qualified person in the room, you walk away feeling like something went wrong.",
  },
  {
    id: 3,
    title: "AI vs. Human Interviewers — What’s the Difference?",
    excerpt: "The ultimate comparison to help you prepare smarter, not harder.",
    content:
      "If you’ve ever practiced with an AI mock interviewer and thought, “But will this really prepare me for a human panel?”, you’re not alone. Both AI and human interviewers have unique strengths — and knowing the differences can help you prepare more effectively.",
  },
  {
    id: 4,
    title: "Mastering Behavioral Interview Questions with AI",
    excerpt: "How to turn tricky storytelling questions into your biggest advantage.",
    content:
      "Behavioral interview questions can make even confident candidates nervous. They require not just an answer, but a compelling story — one that shows your skills in action. AI can help you refine these stories until they’re natural and persuasive.",
  },
  {
    id: 5,
    title: "The Future of Hiring — How AI Is Changing the Game",
    excerpt: "From job seekers to employers, AI is rewriting the rules.",
    content:
      "Artificial Intelligence is no longer just a futuristic buzzword — it’s actively transforming how hiring works. From helping candidates practice to enabling employers to screen smarter, AI is making the process faster, fairer, and more data-driven.",
  },
  {
    id: 6,
    title: "Get Personalized Feedback with AI Assistants: The Smart Way to Prepare for Interviews",
    excerpt: "Practice alone can only take you so far — here’s how AI feedback transforms your preparation.",
    content:
      "Preparing for an interview is a bit like rehearsing for a performance — you can practice your lines endlessly, but without a coach to point out what’s working and what isn’t, you risk repeating the same mistakes.",
  },
  // ---- Additional Static Content ----
  // {
  //   id: 7,
  //   title: "Future of AI in Recruitment",
  //   excerpt: "How artificial intelligence is revolutionizing hiring processes in 2025.",
  //   content:
  //     "AI is streamlining recruitment with automated resume screening, skill-matching algorithms, and predictive analytics. By reducing human bias and improving candidate matching, organizations are filling roles faster while ensuring higher quality hires. In the coming years, AI will evolve to provide even more accurate cultural fit predictions and engagement scoring.",
  // },
  // {
  //   id: 8,
  //   title: "Soft Skills Assessment with AI",
  //   excerpt: "Why AI-driven soft skills evaluation is becoming a game-changer for employers.",
  //   content:
  //     "Beyond technical abilities, AI can now evaluate communication, adaptability, emotional intelligence, and leadership qualities. Using tone analysis, scenario-based simulations, and sentiment scoring, platforms can give recruiters a 360-degree understanding of a candidate’s soft skills — enabling better hiring decisions.",
  // },
  // {
  //   id: 9,
  //   title: "AI Video Interview Tips",
  //   excerpt: "Practical tips to ace your AI-powered interview video calls.",
  //   content:
  //     "With AI now analyzing facial expressions, eye movement, speech clarity, and even confidence levels, candidates must prepare differently. Ensure proper lighting, maintain eye contact with the camera, and speak clearly. Practice with AI mock interview tools to adjust pacing and tone for maximum impact.",
  // }
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
          // style={{ cursor: "pointer" }}
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
                  onClick={() => {
                    if (post.id === 1) navigate("/Revolutionizing-Prep");
                    else if (post.id === 2) navigate("/Common-Mistake");
                    else if (post.id === 3) navigate("/AI-vs-Human");
                    else if(post.id ===4) navigate("/Behavioural-Interview");
                    else if(post.id ==5 ) navigate("/Future-Hiring");
                    else if(post.id ==6) navigate("/Personalised-Feedback");
                    // add more mappings for other posts
                  }}

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
            // style={{ cursor: "pointer" }}
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
