import { useEffect, useMemo, useState } from "react";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import Modal from "./components/Modal.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Section from "./components/Section.jsx";
import profileImage from "./assets/github_profile_picture.jpg";
import {
  activityLinks,
  contactLinks,
  sections,
  stackGroups,
  translations
} from "./content/translations.js";

const formIdRaw = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim() ?? "";
const formId = formIdRaw.replace(/^https:\/\/formspree\.io\/f\//, "");

function FormspreeForm({ formId, t }) {
  const [state, handleSubmit] = useForm(formId);

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-black/35 p-4 transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.45)] sm:p-6"
    >
      {state.succeeded ? (
        <p className="text-sm text-emerald-300">{t.contact.thanks}</p>
      ) : (
        <div className="grid gap-4">
          <label className="text-xs uppercase tracking-[0.25em] text-slate-400">
            {t.contact.name}
            <input
              name="name"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-300"
              required
            />
          </label>
          <label className="text-xs uppercase tracking-[0.25em] text-slate-400">
            {t.contact.email}
            <input
              type="email"
              name="email"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-300"
              required
            />
          </label>
          <label className="text-xs uppercase tracking-[0.25em] text-slate-400">
            {t.contact.message}
            <textarea
              name="message"
              rows="4"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-300"
              required
            />
          </label>
          <button
            type="submit"
            disabled={state.submitting}
            className="mt-2 rounded-full border border-cyan-300 bg-cyan-500/10 px-6 py-3 text-xs uppercase tracking-[0.25em] text-cyan-100 hover:bg-cyan-500/20 disabled:opacity-60"
          >
            {t.contact.send}
          </button>
        </div>
      )}
    </form>
  );
}

export default function App() {
  const [lang, setLang] = useState("sv");
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const t = translations[lang];

  const navItems = useMemo(
    () => sections.map((id) => ({ id, label: t.nav[id] })),
    [t.nav]
  );

  useEffect(() => {
    const observers = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.2, 0.45, 0.7] }
    );

    observers.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const node = document.getElementById(id);
    if (node) {
      node.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute top-[35%] left-[8%] h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[5%] bottom-[8%] h-80 w-80 rounded-full bg-emerald-500/10 blur-[130px]" />
      </div>

      <Navbar
        navItems={navItems}
        activeId={activeSection}
        lang={lang}
        menuLabel={t.nav.menu}
        closeLabel={t.nav.close}
        onToggleLang={() => setLang((prev) => (prev === "sv" ? "en" : "sv"))}
        onScrollTo={scrollToSection}
      />

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-16 pt-10 md:gap-32 md:px-6 md:pb-24 md:pt-14">
        <section
          id="home"
          className="scroll-mt-28 flex min-h-screen flex-col items-center gap-6 pb-10 pt-4 text-center sm:gap-8 sm:pb-12 sm:pt-6 md:gap-10 md:pb-16 [@media(max-height:700px)]:gap-4 [@media(max-height:700px)]:pb-8 [@media(max-height:700px)]:pt-2"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            initial="hidden"
            animate="show"
            className="w-full px-4"
          >
            <div className="mx-auto max-w-xl rounded-3xl border border-cyan-300/35 bg-cyan-500/10 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100">{t.hero.noticeLabel}</p>
              <p className="mt-3 text-xl font-medium text-white">{t.hero.notice}</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 25 },
              show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.5 } }
            }}
            className="flex w-full flex-1 flex-col items-center justify-center px-4"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-6xl">
                {t.hero.greeting}
              </h1>
              <p className="mt-3 max-w-2xl text-xs text-slate-400 sm:text-sm md:text-base [@media(max-height:700px)]:mt-2">
                {t.hero.tagline}
              </p>
              <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base md:text-lg [@media(max-height:700px)]:mt-2">
                {t.hero.intro}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3 [@media(max-height:700px)]:mt-4">
                <button
                  type="button"
                  onClick={() => scrollToSection("projects")}
                  className="rounded-full border border-white/15 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100 hover:border-cyan-300 hover:bg-cyan-400/20 sm:px-6 sm:py-3 sm:text-sm"
                >
                  {t.hero.viewProjects}
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="rounded-full border border-white/15 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100 hover:border-cyan-300 hover:bg-cyan-400/20 sm:px-6 sm:py-3 sm:text-sm"
                >
                  {t.hero.contact}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <Section
          id="about"
          title={t.about.title}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10"
        >
          <div className="mt-6 grid gap-6 md:gap-8 md:grid-cols-[300px_1fr] md:items-center">
            <div className="mx-auto w-48 overflow-hidden rounded-3xl border border-white/10 bg-black/35 sm:w-56 md:mx-0 md:w-[300px]">
              <img
                src={profileImage}
                alt={t.about.title}
                className="h-48 w-full object-cover sm:h-56 md:h-[300px]"
                loading="lazy"
              />
            </div>
            <p className="text-base text-slate-300">{t.about.text}</p>
          </div>
        </Section>

        <Section
          id="education"
          title={t.education.title}
          className="rounded-3xl border border-white/10 bg-slate-900/45 p-6 md:p-10"
        >
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {t.education.items.map((item) => (
              <article
                key={`${item.school}-${item.program}`}
                className="rounded-3xl border border-white/10 bg-black/35 p-4 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.45)]"
              >
                {item.details?.length ? (
                  <button
                    type="button"
                    onClick={() => setSelectedEducation(item)}
                    className="w-full text-left"
                  >
                    <h3 className="text-base font-semibold text-white">{item.program}</h3>
                    <p className="mt-1 text-sm text-slate-200">{item.school}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400">{item.period}</p>
                    <p className="mt-2 text-sm text-slate-300">{item.location}</p>
                    <span className="mt-4 inline-block text-xs uppercase tracking-[0.25em] text-cyan-300">
                      {t.education.details}
                    </span>
                  </button>
                ) : (
                  <>
                    <h3 className="text-base font-semibold text-white">{item.program}</h3>
                    <p className="mt-1 text-sm text-slate-200">{item.school}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400">{item.period}</p>
                    <p className="mt-2 text-sm text-slate-300">{item.location}</p>
                  </>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="stack"
          title={t.stack.title}
          className="rounded-3xl border border-cyan-300/20 bg-cyan-500/5 p-6 md:p-10"
        >
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {Object.entries(stackGroups).map(([key, items]) => (
              <article
                key={key}
                className="rounded-3xl border border-white/10 bg-black/35 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.45)]"
              >
                <h3 className="text-lg font-semibold text-white">{t.stack.groups[key]}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.15em] text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          title={t.projects.title}
          className="rounded-3xl border border-indigo-300/15 bg-indigo-500/5 p-6 md:p-10"
        >
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {t.projects.items.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
                detailsLabel={t.projects.details}
              />
            ))}
          </div>
        </Section>

        <Section
          id="activity"
          title={t.activity.title}
          className="rounded-3xl border border-emerald-300/15 bg-emerald-500/5 p-6 md:p-10"
        >
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {activityLinks.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-white/10 bg-black/35 p-4 transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.45)]"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                  {t.activity.cards[item.id] ?? item.title}
                </h3>
                <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-2">
                  <img
                    src={item.image}
                    alt={t.activity.cards[item.id] ?? item.title}
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title={t.contact.title}
          className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 md:p-10"
        >
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <article className="rounded-3xl border border-white/10 bg-black/35 p-4 transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.45)] sm:p-6">
              <div className="space-y-4">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-300/60 hover:bg-cyan-500/10"
                  >
                    <span className="text-sm text-slate-200">{item.label}</span>
                    <span className="rounded-full border border-white/15 bg-white/0 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300 transition group-hover:border-cyan-300 group-hover:bg-cyan-400/20 group-hover:text-cyan-100 group-hover:shadow-[0_8px_20px_-12px_rgba(34,211,238,0.6)]">
                      {t.contact.open}
                    </span>
                  </a>
                ))}
              </div>
            </article>

            {formId ? (
              <FormspreeForm formId={formId} t={t} />
            ) : (
              <article className="rounded-3xl border border-white/10 bg-black/35 p-4 transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.45)] sm:p-6">
                <p className="text-sm text-slate-300">{t.contact.formHint}</p>
              </article>
            )}
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.25em] text-slate-500">
        © {new Date().getFullYear()} Nicklas Skoglund
      </footer>

      <Modal
        open={Boolean(selectedProject)}
        title={selectedProject?.name || ""}
        onClose={() => setSelectedProject(null)}
        closeLabel={t.projects.close}
      >
        {selectedProject ? (
          <div>
            <p className="text-sm text-slate-300">{selectedProject.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.15em] text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-300">
              {selectedProject.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full border border-cyan-300 bg-cyan-500/10 px-6 py-3 text-xs uppercase tracking-[0.2em] text-cyan-100 hover:bg-cyan-500/20"
            >
              {t.projects.openGithub}
            </a>
          </div>
        ) : null}
      </Modal>

      <Modal
        open={Boolean(selectedEducation)}
        title={selectedEducation?.program || ""}
        onClose={() => setSelectedEducation(null)}
        closeLabel={t.education.close}
      >
        {selectedEducation?.details ? (
          <div>
            <p className="text-sm text-slate-300">{selectedEducation.school}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
              {selectedEducation.period}
            </p>
            <p className="mt-2 text-sm text-slate-300">{selectedEducation.location}</p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-300">
              {selectedEducation.details.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {selectedEducation.href ? (
              <a
                href={selectedEducation.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full border border-cyan-300 bg-cyan-500/10 px-6 py-3 text-xs uppercase tracking-[0.2em] text-cyan-100 hover:bg-cyan-500/20"
              >
                {t.education.linkLabel}
              </a>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
