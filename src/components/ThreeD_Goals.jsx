import React, { useEffect, useRef } from 'react';

const ThreeD_Goals = ({ language }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const content = {
    en: {
      title: "Strategic Goals",
      subtitle: "Driving innovation through strategic thinking and creative solutions",
      goals: [
        {
          title: "Pioneer Innovation",
          description: "Lead new approaches in UI/UX design and development methodologies",
          icon: "🚀",
          color: "#4F46E5"
        },
        {
          title: "Business Growth",
          description: "Help 100+ businesses transform their digital presence and achieve growth",
          icon: "📈",
          color: "#059669"
        },
        {
          title: "Global Expansion",
          description: "Expand services internationally and build a global client network",
          icon: "🌍",
          color: "#DC2626"
        },
        {
          title: "Technology Leadership",
          description: "Stay at the forefront of emerging technologies and design trends",
          icon: "⚡",
          color: "#7C3AED"
        }
      ]
    },
    ar: {
      title: "الأهداف الاستراتيجية",
      subtitle: "قيادة الابتكار من خلال التفكير الاستراتيجي والحلول الإبداعية",
      goals: [
        {
          title: "ريادة الابتكار",
          description: "قيادة مناهج جديدة في تصميم UI/UX ومنهجيات التطوير",
          icon: "🚀",
          color: "#4F46E5"
        },
        {
          title: "نمو الأعمال",
          description: "مساعدة أكثر من 100 شركة في تحويل حضورها الرقمي وتحقيق النمو",
          icon: "📈",
          color: "#059669"
        },
        {
          title: "التوسع العالمي",
          description: "توسيع الخدمات دولياً وبناء شبكة عملاء عالمية",
          icon: "🌍",
          color: "#DC2626"
        },
        {
          title: "قيادة التكنولوجيا",
          description: "البقاء في المقدمة في التقنيات الناشئة واتجاهات التصميم",
          icon: "⚡",
          color: "#7C3AED"
        }
      ]
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // 3D Animation variables
    let time = 0;
    const particles = [];
    const numParticles = 50;

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width / window.devicePixelRatio,
        y: Math.random() * canvas.height / window.devicePixelRatio,
        z: Math.random() * 1000,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      time += 0.01;

      // Draw 3D floating elements
      particles.forEach((particle, index) => {
        // 3D rotation effect
        const rotationX = Math.sin(time + index * 0.1) * 50;
        const rotationY = Math.cos(time + index * 0.15) * 30;
        
        particle.x += Math.sin(time + index) * 0.5;
        particle.y += Math.cos(time + index) * 0.3;
        particle.z += particle.speed;

        // Reset particle if it goes too far
        if (particle.z > 1000) {
          particle.z = 0;
          particle.x = Math.random() * canvas.width / window.devicePixelRatio;
          particle.y = Math.random() * canvas.height / window.devicePixelRatio;
        }

        // Calculate 3D perspective
        const perspective = 500;
        const scale = perspective / (perspective + particle.z);
        const x = particle.x + rotationX * scale;
        const y = particle.y + rotationY * scale;
        const size = particle.size * scale;

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = 0.8 * scale;
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.2)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const currentContent = content[language];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            {currentContent.subtitle}
          </p>
        </div>

        {/* 3D Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentContent.goals.map((goal, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* 3D Card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 
                            transform transition-all duration-500 hover:scale-105 hover:rotate-y-12
                            animate-float-3d shadow-2xl hover:shadow-3xl">
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-sm"
                     style={{ 
                       background: `linear-gradient(45deg, ${goal.color}, transparent, ${goal.color})` 
                     }}>
                </div>
                
                {/* Card content */}
                <div className="relative z-10">
                  {/* 3D Icon */}
                  <div className="text-6xl mb-4 transform transition-transform duration-500 
                                group-hover:scale-110 group-hover:rotate-12 animate-bounce-3d">
                    {goal.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent 
                               group-hover:bg-clip-text group-hover:bg-gradient-to-r"
                      style={{ 
                        backgroundImage: `linear-gradient(45deg, ${goal.color}, #ffffff)` 
                      }}>
                    {goal.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white 
                               transition-colors duration-300">
                    {goal.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-transparent to-white/60 
                                  transform -translate-x-full group-hover:translate-x-0 
                                  transition-transform duration-1000 ease-out"
                         style={{ background: `linear-gradient(90deg, transparent, ${goal.color})` }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-lg 
                        rounded-full px-8 py-4 border border-white/20 animate-pulse-glow">
            <span className="text-white font-medium">
              {language === 'ar' ? 'أؤمن بأن النجاح يأتي من خلال التعاون والشراكة' : 
               'I believe success comes through collaboration and partnership'}
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Additional CSS for 3D effects */}
      <style jsx>{`
        @keyframes float-3d {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-10px) rotateX(5deg); }
        }
        
        @keyframes bounce-3d {
          0%, 100% { transform: scale(1) rotateZ(0deg); }
          50% { transform: scale(1.1) rotateZ(5deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(79, 70, 229, 0.3); }
          50% { box-shadow: 0 0 40px rgba(79, 70, 229, 0.6); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float-3d {
          animation: float-3d 3s ease-in-out infinite;
        }
        
        .animate-bounce-3d {
          animation: bounce-3d 2s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .hover\\:rotate-y-12:hover {
          transform: perspective(1000px) rotateY(12deg);
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default ThreeD_Goals;

