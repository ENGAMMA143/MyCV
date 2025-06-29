import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Eye, Calendar, Tag, Filter, Search, X, Code, Smartphone, Globe, Palette, TrendingUp, Briefcase } from 'lucide-react';

const ViewMyWork = ({ language, onClose, selectedProjectId }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const filterRef = useRef(null);

  const content = {
    en: {
      title: "My Portfolio",
      subtitle: "Explore my creative journey through innovative projects",
      searchPlaceholder: "Search projects...",
      categories: {
        all: "All Projects",
        web: "Web Development",
        mobile: "Mobile Apps",
        uiux: "UI/UX Design",
        marketing: "Digital Marketing",
        branding: "Branding"
      },
      viewProject: "View Project",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      technologies: "Technologies",
      completedOn: "Completed on",
      close: "Close",
      backToPortfolio: "Back to Portfolio",
      projectsFound: "projects found",
      noProjects: "No projects found matching your criteria"
    },
    ar: {
      title: "معرض أعمالي",
      subtitle: "استكشف رحلتي الإبداعية من خلال المشاريع المبتكرة",
      searchPlaceholder: "البحث في المشاريع...",
      categories: {
        all: "جميع المشاريع",
        web: "تطوير الويب",
        mobile: "تطبيقات الجوال",
        uiux: "تصميم UI/UX",
        marketing: "التسويق الرقمي",
        branding: "الهوية التجارية"
      },
      viewProject: "عرض المشروع",
      liveDemo: "عرض مباشر",
      sourceCode: "الكود المصدري",
      technologies: "التقنيات المستخدمة",
      completedOn: "تم الإنجاز في",
      close: "إغلاق",
      backToPortfolio: "العودة للمعرض",
      projectsFound: "مشروع موجود",
      noProjects: "لا توجد مشاريع تطابق معايير البحث"
    }
  };

  const projects = [
    {
      id: 1,
      title: {
        en: "E-Commerce Platform",
        ar: "منصة التجارة الإلكترونية"
      },
      description: {
        en: "Full-featured e-commerce platform with CMS and secure payment gateway",
        ar: "منصة تجارة إلكترونية متكاملة مع نظام إدارة المحتوى وبوابة دفع آمنة"
      },
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      liveDemo: "https://demo.example.com",
      sourceCode: "https://github.com/example",
      completedDate: "2024-03-15",
      featured: true
    },
    {
      id: 2,
      title: {
        en: "Task Management App",
        ar: "تطبيق إدارة المهام"
      },
      description: {
        en: "Mobile app for task and project management with team collaboration features",
        ar: "تطبيق جوال لإدارة المهام والمشاريع مع ميزات التعاون الجماعي"
      },
      category: "mobile",
      technologies: ["Flutter", "Firebase", "Dart"],
      image: "/api/placeholder/600/400",
      liveDemo: "https://demo.example.com",
      sourceCode: "https://github.com/example",
      completedDate: "2024-02-20",
      featured: true
    },
    {
      id: 3,
      title: {
        en: "Brand Identity Design",
        ar: "تصميم الهوية التجارية"
      },
      description: {
        en: "Complete brand identity design for a tech startup including logo and marketing materials",
        ar: "تصميم هوية تجارية متكاملة لشركة تقنية ناشئة تشمل الشعار والمواد التسويقية"
      },
      category: "branding",
      technologies: ["Figma", "Adobe Illustrator", "Photoshop"],
      image: "/api/placeholder/600/400",
      liveDemo: "https://demo.example.com",
      completedDate: "2024-01-10",
      featured: false
    },
    {
      id: 4,
      title: {
        en: "Digital Marketing Campaign",
        ar: "حملة التسويق الرقمي"
      },
      description: {
        en: "Comprehensive social media marketing campaign that achieved 300% sales increase",
        ar: "حملة تسويقية متكاملة عبر وسائل التواصل الاجتماعي حققت زيادة 300% في المبيعات"
      },
      category: "marketing",
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEO"],
      image: "/api/placeholder/600/400",
      completedDate: "2023-12-05",
      featured: false
    },
    {
      id: 5,
      title: {
        en: "Hospital Management System",
        ar: "نظام إدارة المستشفيات"
      },
      description: {
        en: "Comprehensive hospital management system with patient, appointment, and billing management",
        ar: "نظام شامل لإدارة المستشفيات يشمل إدارة المرضى والمواعيد والفواتير"
      },
      category: "web",
      technologies: ["Laravel", "Vue.js", "MySQL", "Bootstrap"],
      image: "/api/placeholder/600/400",
      liveDemo: "https://demo.example.com",
      sourceCode: "https://github.com/example",
      completedDate: "2024-04-12",
      featured: true
    },
    {
      id: 6,
      title: {
        en: "E-Learning Mobile App",
        ar: "تطبيق التعلم الإلكتروني"
      },
      description: {
        en: "Interactive educational app with video lessons, quizzes, and progress tracking",
        ar: "تطبيق تعليمي تفاعلي مع ميزات الفيديو والاختبارات وتتبع التقدم"
      },
      category: "mobile",
      technologies: ["React Native", "Redux", "Node.js", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      liveDemo: "https://demo.example.com",
      sourceCode: "https://github.com/example",
      completedDate: "2024-05-08",
      featured: false
    },
    {
      id: 7,
      title: {
        en: "Dashboard UI/UX Design",
        ar: "تصميم واجهة لوحة التحكم"
      },
      description: {
        en: "Modern dashboard design for analytics platform with data visualization",
        ar: "تصميم لوحة تحكم حديثة لمنصة التحليلات مع تصور البيانات"
      },
      category: "uiux",
      technologies: ["Figma", "Sketch", "Principle", "InVision"],
      image: "/api/placeholder/600/400",
      liveDemo: "https://demo.example.com",
      completedDate: "2024-06-01",
      featured: false
    },
    {
      id: 8,
      title: {
        en: "Corporate Website",
        ar: "موقع الشركة"
      },
      description: {
        en: "Professional corporate website with CMS and multilingual support",
        ar: "موقع شركة احترافي مع نظام إدارة المحتوى ودعم متعدد اللغات"
      },
      category: "web",
      technologies: ["Next.js", "Tailwind CSS", "Strapi", "Vercel"],
      image: "/api/placeholder/600/400",
      liveDemo: "https://demo.example.com",
      sourceCode: "https://github.com/example",
      completedDate: "2024-07-15",
      featured: true
    }
  ];

  const categories = [
    { 
      key: 'all', 
      label: content[language].categories.all, 
      icon: <Globe className="w-4 h-4" />,
      count: projects.length,
      color: 'from-blue-500 to-purple-600'
    },
    { 
      key: 'web', 
      label: content[language].categories.web, 
      icon: <Code className="w-4 h-4" />,
      count: projects.filter(p => p.category === 'web').length,
      color: 'from-green-500 to-teal-600'
    },
    { 
      key: 'mobile', 
      label: content[language].categories.mobile, 
      icon: <Smartphone className="w-4 h-4" />,
      count: projects.filter(p => p.category === 'mobile').length,
      color: 'from-orange-500 to-red-600'
    },
    { 
      key: 'uiux', 
      label: content[language].categories.uiux, 
      icon: <Palette className="w-4 h-4" />,
      count: projects.filter(p => p.category === 'uiux').length,
      color: 'from-pink-500 to-rose-600'
    },
    { 
      key: 'marketing', 
      label: content[language].categories.marketing, 
      icon: <TrendingUp className="w-4 h-4" />,
      count: projects.filter(p => p.category === 'marketing').length,
      color: 'from-yellow-500 to-orange-600'
    },
    { 
      key: 'branding', 
      label: content[language].categories.branding, 
      icon: <Briefcase className="w-4 h-4" />,
      count: projects.filter(p => p.category === 'branding').length,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  // Filter projects based on category and search term
  useEffect(() => {
    let filtered = projects;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredProjects(filtered);
  }, [selectedCategory, searchTerm, language]);

  // Auto-select project if selectedProjectId is provided
  useEffect(() => {
    if (selectedProjectId) {
      const project = projects.find(p => p.id === selectedProjectId);
      if (project) {
        setSelectedProject(project);
      }
    }
  }, [selectedProjectId]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title[language]}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button
              onClick={handleCloseProject}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {selectedProject.title[language]}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              {selectedProject.description[language]}
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                {content[language].technologies}
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {content[language].completedOn} {selectedProject.completedDate}
              </p>
            </div>
            
            <div className="flex gap-4 flex-wrap">
              {selectedProject.liveDemo && (
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {content[language].liveDemo}
                </a>
              )}
              
              {selectedProject.sourceCode && (
                <a
                  href={selectedProject.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  {content[language].sourceCode}
                </a>
              )}
              
              <button
                onClick={handleCloseProject}
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {content[language].backToPortfolio}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {content[language].title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {content[language].subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={content[language].searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap gap-3" ref={filterRef}>
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`group relative overflow-hidden px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-blue-500/25`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    selectedCategory === category.key
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {category.count}
                  </span>
                </div>
                
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600 dark:text-gray-400">
            {filteredProjects.length} {content[language].projectsFound}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleProjectClick(project)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title[language]}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description[language]}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.completedDate}
                    </span>
                    
                    <div className="flex gap-2">
                      {project.liveDemo && (
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      )}
                      {project.sourceCode && (
                        <div className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg group-hover:bg-gray-800 group-hover:text-white transition-colors">
                          <Github className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {content[language].noProjects}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search criteria or browse all projects
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewMyWork;

