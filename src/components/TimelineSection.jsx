import React from 'react';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const TimelineSection = ({ language }) => {
  const content = {
    en: {
      title: "Career Journey",
      subtitle: "Professional milestones and achievements from 2022 to 2025",
      present: "Present"
    },
    ar: {
      title: "المسيرة المهنية",
      subtitle: "المعالم والإنجازات المهنية من 2022 إلى 2025",
      present: "الحاضر"
    }
  };

  const timelineData = [
    {
      year: "2022",
      title: language === 'ar' ? 'بداية المسيرة المهنية' : 'Career Beginning',
      company: language === 'ar' ? 'مطور مستقل' : 'Freelance Developer',
      location: language === 'ar' ? 'العمل عن بُعد' : 'Remote Work',
      description: language === 'ar' 
        ? 'بدأت رحلتي في عالم التطوير والتصميم كمطور مستقل، حيث عملت على مشاريع متنوعة في تطوير الويب وتصميم واجهات المستخدم.'
        : 'Started my journey in development and design as a freelance developer, working on diverse projects in web development and UI design.',
      achievements: [
        language === 'ar' ? 'إتمام 5+ مشروع ويب' : 'Completed 5+ web projects',
        language === 'ar' ? 'تعلم React و Laravel' : 'Learned React & Laravel',
        language === 'ar' ? 'بناء قاعدة عملاء قوية' : 'Built strong client base'
      ],
      type: 'work',
      color: 'bg-blue-500'
    },
    {
      year: "2023",
      title: language === 'ar' ? 'مصمم ومطور مواقع' : 'Website designer and developer',
      company: language === 'ar' ? ' رونق للدعاية والاعلان ' : 'Rawnaq Advertising and Publicity',
      location: language === 'ar' ? 'صنعاء، اليمن' : 'Sanaa,  Yemen',
      description: language === 'ar'
        ? 'انضممت إلى فريق التصميم في شركة رائدة في مجال التقنيات الرقمية، حيث ركزت على تصميم تجارب المستخدم وواجهات التطبيقات.'
        : 'Joined the design team at a leading digital technology company, focusing on user experience design and application interfaces.',
      achievements: [
        language === 'ar' ? 'تصميم 5 مواقع ويب' : 'Design 5 websites',
        language === 'ar' ? 'تحسين تجربة المستخدم بنسبة 40%' : 'Improved UX by 40%',
        language === 'ar' ? 'قيادة ورش عمل التصميم' : 'Led design workshops'
      ],
      type: 'work',
      color: 'bg-green-500'
    },
    {
      year: "2024",
      title: language === 'ar' ? 'مصمم UI/UX' : 'UI/UX Designer',
      company: language === 'ar' ? 'فريق إدراك ' : 'Edraak Team',
      location: language === 'ar' ? 'صنعاء، اليمن' : 'Sanaa,  Yemen',
      description: language === 'ar'
        ? 'تطوير مهاراتي في تطوير التطبيقات المتقدمة باستخدام Flutter، مع التركيز على الحلول المبتكرة.'
        : 'Advanced my skills in sophisticated app development using Flutter  , focusing on innovative solutions.',
      achievements: [
        language === 'ar' ? 'تطوير 5 تطبيقات معقدة' : 'Developed 5 complex applications',
        language === 'ar' ? 'تنفيذ حلول الذكاء الاصطناعي' : 'Implemented AI solutions',
        language === 'ar' ? 'حصول على شهادة Flutter المتقدمة' : 'Earned Advanced Flutter Certification'
      ],
      type: 'work',
      color: 'bg-purple-500'
    },
    {
      year: "2025",
      title: language === 'ar' ? 'خبير التسويق الرقمي والتطوير' : 'Digital Marketing & Development Expert',
      company: language === 'ar' ? 'استشاري مستقل' : 'Independent Consultant',
      location: language === 'ar' ? 'محلياَ' : 'local',
      description: language === 'ar'
        ? 'الجمع بين خبرتي في التطوير والتصميم مع التسويق الرقمي لتقديم حلول شاملة للعملاء  .'
        : 'Combining my development and design expertise with digital marketing to provide comprehensive solutions for clients .',
      achievements: [
        language === 'ar' ? 'إطلاق وكالة رقمية' : 'Launched digital agency',
        language === 'ar' ? 'تحقيق نمو 200% في الإيرادات' : 'Achieved 200% revenue growth',
        language === 'ar' ? 'توسيع الخدمات عالمياً' : 'Expanded services globally'
      ],
      type: 'current',
      color: 'bg-red-500'
    }
  ];

  const t = content[language];

  const TimelineItem = ({ item, index, isLast }) => (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-8 top-16 w-0.5 h-full bg-border"></div>
      )}
      
      {/* Timeline Dot */}
      <div className={`absolute left-6 top-8 w-4 h-4 rounded-full ${item.color} border-4 border-background z-10`}></div>
      
      {/* Content */}
      <div className="ml-16 pb-12">
        <Card className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-xl font-bold mb-2">{item.title}</CardTitle>
                <div className="flex items-center space-x-2 text-muted-foreground mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium">{item.company}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <Badge variant={item.type === 'current' ? 'default' : 'secondary'}>
                  {item.year} {item.type === 'current' && `- ${t.present}`}
                </Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
            
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Award className="w-4 h-4 mr-2 text-primary" />
                {language === 'ar' ? 'الإنجازات الرئيسية:' : 'Key Achievements:'}
              </h4>
              <ul className="space-y-2">
                {item.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <section 
      id="timeline" 
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

        <div className="max-w-4xl mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={item.year} 
              item={item} 
              index={index}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>

        {/* Future Goals Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {language === 'ar' ? 'الرؤية المستقبلية' : 'Future Vision'}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === 'ar' 
                  ? 'أسعى لأن أكون رائداً في مجال دمج التقنية والتسويق الرقمي، وأن أساهم في تطوير حلول مبتكرة تخدم المجتمع وتحقق النجاح للشركات والأفراد.'
                  : 'I aspire to be a leader in integrating technology and digital marketing, contributing to innovative solutions that serve society and achieve success for companies and individuals.'
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

