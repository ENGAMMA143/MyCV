import React from 'react';
import { Code, Palette, Smartphone, Database, Globe, BarChart3, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const SkillsSection = ({ language }) => {
  const content = {
    en: {
      title: "Skills & Expertise",
      subtitle: "Combining technical proficiency with creative vision",
      categories: {
        technical: "Technical Skills",
        tools: "Tools & Technologies",
        marketing: "Digital Marketing",
        soft: "Soft Skills"
      }
    },
    ar: {
      title: "المهارات والخبرات",
      subtitle: "الجمع بين الكفاءة التقنية والرؤية الإبداعية",
      categories: {
        technical: "المهارات التقنية",
        tools: "الأدوات والتقنيات",
        marketing: "التسويق الرقمي",
        soft: "المهارات الشخصية"
      }
    }
  };

  const skills = {
    technical: [
      {
        icon: <Code className="w-6 h-6" />,
        name: language === 'ar' ? 'تطوير الواجهات الأمامية' : 'Front-End Development',
        items: ['React','Bootstrap', 'HTML/CSS/JS', 'TypeScript'],
        color: 'text-blue-500'
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        name: language === 'ar' ? 'تطوير التطبيقات' : 'Mobile Development',
        items: ['Flutter', 'FlutterFlow', 'iOS/Android'],
        color: 'text-green-500'
      },
      {
        icon: <Database className="w-6 h-6" />,
        name: language === 'ar' ? 'تطوير الخلفية' : 'Backend Development',
        items: ['.NET', 'php', 'APIs'],
        color: 'text-purple-500'
      },
      {
        icon: <Palette className="w-6 h-6" />,
        name: language === 'ar' ? 'تصميم UI/UX' : 'UI/UX Design',
        items: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
        color: 'text-pink-500'
      }
    ],
    tools: [
      {
        icon: <Globe className="w-6 h-6" />,
        name: language === 'ar' ? 'أدوات التطوير' : 'Development Tools',
        items: ['VS Code', 'Git', 'Wordpress'],
        color: 'text-orange-500'
      },
      {
        icon: <Palette className="w-6 h-6" />,
        name: language === 'ar' ? 'أدوات التصميم' : 'Design Tools',
        items: ['Figma', 'Sketch', 'InVision'],
        color: 'text-red-500'
      }
    ],
    marketing: [
      {
        icon: <BarChart3 className="w-6 h-6" />,
        name: language === 'ar' ? 'استراتيجية الحملات' : 'Campaign Strategy',
        items: ['SEO', 'SEM', 'Social Media', 'Content Marketing'],
        color: 'text-cyan-500'
      },
      {
        icon: <BarChart3 className="w-6 h-6" />,
        name: language === 'ar' ? 'تحليل البيانات' : 'Data Analysis',
        items: ['Google Analytics', 'A/B Testing', 'Conversion Optimization'],
        color: 'text-yellow-500'
      }
    ],
    soft: [
      {
        icon: <Lightbulb className="w-6 h-6" />,
        name: language === 'ar' ? 'التفكير الاستراتيجي' : 'Strategic Thinking',
        items: [
          language === 'ar' ? 'حل المشاكل' : 'Problem Solving',
          language === 'ar' ? 'الابتكار' : 'Innovation',
          language === 'ar' ? 'التخطيط' : 'Planning'
        ],
        color: 'text-indigo-500'
      },
      {
        icon: <Users className="w-6 h-6" />,
        name: language === 'ar' ? 'القيادة والتعاون' : 'Leadership & Collaboration',
        items: [
          language === 'ar' ? 'إدارة الفريق' : 'Team Management',
          language === 'ar' ? 'التواصل' : 'Communication',
          language === 'ar' ? 'الإقناع' : 'Persuasion'
        ],
        color: 'text-emerald-500'
      }
    ]
  };

  const t = content[language];

  const SkillCard = ({ skill, category }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <div className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}>
            {skill.icon}
          </div>
          <CardTitle className="text-lg font-semibold">{skill.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section 
      id="skills" 
      className="py-20 bg-muted/30"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">{t.categories.technical}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.technical.map((skill, index) => (
                <SkillCard key={index} skill={skill} category="technical" />
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">{t.categories.tools}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {skills.tools.map((skill, index) => (
                <SkillCard key={index} skill={skill} category="tools" />
              ))}
            </div>
          </div>

          {/* Digital Marketing */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">{t.categories.marketing}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {skills.marketing.map((skill, index) => (
                <SkillCard key={index} skill={skill} category="marketing" />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">{t.categories.soft}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {skills.soft.map((skill, index) => (
                <SkillCard key={index} skill={skill} category="soft" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

