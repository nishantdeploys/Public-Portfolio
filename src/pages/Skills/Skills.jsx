import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Cloud, Users } from "lucide-react";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaAws,
  FaLinux,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiGo,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { BsFileEarmarkCode } from "react-icons/bs";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="skill-card group relative overflow-hidden bg-gray-900/80 border-gray-700 transition-all duration-300">
    <div className="skill-card-shimmer absolute inset-0 bg-gradient-to-r from-transparent to-transparent animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`skill-card-icon p-3 rounded-xl bg-gray-800/50 ${color} transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="skill-badge group/badge relative bg-gray-800/50 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300"
          >
            <span className="skill-badge-icon transform transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      color: "text-blue-400",
      skills: [
        { name: "C", icon: <SiC className="w-4 h-4 text-[#A8B9CC]" /> },
        {
          name: "C++",
          icon: <SiCplusplus className="w-4 h-4 text-[#00599C]" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />,
        },
        { name: "Java", icon: <FaJava className="w-4 h-4 text-[#007396]" /> },
        { name: "Go", icon: <SiGo className="w-4 h-4 text-[#00ADD8]" /> },
        { name: "SQL", icon: <Database className="w-4 h-4 text-[#60A5FA]" /> },
      ],
    },
    {
      icon: Database,
      title: "Frameworks",
      color: "text-green-400",
      skills: [
        {
          name: "HTML",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Tools & Platforms",
      color: "text-purple-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        {
          name: "GitHub",
          icon: <FaGithub className="w-4 h-4 text-[#E5E7EB]" />,
        },
        {
          name: "CloudStack",
          icon: <Cloud className="w-4 h-4 text-[#EF4444]" />,
        },
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "text-pink-400",
      skills: [
        { name: "Problem-Solving", icon: <Code2 className="w-4 h-4 text-[#F472B6]" /> },
        { name: "Team Player", icon: <Users className="w-4 h-4 text-[#60A5FA]" /> },
        { name: "Leadership", icon: <Users className="w-4 h-4 text-[#34D399]" /> },
        { name: "Adaptability", icon: <Cloud className="w-4 h-4 text-[#FBBF24]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#111827] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
