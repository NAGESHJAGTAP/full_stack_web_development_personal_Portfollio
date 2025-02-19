import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronRight, Code, Layout, Database } from 'lucide-react';
import landingpage from '../../src/assets/placepro.png';
import meals from '../../src/assets/meals.png';
import kia from '../../src/assets/kia.png';
import cyber from '../../src/assets/cybersecurity.png';
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'education', 'certificates', 'contact']; 
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "PlacePro (Traveler Website)",
      description: "A platform providing real-time information on nearby locations like hospitals, food shops, hotels, and attractions.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "Figma", "Tailwindcss", "HTML", "CSS"],
      image: landingpage,
      figmaLink: "https://www.figma.com/design/dNCCK0JmBqakvn50ivMrkN/HTM-location?node-id=0-1&t=e72LIJdqYqcZ40zL-1",
      githubLink: "https://github.com/NAGESHJAGTAP/place_pro",
      liveLink: "#",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace solution with real-time inventory and ML-based recommendations.",
      technologies: ["Next.js", "MongoDB", "Redis", "AWS"],
      image: "/api/placeholder/400/250",
      figmaLink: "#",
      githubLink: "#",
      liveLink: "#",
      color: "from-blue-500 to-teal-500"
    },
    {
      title: "Collaborative Workspace",
      description: "Real-time collaborative platform with document sharing and team management.",
      technologies: ["React", "Socket.io", "PostgreSQL", "Docker"],
      image: "/api/placeholder/400/250",
      figmaLink: "#",
      githubLink: "#",
      liveLink: "#",
      color: "from-teal-500 to-emerald-500"
    }
  ];

  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "bg-gradient-to-r from-blue-500 to-purple-500"
    },
    {
      category: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      items: ["Node.js", "Python", "MongoDB", "PostgreSQL"],
      color: "bg-gradient-to-r from-teal-500 to-emerald-500"
    },
    {
      category: "Development Tools",
      icon: <Code className="w-6 h-6" />,
      items: ["Git", "Docker", "AWS", "CI/CD"],
      color: "bg-gradient-to-r from-orange-500 to-red-500"
    }
  ];

  const certificates = [
    {
      title: "C programing language",
      issuer: "SoloLearn",
      date: "October 2024",
      link: "https://www.coursera.org/learn/full-stack-react"
    },
    {
      title: "cybersecurity",
      issuer: "Skill india",
      date: "February 2025",
      image: ""
    },
    {
      title: "Responsive AI",
      issuer: "Simplilearn",
      date: "February 2025",
      link: "https://simpli.app.link/yLw9j9p66Qb "
    },
    {
      title: "UI/UX-Introduction to graphic Design:Basic of UI/UX",
      issuer: "Simplilearn",
      date: "February 2025",
      link: "https://simpli.app.link/vscNeSuc4Qb"
    },
    {
      title: "Kali linux Basics",
      issuer: "Simplilearn",
      date: "February 2025",
      link: "https://simpli.app.link/meXaX7556Qb"
    }
   
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 -z-10"></div>
{/* Navigation */}
<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50">
  <div className="container mx-auto px-6 py-4">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Portfolio
      </h1>
      
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="hidden md:flex space-x-8">
        {['Home', 'Projects', 'Skills', 'Certificates', 'Contact'].map((item) => (
          <NavLink 
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`} // Ensure the href matches the id
            active={activeSection === item.toLowerCase().replace(' ', '-')}
          >
            {item}
          </NavLink>
        ))}
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden mt-4 pb-4">
        <div className="flex flex-col space-y-4">
          {['Home', 'Projects', 'Skills', 'Certificates', 'Contact'].map((item) => (
            <NavLink 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} // Ensure the href matches the id
              active={activeSection === item.toLowerCase().replace(' ', '-')}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    )}
  </div>
</nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nagesh Jagtap</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                  I am a Full Stack Developer with expertise in building modern web applications. Skilled in React for 
                  the frontend, and Node.js with MongoDB for the backend, I create seamless, scalable, and efficient solutions.
                  Proficient in JavaScript, HTML, CSS, Git/GitHub, and Figma, I focus on delivering high-quality, user-centric 
                  experiences through intuitive designs and smooth functionality.
                </p>
                <div>

                </div>
                <div className="flex flex-wrap gap-4">
               
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <span className="relative z-10">View Projects</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </button>
                 
                  <a href="https://drive.google.com/file/d/1cdRGFhi1F6aSgOBgZbRT8z0pslhWXbVS/view?usp=drivesdk" 
                     download="MY_Resume_1739979156875.html" 
                     className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-gray-50/50 backdrop-blur-sm px-6">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-4xl font-bold text-gray-800 mb-12">
      Education
    </h2>
    <div className="text-xl text-gray-600 mb-8">
      <h3 className="font-semibold">11th & 12th</h3>
      <p className="mb-2">shukhadevanand vidyalay bhandegaon 2021-2023 secondary school</p>
      <p className="italic">Completed: March 2023</p>
    </div>
    <div className="text-xl text-gray-600 mb-8">
      <h3 className="font-semibold">Bachelor of Computer Science Engineering</h3>
      <p className="mb-2">Rai University</p>
      <p className="italic">2024 - 2028</p>
    </div>
    <div className="text-xl text-gray-600 mb-8">
      <h3 className="font-semibold">Full Stack Web Development Bootcamp</h3>
      <p className="mb-2">Coding Gita</p>
      <p className="italic">2024 - 2028</p>
    </div>
  
  </div>
</section>

  
  {/* Projects Section */}
<section id="projects" className="py-20 bg-white/50 backdrop-blur-sm px-6">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-4xl font-bold text-gray-800 mb-12">
      Featured Projects
    </h2>
    <div className="grid grid-cols-1 gap-12">
      <ProjectCard
        key={0}
        project={{
          title: "PlacePro (Traveler Website)",
          description: "A platform providing real-time information on nearby locations like hospitals, food shops, hotels, and attractions, ",
          technologies: ["React", "Node.js", "MongoDB","Express.js","JavaScript","Figma","Tailwindcss","HTML","CSS"],
          image: landingpage,
          figmaLink: "https://www.figma.com/design/dNCCK0JmBqakvn50ivMrkN/HTM-location?node-id=0-1&t=e72LIJdqYqcZ40zL-1",
          githubLink: "https://github.com/NAGESHJAGTAP/place_pro",
          liveLink: "#",
          color: "from-purple-500 to-blue-500"
        }}
        index={0}
      />
      <ProjectCard
        key={1}
        project={{
          title: "BrewNBank",
          description: "Explore meals, cocktails, banks, and pottery. All in one place—simple and convenient!",
          technologies: ["React", "API", "Tailwindcss","HTML","CSS"],
          image: meals,
          figmaLink: "#",
          githubLink: "https://github.com/NAGESHJAGTAP/ract-website-4-in-1",
          liveLink: "#",
          color: "from-blue-500 to-teal-500"
        }}
        index={1}
      />
      <ProjectCard
        key={2}
        project={{
          title: "kia",
          description: "The Kia Car Website is a sleek, responsive platform that highlights the latest Kia models, featuring detailed specifications and stunning visuals. Developed using HTML, CSS, and JavaScript, it provides an engaging and user-friendly experience for car enthusiasts",
          technologies: ["Html", "css", "javascript"],
          image: kia,
          figmaLink: "none",
          githubLink: "https://github.com/NAGESHJAGTAP/kia",
          liveLink: "https://kiawebsite.netlify.app/",
          color: "from-teal-500 to-emerald-500"
        }}
        index={2}
      />
    </div>
  </div>
</section>

 {/* Skills Section */}
 <section id="skills" className="py-20 bg-gray-50/50 backdrop-blur-sm px-6">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-4xl font-bold text-gray-800 mb-12">
      Skills & Expertise
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <SkillCard
        key={0}
        skillGroup={{
          category: "Frontend Development",
          icon: <Layout className="w-6 h-6" />,
          items: ["React", "html", "css", "Tailwind CSS","javascript"],
          color: "bg-gradient-to-r from-blue-500 to-purple-500"
        }}
        onHover={setHoveredSkill}
        isHovered={hoveredSkill === 0}
      />
      <SkillCard
        key={1}
        skillGroup={{
          category: "Backend Development",
          icon: <Database className="w-6 h-6" />,
          items: ["Node.js", "express.js", "MongoDB", "api"],
          color: "bg-gradient-to-r from-teal-500 to-emerald-500"
        }}
        onHover={setHoveredSkill}
        isHovered={hoveredSkill === 1}
      />
      <SkillCard
        key={2}
        skillGroup={{
          category: "Development Tools",
          icon: <Code className="w-6 h-6" />,
          items: ["Git&GitHub", "Postman", "UI/UX Figma", "chakra-ui"],
          color: "bg-gradient-to-r from-orange-500 to-red-500"
        }}
        onHover={setHoveredSkill}
        isHovered={hoveredSkill === 2}
      />
    </div>
  </div>
</section>

{/* Certificates Section */}
<section id="certificates" className="py-20 bg-white/50 backdrop-blur-sm px-6">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-4xl font-bold text-gray-800 mb-12">
      Certificates
    </h2>
    <div className="space-y-6">
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">C programing language</h3>
        <p className="text-gray-600">Issued by: sololearn</p>
        <p className="text-gray-600">Date: 24 october 2024</p>
        <a href="https://www.sololearn.com/certificates/CC-GR5LMJ4Y" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          View Certificate
        </a>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800">Cybersecurity</h3>
      <p className="text-gray-600">Issued by: Skill India</p>
      <p className="text-gray-600">Date: 16 Feb 2025</p>
      <a 
        href={cyber} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:underline mt-4 inline-block"
      >
        View Certificate
      </a>
    </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">Responsible AI</h3>
        <p className="text-gray-600">Powered by: Google cloude</p>
        <p className="text-gray-600">Issued by: Simplilearn</p>
        <p className="text-gray-600">Date: feb 2025</p>
        <a href="https://simpli.app.link/yLw9j9p66Qb" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          View Certificate
        </a>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">UI/UX-Introduction to graphic Design:Basic of UI/UX</h3>
        <p className="text-gray-600">Issued by: Simplilearn</p>
        <p className="text-gray-600">Date: 17th feb 2025</p>
        <a href="https://simpli.app.link/vscNeSuc4Qb " target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          View Certificate
        </a>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">Kali linux</h3>
        <p className="text-gray-600">Issued by: Simplilearn</p>
        <p className="text-gray-600">Date: feb 2025</p>
        <a href="https://simpli.app.link/meXaX7556Qb " target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          View Certificate
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50 backdrop-blur-sm px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-gray-600">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <ContactLink icon={<Mail />} text="nageshjatap063@gmail.com"/> 
                <ContactLink icon={<Linkedin />} text="https://www.linkedin.com/in/nagesh-jagtap-9bb56031a/" />
                <ContactLink icon={<Github />} text="https://github.com/NAGESHJAGTAP" />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

const NavLink = ({ href, active, children }) => (
  <a
    href={href}
    className={`relative text-sm font-medium transition-colors group ${
      active ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
    }`}
  >
    {children}
    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform ${
      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
    }`}></span>
  </a>
);

const ProjectCard = ({ project }) => (
  <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10`}></div>
    </div>
    <div className="relative z-10 p-8 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
        <p className="text-gray-600 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-6">
          <ProjectLink href={project.figmaLink} icon={<Layout size={20} />} text="Design" />
          <ProjectLink href={project.githubLink} icon={<Github size={20} />} text="Code" />
          <ProjectLink href={project.liveLink} icon={<ExternalLink size={20} />} text="Live" />
        </div>
      </div>
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
);

const ProjectLink = ({ href, icon, text }) => (
  <a 
    href={href}
    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group"
  >
    {icon}
    <span className="text-sm">{text}</span>
    <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
  </a>
);

const SkillCard = ({ skillGroup, onHover, isHovered }) => (
  <div 
    className={`relative bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 ${
      isHovered ? 'scale-105' : ''
    }`}
    onMouseEnter={() => onHover(skillGroup)}
    onMouseLeave={() => onHover(null)}
  >
    <div className={`absolute top-0 left-0 w-full h-1 rounded-t-xl ${skillGroup.color}`}></div>
    <div className="flex items-center space-x-3 mb-6">
      <div className={`p-2 rounded-lg ${skillGroup.color} bg-opacity-10`}>
        {skillGroup.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{skillGroup.category}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skillGroup.items.map((skill, index) => (
        <span 
          key={index} 
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm transform hover:scale-105 transition-transform"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ContactLink = ({ icon, text }) => (
  <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 group">
    <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
      {icon}
    </div>
    <span>{text}</span>
  </a>
);

const ContactForm = () => (
  <form className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
        placeholder="Your name"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
        placeholder="Your email"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
        Message
      </label>
      <textarea
        id="message"
        rows="4"
        className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
        placeholder="Your message"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
    >
      Send Message
    </button>
  </form>
);

export default Portfolio;