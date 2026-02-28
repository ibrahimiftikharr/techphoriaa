import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { ServiceCard, ProjectCard, TestimonialCard, SectionHeader } from '../components/Cards';
import { TechHeroAnimation } from '../components/TechHeroAnimation';
import { WebDevIllustration } from '../components/WebDevIllustration';
import {
  GraduationCap,
  Code,
  Smartphone,
  Database,
  Bot,
  Shield,
  Palette,
  Globe,
  Zap,
  Lock,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: GraduationCap,
      title: 'LMS Solutions',
      description: 'Comprehensive learning management systems tailored to your educational needs.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies.',
      gradient: 'linear-gradient(135deg, #00bcd4 0%, #2196f3 100%)'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: Database,
      title: 'Backend & API Development',
      description: 'Scalable backend systems and RESTful APIs for your applications.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: Bot,
      title: 'AI & Automation Solutions',
      description: 'Intelligent automation and AI-powered solutions to streamline operations.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that enhance user experience.',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  const featuredProjects = [
    {
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzcyMjU1NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Enterprise Analytics Dashboard',
      category: 'Web Application',
      description: 'Real-time analytics platform for enterprise data visualization',
      to: '/portfolio/1'
    },
    {
      image: 'https://images.unsplash.com/photo-1767449181027-dbca7575f91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBsZWFybmluZyUyMGFwcHxlbnwxfHx8fDE3NzIzMjA4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'EdTech Mobile Platform',
      category: 'Mobile App',
      description: 'Cross-platform learning application for students',
      to: '/portfolio/2'
    },
    {
      image: 'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHNvZnR3YXJlfGVufDF8fHx8MTc3MjMyMDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Healthcare Management System',
      category: 'Full Stack',
      description: 'Comprehensive healthcare management and patient portal',
      to: '/portfolio/3'
    }
  ];

  const testimonials = [
    {
      quote: 'Techphoria delivered an exceptional LMS platform that exceeded our expectations. Their team was professional and responsive throughout the entire project.',
      author: 'Sarah Johnson',
      role: 'Director of Technology',
      company: 'EduTech Global'
    },
    {
      quote: 'The mobile app they developed has transformed how we engage with our customers. The quality and attention to detail were outstanding.',
      author: 'Michael Chen',
      role: 'CEO',
      company: 'RetailPro Inc'
    },
    {
      quote: 'Their AI automation solutions saved us countless hours and significantly improved our operational efficiency. Highly recommended!',
      author: 'Emily Rodriguez',
      role: 'Operations Manager',
      company: 'LogisticsCorp'
    }
  ];

  const valueProps = [
    { icon: Globe, title: 'Global Delivery', description: 'Serving clients worldwide with 24/7 support' },
    { icon: Zap, title: 'Scalable Architecture', description: 'Built to grow with your business needs' },
    { icon: Bot, title: 'AI-Driven Solutions', description: 'Leveraging cutting-edge AI technology' },
    { icon: Lock, title: 'Secure Development', description: 'Security-first approach in everything we build' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#667eea]/10 via-transparent to-[#00bcd4]/10 -z-10" />
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#667eea]/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#00bcd4]/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Transforming Ideas into
                <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent"> Digital Excellence</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                We deliver innovative technology solutions that drive business growth and digital transformation for clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button variant="primary" to="/contact">
                  Get Started
                </Button>
                <Button variant="outline" to="/portfolio">
                  View Work
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-first lg:order-last"
            >
              <TechHeroAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Our Services"
            title="Comprehensive Technology Solutions"
            description="We offer a full spectrum of technology services to meet your business needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <WebDevIllustration />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                subtitle="About Techphoria"
                title="Your Trusted Technology Partner"
                description=""
                centered={false}
              />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Based in Islamabad, Pakistan, we are a service-based technology company dedicated to delivering world-class solutions to our global clientele. Our team of experienced professionals combines technical expertise with creative innovation to bring your vision to life.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We pride ourselves on building long-term relationships with our clients, understanding their unique challenges, and delivering solutions that drive measurable results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Global Clients', value: '50+' },
                  { label: 'Projects Completed', value: '150+' },
                  { label: 'Team Members', value: '25+' },
                  { label: 'Years Experience', value: '3+' }
                ].map((stat) => (
                  <div key={stat.label} className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Portfolio"
            title="Featured Projects"
            description="Explore some of our recent work and success stories"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="primary" to="/portfolio">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Built for Scale, Security, and Success"
            description="We bring together the best practices in modern software development"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center mx-auto mb-4">
                  <prop.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it - hear from our satisfied clients"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let's discuss how we can help bring your vision to life
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" to="/contact" className="!border-white !text-white hover:!bg-white hover:!text-[#667eea]">
                  Get in Touch
                </Button>
                <Button variant="secondary" to="/portfolio">
                  View Portfolio
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}