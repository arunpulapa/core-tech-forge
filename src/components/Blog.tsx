import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      category: "Cloud Computing",
      title: "The Future of Cloud Infrastructure in 2025",
      excerpt: "Explore emerging trends in cloud technology and how they're reshaping enterprise IT strategies for the modern era.",
      author: "John Smith",
      date: "Oct 10, 2025",
      readTime: "5 min read",
    },
    {
      category: "Cybersecurity",
      title: "Zero Trust Architecture: A Complete Guide",
      excerpt: "Learn how zero trust security models protect organizations from evolving cyber threats in today's digital landscape.",
      author: "Sarah Johnson",
      date: "Oct 8, 2025",
      readTime: "7 min read",
    },
    {
      category: "AI & ML",
      title: "Implementing AI in Business Operations",
      excerpt: "Discover practical applications of artificial intelligence and machine learning to drive business innovation and efficiency.",
      author: "Michael Chen",
      date: "Oct 5, 2025",
      readTime: "6 min read",
    },
  ];

  return (
    <section className="bg-[#050B18] py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-background text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
