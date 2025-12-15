import Nav2 from "@/components/ui/Nav2";
import useStoreData from "@/store/store";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

function About() {
  const isLoggedIn = useStoreData((state) => state.isLoggedIn);
  return (
    <section
      id="about"
      className=" bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] 
      flex flex-col items-center justify-between
      "
    >
      {isLoggedIn && <Nav2 />}
      {/* Heading */}
      <div className="max-w-4xl py-3 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[var(--color-accent)]">
          About Eureka
        </h2>
        <p className="text-text-secondary text-lg mb-12 leading-relaxed">
          Eureka is a passion project by{" "}
          <span className="text-[var(--color-primary)] font-semibold">
            Matrix
          </span>
          , a developer who believes coding should sharpen your thinking—not
          your copy-paste skills. Inspired by learners who struggle with DSA
          intuition, Eureka was built to guide you step-by-step, helping you{" "}
          <span className="text-[var(--color-accent)]">think like a coder</span>{" "}
          and understand the logic behind every solution.
        </p>
      </div>

      {/* About Developer */}
      <div className="max-w-3xl text-center mb-16">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[var(--color-primary)]">
          About the Creator
        </h3>
        <p className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed">
          I'm a 3rd-year Computer Science student and a full-stack MERN
          developer with a growing passion for AI. I love building tools that
          make learning smarter, simpler, and more intuitive. My mission is to
          create technology that helps others learn the way I wish I had when
          starting out.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <a
            href="https://github.com/Mahammed-Sharief-Shaik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)] text-2xl transition-all duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mahammed-sharief-shaik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)] text-2xl transition-all duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mahammedshariefsk@gmail.com"
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)] text-2xl transition-all duration-200"
          >
            <GrMail />
          </a>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-4xl text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[var(--color-primary)]">
          How Eureka Works
        </h3>
        <p className="text-[var(--color-text-secondary)] text-base sm:text-lg mb-6 leading-relaxed">
          Eureka helps you approach DSA problems the right way. Instead of
          handing over solutions, it provides{" "}
          <span className="text-[var(--color-accent)] font-medium">
            AI-generated hints
          </span>{" "}
          that guide your reasoning. You learn to connect patterns, break down
          logic, and build answers from scratch — just like a real
          problem-solver.
        </p>

        {/* <p className="text-[var(--color-text-secondary)] italic">
          Built with 💜, logic, and a spark of AI — by Sharief.
        </p> */}
      </div>
    </section>
  );
}

export default About;
