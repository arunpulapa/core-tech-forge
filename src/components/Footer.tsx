import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "About iTech",
      links: ["Company", "Team", "Careers", "Partners", "News"],
    },
    {
      title: "Quick Links",
      links: ["Home", "Services", "Case Studies", "Blog", "Contact"],
    },
    {
      title: "Services",
      links: ["Cloud Solutions", "Cybersecurity", "Development", "Consulting", "Support"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "API", "Community", "Status"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">iT</span>
              </div>
              <span className="text-2xl font-bold">iTech</span>
            </div>
            <p className="text-background/80 mb-6">
              Transforming businesses through innovative IT solutions. Your trusted partner in
              digital transformation.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-5 w-5" />
              <span className="text-background/80">info@itech.com</span>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-primary flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-background/70 hover:text-background hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © 2025 iTech Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Cookie Policy
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-background/70">
              <span className="px-3 py-1 bg-background/10 rounded-full">ISO 27001</span>
              <span className="px-3 py-1 bg-background/10 rounded-full">SOC 2</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
