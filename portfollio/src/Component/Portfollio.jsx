import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import emailjs from '@emailjs/browser';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const skillData = [
    { name: 'Html/css', level: 95 },
    { name: 'Javascript', level: 90 },
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'RESTful APIs', level: 70 },
  ];

  const projects = [
    { id: 1, title: "CouponSwap", description: "CouponSwap for trading Amazon, Flipkart, and other coupons. Buy and sell easily to save money or earn cash.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/Couponhome.png?raw=true", tags: ["React", "Tailwind CSS", "Node.js", "Express", "Html&css", "Javascript", "Postman", "MongoDB"], category: "all", github: "https://github.com/NAGESHJAGTAP/coupon_swap", live: "https://couponswap.netlify.app/" },
    { id: 2, title: "BrewBank", description: "A React (Vite) app integrating multiple APIs (banking, cocktails, meals, Harry Potter) with a dynamic, responsive UI.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/meals.png?raw=true", tags: ["React", "Tailwind CSS", "API Integration", "Html", "CSS", "Javascript"], category: "all", github: "https://github.com/NAGESHJAGTAP/ract-website-Four-in-One", live: "https://ract-website-four-in-one-3wm8.vercel.app/" },
    { id: 3, title: "PlacePro", description: "A traveler-friendly web app for discovering hospitals, pharmacies, hotels, and more with real-time search and maps.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/placepro.png?raw=true", tags: ["React", "Tailwind CSS", "Node.js", "Express", "Html&css", "Javascript", "Postman", "MongoDB"], category: "all", github: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/placepro.png?raw=true", live: "https://your-portfolio-generator-demo.com" },
    { id: 4, title: "Personal Portfolio", description: "A responsive React & Tailwind CSS portfolio showcasing skills, projects, and contact details.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/portfollio%20(2).png?raw=true", tags: ["React", "Tailwind CSS", "Javascript", "Html", "css"], category: "all", github: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio", live: "https://nageshjagtap-portfollio.netlify.app/" },
    { id: 5, title: "Kia Website", description: "A static HTML/CSS website showcasing Kia cars with features, images, and videos.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/kia.png?raw=true", tags: ["Html", "css"], category: "all", github: "https://github.com/NAGESHJAGTAP/kia-Car-Website-Html-css-project", live: "https://kiawebsite.netlify.app/" },
    // Clone Projects
    { id: 1, title: "YouTube Clone", description: "A YouTube Clone with React.js, featuring video search via YouTube API.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/youtube.jpg?raw=true", tags: ["React", "CSS", "JavaScript"], category: "clone", github: "https://github.com/NAGESHJAGTAP/react_youtube" },
    { id: 2, title: "Netflix Clone", description: "A Netflix clone webpage with sections like Top 10 and Trending Now.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/netflix.png?raw=true", tags: ["Html", "CSS"], category: "clone", github: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/netflix.png?raw=true" },
    { id: 3, title: "Amazon Clone", description: "A simple Amazon Clone with a responsive layout using HTML and CSS.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/Amazon.png?raw=true", tags: ["Html", "CSS"], category: "clone", github: "https://github.com/NAGESHJAGTAP/Amazon_clone" },
    { id: 4, title: "Chessboard", description: "A digital chessboard with an 8x8 grid for casual or multiplayer play.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/ChessBord.png?raw=true", tags: ["Html", "CSS"], category: "clone", github: "https://github.com/NAGESHJAGTAP/Html-Css-clone-project/tree/main/chessbord" },
    { id: 5, title: "Kidz World Clone", description: "A kid-friendly website replica with games and educational content.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/Kids.png?raw=true", tags: ["Html", "CSS"], category: "clone", github: "https://github.com/NAGESHJAGTAP/Html-Css-clone-project/tree/main/kidz-world" },
    { id: 6, title: "Calculator", description: "A responsive calculator supporting basic arithmetic operations.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/Calculater.png?raw=true", tags: ["Html", "CSS"], category: "clone", github: "https://github.com/NAGESHJAGTAP/Html-Css-clone-project/tree/main/calculaturs" },
    { id: 7, title: "Sudoku", description: "An interactive Sudoku game with an easy-to-use interface.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/sudoku.png?raw=true", tags: ["Html", "CSS"], category: "clone", github: "https://github.com/NAGESHJAGTAP/Html-Css-clone-project/tree/main/Sudoku" },
    { id: 8, title: "Ludo", description: "A digital Ludo game with dice roll mechanics and multiplayer support.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/ludo.png?raw=true", tags: ["Html", "CSS"], category: "clone", github: "https://github.com/NAGESHJAGTAP/Html-Css-clone-project/tree/main/ludo" },
    { id: 9, title: "Superwars", description: "A superhero vs. villain battle game with turn-based combat.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/superw.png?raw=true", tags: ["Html", "CSS"], category: "clone", github: "https://github.com/NAGESHJAGTAP/Html-Css-clone-project/tree/main/superwars" },
    // Figma Projects (Using placeholder images; replace with actual hosted Figma screenshot URLs)
    { id: 1, title: "Coding Gita Website", description: "A Figma design for a coding bootcamp with an intuitive layout.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/Codinggita.png?raw=true", tags: ["Figma", "UX Design", "Prototyping"], category: "figma", figma: "https://www.figma.com/design/IX2rMaAgSz81LEsBZdtWPT/Untitled?node-id=0-1&t=NXMtOWKAb6FU7Lk0-1" },
    { id: 2, title: "CouponSwap Website", description: "A user-friendly Figma design for trading coupons.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/Coupon.png?raw=true", tags: ["Figma", "UI Design"], category: "figma", figma: "https://www.figma.com/design/r8LuUXUXeKoQy7hR5KIR3W/CoupenSwap?node-id=7-485&t=uQXo4JlCN5aQBSF5-1" },
    { id: 3, title: "Imagine with Serendipity", description: "A creative Figma concept with elegant UI elements.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/imagin.png?raw=true", tags: ["Figma", "UX Design"], category: "figma", figma: "https://www.figma.com/design/erbmWnDPWqwe01v2RjdST8/Untitled?node-id=0-197&t=51tdF4C1cp9w2tEW-1" },
    { id: 4, title: "Breath Natural", description: "A nature-inspired Figma design promoting wellness.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/Nature.png?raw=true", tags: ["Figma", "UX Design"], category: "figma", figma: "https://www.figma.com/design/0ZEWPi1xavgJmRadnEQsWL/Untitled?node-id=1-2&t=kPB1tHFbXR56JWcO-1" },
    { id: 5, title: "Instagram Mobile Design", description: "A Figma design replicating Instagram’s mobile UI.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/instagram.png?raw=true", tags: ["Figma", "UX Design", "Prototyping"], category: "figma", figma: "https://www.figma.com/design/PAjCEAXYI7mm6OHvQVvi4Y/Untitled?node-id=4-39&t=aRCUYXPTIQmNTLgy-1" },
    { id: 6, title: "DualSense Controller", description: "A Figma design of the DualSense wireless controller.", image: "https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/remote.png?raw=true", tags: ["Figma", "UX Design"], category: "figma", figma: "https://www.figma.com/design/IX2rMaAgSz81LEsBZdtWPT/Untitled?node-id=21-2&t=zYFvbj9xzJirlZG3-1" },
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const filteredProjects = projects.filter(project => activeCategory === 'all' || project.category === activeCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      from_name: form.name.value,
      from_email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const serviceID = 'service_51qbiv2';
    const templateID = 'template_zka838p';
    const userID = 'xTWhjXRI-wCe3nxjH';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setFormStatus('Message sent successfully!');
        form.reset();
        setTimeout(() => setFormStatus(''), 3000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setFormStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Normalize CSS for cross-browser consistency */}
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        *, *:before, *:after {
          box-sizing: inherit;
        }
      `}</style>

      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-50 z-0"
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="fixed inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: Math.random() * 0.5 + 0.1 }}
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <header className="fixed top-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-lg sm:text-xl font-bold text-white">
            <span className="text-blue-400">Full-Stack</span> Web Developer
          </a>
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:text-blue-400 ${activeSection === item.id ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-gray-300 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
        <div className={`md:hidden bg-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="container mx-auto px-4 sm:px-6 py-4">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block py-2 text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:text-blue-400 ${activeSection === item.id ? 'text-blue-400' : 'text-gray-300'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
          <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                <h4 className="text-blue-400 text-base sm:text-lg mb-2 font-medium">Full-Stack Developer</h4>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Hey, <span className="text-blue-400"> I'm </span> Nagesh <span className="text-blue-400"> Jagtap </span> 
                </h1>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 max-w-md mx-auto md:mx-0">
                  I am a Full Stack Developer with expertise in building modern web applications. Skilled in React for the frontend, and Node.js with MongoDB for the backend, I create seamless, scalable, and efficient solutions. Proficient in JavaScript, HTML, CSS, Git/GitHub, and Figma, I focus on delivering high-quality, user-centric experiences through intuitive designs and smooth functionality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a href="#projects" className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-300">View Projects</a>
                  <a href="#contact" className="px-4 py-2 sm:px-6 sm:py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-medium rounded-md transition-all duration-300">Contact Me</a>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto relative">
                  <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden">
                    <img src="https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/shubhamjag.png?raw=true" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 border-8 border-blue-400 rounded-lg z-0 hidden sm:block"></div>
                  <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 border-8 border-blue-400 rounded-lg z-0 hidden sm:block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-16 sm:py-20 bg-gray-800 bg-opacity-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Education & <span className="text-blue-400">Credentials</span></h2>
              <div className="w-16 sm:w-20 h-1 bg-blue-400 mx-auto"></div>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-6 sm:left-8 top-0 h-full w-1 bg-blue-400 bg-opacity-20"></div>
                {[
                   { year: "2024 - 2028", degree: "B.Tech CSE (Full-Stack Web Development)", institution: "Rai University, Ahmedabad", description: "Pursuing B.Tech in Computer Science Engineering at Rai University, Ahmedabad (2024-2028), specializing in Full-Stack Web Development. Learning React.js, Node.js, MongoDB, JavaScript, and UI/UX design, with a focus on scalable application development, database management, and performance optimization." },
                   { year: "2024 - 2028", degree: "Full-Stack Web Development", institution: "Coding Gita Bootcamp", description: "Enrolled in the Full-Stack Web Development program at Coding Gita Bootcamp (2024-2028), focusing on modern web technologies, scalable architecture, and real-world project development. Learning React.js, Node.js, MongoDB, JavaScript, and UI/UX design, with an emphasis on performance optimization, backend development, and API integration." },
                   { year: "2021 - 2023", degree: "11th & 12th (Maharashtra Secondary & Higher Secondary Education Board)", institution: "Sukhadevanand Junior College, Bhandegaon", description: "Completed 12th grade in the Science stream with Mathematics from Sukhadevanand Junior College, Bhandegaon (2021-2023) under the Maharashtra Secondary & Higher Secondary Education Board. Gained a strong foundation in Mathematics, Physics, and Analytical Problem-Solving, enhancing logical reasoning and quantitative skills." },
                   { year: "2020 - 2021", degree: "10th (Maharashtra Secondary & Higher Secondary Education Board)", institution: "Sukhadevanand School & High School Bhandegaon", description: "Completed 10th grade with a strong foundation in Science and Mathematics from Sukhadevanand School & High School Bhandegaon (2020-2021). Developed analytical and problem-solving skills, with a keen interest in logical reasoning and quantitative analysis." },
                ].map((edu, index) => (
                  <div key={index} className="relative mb-8 sm:mb-12">
                    <div className="flex items-start">
                      <div className="min-w-12 sm:min-w-16 h-12 sm:h-16 bg-gray-900 rounded-full border-4 border-blue-500 flex items-center justify-center z-10">
                        <span className="text-blue-400 font-bold text-xs sm:text-sm">{edu.year.split('-')[0]}</span>
                      </div>
                      <div className="ml-6 sm:ml-8 p-4 sm:p-6 bg-gray-900 rounded-lg border-l-4 border-blue-400 shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-800">
                        <span className="inline-block px-2 sm:px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-xs mb-3">{edu.year}</span>
                        <h3 className="text-lg sm:text-xl font-bold mb-1">{edu.degree}</h3>
                        <p className="text-blue-400 mb-2 text-sm sm:text-base">{edu.institution}</p>
                        <p className="text-gray-400 text-xs sm:text-sm">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-blue-400">Projects</span></h2>
              <div className="w-16 sm:w-20 h-1 bg-blue-400 mx-auto mb-6 sm:mb-8"></div>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
                {["all", "clone", "figma"].map((category) => (
                  <button 
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"}`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)} Projects
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={`${project.category}-${project.id}`} 
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group"
                >
                  <div className="relative overflow-hidden h-48 sm:h-64">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                      <span className="px-2 sm:px-3 py-1 bg-blue-500 text-xs text-white rounded-full">{project.category}</span>
                      <h3 className="text-lg sm:text-xl font-bold mt-2 text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-gray-400 mb-4 text-xs sm:text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4 sm:gap-6 justify-start">
                      {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium">View Project</a>}
                      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium">Code</a>}
                      {project.figma && <a href={project.figma} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium">Figma Design</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 sm:py-20 bg-gray-800 bg-opacity-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-blue-400">Skills</span></h2>
              <div className="w-16 sm:w-20 h-1 bg-blue-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Core Technologies</h3>
                <ResponsiveContainer width="100%" height={250} minHeight={200}>
                  <BarChart data={skillData} layout="vertical">
                    <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
                    <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="level" fill="#3b82f6" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Skill Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { category: "Frontend", skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
                    { category: "Backend", skills: ["Node.js", "Express", "RESTful APIs"] },
                    { category: "Database", skills: ["MongoDB"] },
                    { category: "DevOps", skills: ["Git/GitHub", "Vercel", "Netlify"] },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-blue-400">
                      <h4 className="text-base sm:text-lg font-bold mb-3 text-blue-400">{item.category}</h4>
                      <ul className="text-gray-300 space-y-2 text-xs sm:text-sm">
                        {item.skills.map((skill, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto">
                  <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden">
                    <img src="https://github.com/NAGESHJAGTAP/full_stack_web_development_personal_Portfollio/blob/main/portfollio/src/assets/cu.png?raw=true" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 border-8 border-blue-400 rounded-lg z-0 hidden sm:block"></div>
                  <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 border-8 border-blue-400 rounded-lg z-0 hidden sm:block"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-blue-400 text-base sm:text-lg mb-2">Get to Know</h4>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                  <div className="w-16 sm:w-20 h-1 bg-blue-400 mb-4 sm:mb-6 mx-auto lg:mx-0"></div>
                </div>
                <div className="mb-6 sm:mb-8">
                  <p className="text-gray-300 mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
                    I am a highly motivated Full-Stack Web Developer with a passion for building modern, scalable, and high-performance web applications. With expertise in React.js for frontend development and Node.js with MongoDB for backend architecture, I specialize in creating seamless, user-friendly, and efficient digital solutions.
                  </p>
                  <p className="text-gray-300 mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
                    My technical skills include JavaScript, React.js, Node.js, MongoDB, MySQL, Express.js, RESTful APIs, Tailwind CSS, HTML, CSS, and Git/GitHub, complemented.ConcurrentModificationException by experience in UI/UX design using Figma. This enables me to develop applications that are both functional and visually appealing, ensuring an optimal user experience.
                  </p>
                  <p className="text-gray-300 mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
                    I thrive on solving complex problems, optimizing performance, and implementing best coding practices to enhance usability, security, and scalability. Whether it's designing interactive UIs, managing databases, or developing RESTful APIs, I am committed to delivering high-quality, robust solutions.
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed italic">
                    Currently, I am refining my skills under the mentorship of <span className="text-blue-400 font-semibold">Neel Sir (Co-founder, Coding Gita BootCamp)</span>, gaining industry insights and hands-on experience in modern web development and DevOps practices.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#contact" className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-300">Let's Talk</a>
                  <a href="https://drive.google.com/file/d/1d-L9YFa2_mmobNPT56cUQTSRYa2tVNgk/view?usp=sharing" download className="px-4 py-2 sm:px-6 sm:py-3 border border-blue-600 text-blue-400 hover:bg-blue-700 hover:text-white font-medium rounded-md transition-all duration-300">Download Resume</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-20 bg-gray-800 bg-opacity-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-blue-400">Touch</span></h2>
              <div className="w-16 sm:w-20 h-1 bg-blue-400 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-md mx-auto">Have a project or collaboration in mind? I'd love to hear from you!</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
              <div className="lg:col-span-2">
                <div className="bg-gray-900 p-4 sm:p-8 rounded-lg shadow-lg h-full">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Info</h3>
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      { icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z", label: "Email", value: "nageshjagtap063@gmail.com", href: "mailto:nageshjagtap063@gmail.com" },
                      { icon: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z", label: "Phone", value: "+91 8999301793" },
                      { icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z", label: "Location", value: "Ahmedabad, Gujarat, India" },
                      { icon: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.5h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-11h3v1.5c.88-.68 1.98-1 3.5-1 2.76 0 5 2.24 5 5v5.5z", label: "LinkedIn", value: "nagesh-jagtap", href: "https://www.linkedin.com/in/nagesh-jagtap-9bb56031a/" },
                      { icon: "M12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm5.66 9.66c.01-.01.01-.03 0-.04-.01-.01-.03-.01-.04 0-.36.36-1.06.34-1.42-.02l-2.2-2.2c-.39-.39-1.02-.39-1.41 0l-2.2 2.2c-.36.36-1.06.38-1.42.02-.01-.01-.03-.01-.04 0-.01.01-.01.03 0 .04 1.42 1.42 3.72 1.42 5.14 0l2.2-2.2 2.2 2.2c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-2.2-2.2z", label: "GitHub", value: "NAGESHJAGTAP", href: "https://github.com/NAGESHJAGTAP" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                            <path d={item.icon} />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs sm:text-sm">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} target={item.label === "GitHub" || item.label === "LinkedIn" ? "_blank" : undefined} rel="noopener noreferrer" className="text-blue-400 hover:underline text-xs sm:text-sm">{item.value}</a>
                          ) : (
                            <p className="text-blue-400 text-xs sm:text-sm">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="bg-gray-900 p-4 sm:p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-gray-400 mb-1 sm:mb-2 text-xs sm:text-sm" htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" required className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white text-xs sm:text-sm" placeholder="Nagesh jagtap" />
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-1 sm:mb-2 text-xs sm:text-sm" htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" required className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white text-xs sm:text-sm" placeholder="nageshjagtap063@gmail.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-1 sm:mb-2 text-xs sm:text-sm" htmlFor="subject">Subject</label>
                      <input type="text" id="subject" name="subject" required className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white text-xs sm:text-sm" placeholder="Subject" />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-1 sm:mb-2 text-xs sm:text-sm" htmlFor="message">Message</label>
                      <textarea id="message" name="message" rows="4" required className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white resize-none text-xs sm:text-sm" placeholder="Hello...."></textarea>
                    </div>
                    <button type="submit" className="px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 w-full sm:w-auto text-xs sm:text-sm">Send Message</button>
                    {formStatus && <p className={`text-xs sm:text-sm mt-2 ${formStatus.includes('success') ? 'text-green-400' : 'text-red-400'}`}>{formStatus}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <a href="#home" className="text-lg sm:text-xl font-bold text-white">
                <span className="text-blue-400">Full-Stack</span> Web Developer
              </a>
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              {[
                { href: "https://github.com/NAGESHJAGTAP", icon: "M12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm5.66 9.66c.01-.01.01-.03 0-.04-.01-.01-.03-.01-.04 0-.36.36-1.06.34-1.42-.02l-2.2-2.2c-.39-.39-1.02-.39-1.41 0l-2.2 2.2c-.36.36-1.06.38-1.42.02-.01-.01-.03-.01-.04 0-.01.01-.01.03 0 .04 1.42 1.42 3.72 1.42 5.14 0l2.2-2.2 2.2 2.2c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-2.2-2.2z" },
                { href: "https://www.linkedin.com/in/nagesh-jagtap-9bb56031a/", icon: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.5h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-11h3v1.5c.88-.68 1.98-1 3.5-1 2.76 0 5 2.24 5 5v5.5z" },
                { href: "mailto:nageshjagtap063@gmail.com", icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" },
              ].map((item, index) => (
                <a key={index} href={item.href} target={item.href.includes("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d={item.icon} />
                  </svg>
                </a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-xs sm:text-sm">© {new Date().getFullYear()} All rights reserved. Designed with ❤️ by <a href="#" className="text-blue-400">Myself</a></p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="#home" className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm">Back to Top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;