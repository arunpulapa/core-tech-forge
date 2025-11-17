import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

// Futuristic Blog component — TailwindCSS.
// Features: neon gradients, tilt hover, staggered entrance, image glows, accessible.

const useOnScreen = (ref: React.RefObject<HTMLElement>, threshold = 0.18) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
};

const useTilt = (ref: React.RefObject<HTMLElement | null>, intensity = 12) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rx = (y * intensity).toFixed(2);
      const ry = (-x * intensity).toFixed(2);
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      el.style.transition = "transform 120ms ease-out";
    };
    const onLeave = () => { el.style.transform = "none"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, intensity]);
};

const posts = [
  {
    category: "Cloud Computing",
    title: "The Future of Cloud Infrastructure in 2025",
    excerpt:
      "Explore emerging trends in cloud technology and how they're reshaping enterprise IT strategies for the modern era.",
    author: "John Smith",
    date: "Oct 10, 2025",
    readTime: "5 min read",
    image: "https://i.pinimg.com/736x/61/cc/d6/61ccd6392fb7bb3d7e791c5afae77aaa.jpg",
  },
  {
    category: "Cybersecurity",
    title: "Zero Trust Architecture: A Complete Guide",
    excerpt:
      "Learn how zero trust security models protect organizations from evolving cyber threats in today's digital landscape.",
    author: "Sarah Johnson",
    date: "Oct 8, 2025",
    readTime: "7 min read",
    image: "https://i.pinimg.com/1200x/e6/ec/86/e6ec86d140147e8dc72514dbd2af546f.jpg",
  },
  {
    category: "AI & ML",
    title: "Implementing AI in Business Operations",
    excerpt:
      "Discover practical applications of artificial intelligence and machine learning to drive business innovation and efficiency.",
    author: "Michael Chen",
    date: "Oct 5, 2025",
    readTime: "6 min read",
    image: "https://i.pinimg.com/736x/f7/8c/ef/f78cef0dd20b57db43cc6c93cc4e7303.jpg",
  },
];

const FuturisticBlog: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const visible = useOnScreen(containerRef, 0.15);

  return (
    <section id="blog" className="relative bg-[#03071a] py-24 overflow-hidden text-white" ref={containerRef}>
      {/* subtle particle-ish SVG to add depth */}
      <svg className="pointer-events-none absolute -left-20 -top-20 w-[500px] h-[500px] opacity-10" viewBox="0 0 500 500" aria-hidden>
        <defs>
          <radialGradient id="rg1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.06" />
          </radialGradient>
        </defs>
        <circle cx="250" cy="250" r="200" fill="url(#rg1)" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
          <p className={`text-cyan-300 font-semibold mb-3 transition-all ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            | Latest Insights
          </p>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 leading-tight transition-all ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Stay Updated — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400">Expert Insights</span>
          </h2>
          <p className={`text-gray-300 max-w-2xl mx-auto transition-all ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Trends, field reports and practical guides from our engineers and security team — short reads, big ideas.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} visible={visible} />
          ))}
        </div>

        <div className="text-center mt-12 relative z-10">
          <Button size="lg" variant="outline" className="bg-black hover:bg-cyan-600 hover:text-white transition-all">
            View All Articles
          </Button>
        </div>
      </div>

      {/* bottom glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 -z-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1600 120" preserveAspectRatio="none" aria-hidden>
          <path d="M0 60 C400 10 1200 110 1600 60 L1600 120 L0 120 Z" fill="#06b6d4" fillOpacity="0.02" />
        </svg>
      </div>

      <style>{`
        @keyframes blogIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); }
          60% { opacity: 1; transform: translateY(-6px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
};

const BlogCard: React.FC<{ post: any; index: number; visible: boolean }> = ({ post, index, visible }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  useTilt(cardRef, 8);

  const delay = 180 * index + 300;
  return (
    <Card
      ref={cardRef as any}
      className={`group relative overflow-hidden rounded-2xl border border-white/6 bg-gradient-to-br from-white/3 to-white/6 shadow-2xl transform ${visible ? "opacity-100" : "opacity-0"}`}
      style={
        visible
          ? { animation: `blogIn 700ms cubic-bezier(.2,.9,.3,1) forwards`, animationDelay: `${delay}ms` }
          : undefined
      }
    >
      <div className="relative h-56 overflow-hidden rounded-t-lg">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-overlay" />
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#071022] text-cyan-300 px-3 py-1 rounded-full text-sm font-medium shadow-sm">{post.category}</span>
        </div>
      </div>

      <CardContent className="p-6 pt-4">
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-300 transition-colors line-clamp-2">{post.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-3">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="text-gray-400">{post.readTime}</div>
        </div>

        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-300 hover:text-cyan-300">
            Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <div className="text-xs text-gray-400">{post.author}</div>
        </div>
      </CardContent>

      {/* neon rim */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/6 mix-blend-overlay" />
    </Card>
  );
};

export default FuturisticBlog;
