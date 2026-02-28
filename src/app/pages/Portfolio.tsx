import { motion } from 'motion/react';
import { ProjectCard, SectionHeader } from '../components/Cards';
import { Button } from '../components/Button';
import { useState } from 'react';

export default function Portfolio() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzcyMjU1NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Enterprise Analytics Dashboard',
      category: 'Web Application',
      description: 'A comprehensive real-time analytics platform with advanced data visualization capabilities for enterprise clients.',
      to: '/portfolio/1'
    },
    {
      image: 'https://images.unsplash.com/photo-1767449181027-dbca7575f91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBsZWFybmluZyUyMGFwcHxlbnwxfHx8fDE3NzIzMjA4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'EdTech Mobile Platform',
      category: 'Mobile App',
      description: 'Cross-platform learning application featuring interactive courses, progress tracking, and gamification.',
      to: '/portfolio/2'
    },
    {
      image: 'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHNvZnR3YXJlfGVufDF8fHx8MTc3MjMyMDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Healthcare Management System',
      category: 'Full Stack',
      description: 'Complete healthcare management solution with patient portal, appointment scheduling, and medical records.',
      to: '/portfolio/3'
    },
    {
      image: 'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjI2NTAzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'Modern e-commerce platform with AI-powered recommendations, inventory management, and payment integration.',
      to: '/portfolio/4'
    },
    {
      image: 'https://images.unsplash.com/photo-1608377205619-03a0b4c4e270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhcHB8ZW58MXx8fHwxNzcyMzIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Smart Home IoT App',
      category: 'Mobile App',
      description: 'IoT-enabled smart home control application with real-time monitoring and automation features.',
      to: '/portfolio/5'
    },
    {
      image: 'https://images.unsplash.com/photo-1768055104929-cf2317674a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwcGxhdGZvcm0lMjBzY3JlZW58ZW58MXx8fHwxNzcyMzIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Financial Trading Platform',
      category: 'Web Application',
      description: 'Secure trading platform with real-time market data, portfolio management, and advanced analytics.',
      to: '/portfolio/6'
    },
    {
      image: 'https://images.unsplash.com/photo-1708447134640-2b57ad0dd846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzIzMjA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Social Media Management Tool',
      category: 'SaaS Platform',
      description: 'Multi-platform social media management dashboard with scheduling, analytics, and collaboration features.',
      to: '/portfolio/7'
    },
    {
      image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwcG9zJTIwc3lzdGVtfGVufDF8fHx8MTc3MjMyMDg3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Restaurant Management System',
      category: 'Full Stack',
      description: 'Complete restaurant management solution with POS, inventory tracking, and online ordering capabilities.',
      to: '/portfolio/8'
    }
  ];

  const categories = ['All', 'Web Application', 'Mobile App', 'Full Stack', 'SaaS Platform'];

  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-16 sm:pt-24 pb-12 sm:pb-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-[#667eea]/10 via-transparent to-[#00bcd4]/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Our Work"
            title="Project Portfolio"
            description="Explore our diverse range of successful projects across different industries and technologies"
          />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 -mt-4 sm:-mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 sm:py-20">
              <p className="text-gray-500 text-base sm:text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mt-16 sm:mt-20">
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
                Have a Project in Mind?
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90">
                Let's work together to bring your vision to life
              </p>
              <Button variant="outline" to="/contact" className="!border-white !text-white hover:!bg-white hover:!text-[#667eea]">
                Start a Project
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}