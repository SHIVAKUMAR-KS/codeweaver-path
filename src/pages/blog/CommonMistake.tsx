import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CommonMistake: React.FC = () => {
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
          5 Common Interview Mistakes and How AI Can Help You Avoid Them
        </h1>

        {/* Intro */}
        <p className="italic text-lg mb-6 text-gray-300">
          Your dream job could be just one interview away - but are you unknowingly sabotaging your chances?
        </p>
        <section className="mb-10 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#FBBF24" }}>Introduction</h2>
          <p className="text-lg mb-4">
            You’ve updated your resume, researched the company, and even practiced answers in the mirror.
            But then… the interview comes, and despite being the most qualified person in the room,
            you walk away feeling like something went wrong.
          </p>
          <p className="text-lg">
            This is the reality for many job seekers - small, subtle mistakes can overshadow even the strongest skills.
            Luckily, AI interview coaching is changing the game, helping candidates identify
            and fix these errors <strong>before</strong> they cost you the job offer.
          </p>
        </section>

        {/* Mistake 1 */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>Mistake 1: Rambling Answers</h3>
          <p><strong>The Problem:</strong>
          <br /> Ever been halfway through an answer and suddenly realize you’ve gone off-topic? 
            Overexplaining adds unnecessary details and loses the interviewer’s interest.</p>
            <br />
          <p><strong>Why It Hurts You:</strong> 
          <br />Interviewers have limited time. Long, meandering answers make them doubt your ability to communicate clearly.</p>
          <br />
          <p><strong>AI Fix:</strong>
          <br /> AI tools monitor your answer length, detect filler words, and 
            alert you when you drift from the main point.</p>
            <br />
          <p className="italic">💡 Pro Tip: Practice summarizing your work experience in 60 seconds!</p>
        </section>

        {/* Mistake 2 */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>Mistake 2: Poor Body Language</h3>
          <p><strong>The Problem:</strong>
          <br /> Slouching, avoiding eye contact, crossing arms, or fidgeting can send the wrong message.</p>
          <br />
          <p><strong>Why It Hurts You:</strong> 
          <br />Over 50% of communication is non-verbal. Poor body language can make you seem disengaged.</p>
          <br />
          <p><strong>AI Fix:</strong> 
          <br />AI video analysis reviews posture, gestures, and expressions, and gives actionable tips 
            like maintaining steady eye contact or relaxing your shoulders.</p>
        </section>

        {/* Mistake 3 */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>Mistake 3: Weak Examples</h3>
          <p><strong>The Problem:</strong> 
          <br />Giving vague statements like “I’m good at managing teams” without real scenarios.</p>
          <br />
          <p><strong>Why It Hurts You:</strong> 
          <br />Employers want proof - vague answers lack impact.</p>
          <br />
          <p><strong>AI Fix:</strong> 
          <br />AI guides you in using the <strong>STAR Method</strong> 
            (Situation, Task, Action, Result) for structured, powerful examples.</p>
        </section>

        {/* Mistake 4 */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>Mistake 4: Monotone Voice</h3>
          <p><strong>The Problem:</strong> 
          <br />A flat tone can make achievements sound dull.</p>
          <br />
          <p><strong>Why It Hurts You:</strong> 
          <br />A monotone voice may signal disinterest.</p>
          <br />
          <p><strong>AI Fix:</strong>
          <br /> Speech analysis suggests tone variations, pausing, 
            and emphasis to make delivery more engaging.</p>
        </section>

        {/* Mistake 5 */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FBBF24" }}>Mistake 5: Not Researching the Role</h3>
          <p><strong>The Problem:</strong>
          <br /> Generic answers like “I’m looking for growth” show lack of preparation.</p>
          <br />
          <p><strong>Why It Hurts You:</strong>
          <br /> Companies want to see you understand <em>their</em> needs.</p>
          <br />
          <p><strong>AI Fix:</strong>
          <br /> AI scans job descriptions and tailors mock questions, 
            helping you give specific, relevant answers.</p>
        </section>

        {/* Takeaway */}
        <section className="p-5 rounded-lg shadow-lg" style={{ background: "#1A2234" }}>
          <p className="text-lg font-semibold" style={{ color: "#FBBF24" }}>
            Key Takeaway:
          </p>
          <p>
            AI doesn’t just highlight mistakes  - it coaches you to fix them.
            With the right tools, you can replace nervous habits with confident communication
            and walk into your next interview fully prepared.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CommonMistake;
