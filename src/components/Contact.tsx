import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, FileText, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aalsarwi@uwo.ca',
      action: 'mailto:aalsarwi@uwo.ca'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 519-701-3032',
      action: 'tel:+15197013032'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'London, Ontario',
      action: '#'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/abdulmuizzalsarwi',
      action: 'https://linkedin.com/in/abdulmuizzalsarwi'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Ready to discuss mechanical engineering opportunities or collaborate on innovative projects. 
            Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.action}
                      className="flex items-center space-x-4 text-slate-200 hover:text-white transition-colors group"
                    >
                      <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">{info.label}</p>
                        <p className="text-slate-300">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-3 bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span className="font-semibold">View Resume</span>
              </a>
              <button className="w-full flex items-center justify-center space-x-3 bg-white/10 text-white p-4 rounded-xl hover:bg-white/20 transition-colors">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Schedule Meeting</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-slate-200 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-200 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-200 font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                >
                  <option value="" className="text-slate-700">Select a subject</option>
                  <option value="job-opportunity" className="text-slate-700">Job Opportunity</option>
                  <option value="collaboration" className="text-slate-700">Collaboration</option>
                  <option value="consulting" className="text-slate-700">Consulting</option>
                  <option value="general" className="text-slate-700">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-200 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-slate-300">
            © 2024 Your Name - Mechanical Engineer. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Ready to drive innovation through engineering excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
