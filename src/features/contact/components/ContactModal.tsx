"use client";

import { useAppSelector, useAppDispatch } from "@/store";
import { setContactModalOpen } from "@/store/slices/uiSlice";
import { ContactForm } from "./ContactForm";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- Framer Motion Animation Variants ---
const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
};

const modalVariants: Variants = {
  hidden: { y: -40, scale: 0.95, opacity: 0 },
  visible: { 
    y: 0, scale: 1, opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } 
  },
  exit: { 
    y: -40, scale: 0.95, opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

export function ContactModal() {
  const isOpen = useAppSelector((state) => state.ui.isContactModalOpen);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setContactModalOpen(false));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 sm:p-6 backdrop-blur-sm"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-lg"
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-gray-100/50 p-2 text-gray-500 transition hover:bg-gray-200 hover:text-navy"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Yahan aapka banaya hua asli Contact Form render ho raha hai */}
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}