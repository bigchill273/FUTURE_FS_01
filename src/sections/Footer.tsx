import { FOOTER_INFO, PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";

export const Footer = () => {
  const initials = PERSONAL_INFO.name
    .split(" ")
    .map((namePart) => namePart[0])
    .join("");
  const footerLinks = FOOTER_INFO.quickLinks.filter(
    (link) => link.href !== "#",
  );
  const socialLinks = SOCIAL_LINKS.filter(
    (social) => social.platform !== "email",
  );

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              {initials}
              <span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              {FOOTER_INFO.copyrightText}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.iconName className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
