import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Globe, 
  Smartphone, 
  Database, 
  Bot, 
  Shield, 
  Palette,
  Check,
  ArrowRight,
  Zap,
  Users,
  Award
} from 'lucide-react';
import { SectionHeader } from '../components/Cards';
import { Button } from '../components/Button';

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Learning Management Systems',
      shortDesc: 'Custom LMS solutions for modern education',
      description: 'We build comprehensive learning management systems that transform how organizations deliver education and training. Our platforms include course management, student tracking, interactive assessments, and analytics.',
      gradient: 'from-[#667eea] to-[#764ba2]',
      features: [
        'Course creation and management',
        'Student progress tracking',
        'Interactive quizzes and assessments',
        'Video content streaming',
        'Certification and badges',
        'Analytics and reporting'
      ]
    },
    {
      icon: Globe,
      title: 'Web Development',
      shortDesc: 'Modern, scalable web applications',
      description: 'From corporate websites to complex web applications, we create responsive, high-performance solutions using cutting-edge technologies that drive business growth and enhance user experience.',
      gradient: 'from-[#00bcd4] to-[#2196f3]',
      features: [
        'Responsive design',
        'Progressive web apps (PWA)',
        'E-commerce solutions',
        'CMS integration',
        'API development',
        'Performance optimization'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      shortDesc: 'Native and cross-platform mobile apps',
      description: 'We develop beautiful, performant mobile applications for iOS and Android using native and cross-platform technologies, ensuring seamless experiences across all devices.',
      gradient: 'from-[#4facfe] to-[#00f2fe]',
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'Offline functionality',
        'Push notifications',
        'App store optimization',
        'Mobile-first design'
      ]
    },
    {
      icon: Database,
      title: 'Backend & API Development',
      shortDesc: 'Robust, scalable backend solutions',
      description: 'We architect and develop secure, scalable backend systems and RESTful APIs that power your applications, handle complex business logic, and integrate seamlessly with third-party services.',
      gradient: 'from-[#f093fb] to-[#f5576c]',
      features: [
        'RESTful API design',
        'Microservices architecture',
        'Database design and optimization',
        'Cloud infrastructure',
        'Real-time data processing',
        'Third-party integrations'
      ]
    },
    {
      icon: Bot,
      title: 'AI & Automation',
      shortDesc: 'Intelligent automation solutions',
      description: 'Leverage the power of artificial intelligence and automation to streamline operations, enhance decision-making, and create intelligent applications that learn and adapt.',
      gradient: 'from-[#667eea] via-[#764ba2] to-[#f093fb]',
      features: [
        'Machine learning integration',
        'Process automation',
        'Chatbots and virtual assistants',
        'Predictive analytics',
        'Natural language processing',
        'Computer vision solutions'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      shortDesc: 'Comprehensive security solutions',
      description: 'Protect your digital assets with our comprehensive cybersecurity services, including security audits, penetration testing, and implementation of industry-standard security measures.',
      gradient: 'from-[#ff6b6b] to-[#ee5a6f]',
      features: [
        'Security audits and assessments',
        'Penetration testing',
        'Data encryption',
        'Compliance consulting',
        'Secure code review',
        'Incident response planning'
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      shortDesc: 'User-centered design excellence',
      description: 'Create exceptional user experiences with our design services. We combine aesthetics with functionality to deliver interfaces that users love and that drive business results.',
      gradient: 'from-[#fa709a] to-[#fee140]',
      features: [
        'User research and testing',
        'Wireframing and prototyping',
        'Visual design',
        'Design systems',
        'Accessibility standards',
        'Usability optimization'
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile methodology ensures rapid development and deployment',
      gradient: 'from-[#667eea] to-[#764ba2]'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with proven track records',
      gradient: 'from-[#00bcd4] to-[#2196f3]'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes',
      gradient: 'from-[#4facfe] to-[#00f2fe]'
    }
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-24 pb-12 sm:pb-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-[#667eea]/10 via-transparent to-[#00bcd4]/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Technology Solutions"
            description="From concept to deployment, we provide end-to-end technology services that drive innovation and business growth"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12 sm:space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`p-8 sm:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                        <service.icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-500 text-sm sm:text-base mb-4">{service.shortDesc}</p>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <Check className="text-[#667eea] flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="primary" to="/contact" className="group">
                        <span>Learn More</span>
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    {/* Visual */}
                    <div className={`relative bg-gradient-to-br ${service.gradient} p-8 sm:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl" />
                        <service.icon className="text-white/90 relative z-10" size={120} strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 mt-16 sm:mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Built on Excellence"
            description="Our commitment to quality and innovation sets us apart"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4`}>
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 mt-16 sm:mt-24 bg-gradient-to-br from-[#667eea]/5 to-[#00bcd4]/5 py-12 sm:py-16 -mx-4">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Our Process"
            title="How We Work"
            description="A streamlined approach to delivering exceptional results"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { number: '02', title: 'Planning', description: 'Creating a strategic roadmap' },
              { number: '03', title: 'Development', description: 'Building with best practices' },
              { number: '04', title: 'Deployment', description: 'Launching and supporting your solution' }
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative"
              >
                <div className="text-6xl font-bold text-[#667eea]/10 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-[#667eea]/30" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mt-16 sm:mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90">
                Let's discuss how our services can transform your business
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="outline" to="/contact" className="!border-white !text-white hover:!bg-white hover:!text-[#667eea]">
                  Contact Us
                </Button>
                <Button variant="outline" to="/portfolio" className="!border-white !text-white hover:!bg-white hover:!text-[#667eea]">
                  View Our Work
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
