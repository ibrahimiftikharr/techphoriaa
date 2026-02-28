import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { Button } from '../components/Button';

export default function Careers() {
  return (
    <div className="min-h-screen pt-16 sm:pt-24 pb-12 sm:pb-20">
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 text-[#667eea] text-sm font-medium mb-4">
                Careers
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Join Our <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
                Be part of an innovative team building the future of technology
              </p>
            </div>

            {/* Main Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center mx-auto mb-6">
                <Briefcase className="text-white" size={32} />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">No Open Positions</h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed px-4">
                Currently, there are no job openings available. However, we're always interested in connecting with talented individuals who are passionate about technology.
              </p>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base px-4">
                Please check back later or feel free to send us your resume for future opportunities.
              </p>
              <Button variant="primary" to="/contact">
                Get in Touch
              </Button>
            </motion.div>

            {/* Why Work With Us Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 sm:mt-16"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">Why Work With Techphoria?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    title: 'Global Impact',
                    description: 'Work on projects that make a difference for clients worldwide',
                    gradient: 'from-[#667eea] to-[#764ba2]'
                  },
                  {
                    title: 'Cutting-Edge Tech',
                    description: 'Use the latest technologies and best practices in your work',
                    gradient: 'from-[#00bcd4] to-[#2196f3]'
                  },
                  {
                    title: 'Growth Opportunities',
                    description: 'Continuous learning and professional development support',
                    gradient: 'from-[#4facfe] to-[#00f2fe]'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                      <div className="w-6 h-6 bg-white rounded-full" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Notification Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 sm:mt-16 bg-gradient-to-br from-[#667eea]/10 to-[#00bcd4]/10 rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Stay Updated</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Follow us on social media or check back regularly for new career opportunities
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}