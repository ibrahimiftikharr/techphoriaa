import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { SectionHeader } from '../components/Cards';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-24 pb-12 sm:pb-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-[#667eea]/10 via-transparent to-[#00bcd4]/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Get In Touch"
            title="Let's Start a Conversation"
            description="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-4 -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm sm:text-base">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-300 focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm sm:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-300 focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm sm:text-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-300 focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 sm:py-4 text-sm sm:text-base rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                      <a
                        href="mailto:Techphoria321@gmail.com"
                        className="text-gray-600 hover:text-[#667eea] transition-colors text-sm sm:text-base break-all"
                      >
                        Techphoria321@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00bcd4] to-[#2196f3] flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">Phone</h3>
                      <a
                        href="tel:+923127588997"
                        className="text-gray-600 hover:text-[#667eea] transition-colors text-sm sm:text-base block"
                      >
                        +92 312 7588997
                      </a>
                      <a
                        href="tel:+923098909627"
                        className="text-gray-600 hover:text-[#667eea] transition-colors text-sm sm:text-base block"
                      >
                        +92 309 8909627
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4facfe] to-[#00f2fe] flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">Location</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Islamabad, Pakistan</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f093fb] to-[#f5576c] flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">Business Hours</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Monday – Friday</p>
                      <p className="text-gray-600 text-sm sm:text-base">9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-[#667eea]/10 to-[#00bcd4]/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 text-[#667eea]" size={40} />
                    <p className="text-gray-600 font-medium text-sm sm:text-base">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 mt-12 sm:mt-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to questions you may have"
          />
          <div className="space-y-4">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on complexity, but most projects range from 2-6 months. We provide detailed estimates during initial consultation.'
              },
              {
                question: 'Do you work with international clients?',
                answer: 'Yes! We serve clients globally and have experience working across different time zones and cultural contexts.'
              },
              {
                question: 'What technologies do you specialize in?',
                answer: 'We specialize in modern web and mobile technologies including React, Node.js, React Native, and cloud platforms like AWS.'
              },
              {
                question: 'Do you provide ongoing support and maintenance?',
                answer: 'Absolutely! We offer comprehensive support and maintenance packages to ensure your solution continues to perform optimally.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100"
              >
                <h3 className="font-semibold mb-2 text-sm sm:text-base">{faq.question}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}