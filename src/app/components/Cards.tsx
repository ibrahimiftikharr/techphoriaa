import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export function ServiceCard({ icon: Icon, title, description, gradient }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
        style={{ background: gradient }}
      >
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  to: string;
}

export function ProjectCard({ image, title, category, description, to }: ProjectCardProps) {
  return (
    <motion.a
      href={to}
      whileHover={{ y: -8 }}
      className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs font-medium mb-3">
          {category}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.a>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
    >
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{role} at {company}</p>
      </div>
    </motion.div>
  );
}

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ subtitle, title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center max-w-3xl mx-auto mb-12' : 'mb-12'}>
      {subtitle && (
        <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 text-[#667eea] text-sm font-medium mb-4">
          {subtitle}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && <p className="text-gray-600 text-lg">{description}</p>}
    </div>
  );
}
