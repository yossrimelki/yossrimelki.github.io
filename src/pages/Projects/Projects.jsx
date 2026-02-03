import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { X, ExternalLink, Github, Calendar, Code, Zap, Video, Image } from "lucide-react";
import melkiImage from "@/assets/images/melkiplatform.png";
import richoutImage from "@/assets/images/richout.png";
import gharianiImage from "@/assets/images/smg.png";
import t4tImage from "@/assets/images/t4t.png";
import bestofficielImage from "@/assets/images/bestofficial.png";
import bestofficielUI1 from "@/assets/images/bestofficial1.png";
import bestofficielUI2 from "@/assets/images/bestofficial2.png";

const projects = [
  
  {
    title: "Richout - AI Investor Networking Platform",
    description:
      "Built B2B platform connecting 500+ entrepreneurs with investors using WebRTC voice AI and intelligent search (85% match rate).",
    fullDescription:
      "Richout is an innovative AI-powered B2B networking platform that revolutionizes how entrepreneurs connect with investors. Leveraging WebRTC for real-time voice communication and advanced AI voice agents, the platform serves 500+ entrepreneurs with an impressive 85% match rate. Built with Next.js and MongoDB, Richout combines intelligent search algorithms with voice AI technology to facilitate meaningful connections between startups seeking funding and potential investors, streamlining the networking process and increasing successful partnership opportunities.",
    src: "networking.jpg",
    link: richoutImage,
    color: "#06b6d4",
    githubLink: "https://github.com/yossrimelki",
    liveLink: "https://www.richout.ai/",
    technologies: ["Next.js", "WebRTC", "AI Voice Agents", "MongoDB"],
    features: [
      "Connecting 500+ entrepreneurs with investors",
      "WebRTC-powered real-time voice communication",
      "AI voice agents for smart interactions",
      "Intelligent search with 85% match rate",
      "B2B networking platform",
      "MongoDB database for scalability",
    ],
    date: "2024",
  },
  {
    title: "MELKI Platform - Decentralized Legal Document Management",
    description:
      "Architected blockchain platform with three AI-powered generation methods serving 200+ users with 99.95% uptime.",
    fullDescription:
      "MELKI Platform is a cutting-edge decentralized legal document management system that leverages blockchain technology and artificial intelligence to revolutionize document handling. Deployed on Polygon with Arweave storage and PAdES signatures, the platform achieves 95% cost reduction through smart contracts and 99.65% faster workflow processing. Serving 200+ users with exceptional reliability, it combines Next.js frontend with Solidity smart contracts, distributed storage via IPFS and Arweave, and AI-powered document generation through OpenAI API.",
    src: "blockchain.jpg",
    link: melkiImage,
    color: "#8b5cf6",
    githubLink: "https://github.com/yossrimelki",
    liveLink: "https://melki-platform.com",
    technologies: ["Next.js", "Solidity", "Polygon", "Arweave", "IPFS", "OpenAI API", "Redis"],
    features: [
      "Three AI-powered document generation methods",
      "Serving 200+ users with 99.95% uptime",
      "Polygon smart contracts (95% cost reduction)",
      "Arweave decentralized storage",
      "PAdES signatures (99.65% faster workflow)",
      "IPFS distributed file system",
      "Redis caching for performance",
      "Blockchain-verified document authenticity",
    ],
    date: "2025",
    videos: [
      {
        title: "MELKI Platform Demo",
        url: "https://www.youtube.com/watch?v=eYwBFq0d3H0",
        description: "Complete demonstration of the decentralized legal document management platform"
      }
    ],
  },
  {
    title: "Ghariani - CRM & eCommerce",
    description:
      "Created dual-purpose platform for 300+ B2B clients processing 1,500+ monthly orders with automated invoicing.",
    fullDescription:
      "Ghariani is a comprehensive dual-purpose platform that seamlessly integrates CRM functionality with a robust eCommerce system. Built to serve 300+ B2B clients, it processes over 1,500 monthly orders with automated invoicing, streamlining business operations and enhancing client relationships. The platform features advanced CRM capabilities for client management, integrated payment gateways, and SMTP email automation for efficient communication.",
    src: "rock.jpg",
    link: gharianiImage,
    color: "#10b981",
    githubLink: "https://github.com/yossrimelki",
    liveLink: "https://ghariani.tn",
    technologies: ["Symfony", "MySQL", "PHP", "SMTP", "Payment Gateway Integration", "Twig"],
    features: [
      "Dual-purpose CRM and eCommerce platform",
      "300+ B2B clients management",
      "1,500+ monthly orders processing",
      "Automated invoicing system",
      "Integrated payment gateway",
      "SMTP email automation",
    ],
    date: "2024",
    videos: [
      {
        title: "CRM Features & Landing Page",
        url: "https://www.youtube.com/watch?v=5y44gn1HUsk",
        description: "Overview of the landing page and first CRM features"
      },
      {
        title: "Integrated eCommerce System",
        url: "https://www.youtube.com/watch?v=f6nl86xmRGc",
        description: "Demonstration of the eCommerce functionality integrated within the CRM"
      }
    ],
  },
  {
    title: "T4Translation - Multilingual Platform",
    description:
      "Built translation platform serving 1,000+ clients in 15+ languages with $25K+ monthly transaction volume.",
    fullDescription:
      "T4Translation is a comprehensive multilingual platform designed to connect clients with professional translation services across 15+ languages. Processing $25K+ in monthly transactions, the platform serves over 1,000 clients with seamless payment integration, cloud-based file management, and automated workflow systems. Built with a modern tech stack combining MERN and Astro.js for optimal performance and scalability.",
    src: "tree.jpg",
    link: t4tImage,
    color: "#3b82f6",
    githubLink: "https://github.com/yossrimelki",
    liveLink: "https://t4translation.com",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Astro.js", "Cloudinary", "Stripe", "PayPal"],
    features: [
      "Support for 15+ languages",
      "1,000+ active clients",
      "$25K+ monthly transaction volume",
      "Integrated payment processing (Stripe/PayPal)",
      "Cloud-based file management with Cloudinary",
      "Automated translation workflow",
    ],
    date: "2024",
  },
  {
    title: "BestOfficiel - eCommerce Platform",
    description:
      "Comprehensive eCommerce platform processing $50K+ monthly transactions for 2,000+ customers with full-stack architecture.",
    fullDescription:
      "BestOfficiel is a robust full-stack eCommerce platform built to handle high-volume transactions and scale seamlessly. Processing over $50K in monthly transactions and serving 2,000+ customers, the platform integrates advanced payment processing with Stripe, cloud infrastructure on AWS, and global content delivery via CloudFront CDN. Built with the MERN stack and Next.js for optimal performance, SEO, and user experience.",
    src: "commerce.jpg",
    link: bestofficielImage,
    color: "#f97316",
    githubLink: "https://github.com/yossrimelki",
    liveLink: "https://bestofficiel.com",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Next.js", "AWS", "Stripe", "CloudFront CDN"],
    features: [
      "Processing $50K+ monthly transactions",
      "Serving 2,000+ active customers",
      "Integrated Stripe payment gateway",
      "AWS cloud infrastructure",
      "CloudFront CDN for global delivery",
      "Server-side rendering with Next.js",
      "Real-time inventory management",
      "Advanced analytics dashboard",
    ],
    date: "2024",
    screenshots: [bestofficielUI1, bestofficielUI2],
  },
  
 
];

export default function Projects() {
  const container = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                project={project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                onOpenDetails={() => setSelectedProject(project)}
              />
            );
          })}
        </section>
        
        {/* Project Details Modal */}
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  project,
  progress,
  range,
  targetScale,
  onOpenDetails,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card cursor-pointer"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
        onClick={onOpenDetails}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={project.link}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: project.color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
            
            {/* Click to view details indicator */}
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-2 rounded-full text-xs flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>View Details</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {project.title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {project.description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={project.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color: project.color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={project.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color: project.color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Project Details Modal Component
function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-2xl shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Project Image */}
        <div className="relative h-64 md:h-96 overflow-hidden rounded-t-2xl">
          <img
            src={project.link}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(to bottom, transparent, ${project.color})`,
            }}
          />
        </div>

        {/* Project Content */}
        <div className="p-6 md:p-10">
          {/* Title and Date */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" style={{ color: project.color }} />
              About the Project
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" style={{ color: project.color }} />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition-colors"
                  style={{ color: project.color }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: project.color }}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Videos */}
          {project.videos && project.videos.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Video className="w-5 h-5" style={{ color: project.color }} />
                Project Demonstrations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.videos.map((video, index) => (
                  <div key={index} className="space-y-3">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-800">
                      <iframe
                        width="100%"
                        height="100%"
                        src={video.url.replace("watch?v=", "embed/")}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0"
                      ></iframe>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{video.title}</h4>
                      <p className="text-sm text-gray-400">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* UI Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Image className="w-5 h-5" style={{ color: project.color }} />
                UI Interface Showcase
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="space-y-3">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700 hover:border-zinc-600 transition-colors">
                      <img
                        src={screenshot}
                        alt={`${project.title} UI Screenshot ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-sm text-gray-400 text-center">
                      Interface View {index + 1}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-zinc-800">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{
                backgroundColor: project.color,
                color: project.color === "#fff" ? "#000" : "#fff",
              }}
            >
              <ExternalLink className="w-5 h-5" />
              View Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-semibold transition-all hover:scale-105"
            >
              <Github className="w-5 h-5" />
              View Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  project: PropTypes.object.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  onOpenDetails: PropTypes.func.isRequired,
};

ProjectDetailsModal.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
