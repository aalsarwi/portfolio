import React from 'react';
import { DraftingCompass, Cpu, Calculator, Code, Brain, Hammer } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: DraftingCompass,
      title: 'CAD & Design',
      color: {
        bg: 'bg-red-100',
        icon: 'text-red-600',
        barFrom: 'from-red-500',
        barTo: 'to-red-600'
      },
      skills: [
        { name: 'SolidWorks', level: 95 },
        { name: 'AutoCAD', level: 90 },
        { name: 'Revit', level: 70 },
        { name: 'Fusion360', level: 75 },
        { name: '3D Printing', level: 80 },
        { name: 'Technical Drawing', level: 80 }
      ]
    },
    {
      icon: Cpu,
      title: 'Hardware & Embedded',
      color: {
        bg: 'bg-yellow-100',
        icon: 'text-yellow-600',
        barFrom: 'from-yellow-500',
        barTo: 'to-yellow-600'
      },
      skills: [
        { name: 'Arduino', level: 90 },
        { name: 'Circuit Analysis', level: 85 },
        { name: 'LabVIEW', level: 90 },
        { name: 'Sensor Modules', level: 85 },
        { name: 'NI DAQ', level: 80 }
      ]
    },
    {
      icon: Calculator,
      title: 'Engineering Analysis',
      color: {
        bg: 'bg-blue-100',
        icon: 'text-blue-600',
        barFrom: 'from-blue-500',
        barTo: 'to-blue-600'
      },
      skills: [
        { name: 'Thermodynamics', level: 90 },
        { name: 'Fluid Mechanics', level: 80 },
        { name: 'Stress Analysis', level: 85 },
        { name: 'Dynamics', level: 90 },
        { name: 'Heat Transfer', level: 85 }
      ]
    },
    {
      icon: Code,
      title: 'Coding Languages',
      color: {
        bg: 'bg-purple-100',
        icon: 'text-purple-600',
        barFrom: 'from-purple-500',
        barTo: 'to-purple-600'
      },
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'MatLAB', level: 90 },
        { name: 'JSX', level: 80 },
        { name: 'SQL', level: 75 }
      ]
    },
    {
      icon: Brain,
      title: 'Techincal Skills',
      color: {
        bg: 'bg-teal-100',
        icon: 'text-teal-600',
        barFrom: 'from-teal-500',
        barTo: 'to-teal-600'
      },
      skills: [
        { name: 'Critical Thinking', level: 95 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Research & Development', level: 85 },
        { name: 'Leadership', level: 90 },
        { name: 'Collaboration', level: 90 },
        { name: 'Technical Writing', level: 85 }
      ]
    },
    {
      icon: Hammer,
      title: 'Machining & Prototyping',
      color: {
        bg: 'bg-pink-100',
        icon: 'text-pink-600',
        barFrom: 'from-pink-500',
        barTo: 'to-pink-600'
      },
      skills: [
        { name: 'Machining & Fabrication', level: 85 },
        { name: 'Workshop Manufacturing Skills', level: 90 },
        { name: 'Prototyping', level: 85 },
        { name: 'Failure Analysis', level: 80 },
        { name: 'Hardware Fabrication & Safety', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Technical Expertise</h2>
          <p className="text-back text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning from mechancial engineering, hardware systems and software development with
            proven hands on project experince.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 ${category.color.bg} rounded-lg`}>
                    <Icon className={`w-6 h-6 ${category.color.icon}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 bg-gradient-to-r ${category.color.barFrom} ${category.color.barTo}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;