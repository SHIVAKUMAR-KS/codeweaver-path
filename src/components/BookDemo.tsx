import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

const initialForm = {
  full_name: "",
  email: "",
  company: "",
  job_title: "",
  phone: "",
  source: "",
};

const BookDemo: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/bookdemo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitted(true); // Now prompt for OTP
      } else {
        setError(result.message || "Failed to send booking request.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/bookdemo/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, otp }),
      });

      const result = await response.json();
      if (response.ok) {
        setOtpVerified(true);
      } else {
        setError(result.message || "OTP verification failed.");
      }
    } catch (err) {
      setError("OTP verification error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#04091A" }}>
      <div className="book-demo-wrapper">
        <div className="book-demo-info">
          <button className="book-demo-back" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
          <h1>Book a Demo</h1>
          <p>
            Schedule a personalized walk-through and discover how our AI Interview platform can streamline hiring, provide instant feedback, and boost your candidate experience.
          </p>
        </div>

        <div className="book-demo-formwrap ml-2 max-h-[calc(100vh-64px)] overflow-y-auto">
          {otpVerified ? (
            <div className="book-demo-success">
              <h2>Thank you!</h2>
              <p>Your demo is confirmed. We’ll connect with you soon.</p>
            </div>
          ) : submitted ? (
            <form onSubmit={(e) => e.preventDefault()} className="book-demo-form">
              <label htmlFor="otp">Enter OTP sent to your email</label>
              <input
                id="otp"
                name="otp"
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />

              {error && <div className="book-demo-error">{error}</div>}

              <InteractiveHoverButton
                onClick={handleVerifyOtp}
                className={`h-full bg-gradient-to-r from-orange-500 to-pink-500 text-white ${
                  loading ? "pointer-events-none opacity-50" : ""
                }`}
              >
                <span className="flex items-center justify-center gap-2 h-full">
                  {loading ? "Verifying..." : "Verify OTP"}
                </span>
              </InteractiveHoverButton>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="book-demo-form" autoComplete="off" noValidate>
              <label htmlFor="full_name">Full Name</label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                placeholder="Enter your full name"
                value={form.full_name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="company">Company or College Name</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Enter your company or college name"
                value={form.company}
                onChange={handleChange}
                required
              />

              <label htmlFor="job_title">Job Title</label>
              <input
                id="job_title"
                name="job_title"
                type="text"
                placeholder="Enter your job title"
                value={form.job_title}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <label htmlFor="source">How did you hear about us?</label>
              <select
                id="source"
                name="source"
                value={form.source}
                onChange={handleChange}
                required
                aria-required="true"
              >
                <option value="" disabled>Select an option</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Google">Google</option>
                <option value="Referral">Referral</option>
              </select>

              {error && <div className="book-demo-error">{error}</div>}

              <InteractiveHoverButton
                type="submit"
                className={`h-full bg-gradient-to-r from-orange-500 to-pink-500 text-white ${
                  loading ? "pointer-events-none opacity-50" : ""
                }`}
              >
                <span className="flex items-center justify-center gap-2 h-full">
                  {loading ? "Booking..." : "Book Demo"}
                </span>
              </InteractiveHoverButton>
            </form>
          )}
        </div>
      </div>

      
<style>{`
  .book-demo-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 64px 32px;
    max-width: 1100px;
    margin: 0 auto;
    gap: 64px;
  }
  .book-demo-info {
    flex: 1.1;
    min-width: 225px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    padding: 0 20px 0 20px;
  }
  .book-demo-back {
    background: rgba(255,255,255,0.03);
    border: 1.5px solid #FBBF24;
    color: #FBBF24;
    border-radius: 9999px;
    padding: 0.6rem 1.5rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
    cursor: pointer;
    width: fit-content;
  }
  .book-demo-info h1 {
    color: #FBBF24;
    font-size: 2.75rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    letter-spacing: -1px;
  }
  .book-demo-info p {
    color: #A3A3A3;
    font-size: 1.2rem;
    max-width: 375px;
    line-height: 1.45;
  }
  .book-demo-formwrap {
    flex: 1;
    min-width: 245px;
    max-width: 600px;
    background: rgba(255,255,255,0.03);
    border-radius: 1.15rem;
    padding: 3rem 2.5rem;
    box-shadow: 0 2px 28px 2px rgba(0,0,0,0.22);
    border: 1.2px solid #1F2937;
    margin-top: 0;
  }
  .book-demo-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .book-demo-form input,
  .book-demo-form select {
    background: #0F172A;
    border: 1px solid #334155;
    border-radius: 0.55rem;
    padding: 1rem 1.2rem;
    color: #F3F4F6;
    font-size: 1.1rem;
  }
  .book-demo-form select {
    color: ${form.heardAbout ? "#F3F4F6" : "#A3A3A3"};
  }
  .book-demo-form button {
    background: linear-gradient(90deg,#FBBF24 0%,#F59E42 100%);
    color: #1E293B;
    border: none;
    border-radius: 9999px;
    padding: 1rem 2.5rem;
    font-weight: bold;
    font-size: 1.15rem;
    cursor: pointer;
    margin-top: 0.3rem;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,0.11);
    opacity: ${loading ? "0.65" : "1"};
    transition: opacity 0.18s;
  }
  .book-demo-success {
    background: #1E293B;
    padding: 2.5rem;
    border-radius: 1rem;
    color: #FBBF24;
    text-align: center;
    font-weight: 600;
  }
  .book-demo-success h2 {
    font-size: 1.5rem;
    margin-bottom: 0.7rem;
  }
  .book-demo-error {
    color: #e46666;
    font-size: 1.05rem;
    margin-bottom: -0.15rem;
  }

  @media (max-width: 900px) {
    .book-demo-wrapper {
      flex-direction: column;
      gap: 24px;
      max-width: 650px;
      padding: 36px 20px;
    }
    .book-demo-info,
    .book-demo-formwrap {
      min-width: 0;
      max-width: 100%;
      padding-right: 0;
      padding-left: 0;
    }
    .book-demo-formwrap {
      margin-top: 32px;
      padding: 2rem 1.5rem;
      border-radius: 0.75rem;
    }
  }
  @media (max-width: 570px) {
    .book-demo-wrapper {
      padding: 24px 12px;
    }
    .book-demo-formwrap {
      padding: 1.6rem 1rem;
    }
    .book-demo-info h1 {
      font-size: 2.1rem;
    }
    .book-demo-info p {
      font-size: 1.1rem;
      max-width: 100%;
      line-height: 1.5;
    }
  }
`}</style>
      <Footer />
    </div>
  );
};

export default BookDemo;

