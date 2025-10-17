import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const posts = [
    {
      category: "Cloud Computing",
      title: "The Future of Cloud Infrastructure in 2025",
      excerpt:
        "Explore emerging trends in cloud technology and how they're reshaping enterprise IT strategies for the modern era.",
      author: "John Smith",
      date: "Oct 10, 2025",
      readTime: "5 min read",
    },
    {
      category: "Cybersecurity",
      title: "Zero Trust Architecture: A Complete Guide",
      excerpt:
        "Learn how zero trust security models protect organizations from evolving cyber threats in today's digital landscape.",
      author: "Sarah Johnson",
      date: "Oct 8, 2025",
      readTime: "7 min read",
    },
    {
      category: "AI & ML",
      title: "Implementing AI in Business Operations",
      excerpt:
        "Discover practical applications of artificial intelligence and machine learning to drive business innovation and efficiency.",
      author: "Michael Chen",
      date: "Oct 5, 2025",
      readTime: "6 min read",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="blog"
      className="bg-[#050B18] py-20 overflow-hidden text-white"
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-blue-500 font-semibold mb-4 transform opacity-0 translate-y-6 transition-all duration-700 ${
              visible ? "animate-text-delay1" : ""
            }`}
          >
            | Latest Insights
          </p>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transform opacity-0 translate-y-6 transition-all duration-700 ${
              visible ? "animate-text-delay2" : ""
            }`}
          >
            Stay Updated With <br /> Our Expert Insights
          </h2>
          <p
            className={`text-gray-400 text-lg max-w-2xl mx-auto transform opacity-0 translate-y-6 transition-all duration-700 ${
              visible ? "animate-text-delay3" : ""
            }`}
          >
            Discover the latest trends, tips, and strategies from our experts to help your business thrive in a fast-paced digital world.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => {
            const delay = 200 * index + 500; // stagger delay for animation
            return (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden transform opacity-0 translate-y-10 transition-all duration-700"
                style={
                  visible
                    ? {
                        animation: `blogIn 700ms cubic-bezier(.2,.9,.3,1) forwards`,
                        animationDelay: `${delay}ms`,
                      }
                    : undefined
                }
              >
                <div className="h-48 relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-400/20 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#0A1224] text-blue-400 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" /> {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:text-blue-400 flex items-center gap-2"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="bg-black hover:bg-blue-600 hover:text-white transition-all">
            View All Articles
          </Button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blogIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); }
          60% { opacity: 1; transform: translateY(-5px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Staggered text animations */
        .animate-text-delay1 { opacity: 1 !important; transform: translateY(0) !important; transition-delay: 0.2s; }
        .animate-text-delay2 { opacity: 1 !important; transform: translateY(0) !important; transition-delay: 0.4s; }
        .animate-text-delay3 { opacity: 1 !important; transform: translateY(0) !important; transition-delay: 0.6s; }

        @media (prefers-reduced-motion: reduce) {
          .animate-text-delay1, .animate-text-delay2, .animate-text-delay3,
          .blogIn, .blogIn * { animation: none !important; transition: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Blog;
