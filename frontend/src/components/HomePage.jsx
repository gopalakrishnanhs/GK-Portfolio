import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Linkedin,
  MapPin,
  Phone,
  ChevronRight
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const HomePage = () => {
  const navigate = useNavigate();

  const ctaTiles = [
    {
      id: "skills",
      title: "Technical Skills",
      description: "Frameworks, Tools & Technologies",
      icon: Code2,
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      id: "experience", 
      title: "Experience",
      description: "9+ Years in Mobile Development",
      icon: Briefcase,
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      id: "education",
      title: "Education & Certifications", 
      description: "Academic Background & Training",
      icon: GraduationCap,
      gradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      id: "contact",
      title: "Get In Touch",
      description: "Let's connect and collaborate",
      icon: Mail,
      gradient: "from-purple-500/20 to-cyan-500/20"
    }
  ];

  const handleTileClick = (sectionId) => {
    navigate(`/details/${sectionId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="container mx-auto px-6 pt-20 pb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                Gopala Krishnan H
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8"></div>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              React Native Developer with{" "}
              <span className="text-cyan-400 font-semibold">9+ years</span> of experience
              building scalable, cross-platform mobile applications
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">India</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">gopalakrishnanhs@gmail.com</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/gopala-krishnan-h-b21aa8a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">LinkedIn Profile</span>
              </a>
            </motion.div>


          </div>
        </motion.section>

        {/* CTA Tiles Section */}
        <motion.section 
          className="container mx-auto px-6 pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Discover My Journey
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ctaTiles.map((tile, index) => {
                const IconComponent = tile.icon;
                return (
                  <motion.div
                    key={tile.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                  >
                    <Card 
                      className={`relative group cursor-pointer overflow-hidden bg-gradient-to-br ${tile.gradient} backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10`}
                      onClick={() => handleTileClick(tile.id)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors duration-300">
                            <IconComponent className="w-8 h-8 text-cyan-400" />
                          </div>
                          <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors duration-300">
                          {tile.title}
                        </h3>
                        
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {tile.description}
                        </p>
                        
                        <div className="mt-6 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default HomePage;