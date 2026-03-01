import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Building2, Calendar, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';

export default function ProjectDetail() {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API
  const projectData: { [key: string]: any } = {
    '1': {
      title: 'Enterprise Analytics Dashboard',
      category: 'Web Application',
      heroImage: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzcyMjU1NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      client: 'Fortune 500 Company',
      duration: '6 months',
      team: '8 members',
      overview: 'We developed a comprehensive real-time analytics platform that processes millions of data points daily, providing actionable insights through intuitive visualizations and customizable dashboards.',
      challenge: 'The client needed a scalable solution to handle massive amounts of data from multiple sources while maintaining real-time performance and providing intuitive visualization tools for non-technical users.',
      solution: 'We architected a microservices-based solution using modern cloud infrastructure, implementing real-time data streaming, advanced caching strategies, and an intuitive drag-and-drop dashboard builder.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes'],
      results: [
        { metric: '10x', description: 'Faster data processing' },
        { metric: '45%', description: 'Reduction in operational costs' },
        { metric: '98%', description: 'User satisfaction rate' },
        { metric: '2M+', description: 'Daily active users' }
      ],
      images: [
        'https://images.unsplash.com/photo-1770681381576-f1fdceb2ea01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NzIzMDMwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMHNvZnR3YXJlfGVufDF8fHx8MTc3MjMyMDg3OXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzcyMjU1NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      features: [
        'Real-time data visualization',
        'Customizable dashboards',
        'Advanced filtering and search',
        'Role-based access control',
        'Export and reporting tools',
        'Mobile responsive design'
      ]
    },
    '2': {
      title: 'EdTech Mobile Platform',
      category: 'Mobile App',
      heroImage: 'https://images.unsplash.com/photo-1767449181027-dbca7575f91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBsZWFybmluZyUyMGFwcHxlbnwxfHx8fDE3NzIzMjA4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      client: 'Educational Institution',
      duration: '8 months',
      team: '10 members',
      overview: 'A cross-platform mobile learning application featuring interactive courses, real-time progress tracking, gamification elements, and social learning features to enhance student engagement.',
      challenge: 'Creating an engaging learning experience that works seamlessly across iOS and Android while supporting offline access, multimedia content, and real-time collaboration features.',
      solution: 'We built a hybrid mobile application using React Native with offline-first architecture, implementing adaptive streaming for video content and real-time synchronization when online.',
      technologies: ['React Native', 'Redux', 'Firebase', 'Node.js', 'MongoDB', 'WebRTC', 'AWS S3'],
      results: [
        { metric: '500K+', description: 'Active students' },
        { metric: '4.8/5', description: 'App store rating' },
        { metric: '85%', description: 'Course completion rate' },
        { metric: '3M+', description: 'Lessons completed' }
      ],
      images: [
        'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyMjAwNTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1762330917056-e69b34329ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NzIzMjA4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1767449181027-dbca7575f91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBsZWFybmluZyUyMGFwcHxlbnwxfHx8fDE3NzIzMjA4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      features: [
        'Interactive video lessons',
        'Offline course access',
        'Gamification and achievements',
        'Live virtual classrooms',
        'Progress tracking',
        'Social learning features'
      ]
    },
    '3': {
      title: 'Healthcare Management System',
      category: 'Full Stack',
      heroImage: 'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHNvZnR3YXJlfGVufDF8fHx8MTc3MjMyMDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      client: 'Healthcare Provider',
      duration: '10 months',
      team: '12 members',
      overview: 'A comprehensive healthcare management solution that streamlines patient care, appointment scheduling, medical records management, and billing processes while ensuring HIPAA compliance.',
      challenge: 'Building a secure, compliant system that integrates with existing healthcare infrastructure while providing an intuitive experience for both healthcare providers and patients.',
      solution: 'We developed a modular full-stack solution with robust security measures, implementing end-to-end encryption, audit logging, and seamless integration with third-party medical systems.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'HL7 FHIR', 'OAuth 2.0'],
      results: [
        { metric: '60%', description: 'Reduced admin time' },
        { metric: '10K+', description: 'Patients managed' },
        { metric: '99.9%', description: 'System uptime' },
        { metric: '40%', description: 'Cost savings' }
      ],
      images: [
        'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHNvZnR3YXJlfGVufDF8fHx8MTc3MjMyMDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHNvZnR3YXJlfGVufDF8fHx8MTc3MjMyMDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHNvZnR3YXJlfGVufDF8fHx8MTc3MjMyMDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      features: [
        'Electronic health records',
        'Appointment scheduling',
        'Telemedicine integration',
        'Prescription management',
        'Billing and invoicing',
        'HIPAA compliant security'
      ]
    },
    '4': {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      heroImage: 'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjI2NTAzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      client: 'Retail Company',
      duration: '7 months',
      team: '9 members',
      overview: 'A modern e-commerce platform with AI-powered product recommendations, advanced inventory management, and seamless payment integration to enhance the online shopping experience.',
      challenge: 'Creating a scalable platform that handles high traffic volumes during peak shopping seasons while providing personalized experiences and managing complex inventory across multiple warehouses.',
      solution: 'We implemented a cloud-native architecture with microservices, integrated machine learning for personalized recommendations, and built a robust inventory management system with real-time synchronization.',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Redis', 'Stripe', 'AWS', 'TensorFlow'],
      results: [
        { metric: '200%', description: 'Increase in sales' },
        { metric: '3x', description: 'Faster page loads' },
        { metric: '92%', description: 'Customer satisfaction' },
        { metric: '1M+', description: 'Monthly transactions' }
      ],
      images: [
        'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjI2NTAzNHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjI2NTAzNHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjI2NTAzNHww&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      features: [
        'AI-powered recommendations',
        'Advanced search and filters',
        'Multi-warehouse inventory',
        'Secure payment processing',
        'Order tracking',
        'Customer reviews and ratings'
      ]
    },
    '5': {
      title: 'Smart Home IoT App',
      category: 'Mobile App',
      heroImage: 'https://images.unsplash.com/photo-1608377205619-03a0b4c4e270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhcHB8ZW58MXx8fHwxNzcyMzIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      client: 'IoT Manufacturer',
      duration: '9 months',
      team: '11 members',
      overview: 'An IoT-enabled smart home control application with real-time monitoring, automation features, and voice control integration for managing all connected home devices.',
      challenge: 'Building a unified platform that seamlessly connects and controls diverse IoT devices from multiple manufacturers while ensuring low latency and reliable communication.',
      solution: 'We developed a robust IoT gateway architecture with protocol translation, implementing real-time WebSocket communication and creating an intuitive mobile interface with voice control integration.',
      technologies: ['React Native', 'Node.js', 'MQTT', 'WebSocket', 'AWS IoT', 'Alexa Skills Kit', 'Firebase'],
      results: [
        { metric: '250K+', description: 'Connected devices' },
        { metric: '4.7/5', description: 'User rating' },
        { metric: '99.8%', description: 'Device uptime' },
        { metric: '30%', description: 'Energy savings' }
      ],
      images: [
        'https://images.unsplash.com/photo-1608377205619-03a0b4c4e270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhcHB8ZW58MXx8fHwxNzcyMzIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1608377205619-03a0b4c4e270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhcHB8ZW58MXx8fHwxNzcyMzIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1608377205619-03a0b4c4e270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhcHB8ZW58MXx8fHwxNzcyMzIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      features: [
        'Multi-device control',
        'Automation rules',
        'Voice control integration',
        'Real-time monitoring',
        'Energy usage tracking',
        'Security alerts'
      ]
    },
    '6': {
      title: 'Financial Trading Platform',
      category: 'Web Application',
      heroImage: 'https://images.unsplash.com/photo-1768055104929-cf2317674a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwcGxhdGZvcm0lMjBzY3JlZW58ZW58MXx8fHwxNzcyMzIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      client: 'Financial Services Firm',
      duration: '12 months',
      team: '15 members',
      overview: 'A secure and high-performance trading platform with real-time market data, portfolio management, advanced charting, and analytics tools for professional traders.',
      challenge: 'Building an ultra-low latency platform that processes thousands of transactions per second while maintaining strict security and regulatory compliance requirements.',
      solution: 'We architected a high-performance system with optimized data pipelines, implemented advanced caching strategies, and integrated real-time market data feeds with microsecond precision.',
      technologies: ['React', 'TypeScript', 'WebSocket', 'Python', 'PostgreSQL', 'Redis', 'Kafka', 'AWS'],
      results: [
        { metric: '<10ms', description: 'Trade execution time' },
        { metric: '$5B+', description: 'Trading volume' },
        { metric: '50K+', description: 'Active traders' },
        { metric: '99.99%', description: 'Platform availability' }
      ],
      images: [
        'https://images.unsplash.com/photo-1768055104929-cf2317674a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwcGxhdGZvcm0lMjBzY3JlZW58ZW58MXx8fHwxNzcyMzIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1768055104929-cf2317674a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwcGxhdGZvcm0lMjBzY3JlZW58ZW58MXx8fHwxNzcyMzIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1768055104929-cf2317674a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwcGxhdGZvcm0lMjBzY3JlZW58ZW58MXx8fHwxNzcyMzIwODc3fDA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      features: [
        'Real-time market data',
        'Advanced charting tools',
        'Portfolio management',
        'Risk analysis',
        'Automated trading',
        'Multi-asset support'
      ]
    },
    '7': {
      title: 'Social Media Management Tool',
      category: 'SaaS Platform',
      heroImage: 'https://images.unsplash.com/photo-1708447134640-2b57ad0dd846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzIzMjA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      client: 'Marketing Agency',
      duration: '8 months',
      team: '10 members',
      overview: 'A comprehensive multi-platform social media management dashboard with content scheduling, analytics, engagement monitoring, and team collaboration features.',
      challenge: 'Integrating with multiple social media platforms while providing unified analytics and enabling efficient team collaboration across different time zones and workflows.',
      solution: 'We built a flexible SaaS platform with OAuth integrations for major social networks, implemented a robust scheduling system, and created collaborative workflow tools with role-based permissions.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Bull Queue', 'OAuth 2.0', 'Chart.js', 'AWS'],
      results: [
        { metric: '10K+', description: 'Active users' },
        { metric: '5M+', description: 'Posts scheduled' },
        { metric: '15+', description: 'Platform integrations' },
        { metric: '80%', description: 'Time saved' }
      ],
      images: [
        'https://images.unsplash.com/photo-1708447134640-2b57ad0dd846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzIzMjA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1708447134640-2b57ad0dd846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzIzMjA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1708447134640-2b57ad0dd846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzIzMjA4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      features: [
        'Multi-platform scheduling',
        'Unified analytics',
        'Engagement monitoring',
        'Team collaboration',
        'Content calendar',
        'Performance reporting'
      ]
    },
    '8': {
      title: 'Restaurant Management System',
      category: 'Full Stack',
      heroImage: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwcG9zJTIwc3lzdGVtfGVufDF8fHx8MTc3MjMyMDg3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      client: 'Restaurant Chain',
      duration: '10 months',
      team: '12 members',
      overview: 'A complete restaurant management solution featuring POS system, inventory tracking, online ordering, table management, and integrated payment processing for multi-location operations.',
      challenge: 'Creating a unified system that works seamlessly across multiple restaurant locations while supporting different operational workflows, managing inventory, and integrating with third-party delivery services.',
      solution: 'We developed a cloud-based platform with offline capabilities, real-time synchronization across locations, integrated payment processing, and APIs for third-party delivery service integration.',
      technologies: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Twilio', 'AWS'],
      results: [
        { metric: '50%', description: 'Faster order processing' },
        { metric: '35%', description: 'Reduced food waste' },
        { metric: '25+', description: 'Locations managed' },
        { metric: '4.9/5', description: 'Customer rating' }
      ],
      images: [
        'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwcG9zJTIwc3lzdGVtfGVufDF8fHx8MTc3MjMyMDg3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwcG9zJTIwc3lzdGVtfGVufDF8fHx8MTc3MjMyMDg3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwcG9zJTIwc3lzdGVtfGVufDF8fHx8MTc3MjMyMDg3N3ww&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      features: [
        'POS system',
        'Inventory management',
        'Online ordering',
        'Table management',
        'Kitchen display system',
        'Delivery integration'
      ]
    }
  };

  const project = projectData[id || '1'];

  if (!project) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Button variant="primary" to="/portfolio">
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 sm:pt-24 pb-12 sm:pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-12 sm:mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 sm:mb-8">
              <Link to="/portfolio" className="inline-flex items-center text-gray-600 hover:text-[#667eea] transition-colors text-sm sm:text-base">
                <ArrowLeft size={20} className="mr-2" />
                Back to Portfolio
              </Link>
            </div>
            <div className="mb-6 sm:mb-8">
              <div className="inline-block px-3 sm:px-4 py-1 rounded-full bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 text-[#667eea] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                {project.category}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-600 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <Building2 size={18} className="sm:w-5 sm:h-5" />
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={18} className="sm:w-5 sm:h-5" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={18} className="sm:w-5 sm:h-5" />
                  <span>{project.team}</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={project.heroImage} alt={project.title} className="w-full h-64 sm:h-96 lg:h-[500px] object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="px-4 mb-12 sm:mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Project Overview</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{project.overview}</p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">The Challenge</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">{project.challenge}</p>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Solution</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{project.solution}</p>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 lg:sticky lg:top-24">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Client</p>
                    <p className="font-semibold text-sm sm:text-base">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Duration</p>
                    <p className="font-semibold text-sm sm:text-base">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Team Size</p>
                    <p className="font-semibold text-sm sm:text-base">{project.team}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Category</p>
                    <p className="font-semibold text-sm sm:text-base">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-4 mb-12 sm:mb-16 bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {project.technologies.map((tech: string) => (
              <div
                key={tech}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-xl shadow-md border border-gray-100 font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-4 mb-12 sm:mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {project.features.map((feature: string, index: number) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100"
              >
                <CheckCircle2 className="text-[#667eea] flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-4 mb-12 sm:mb-16 bg-gradient-to-br from-[#667eea]/10 to-[#00bcd4]/10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-white/80 text-[#667eea] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <TrendingUp size={16} />
              <span>Impact & Results</span>
            </div>
            <h2 className="text-3xl font-bold">Measurable Success</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.results.map((result: any, index: number) => (
              <motion.div
                key={result.description}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-2">
                  {result.metric}
                </div>
                <div className="text-gray-600 text-sm">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-4 mb-12 sm:mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.images.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Interested in Similar Results?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how we can help transform your business
            </p>
            <Button variant="outline" to="/contact" className="!border-white !text-white hover:!bg-white hover:!text-[#667eea]">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}