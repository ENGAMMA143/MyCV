import React from 'react';
import { Target, Eye, Lightbulb, Rocket, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const VisionGoalsSection = ({ language }) => {
  const content = {
    en: {
      title: "Vision & Goals",
      subtitle: "Driving innovation through strategic thinking and creative solutions",
      vision: {
        title: "My Vision",
        description: "To become a leading force in the intersection of technology and digital marketing, creating innovative solutions that empower businesses and individuals to achieve their full potential in the digital age."
      },
      mission: {
        title: "Mission Statement",
        description: "Delivering exceptional digital experiences through cutting-edge design, strategic development, and data-driven marketing solutions that drive measurable results and lasting impact."
      },
      goals: {
        title: "Strategic Goals",
        items: [
          {
            icon: <Rocket className="w-6 h-6" />,
            title: "Innovation Leadership",
            description: "Pioneer new approaches in UI/UX design and development methodologies"
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Client Success",
            description: "Help 100+ businesses transform their digital presence and achieve growth"
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Global Impact",
            description: "Expand services internationally and build a global client network"
          },
          {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Continuous Learning",
            description: "Stay at the forefront of emerging technologies and design trends"
          }
        ]
      }
    },
    ar: {
      title: "الرؤية والأهداف",
      subtitle: "قيادة الابتكار من خلال التفكير الاستراتيجي والحلول الإبداعية",
      vision: {
        title: "رؤيتي",
        description: "أن أصبح قوة رائدة في تقاطع التكنولوجيا والتسويق الرقمي، وإنشاء حلول مبتكرة تمكن الشركات والأفراد من تحقيق إمكاناتهم الكاملة في العصر الرقمي."
      },
      mission: {
        title: "بيان المهمة",
        description: "تقديم تجارب رقمية استثنائية من خلال التصميم المتطور والتطوير الاستراتيجي وحلول التسويق القائمة على البيانات التي تحقق نتائج قابلة للقياس وتأثيراً دائماً."
      },
      goals: {
        title: "الأهداف الاستراتيجية",
        items: [
          {
            icon: <Rocket className="w-6 h-6" />,
            title: "قيادة الابتكار",
            description: "ريادة أساليب جديدة في تصميم UI/UX ومنهجيات التطوير"
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "نجاح العملاء",
            description: "مساعدة أكثر من 100 شركة في تحويل حضورها الرقمي وتحقيق النمو"
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "التأثير العالمي",
            description: "توسيع الخدمات دولياً وبناء شبكة عملاء عالمية"
          },
          {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "التعلم المستمر",
            description: "البقاء في المقدمة للتقنيات الناشئة واتجاهات التصميم"
          }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <section 
      id="vision" 
      className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
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

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Vision and Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">{t.vision.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {t.vision.description}
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold">{t.mission.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {t.mission.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Strategic Goals */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">{t.goals.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.goals.items.map((goal, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <div className="text-accent group-hover:scale-110 transition-transform">
                        {goal.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold mb-3">{goal.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-6 gradient-text">
                  {language === 'ar' ? 'لنحقق أهدافك معاً' : "Let's Achieve Your Goals Together"}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {language === 'ar' 
                    ? 'أؤمن بأن النجاح يأتي من خلال التعاون والشراكة. دعني أساعدك في تحويل رؤيتك إلى واقع رقمي مؤثر.'
                    : 'I believe success comes through collaboration and partnership. Let me help you transform your vision into impactful digital reality.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
                  </button>
                  <button 
                    className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
                    onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {language === 'ar' ? 'استكشف أعمالي' : 'Explore My Work'}
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionGoalsSection;

