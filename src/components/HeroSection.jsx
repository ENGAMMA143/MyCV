import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const HeroSection = ({ language, onViewMyWork }) => {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "Abdulrahman Al-Miqdad",
      title: "UI/UX Designer & Software Developer",
      subtitle: "Passionate about creating exceptional digital experiences through innovative design and strategic thinking",
      description: "I specialize in digital marketing, application development, branding, and persuasive design solutions that drive results and engage users.",
      cta1: "View My Work",
      cta2: "Download CV",
      scrollDown: "Scroll Down",
      stats: [
        { number: "3+", label: "Years Experience" },
        { number: "15+", label: "Projects Completed" },
        { number: "100%", label: "Client Satisfaction" }
      ]
    },
    ar: {
      greeting: "مرحباً، أنا",
      name: "عبد الرحمن المقداد",
      title: "مصمم UI/UX ومطور برامج",
      subtitle: "شغوف بإنشاء تجارب رقمية استثنائية من خلال التصميم المبتكر والتفكير الاستراتيجي",
      description: "أتخصص في التسويق الرقمي وتطوير التطبيقات والعلامات التجارية وحلول التصميم المقنعة التي تحقق النتائج وتشرك المستخدمين.",
      cta1: "عرض أعمالي",
      cta2: "تحميل السيرة الذاتية",
      scrollDown: "انتقل للأسفل",
      stats: [
        { number: "+3", label: "سنوات خبرة" },
        { number: "+15", label: "مشروع مكتمل" },
        { number: "100%", label: "رضا العملاء" }
      ]
    }
  };

  // Animated background particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.save();
              ctx.globalAlpha = (100 - distance) / 100 * 0.2;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const t = content[language];

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden particle-bg"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-green-500/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float delay-300"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center space-y-8 mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground font-medium animate-fade-in-down">
                {t.greeting}
              </p>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent animate-fade-in-up delay-200">
                {t.name}
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 animate-fade-in-up delay-300">
                {t.title}
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
                {t.subtitle}
              </p>
              
              <p className="text-lg text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-500">
                {t.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600 ${language === 'ar' ? 'sm:flex-row-reverse' : ''}`}>
              <Button 
                size="lg" 
                onClick={onViewMyWork}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover-glow"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                {t.cta1}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Abdulrahman_Al-Miqdad_CV.pdf';
                  link.download = 'Abdulrahman_Al-Miqdad_CV.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="border-2 border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                {t.cta2}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 animate-fade-in-up delay-700">
              {[
                { icon: Github, color: 'hover:text-gray-600', bg: 'hover:bg-gray-100' },
                { icon: Linkedin, color: 'hover:text-blue-600', bg: 'hover:bg-blue-50' },
                { icon: Mail, color: 'hover:text-red-600', bg: 'hover:bg-red-50' },
                { icon: Phone, color: 'hover:text-green-600', bg: 'hover:bg-green-50' }
              ].map((social, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-full border border-muted-foreground/20 ${social.bg} ${social.color} transition-all duration-300 cursor-pointer hover-lift animate-bounce-in`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <social.icon className="w-6 h-6" />
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {t.stats.map((stat, index) => (
              <Card 
                key={index} 
                className="glass-morphism border-0 shadow-xl hover-lift animate-scale-in"
                style={{ animationDelay: `${900 + index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 animate-pulse">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <div className="text-center animate-bounce-in delay-1000">
            <div className="inline-flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer">
              <span className="text-sm font-medium">{t.scrollDown}</span>
              <div className="p-2 rounded-full border border-muted-foreground/30 animate-bounce">
                <ArrowDown className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;

