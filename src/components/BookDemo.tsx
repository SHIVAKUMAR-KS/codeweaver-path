import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "4eaa7b0e-cc5c-4695-9274-79b54a4075cb";

const initialForm = {
  name: "",
  email: "",
  company: "",
  jobTitle: "",
  phone: "",
  heardAbout: "",
};

const BookDemo: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

    const payload = {
      access_key: ACCESS_KEY,
      subject: "New Demo Booking - AI Interview Platform",
      ...form,
    };

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setForm(initialForm);
      } else {
        setError("There was an error submitting your request. Please try again.");
      }
    } catch {
      setError("There was an error submitting your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#04091A" }}>
      <div className="book-demo-wrapper">
        <div className="book-demo-info">
          <button
            className="book-demo-back"
            onClick={() => navigate("/")}
            type="button"
          >
            ← Back to Home
          </button>
          <h1>Book a Demo</h1>
          <p>
            Schedule a personalized walk-through and discover how our AI Interview platform can streamline hiring, provide instant feedback, and boost your candidate experience.
          </p>
        </div>
        <div className="book-demo-formwrap">
          {submitted ? (
            <div className="book-demo-success">
              <h2>Thank you!</h2>
              <p>Your demo booking has been received. We’ll connect with you soon.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="book-demo-form"
              autoComplete="off"
              noValidate
            >
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={form.name}
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

              <label htmlFor="jobTitle">Job Title</label>
              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                placeholder="Enter your job title"
                value={form.jobTitle}
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

              <label htmlFor="heardAbout">How did you hear about us?</label>
              <select
                id="heardAbout"
                name="heardAbout"
                value={form.heardAbout}
                onChange={handleChange}
                required
                aria-required="true"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Google">Google</option>
                <option value="Referral">Referral</option>
              </select>

              {error && <div className="book-demo-error">{error}</div>}

              <button type="submit" disabled={loading}>
                {loading ? "Booking..." : "Book Demo"}
              </button>
            </form>
          )}
        </div>
      </div>

     

<style>{`
  .book-demo-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 64px 32px;     /* Increased padding on all sides */
    max-width: 1100px;
    margin: 0 auto;
    gap: 64px;              /* More space between columns */
  }
  .book-demo-info {
    flex: 1.1;
    min-width: 225px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    padding: 0 20px 0 20px; /* Added horizontal padding */
  }
  .book-demo-back {
    background: rgba(255,255,255,0.03);
    border: 1.5px solid #FBBF24;
    color: #FBBF24;
    border-radius: 9999px;
    padding: 0.6rem 1.5rem;
    font-weight: bold;
    margin-bottom: 2.5rem;  /* More space below button */
    cursor: pointer;
    width: fit-content;
  }
  .book-demo-info h1 {
    color: #FBBF24;
    font-size: 2.75rem;      /* Slightly bigger heading */
    font-weight: bold;
    margin-bottom: 1.5rem;
    letter-spacing: -1px;
  }
  .book-demo-info p {
    color: #A3A3A3;
    font-size: 1.2rem;
    max-width: 375px;
    line-height: 1.45;       /* More line spacing for readability */
  }
  .book-demo-formwrap {
    flex: 1;
    min-width: 245px;
    max-width: 600px;
    background: rgba(255,255,255,0.03);
    border-radius: 1.15rem;
    padding: 3rem 2.5rem;    /* More padding inside form container */
    box-shadow: 0 2px 28px 2px rgba(0,0,0,0.22);
    border: 1.2px solid #1F2937;
    margin-top: 0;
  }
  .book-demo-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;            /* Increased gap between form fields */
  }
  .book-demo-form input,
  .book-demo-form select {
    background: #0F172A;
    border: 1px solid #334155;
    border-radius: 0.55rem; /* Slightly bigger radius */
    padding: 1rem 1.2rem;   /* More padding inside inputs */
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
    <Footer/>
    </div>
  );
};

export default BookDemo;
