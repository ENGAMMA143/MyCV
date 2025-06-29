import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye, Code, Smartphone, Globe, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const PortfolioSection = ({ language, onViewMyWork, selectedProjectId }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  const content = {
    en: {
      title: "Featured Projects",
      subtitle: "Showcasing innovation through design and development",
      filters: {
        all: "All Projects",
        web: "Web Development",
        mobile: "Mobile Apps",
        design: "UI/UX Design",
        marketing: "Digital Marketing"
      },
      buttons: {
        view: "View Project",
        code: "View Code",
        demo: "Live Demo"
      }
    },
    ar: {
      title: "المشاريع المميزة",
      subtitle: "عرض الابتكار من خلال التصميم والتطوير",
      filters: {
        all: "جميع المشاريع",
        web: "تطوير الويب",
        mobile: "تطبيقات الجوال",
        design: "تصميم UI/UX",
        marketing: "التسويق الرقمي"
      },
      buttons: {
        view: "عرض المشروع",
        code: "عرض الكود",
        demo: "العرض المباشر"
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: language === 'ar' ? 'منصة التجارة الإلكترونية' : 'E-Commerce Platform',
      description: language === 'ar' 
        ? 'منصة تجارة إلكترونية متكاملة مع نظام إدارة المحتوى وبوابة دفع آمنة'
        : 'Full-featured e-commerce platform with CMS and secure payment gateway',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      links: {
        demo: '#',
        code: '#',
        case: '#'
      },
      featured: true
    },
    {
      id: 2,
      title: language === 'ar' ? 'تطبيق إدارة المهام' : 'Task Management App',
      description: language === 'ar'
        ? 'تطبيق جوال لإدارة المهام والمشاريع مع ميزات التعاون الجماعي'
        : 'Mobile app for task and project management with team collaboration features',
      image: '/api/placeholder/600/400',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      links: {
        demo: '#',
        code: '#',
        case: '#'
      },
      featured: true
    },
    {
      id: 3,
      title: language === 'ar' ? 'هوية بصرية لشركة تقنية' : 'Tech Company Branding',
      description: language === 'ar'
        ? 'تصميم هوية بصرية شاملة لشركة تقنية ناشئة تشمل الشعار والمواد التسويقية'
        : 'Complete brand identity design for a tech startup including logo and marketing materials',
      image: '/api/placeholder/600/400',
      category: 'design',
      technologies: ['Figma', 'Adobe Illustrator', 'Photoshop'],
      links: {
        demo: '#',
        case: '#'
      },
      featured: false
    },
    {
      id: 4,
      title: language === 'ar' ? 'حملة تسويقية رقمية' : 'Digital Marketing Campaign',
      description: language === 'ar'
        ? 'حملة تسويقية متكاملة عبر وسائل التواصل الاجتماعي حققت زيادة 300% في المبيعات'
        : 'Comprehensive social media marketing campaign that achieved 300% sales increase',
      image: '/api/placeholder/600/400',
      category: 'marketing',
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'SEO'],
      links: {
        case: '#'
      },
      featured: false
    },
    {
      id: 5,
      title: language === 'ar' ? 'نظام إدارة المستشفيات' : 'Hospital Management System',
      description: language === 'ar'
        ? 'نظام شامل لإدارة المستشفيات يشمل إدارة المرضى والمواعيد والفواتير'
        : 'Comprehensive hospital management system with patient, appointment, and billing management',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap'],
      links: {
        demo: '#',
        code: '#',
        case: '#'
      },
      featured: true
    },
    {
      id: 6,
      title: language === 'ar' ? 'تطبيق التعلم الإلكتروني' : 'E-Learning Mobile App',
      description: language === 'ar'
        ? 'تطبيق تعليمي تفاعلي مع ميزات الفيديو والاختبارات وتتبع التقدم'
        : 'Interactive educational app with video lessons, quizzes, and progress tracking',
      image: '/api/placeholder/600/400',
      category: 'mobile',
      technologies: ['React Native', 'Redux', 'Node.js', 'PostgreSQL'],
      links: {
        demo: '#',
        code: '#',
        case: '#'
      },
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: content[language].filters.all, icon: <Globe className="w-4 h-4" /> },
    { key: 'web', label: content[language].filters.web, icon: <Code className="w-4 h-4" /> },
    { key: 'mobile', label: content[language].filters.mobile, icon: <Smartphone className="w-4 h-4" /> },
    { key: 'design', label: content[language].filters.design, icon: <Palette className="w-4 h-4" /> },
    { key: 'marketing', label: content[language].filters.marketing, icon: <Eye className="w-4 h-4" /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.dataset.projectId);
            setVisibleProjects(prev => [...new Set([...prev, projectId])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  // Reset visible projects when filter changes
  useEffect(() => {
    setVisibleProjects([]);
    // Trigger staggered animation for new projects
    filteredProjects.forEach((project, index) => {
      setTimeout(() => {
        setVisibleProjects(prev => [...new Set([...prev, project.id])]);
      }, index * 150);
    });
  }, [activeFilter]);

  const t = content[language];

  const ProjectCard = ({ project, index }) => {
    const isVisible = visibleProjects.includes(project.id);
    
    return (
      <div
        ref={el => projectRefs.current[index] = el}
        data-project-id={project.id}
        className={`transform transition-all duration-700 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-8 opacity-0 scale-95'
        }`}
        style={{
          transitionDelay: `${index * 100}ms`
        }}
      >
        <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/50 backdrop-blur-sm border-border/50 relative">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float-1 top-4 left-4"></div>
            <div className="absolute w-1 h-1 bg-secondary/30 rounded-full animate-float-2 top-8 right-8"></div>
            <div className="absolute w-1.5 h-1.5 bg-accent/25 rounded-full animate-float-3 bottom-8 left-8"></div>
          </div>

          <div className="relative overflow-hidden">
            <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </div>
              
              {/* Project icon with animation */}
              <div className="text-6xl opacity-30 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                {project.category === 'web' && <Code className="animate-pulse" />}
                {project.category === 'mobile' && <Smartphone className="animate-bounce" />}
                {project.category === 'design' && <Palette className="animate-spin-slow" />}
                {project.category === 'marketing' && <Eye className="animate-pulse" />}
              </div>
            </div>
            
            {project.featured && (
              <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground animate-pulse">
                {language === 'ar' ? 'مميز' : 'Featured'}
              </Badge>
            )}
            
            {/* Hover overlay with staggered button animations */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
              {project.links.demo && (
                <Button 
                  size="sm" 
                  variant="secondary"
                  className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t.buttons.demo}
                </Button>
              )}
              {project.links.code && (
                <Button 
                  size="sm" 
                  variant="outline"
                  className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200"
                >
                  <Github className="w-4 h-4 mr-2" />
                  {t.buttons.code}
                </Button>
              )}
            </div>
          </div>
          
          <CardHeader className="relative z-10">
            <CardTitle className="text-xl font-bold group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1">
              {project.title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4 relative z-10">
            <p className="text-muted-foreground leading-relaxed transform group-hover:translate-x-1 transition-transform duration-300">
              {project.description}
            </p>
            
            {/* Animated technology badges */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge 
                  key={techIndex} 
                  variant="outline" 
                  className="text-xs transform hover:scale-105 transition-all duration-200 hover:bg-primary/10"
                  style={{
                    animationDelay: `${techIndex * 100}ms`
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
            
            {/* Animated action button */}
            <div className="flex space-x-2 pt-4">
              <Button 
                variant="default" 
                size="sm" 
                className="flex-1 transform hover:scale-105 transition-all duration-200 hover:shadow-lg"
              >
                <Eye className="w-4 h-4 mr-2 animate-pulse" />
                {t.buttons.view}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <section 
      id="portfolio" 
      className="py-20 relative overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      ref={sectionRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float-1"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-xl animate-float-2"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-float-3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated section header */}
        <div className="text-center mb-16 transform animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-gradient-x">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {t.subtitle}
          </p>
        </div>

        {/* Animated Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
          {filters.map((filter, index) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 transform hover:scale-105 transition-all duration-300 ${
                activeFilter === filter.key ? 'animate-pulse' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <span className="transform group-hover:rotate-12 transition-transform duration-200">
                {filter.icon}
              </span>
              <span>{filter.label}</span>
            </Button>
          ))}
        </div>

        {/* Animated Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Animated View More Button */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onViewMyWork}
            className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
          >
            <span className="group-hover:animate-pulse">
              {language === 'ar' ? 'عرض المزيد من المشاريع' : 'View More Projects'}
            </span>
            <ExternalLink className="ml-2 w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

