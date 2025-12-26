import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const footerLinks = [
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@uttamkumar.design' },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">U</span>
              </div>
              <span className="text-foreground font-semibold text-lg">
                Uttam Kumar
              </span>
            </Link>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-primary fill-primary" /> by Uttam Kumar
            </p>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary border border-border hover:border-primary/30 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
