import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#111827]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Cloud Learner, Problem Solver
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
                Hello! I&apos;m Nishant Kumar, a Computer Science undergraduate at
                Lovely Professional University, passionate about building
                full-stack and cloud-native applications.{" "}
                <span className="font-bold text-white">
                  I enjoy solving real problems with clean architecture and
                  practical deployment workflows.
                </span>
                
              </p>
              <p className="text-white">
                My recent projects include deploying an AI chatbot on AWS and
                shipping a cloud-native portfolio with Docker and Kubernetes.
                I&apos;m currently focused on improving DSA, backend systems, and
                DevOps fundamentals.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I have completed 350+ coding challenges across LeetCode,
                    Codeforces, and GFG, and I continuously upskill through
                    hands-on projects, certifications, and team collaboration.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Nishant Kumar
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-white">LinkedIn:</span>
                      <a
                        href="https://www.linkedin.com/in/nishxnt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300"
                      >
                        linkedin.com/in/nishxnt
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white">GitHub:</span>
                      <a
                        href="https://github.com/nishantdeploys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300"
                      >
                        github.com/nishantdeploys
                      </a>
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
