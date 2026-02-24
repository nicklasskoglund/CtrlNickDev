import { motion } from "framer-motion";

export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {title ? <h2 className="text-3xl font-semibold text-white">{title}</h2> : null}
        {children}
      </motion.div>
    </section>
  );
}
