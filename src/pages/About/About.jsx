import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full-Stack Developer, AI & Blockchain Specialist
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Yossri Melki, a results-driven Full-Stack Developer
                with 3+ years of experience building high-performance systems.
                I specialize in scalable architectures, smart contracts, and AI
                integration. Currently pursuing my Bachelor's in Computer
                Science (Mobile Development) at ESPRIT, Tunisia's leading
                engineering school.
              </p>
              <p className="text-white">
                My expertise spans full-stack development, blockchain
                technology, and AI integration. I've architected platforms
                generating $75K+ combined monthly revenue, including BestOfficiel
                (eCommerce with $50K+ monthly transactions), T4Translation (multilingual
                platform with $25K+ monthly volume), and innovative AI-powered
                solutions like Richout and the MELKI Platform.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm passionate about leveraging cutting-edge technologies to
                    solve complex problems. From developing AI-powered
                    recruitment systems achieving 92% matching accuracy to
                    building blockchain solutions that reduce costs by 88%, I
                    thrive on creating impactful solutions. My technical arsenal
                    includes Next.js, Node.js, Solidity, Spring Boot, Flutter,
                    and expertise in cloud services (AWS), DevOps practices, and
                    modern AI/ML integration.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Yossri Melki
                    </cite>
                    <div className="flex items-center gap-2 text-gray-400">
                      <span>Full-Stack Developer | AI & Blockchain Specialist</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
