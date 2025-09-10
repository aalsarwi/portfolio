import React, { useEffect, useState } from 'react';
import {
  ExternalLink,
  Calendar,
  Users,
  DollarSign,
  Award,
  X,
  Target,
  Briefcase,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Admin mode toggle
  const [isAdmin, setIsAdmin] = useState(false);

  // Modal state
  const [activeProject, setActiveProject] = useState<any>(null);
  const [activeImage, setActiveImage] = useState<number>(0);

  // uploadedImages now stores permanent public URLs (e.g. "/uploads/filename.jpg")
  // Key: projectId, Value: array of image URLs (strings)
  const [uploadedImages, setUploadedImages] = useState<{ [key: number]: string[] }>({});

  useEffect(() => {
    // Whenever modal opens, reset gallery index
    setActiveImage(0);

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveProject(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeProject]);

  // NOTE: This handler maps selected files to public URLs under /uploads/<filename>.
  // IMPORTANT: You must place the same files (with the same filenames) in your site's public/uploads/ folder
  // before or after using this UI so they become visible to all visitors.
  const handleImageUpload = (projectId: number, files: FileList | null) => {
    if (!files || files.length === 0) return;

    // Map to permanent public path - assumes files are (or will be) available at /uploads/<filename>
    const newImages = Array.from(files).map((file) => `/uploads/${file.name}`);

    setUploadedImages((prev) => ({
      ...prev,
      [projectId]: newImages,
    }));

    // Optional: quick local preview for admin only (not persisted to server).
    // If you want immediate local preview without copying to public/uploads, use URL.createObjectURL here
    // but note it won't be visible to other visitors or after refresh.
  };

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'CAD/Design', name: 'CAD/Design' },
    { id: 'Software', name: 'Software' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Formula 1 Body Design ',
      category: 'CAD/Design',
      description:
        'Redesigned and optimized the aerodynamic body of the Formula 1 car at Western University, using AutoCAD to optimize airflow, resulting in a 7% improvement in overall performance.', 
      image:
        '/uploads/Body_Design.png',
      images: [
        '/uploads/Body_Design.png',
        '/uploads/Body- Design2.png',
      ],
      technologies: ['SolidWorks', 'Aerodynamics', 'CFD Analysis', 'Thermal Management', 'Prototyping'],
      duration: '8 months',
      teamSize: '4 engineers',
      budget: '$20k',
      achievements: [
        'Improved car aerodynamic efficiency by 7% through body redesign.',
        'Ensured 100% accuracy in design markups for manufacturing readiness.',
        'Finished the AutoCAD design updates one week ahead of schedule.',
        'Adopted in 2 vehicle models for prototyping',
      ],
      role: 'Lead Mechanical Design',
      objectives: [
        'Optimize the car’s aerodynamic performance for higher speed and stability.',
        'Improve the car’s handling and cornering capabilities with better airflow control.',
        'Ensure all design updates are accurately implemented in AutoCAD for readiness.',
      ],
      challenges: [
        'Managing iterative design modifications under stringent project timelines.',
        'Ensuring design feasibility in accordance with manufacturing capability.',
        'Managing reduced weight and strength of material demands.',
      ],
      solutions: [
        'Optimized airflow through aerodynamic redesign, leading to a 7% performance improvement in the Formula 1 race car.',
        'Improved design accuracy and traceability by incorporating revised models into the current documentation system.',
        'Employed advanced annotation and markup tools in AutoCAD to minimize interpretation errors.',
      ],
      links: { demo: '#', github: '#' },
    },
    {
      id: 2,
      title: 'Human-Powered Washing Machine',
      category: 'CAD/Design',
      description:
        'Engineered and built a pedal-powered washing system using a chain and sprocket with a gear shifter for wash and spin cycles, featuring a user-adjusted crank for torque, a perforated drum for efficient drainage, ergonomic design for comfort, and material selection for off-grid use',
      image:
        '/uploads/assemblyofwashingmachine.png',
      images: [
        '/uploads/assemblyofwashingmachine.png',
        '/uploads/bevelgearmechanismdesign.png',
        '/uploads/chainandsprocketmechanism.png',
      ],
      technologies: ['Chain Drive', 'SolidWorks', 'Material Selection', 'Torque Simulation', 'Ergonomics'],
      duration: '1 month',
      teamSize: '2 engineers',
      budget: '$0',
      achievements: ['Implemented an organic design of washing machine in SolidWorks with multi cycle support', 'Simulated gear dynamics and accomplished a relaiable rotational speed goals', 'Drivetrain mechanics and ergonomics were perfectly integrated.'],
      role: 'Design Lead',
      objectives: [
        'Create a washer that runs without electricity that is suited for remote and off-grid environments.',
        'Build a powertrain that can alternate between spin and wash modes.',
        'Use a minimum factor of two to guarantee mechanical safety.',
      ],
      challenges: [
        'Comfort and mechanical efficiency are balanced in a small space.',
        'Verifying the limits of strength and stress for each spinning component',
        'Designing a dual-mode drivetrain for variable torque-speed needs',
      ],
      solutions: [
        'Employed a gear selection and chain/sprocket arrangement to switch across cycles.',
        'Modeled a 170 mm crank arms and user posture using 50th percentile data',
        'To verify performance, SolidWorks was utilized for rotational and torque simulations.',
      ],
      links: { demo: '#', github: '#' },
    },
    {
      id: 3,
      title: 'Elbow Simulation',
      category: 'CAD/Design',
      description:
        'Designed and simulated an elbow joint mechanism in SolidWorks, incorporating assemblies, animation, and realistic material properties to mimic supination and pronation, improving motion analysis accuracy by 25%',
      image:
      '/uploads/Elbow1.png',
      images: [
        '/uploads/Elbow1.png',
        '/uploads/Elbow-2.png',
        '/uploads/Hermus.png',
        '/uploads/Joint.png',
        '/uploads/Pins2.png',
        '/uploads/Socket-female.png',
        '/uploads/Socket-male.png',
        '/uploads/Radius.png',
      ],
      technologies: ['CAD Animation and Visualization', 'SolidWorks', 'FEA', 'Material Analysis'],
      duration: '2 months',
      teamSize: '1',
      budget: '0$',
      achievements: ['Improved motion analysis accuracy by 25% through realistic material simulation.', 'Developed a fully interactive assembly with animations for supination and pronation.', 'Created a functional prototype model for educational and biomechanical reference.', 'Enhanced design validation efficiency by implementing mechanical constraints.'],
      role: 'Lead Designer/Researcher',
      objectives: ['Replicate elbow supination and pronation motions precisely.', 'Incorporate material attributes to simulate precise joint behavior.', 'Create a model that is interactive for study and demonstration purposes.'],
      challenges: [
        'Guaranteeing unobstructed rotational movement of the joint throughout its range of motion',
        'Selecting materials with properties that closely replicate authentic joint biomechanics',
        'Ensuring the design remains sufficiently streamlined to facilitate straightforward assembly and effective articulation',
      ],
      solutions: [
        'Applied motion constraints in SolidWorks to accurately simulate supination and pronation without joint interference.',
        'Integrated assembly mates and motion studies to streamline design analysis and improve interaction.',
        'Utilized precise material properties to achieve realistic motion response.',
      ],
      links: { demo: '#', github: '#' },
    },
    {
      id: 4,
      title: 'FilterBuddy',
      category: 'CAD/Design',
      description:
        'Designed an attachable, adjustable water filter in SolidWorks to fit various bottle sizes, incorporating such materials like a 100-micron 316 stainless steel mesh, effectively eliminating up to 99% of contaminants while remaining compact and portable.',
      image:
        '/uploads/FilterBud.png',
      images: [
        '/uploads/FilterBud.png',
        '/uploads/FilterBud2.png',
        '/uploads/Mesh1.png',
      ],
      technologies: ['SolidWorks', 'Fluid Flow Simulation', 'Tolerance Analysis tools', 'DFM', 'Material Analysis'],
      duration: '10 months',
      teamSize: '8 engineers',
      budget: '$750K',
      achievements: ['35% reduction in cycle time', '99.5% weld quality consistency', '50% reduction in rework', 'ROI achieved in 14 months'],
      role: 'Mechanical Design',
      objectives: [
        'Identify and apply optimal filtration materials for maximum contaminant removal.',
        'Design a compact, adjustable system that fits multiple bottle circumferences',
        'Maintain high flow efficiency while ensuring user-friendly assembly and portability',
      ],
      challenges: [
        'Maintaining a balance between how well the filter works and the speed of water flow.',
        'Choosing the right filtration materials',
        'Reducing size and weight without sacrificing strength or how well the filter works',
      ],
      solutions: [
        'Set the mesh size to 100 microns to keep water flowing quickly while still trapping larger particles.',
        'Designed an adjustable clamp system using parametric modeling to fit a wide range of bottle circumferences.',
        'Used light materials and a small design to keep it easy to carry while still keeping it strong.',
      ],
      links: { demo: '#', github: '#' },
    },
    {
      id: 5,
      title: 'Research Study Assistant',
      category: 'Software',
      description:
        'Contributed to enhancing MRI imaging workflows by analyzing pulse sequences and optimizing data processing through high-performance computing and SQL-based data management, achieving a 20% decrease in processing time and a 12% improvement in diagnostic accuracy.',
      image:
        '/uploads/western.jpeg',
      images: [
      ],
      technologies: ['SQL', 'MRI Pulse Sequence Software', 'HPC', 'Assembly Integration Techniques'],
      duration: '4 months',
      teamSize: '3 engineers',
      budget: 'NA',
      achievements: ['35% reduction in cycle time', '99.5% weld quality consistency', '50% reduction in rework', 'ROI achieved in 14 months'],
      role: 'Research Study Assistant',
      objectives: [
        'Accelerate MRI data processing speed using advanced computational tools.',
        'Boost diagnostic accuracy by structuring and optimizing MRI imaging data with SQL.',
        'Reduce system downtime via effective control system hardware testing',
      ],
      challenges: [
        'High computational load during MRI pulse sequence interpretation.',
        'Fragmented data structure limiting diagnostic precision.',
        'Frequent hardware testing delays leading to inefficiencies in the workflow.',
        'Ensuring compatibility between multiple software and hardware systems within the MRI setup.'
      ],
      solutions: [
        'Utilized a high-performance PC and optimized pulse sequence interpretation, cutting data processing time by 20%.',
        'Deployed structured SQL database management, improving data accessibility and boosting diagnostic precision by 12%.',
        'Used light materials and a small design to keep it easy to carry while still keeping it strong.',
        'Created and implemented a systematic control system testing procedure, cutting downtime by 5%.',
      ],
      links: { demo: '#', github: '#' },
    },
  ];

  const filteredProjects =
    selectedCategory === 'all' ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Admin Toggle */}
        {/* <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsAdmin(!isAdmin)}
            className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
          >
            {isAdmin ? 'Disable Admin Mode' : 'Enable Admin Mode'}
          </button>
        </div> */}

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Comprehensive portfolio showcasing innovative engineering solutions across multiple disciplines and industries, with
            measurable impact and technical excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={uploadedImages[project.id]?.[0] || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2 text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <Users className="w-4 h-4" />
                    <span>{project.teamSize}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <DollarSign className="w-4 h-4" />
                    <span>{project.budget}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center space-x-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>Key Achievements</span>
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="text-sm text-slate-600 flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </div>

                {/* Upload field (admin only) */}
                {isAdmin && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Upload Images</label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleImageUpload(project.id, e.target.files)}
                      className="block w-full text-sm text-slate-600 border border-slate-300 rounded-lg cursor-pointer focus:outline-none"
                    />
                    <p className="text-xs text-slate-500 mt-1">After selecting files, copy the same files into public/uploads/ for them to be visible to everyone.</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILS MODAL */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-5 border-b border-slate-200">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{activeProject.title}</h3>
                <p className="text-slate-500 text-sm mt-1 capitalize">{activeProject.category}</p>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="rounded-lg p-2 hover:bg-slate-100 transition"
                aria-label="Close details"
              >
                <X className="w-6 h-6 text-slate-600" />
              </button>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-6">
              {/* LEFT: Photo gallery */}
              <div className="lg:col-span-2 flex flex-col">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
                  <img
                    src={
                      uploadedImages[activeProject.id]?.[activeImage] ||
                      activeProject.images?.[activeImage] ||
                      activeProject.image
                    }
                    alt={`${activeProject.title} image ${activeImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-2 mt-3 overflow-y-auto">
                  {(
                    uploadedImages[activeProject.id]?.length
                      ? uploadedImages[activeProject.id]
                      : activeProject.images?.length
                      ? activeProject.images
                      : [activeProject.image]
                  ).map((src: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative overflow-hidden rounded-lg border ${
                        i === activeImage ? 'border-blue-600 ring-2 ring-blue-300' : 'border-slate-200'
                      }`}
                    >
                      <img src={src} alt={`thumb ${i + 1}`} className="w-full h-24 object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT: Details (scrollable) */}
              <div className="lg:col-span-3 overflow-y-auto pr-1 space-y-6">
                {/* Overview */}
                <section>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Project Overview</h4>
                  <p className="text-slate-600 leading-relaxed">{activeProject.description}</p>

                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span>{activeProject.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="w-4 h-4" />
                      <span>{activeProject.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <DollarSign className="w-4 h-4" />
                      <span>{activeProject.budget}</span>
                    </div>
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {activeProject.technologies?.map((t: string, i: number) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Role */}
                {activeProject.role && (
                  <section>
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-2">
                      <Briefcase className="w-5 h-5 text-amber-600" />
                      Your Role
                    </h4>
                    <p className="text-slate-600">{activeProject.role}</p>
                  </section>
                )}

                {/* Objectives */}
                {activeProject.objectives && activeProject.objectives.length > 0 && (
                  <section>
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      Objectives
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.objectives.map((o: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <span className="mt-2 w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Challenges */}
                {activeProject.challenges && activeProject.challenges.length > 0 && (
                  <section>
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-2">
                      <AlertTriangle className="w-5 h-5 text-rose-600" />
                      Challenges
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.challenges.map((c: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <span className="mt-2 w-2.5 h-2.5 rounded-full bg-rose-500 flex-shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Solutions */}
                {activeProject.solutions && activeProject.solutions.length > 0 && (
                  <section className="pb-2">
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      Solutions
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.solutions.map((s: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <span className="mt-2 w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
