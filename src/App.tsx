import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail, MessageCircle, Sparkles, Cpu, Database, Workflow, Rocket, BrainCircuit, Target, TrendingUp, Globe, Briefcase } from "lucide-react";const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const focusAreas = [
  {
    title: "AI & Automation",
    description:
      "Designing intelligent workflows that remove friction, speed up operations, and turn repetitive work into systems.",
    icon: BrainCircuit,
  },
  {
    title: "Backend Systems",
    description:
      "Building the logic behind digital products through APIs, structured architecture, and scalable backend foundations.",
    icon: Database,
  },
  {
    title: "Workflow Design",
    description:
      "Connecting tools, data, and actions into reliable operational flows that create leverage for businesses.",
    icon: Workflow,
  },
  {
    title: "Startup Building",
    description:
      "Exploring ideas, testing execution, and developing the mindset required to build technology with real market value.",
    icon: Rocket,
  },
];

const techStack = [
  "Python",
  "FastAPI",
  "APIs",
  "Automation",
  "TypeScript",
  "React",
  "Git & GitHub",
  "SQL / PostgreSQL",
  "Prompt Engineering",
  "n8n",
];

const projects = [
  {
    title: "OCR Receipt API",
    tag: "Backend / AI",
    description:
      "API-focused work for extracting visible data from receipts and transaction proofs, combining structured processing, OCR-oriented logic, and real-world automation use cases.",
  },
  {
    title: "Workflow Automations",
    tag: "Automation",
    description:
      "Operational flows built around messaging, support, process triggers, and connected tools — designed to reduce manual work and improve execution speed.",
  },
  {
    title: "Portfolio & Digital Presence",
    tag: "Frontend",
    description:
      "A premium personal portfolio designed to communicate direction, technical positioning, and builder identity with a stronger professional standard.",
  },
];

const journey = [
  "Learning fast and building in public through real technical exploration.",
  "Developing skills across automation, APIs, backend thinking, and AI systems.",
  "Turning curiosity into execution through projects, experiments, and structured discipline.",
  "Positioning for a future at the intersection of technology, systems, and entrepreneurship.",
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {

  return (
    <motion.div
      variants={fadeUp}
      className="max-w-3xl"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/60 backdrop-blur">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function EnzoFounderPortfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06070b] text-white">
      
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[#04050a]" />

        <div className="absolute inset-0 overflow-hidden opacity-[0.95]">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              initial={{ y: "-120%", opacity: 0 }}
              animate={{ y: "120%", opacity: [0, 1, 0] }}
              transition={{
                duration: 8 + (i % 5),
                repeat: Infinity,
                delay: i * 0.45,
                ease: "linear",
              }}
              className="absolute top-0 font-mono text-[11px] leading-[11px] tracking-[0.18em] text-cyan-300/95"
              style={{
                left: `${4 + i * 5.5}%`,
                textShadow: "0 0 8px rgba(56,189,248,0.85)",
              }}
            >
              {Array.from({ length: 44 }).map((__, j) => (
                <div key={j} className="mb-1 whitespace-pre">
                  {j % 6 === 0
                    ? "01101001"
                    : j % 6 === 1
                    ? "SYS_CORE"
                    : j % 6 === 2
                    ? "11010110"
                    : j % 6 === 3
                    ? "AI_NODE"
                    : j % 6 === 4
                    ? "01011100"
                    : "TS/SQL"}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <div
          className="absolute inset-0 opacity-[0.38] origin-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(96,165,250,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.18) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            transform: "perspective(1200px) rotateX(76deg) scale(1.8)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 55%, rgba(59,130,246,0.22), transparent 18%), radial-gradient(circle at 50% 50%, rgba(37,99,235,0.22), transparent 34%), linear-gradient(180deg, rgba(2,6,23,0.18), rgba(2,6,23,0.78))",
          }}
        />

        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`beam-${i}`}
              initial={{ opacity: 0.15, scaleY: 0.9 }}
              animate={{ opacity: [0.12, 0.45, 0.12], scaleY: [0.9, 1.08, 0.9] }}
              transition={{
                duration: 4.8 + i * 0.3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              className="absolute top-[-10%] h-[120%] w-px bg-gradient-to-b from-transparent via-cyan-300/90 to-transparent"
              style={{
                left: `${10 + i * 8.5}%`,
                transform: `skewX(${i % 2 === 0 ? -12 : 12}deg)`,
                filter: "blur(1px)",
              }}
            />
          ))}
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 18%, rgba(255,255,255,0.08), transparent 20%), radial-gradient(circle at 20% 20%, rgba(59,130,246,0.12), transparent 24%), radial-gradient(circle at 80% 10%, rgba(14,165,233,0.12), transparent 26%)",
          }}
        />

        <div className="absolute inset-0 bg-black/35" />
      </div>

      <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#04050a]/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-sm font-medium tracking-[0.25em] text-white/80 uppercase">
            Enzo Recalde
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#focus" className="transition hover:text-white">Focus</a>
            <a href="#journey" className="transition hover:text-white">Journey</a>
            <a href="#vision" className="transition hover:text-white">Vision</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/60 backdrop-blur">
              <Target className="h-4 w-4" />
              Young Tech Builder • AI • Systems • Automation
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-[96px]"
            >
              Enzo Recalde
              <span className="mt-3 block text-white/45">Focused on AI, systems, and digital execution</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl"
            >
              I’m a tech-driven builder focused on automation, AI, backend systems, and digital leverage. I care about building real capability, shipping practical systems, and turning technical skill into scalable value through execution.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#vision"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/85 transition hover:bg-white/[0.07]"
              >
                Let’s Work Together
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-2xl" />
            <Card className="relative overflow-hidden p-0">
              <div className="border-b border-white/10 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Identity Panel</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">Founder Trajectory</h3>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    In Motion
                  </div>
                </div>
              </div>

              <div className="relative p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(86,145,255,0.18),transparent_28%)]" />
                <div className="relative grid gap-4">
                  <div className="rounded-[28px] border border-white/10 bg-black/30 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">Current Direction</p>
                    <div className="mt-4 grid gap-3">
                      {[
                        "AI workflows",
                        "Automation systems",
                        "APIs & backend logic",
                        "Startup thinking",
                      ].map((item) => (
                        <div key={item} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                          <span className="text-sm text-white/80">{item}</span>
                          <span className="h-2 w-2 rounded-full bg-white/80" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                      <Cpu className="h-5 w-5 text-white/80" />
                      <p className="mt-8 text-sm text-white/45">Mode</p>
                      <p className="mt-1 text-lg font-medium text-white">Build • Learn • Iterate</p>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                      <TrendingUp className="h-5 w-5 text-white/80" />
                      <p className="mt-8 text-sm text-white/45">Trajectory</p>
                      <p className="mt-1 text-lg font-medium text-white">Long-Term Compounding</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
            <SectionTitle
              eyebrow="About"
              title="I’m building a career around systems, leverage, and serious long-term growth."
              description="This is not a static portfolio. It is the digital identity of someone deliberately building capability — combining technical skill, strategic thinking, and execution to create value through technology."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div variants={fadeUp}>
                <Card className="h-full p-8">
                  <p className="text-lg leading-8 text-white/72">
                    I’m focused on becoming exceptional at the intersection of <span className="text-white">automation</span>, <span className="text-white">AI</span>, <span className="text-white">backend systems</span>, and <span className="text-white">digital business</span>. My mindset is simple: learn fast, build constantly, think in systems, and position early for a much bigger future.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-white/60">
                    I’m still early — and that matters. Because this phase is about building real depth, compounding skill, and developing the kind of clarity and execution that create uncommon outcomes over time.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="h-full p-8">
                  <div className="space-y-6">
                    {[
                      ["Core mindset", "Builder first. Systems-oriented. Long-term."] ,
                      ["Current focus", "AI workflows, automation, APIs, backend thinking."] ,
                      ["Operating style", "Curious, disciplined, strategic, high-agency."] ,
                      ["End game", "Build leverage, create value, become elite in execution."],
                    ].map(([label, value]) => (
                      <div key={label} className="border-b border-white/8 pb-5 last:border-b-0 last:pb-0">
                        <p className="text-xs uppercase tracking-[0.22em] text-white/38">{label}</p>
                        <p className="mt-2 text-base text-white/80">{value}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="focus" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <SectionTitle
              eyebrow="Focus Areas"
              title="What I’m building into."
              description="A strategic mix of technical capabilities and founder-oriented thinking designed to create real leverage over time."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {focusAreas.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} variants={fadeUp}>
                    <Card className="h-full p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                        <Icon className="h-5 w-5 text-white/85" />
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-base leading-7 text-white/62">{item.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        <section id="stack" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <SectionTitle
              eyebrow="Tech Stack"
              title="What I already work with."
              description="These are the tools and technologies that currently shape how I learn, build systems, automate workflows, and think through digital execution."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div variants={fadeUp}>
                <Card className="h-full p-8">
                  <p className="text-lg leading-8 text-white/72">
                    My stack is centered around <span className="text-white">automation</span>, <span className="text-white">backend logic</span>, <span className="text-white">data structure</span>, and <span className="text-white">practical system building</span>. I’m focused on using these tools not just to code, but to create leverage.
                  </p>
                  <p className="mt-6 text-base leading-7 text-white/60">
                    This foundation supports the direction I’m building toward: AI workflows, connected systems, scalable logic, and digital products with real utility.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {techStack.map((tech) => (
                    <Card key={tech} className="p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/20 hover:bg-white/[0.05]">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">Technology</p>
                      <h3 className="mt-4 text-2xl font-semibold text-white">{tech}</h3>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="journey" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
            <SectionTitle
              eyebrow="Journey"
              title="Built in motion, not in theory."
              description="I’m not positioning myself as finished. I’m positioning myself as someone who is compounding fast through learning, experimentation, and deliberate execution."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
              <motion.div variants={fadeUp}>
                <Card className="h-full p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/38">Trajectory</p>
                  <div className="mt-8 space-y-8">
                    {journey.map((step, idx) => (
                      <div key={step} className="relative pl-8">
                        <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-white" />
                        {idx !== journey.length - 1 ? (
                          <div className="absolute left-[5px] top-5 h-[calc(100%+16px)] w-px bg-white/15" />
                        ) : null}
                        <p className="text-base leading-7 text-white/76">{step}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="h-full p-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/38">Phase 01</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">Learning at speed</h3>
                      <p className="mt-3 text-white/62 leading-7">Absorbing the foundations of code, systems, automation, and problem-solving with intent.</p>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/38">Phase 02</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">Building real things</h3>
                      <p className="mt-3 text-white/62 leading-7">Turning theory into outputs through projects, workflows, experiments, and technical reps.</p>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 sm:col-span-2">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/38">Phase 03</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">Creating leverage</h3>
                      <p className="mt-3 text-white/62 leading-7">Using compounding skills to move from student-level effort to founder-level execution, ownership, and long-term value creation.</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="vision" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <SectionTitle
              eyebrow="Projects & Vision"
              title="Selected work and direction."
              description="A selection of work that reflects my direction: backend thinking, automation, AI-oriented problem solving, and a bias toward execution over empty presentation."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <motion.div key={project.title} variants={fadeUp}>
                  <Card className="h-full p-7">
                    <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/48">
                      {project.tag}
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-4 text-base leading-7 text-white/62">{project.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
            <SectionTitle
              eyebrow="Mindset"
              title="My philosophy is built around compounding."
              description="Discipline matters. Clarity matters. Execution matters more than appearances. I’m interested in building the kind of edge that grows stronger over years, not weeks."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <motion.div variants={fadeUp}>
                <Card className="h-full p-8">
                  <blockquote className="text-2xl leading-[1.5] text-white/88 sm:text-3xl">
                    “I’m not trying to look established early. I’m trying to become undeniable through repetition, systems, and real execution.”
                  </blockquote>
                  <p className="mt-8 max-w-2xl text-base leading-7 text-white/60">
                    The mission is not short-term validation. It’s developing the technical skill, strategic thinking, and operational sharpness required to build things that matter.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="h-full p-8">
                  <div className="space-y-5">
                    {[
                      "Think in systems, not isolated tasks.",
                      "Build depth before chasing noise.",
                      "Stay early, but move seriously.",
                      "Let skill compound into leverage.",
                    ].map((line) => (
                      <div key={line} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                        <p className="text-white/76">{line}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <Card className="relative overflow-hidden p-8 sm:p-10 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-400/10" />
              <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/40">Professional Presence</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Let’s build useful, scalable products together.
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-white/65">
                    Open to internships, freelance automation projects, technical collaborations, and conversations around AI, APIs, backend systems, and digital execution.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a href="https://github.com/PAPiRECA" target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white/82 transition hover:bg-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">GitHub</p>
                        <p className="mt-1 text-sm text-white/90 leading-relaxed">PAPiRECA</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/enzo-recalde-26153a371/" target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white/82 transition hover:bg-white/[0.08]">
                    <div className="flex items-center gap-3">
                     <Briefcase className="h-5 w-5 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">LinkedIn</p>
                        <p className="mt-1 text-sm text-white/90 leading-relaxed">Enzo Recalde</p>
                      </div>
                    </div>
                  </a>
                  <a href="mailto:enzorecalde2006@gmail.com" className="group rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white/82 transition hover:bg-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Email</p>
                        <p className="mt-1 text-sm text-white/90 break-all leading-relaxed">enzorecalde2006@gmail.com</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://wa.me/595981403665" target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white/82 transition hover:bg-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">WhatsApp</p>
                        <p className="mt-1 text-sm text-white/90 leading-relaxed">Chat directly</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
