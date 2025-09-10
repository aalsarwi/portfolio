import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Applied Science - Mechanical Engineering',
      school: 'University of Western Ontario',
      location: 'London, ON',
      duration: '2023 - 2027',
      gpa: '3.7/4.0',
      coursework: [
        'Thermodynamics',
        'Fluids/Heat Transfer',
        'Programming for Engineers',
        'Engineering Experimentation',
        'Computational Methods',
        'Kinematics and Dynamics',
        'Mechanical Design',
      ],
    },
  ];

  const certifications = [
    {
      name: 'SOLIDWORKS CAD Design Associate',
      issuer: 'SolidWorks',
      year: '2024',
      status: 'Certified',
    },
    {
      name: 'AutoCAD Certified User',
      issuer: 'AutoCAD',
      year: '2024',
      status: 'Certified',
    },
  ];

  const additionalTraining = [
    'Finite Element Analysis (FEA)',
    '3D Printing Fundamentals',
    'MATLAB for Engineers',
  ];

  return (
    <section id="education" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Education & Qualifications</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Strong academic foundation with advanced degrees and professional certifications
            supporting expertise in mechanical engineering and project management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center space-x-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <span>Academic Background</span>
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    {/* Left Section: Degree, School, GPA */}
                    <div className="flex-1 md:pr-6">
                      <h4 className="text-xl font-bold text-slate-800 mb-2">{edu.degree}</h4>
                      <div className="space-y-1 text-slate-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-blue-500" />
                          <span className="font-semibold">{edu.school}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                        GPA: {edu.gpa}
                      </div>
                    </div>

                    {/* Right Section: Coursework */}
                    <div className="mt-6 md:mt-0 md:w-1/2">
                      <h5 className="font-semibold text-slate-800 mb-3">Relevant Coursework</h5>
                      <ul className="grid grid-cols-1 gap-2">
                        {edu.coursework.map((course, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Training */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center space-x-2">
              <Award className="w-6 h-6 text-blue-600" />
              <span>Certifications & Training</span>
            </h3>

            {/* Professional Certifications */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Professional Certifications</h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                  >
                    <div>
                      <h5 className="font-semibold text-slate-800">{cert.name}</h5>
                      <p className="text-sm text-slate-600">{cert.issuer}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500 mb-1">{cert.year}</div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          cert.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {cert.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Training */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Additional Training</h4>
              <div className="grid grid-cols-1 gap-2">
                {additionalTraining.map((training, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">{training}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
