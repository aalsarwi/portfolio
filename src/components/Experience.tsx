import React from 'react';
import { Calendar, MapPin, Building, TrendingUp, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Research Study Assistant',
      company: 'Western University',
      location: 'London, ON',
      duration: 'May 2024 - August 2024',
      type: 'Full-time',
      description: 'Contributed to enhancing MRI imaging workflows by analyzing pulse sequences and optimizing data processing through high-performance computing and SQL-based data management, achieving a 20% decrease in processing time and a 12% improvement in diagnostic accuracy.',
      responsibilities: [
        'Interpreted MRI pulse sequences and processed imaging data using specialized software.',
        'Managed and organized MRI imaging datasets through SQL for efficient data entry and retrieval.',
        'Facilitated data analysis workflows using high-performance computing infrastructure',
        'Assisted with control system hardware testing to ensure operational reliability.'
      ],
      achievements: [
        'Cut MRI data processing time by 20% through workflow optimization on high performance systems ',
        'Enhanced diagnostic accuracy by 12% via structured SQL data organization',
        'Reduced hardware downtime and troubleshooting by 5% through systematic control system testing',
        'Boosted workflow efficiency by implementing assembly level software hardware techniques'
      ],
      technologies: ['SQL', 'HPC', 'MRI Pulse Sequence Software', 'Assembly Integration Techniques']
    },
    {
      id: 2,
      title: 'Lead Body Design',
      company: 'Formula 1 @ Western University.',
      location: 'London, ON',
      duration: 'Sept 2024 - present',
      type: 'Full-time',
      description: 'Specialized in precision mechanical systems and body design and analysis for a formula 1 car, with focus on high-reliability components.',
      responsibilities: [
        'Lead the mechanical body and aerodynamic design of the Formula 1 race car.',
        'Apply markup tools and documentation standards to ensure precise labeling and design accuracy',
        'Collaborate with team members to integrate design modifications into the overall vehicle system.',
        'Conduct iterative design reviews to validate aerodynamic efficiency and structural feasibility.'
      ],
      achievements: [
        'Improved vehicle performance by 7% through optimized aerodynamic redesign.',
        'Contributed to advancing Western’s Formula 1 project competitiveness with measurable aerodynamic gains.',
        'Enhanced collaboration between design and build teams by producing clear and accurate CAD documentation.',
        'Successfully implemented and documented design changes, reducing revision errors by 15%.'
      ],
      technologies: ['AutoCAD', 'Markup Tools', '3D Modeling & Simulation', 'Testing Protocols']
    },
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Professional Experience</h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            Progressive career growth with increasing responsibilities and measurable impact across 
            automotive, manufacturing, and design engineering sectors.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="md:ml-16 bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div className="flex-1 min-w-0 mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-slate-600 mb-2">
                        <div className="flex items-center space-x-2">
                          <Building className="w-5 h-5 text-blue-500" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-5 h-5 text-blue-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-500">
                        <Calendar className="w-5 h-5" />
                        <span>{exp.duration}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-700 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <span>Key Responsibilities</span>
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-slate-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center space-x-2">
                        <Award className="w-5 h-5 text-blue-600" />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-slate-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-white text-slate-700 px-3 py-1 rounded-lg text-sm border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;