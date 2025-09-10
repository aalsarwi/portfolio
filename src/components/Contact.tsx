import React from 'react';
import { Mail, Phone, MapPin, Linkedin, FileText } from 'lucide-react';

const Contact: React.FC = () => {
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
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Ready to discuss mechanical engineering opportunities or collaborate on innovative projects. 
            Let's build something amazing together.
          </p>
        </div>

        {/* Centered content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Get In Touch</h3>
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

          {/* Resume Button */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-3 bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span className="font-semibold">View Resume</span>
            </a>
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
