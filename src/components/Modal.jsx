import { AnimatePresence, motion } from "framer-motion";

// Enkel modal för detaljer som öppnas ovanpå sidan.
export default function Modal({ open, title, onClose, children, closeLabel = "Close" }) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          {/* Mörk bakgrund som stänger modalen vid klick. */}
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Själva rutan med innehåll. */}
            <motion.div
              className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-black/40"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                {/* Knappen har lite extra luft för att vara lätt att klicka. */}
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-200 hover:border-cyan-300"
                >
                  {closeLabel}
                </button>
              </div>
              {children}
            </motion.div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
