import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Heart, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import logo from '../assets/logo.png';

const Footer = ({ language }) => {
  const content = {
    en: {
      title: "Let's Work Together",
      subtitle: "Ready to bring your ideas to life? Let's create something amazing together.",
      contact: {
        title: "Get In Touch",
        email: "abdulrahman@example.com",
        phone: "+966 50 123 4567",
        location: "Riyadh, Saudi Arabia"
      },
      services: {
        title: "Services",
        items: [
          "UI/UX Design",
          "Web Development",
          "Mobile Apps",
          "Digital Marketing",
          "Brand Strategy",
          "Consulting"
        ]
      },
      quickLinks: {
        title: "Quick Links",
        items: [
          { name: "About", href: "#about" },
          { name: "Skills", href: "#skills" },
          { name: "Portfolio", href: "#portfolio" },
          { name: "Timeline", href: "#timeline" },
          { name: "Contact", href: "#contact" }
        ]
      },
      social: {
        title: "Follow Me"
      },
      copyright: "Made with",
      rights: "All rights reserved."
    },
    ar: {
      title: "لنعمل معاً",
      subtitle: "مستعد لتحويل أفكارك إلى واقع؟ دعنا ننشئ شيئاً مذهلاً معاً.",
      contact: {
        title: "تواصل معي",
        email: "abdulrahman@example.com",
        phone: "+966 50 123 4567",
        location: "الرياض، السعودية"
      },
      services: {
        title: "الخدمات",
        items: [
          "تصميم UI/UX",
          "تطوير الويب",
          "تطبيقات الجوال",
          "التسويق الرقمي",
          "استراتيجية العلامة التجارية",
          "الاستشارات"
        ]
      },
      quickLinks: {
        title: "روابط سريعة",
        items: [
          { name: "نبذة", href: "#about" },
          { name: "المهارات", href: "#skills" },
          { name: "الأعمال", href: "#portfolio" },
          { name: "المسيرة", href: "#timeline" },
          { name: "التواصل", href: "#contact" }
        ]
      },
      social: {
        title: "تابعني"
      },
      copyright: "صُنع بـ",
      rights: "جميع الحقوق محفوظة."
    }
  };

  const t = content[language];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/abdulrahman',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/abdulrahman',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:abdulrahman@example.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'Phone',
      icon: <Phone className="w-5 h-5" />,
      href: 'tel:+966501234567',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <footer 
      id="contact" 
      className="bg-card border-t border-border"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{t.contact.title}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a 
                          href={`mailto:${t.contact.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {t.contact.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">{language === 'ar' ? 'الهاتف' : 'Phone'}</p>
                        <a 
                          href={`tel:${t.contact.phone}`}
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          {t.contact.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">{language === 'ar' ? 'الموقع' : 'Location'}</p>
                        <p className="text-muted-foreground">{t.contact.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{t.social.title}</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="lg"
                        className={`p-4 ${social.color} transition-all duration-300 hover:scale-110`}
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          {social.icon}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Links and Services */}
            <div className="space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{t.services.title}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {t.services.items.map((service, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{t.quickLinks.title}</h3>
                  <div className="space-y-3">
                    {t.quickLinks.items.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo and Name */}
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Abdulrahman Al-Miqdad Logo" 
                className="w-8 h-8 object-contain"
              />
              <div>
                <p className="font-bold">
                  {language === 'ar' ? 'عبد الرحمن المقداد' : 'Abdulrahman Al-Miqdad'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {language === 'ar' ? 'مصمم UI/UX ومطور برامج' : 'UI/UX Designer & Developer'}
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2025</span>
              <span>{t.copyright}</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>{language === 'ar' ? 'بواسطة عبد الرحمن المقداد' : 'by Abdulrahman Al-Miqdad'}</span>
              <span>•</span>
              <span>{t.rights}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

