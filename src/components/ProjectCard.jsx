export default function ProjectCard({ project, onOpen, detailsLabel }) {
  // Kort som visar ett projekt och öppnar detaljerna.
  return (
    <article className="rounded-3xl border border-white/10 bg-black/35 p-4 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.45)]">
      <button type="button" onClick={() => onOpen(project)} className="w-full text-left">
        {/* Bildyta med färgton som sätter känslan för projektet. */}
        {/* Mindre höjd på små skärmar, lite större på större skärmar. */}
        <div
          className={`flex h-32 items-end rounded-2xl border border-white/10 bg-gradient-to-br p-4 sm:h-40 ${project.gradient}`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">
            {project.name}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">{project.name}</h3>
        <p className="mt-2 text-sm text-slate-300">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-block text-xs uppercase tracking-[0.25em] text-cyan-300">
          {detailsLabel}
        </span>
      </button>
    </article>
  );
}
