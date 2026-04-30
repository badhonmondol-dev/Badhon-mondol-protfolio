import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Zap, Globe } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'একটি সম্পূর্ণ ই-কমার্স প্ল্যাটফর্ম যেখানে গ্রাহকরা পণ্য কিনতে পারেন এবং admin panel থাকে।',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/badhonmondol-dev',
      live: '#',
      color: 'from-pink-500 to-rose-500',
      icon: '🛍️'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'একটি রিয়েল-টাইম টাস্ক ম্যানেজমেন্ট অ্যাপ যেখানে ইউজাররা তাদের কাজ সংগঠিত করতে পারে।',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/badhonmondol-dev',
      live: '#',
      color: 'from-blue-500 to-cyan-500',
      icon: '✓'
    },
    {
      id: 3,
      title: 'Social Media Feed',
      description: 'একটি সোশ্যাল মিডিয়া ফিড অ্যাপ যেখানে ইউজাররা পোস্ট শেয়ার করতে পারে এবং কমেন্ট করতে পারে।',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/badhonmondol-dev',
      live: '#',
      color: 'from-purple-500 to-pink-500',
      icon: '💬'
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'একটি আবহাওয়া পূর্বাভাস অ্যাপ যা রিয়েল-টাইম ডেটা দেখায় এবং সুন্দর UI আছে।',
      tech: ['React', 'API Integration', 'Chart.js'],
      github: 'https://github.com/badhonmondol-dev',
      live: '#',
      color: 'from-yellow-500 to-orange-500',
      icon: '⛅'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'একটি সম্পূর্ণ ব্লগ প্ল্যাটফর্ম যেখানে ইউজাররা তাদের ব্লগ তৈরি করতে পারে এবং শেয়ার করতে পারে।',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/badhonmondol-dev',
      live: '#',
      color: 'from-green-500 to-emerald-500',
      icon: '📝'
    },
    {
      id: 6,
      title: 'Dashboard Analytics',
      description: 'একটি বিশ্লেষণ ড্যাশবোর্ড যা রিয়েল-টাইম ডেটা ভিজুয়ালাইজ করে এবং insights প্রদান করে।',
      tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/badhonmondol-dev',
      live: '#',
      color: 'from-indigo-500 to-purple-500',
      icon: '📊'
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'Django', 'REST API', 'GraphQL'] },
    { category: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Linux', 'VS Code', 'Webpack'] }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-900/50 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              BM Dev
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors duration-300 ${
                    activeSection === item
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-4">
              {['home', 'about', 'projects', 'skills', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-gray-700/50 rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="mb-8 inline-block">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl">
                  👨‍💻
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent leading-tight">
              Badhon Mondol
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Full Stack Web Developer | React | Node.js | MongoDB
            </p>
            
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
              আমি আধুনিক এবং স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরি করি যা ব্যবহারকারীদের সেরা অভিজ্ঞতা প্রদান করে। 
              আমার লক্ষ্য হল প্রযুক্তি এবং সৃজনশীলতার মাধ্যমে সমস্যার সমাধান করা।
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/badhonmondol-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="mailto:muhammadbadhondev@gmail.com"
                className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-20 animate-bounce">
              <div className="text-gray-400 text-sm mb-2">Scroll down to explore</div>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex items-center justify-center">
                <div className="w-1 h-2 bg-gray-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  আমি একজন passionate Full Stack Web Developer যিনি বাংলাদেশে বসে global মানের ওয়েব সলিউশন তৈরি করি।
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  আমার প্রতিটি প্রজেক্টে আমি অত্যাধুনিক প্রযুক্তি এবং সেরা প্র্যাকটিস ব্যবহার করি যা নিশ্চিত করে যে সফটওয়্যার scalable, maintainable এবং user-friendly।
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  যখন কোড লিখছি না, আমি নতুন প্রযুক্তি শিখছি, ওপেন সোর্স প্রজেক্টে অবদান রাখছি এবং ডেভেলপার কমিউনিটির সাথে যুক্ত থাকছি।
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Code className="text-pink-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold">Clean Code</h3>
                  </div>
                  <p className="text-gray-400">সুন্দর, readable এবং maintainable code লেখা আমার প্রথম অগ্রাধিকার।</p>
                </div>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Zap className="text-cyan-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold">Performance</h3>
                  </div>
                  <p className="text-gray-400">দ্রুত এবং অপ্টিমাইজড অ্যাপ্লিকেশন তৈরি করা যা সব ডিভাইসে নির্বিঘ্নে চলে।</p>
                </div>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Globe className="text-purple-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold">User-Centric</h3>
                  </div>
                  <p className="text-gray-400">প্রতিটি ইউজারের অভিজ্ঞতা মাথায় রেখে ডিজাইন এবং ডেভেলপ করি।</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 animate-in fade-in slide-in-from-bottom-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-8">
                    <div className="text-5xl mb-4">{project.icon}</div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                        style={{backgroundImage: `linear-gradient(to right, #ec4899, #06b6d4)`}}>
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white/80`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 text-sm font-semibold"
                      >
                        <Github size={16} /> Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-lg transition-all duration-300 text-sm font-semibold"
                      >
                        <ExternalLink size={16} /> Live
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-gray-500 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-xl font-bold mb-6 text-white">{skillGroup.category}</h3>
                  <ul className="space-y-3">
                    {skillGroup.items.map((skill, i) => (
                      <li key={i} className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                        <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              আপনার কাছে একটি দুর্দান্ত আইডিয়া আছে? একটি প্রজেক্টের জন্য সাহায্য দরকার? আমার সাথে যোগাযোগ করুন এবং আমরা একসাথে কিছু অসাধারণ তৈরি করব!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href="mailto:muhammadbadhondev@gmail.com"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={20} /> Email Me
              </a>
              <a
                href="https://github.com/badhonmondol-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-500 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/badhon-mondol-a702013b0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-700/50 mt-20">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p>© 2024 Badhon Mondol. সব কিছু React দিয়ে তৈরি এবং ভালোবাসা দিয়ে ডিজাইন করা হয়েছে।</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
