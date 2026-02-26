import { motion } from "framer-motion";

// Återanvändbar sektion med rubrik och innehåll.
export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-28 ${className}`}>
      {/* Enkel in-animation när sektionen syns. */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {title ? <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2> : null}
        {children}
      </motion.div>
    </section>
  );
}
