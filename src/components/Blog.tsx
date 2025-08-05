import React from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with AI Interviews",
    excerpt: "Learn how AI can transform your interview preparation...",
    content: "Full content of the blog post goes here...",
  },
  {
    id: 2,
    title: "Top 10 DSA Questions Asked in FAANG Interviews",
    excerpt: "Brush up on these 10 questions before your big tech interview...",
    content: "Full content of the blog post goes here...",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-neutral-100">
      <h1 className="text-3xl font-bold mb-6 text-amber-400">Blog</h1>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 border border-neutral-800 rounded-lg hover:border-amber-400 transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-neutral-400 mb-2">{post.excerpt}</p>
            <button className="text-amber-400 hover:underline text-sm">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
