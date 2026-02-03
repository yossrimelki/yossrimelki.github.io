import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Smartphone, Database, Blocks, Cpu, Cloud, Bot, Wrench } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaAngular,
  FaJava,
  FaPhp,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiRedux,
  SiVite,
  SiExpress,
  SiSpringboot,
  SiSymfony,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiMysql,
  SiRedis,
  SiSolidity,
  SiEthereum,
  SiKubernetes,
  SiJenkins,
  SiTensorflow,
  SiOpenai,
  SiStripe,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiRust,
  SiAstro,
} from "react-icons/si";
import { TbBrandVscode, TbBrandCpp } from "react-icons/tb";
import { BsFileEarmarkCode } from "react-icons/bs";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
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
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
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
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
        { name: "Angular", icon: <FaAngular className="w-4 h-4 text-[#DD0031]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "Astro.js", icon: <SiAstro className="w-4 h-4 text-[#FF5D01]" /> },
        { name: "Vite.js", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "HTML/CSS", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-white" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="w-4 h-4 text-[#6DB33F]" /> },
        { name: "Symfony", icon: <SiSymfony className="w-4 h-4 text-white" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-4 h-4 text-[#E10098]" /> },
        { name: "REST APIs", icon: <Code2 className="w-4 h-4 text-[#FF6C37]" /> },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      color: "text-purple-400",
      skills: [
        { name: "Flutter", icon: <SiFlutter className="w-4 h-4 text-[#02569B]" /> },
        { name: "React Native", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Android", icon: <FaAndroid className="w-4 h-4 text-[#3DDC84]" /> },
        { name: "iOS", icon: <FaApple className="w-4 h-4 text-white" /> },
        { name: "Kotlin", icon: <SiKotlin className="w-4 h-4 text-[#7F52FF]" /> },
        { name: "Swift", icon: <SiSwift className="w-4 h-4 text-[#FA7343]" /> },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-cyan-400",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
        { name: "Redis", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
        { name: "MS SQL Server", icon: <Database className="w-4 h-4 text-[#CC2927]" /> },
      ],
    },
    {
      icon: Blocks,
      title: "Blockchain",
      color: "text-indigo-400",
      skills: [
        { name: "Ethereum", icon: <SiEthereum className="w-4 h-4 text-[#3C3C3D]" /> },
        { name: "Solidity", icon: <SiSolidity className="w-4 h-4 text-[#363636]" /> },
        { name: "Web3.js", icon: <Code2 className="w-4 h-4 text-[#F16822]" /> },
        { name: "Smart Contracts", icon: <Blocks className="w-4 h-4 text-[#627EEA]" /> },
        { name: "IPFS", icon: <Database className="w-4 h-4 text-[#65C2CB]" /> },
        { name: "Polygon", icon: <Blocks className="w-4 h-4 text-[#8247E5]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="w-4 h-4 text-[#326CE5]" /> },
        { name: "Jenkins", icon: <SiJenkins className="w-4 h-4 text-[#D24939]" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Bot,
      title: "AI/ML",
      color: "text-pink-400",
      skills: [
        { name: "OpenAI API", icon: <SiOpenai className="w-4 h-4 text-[#412991]" /> },
        { name: "NLP", icon: <Bot className="w-4 h-4 text-[#FF6B6B]" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="w-4 h-4 text-[#FF6F00]" /> },
        { name: "GPT Integration", icon: <Bot className="w-4 h-4 text-[#10A37F]" /> },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Design",
      color: "text-yellow-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop className="w-4 h-4 text-[#31A8FF]" /> },
        { name: "Illustrator", icon: <SiAdobeillustrator className="w-4 h-4 text-[#FF9A00]" /> },
        { name: "After Effects", icon: <SiAdobeaftereffects className="w-4 h-4 text-[#9999FF]" /> },
        { name: "Premiere Pro", icon: <SiAdobepremierepro className="w-4 h-4 text-[#9999FF]" /> },
        { name: "Stripe", icon: <SiStripe className="w-4 h-4 text-[#008CDD]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
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
