"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store";
import { setQuoteModalOpen } from "@/store/slices/uiSlice";
import { useQuoteForm } from "../hooks/useQuoteForm";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence, Variants } from "framer-motion";

import { StepOnePersonal } from "./StepOnePersonal";
import { StepTwoPet } from "./StepTwoPet";
import { StepThreeRoute } from "./StepThreeRoute";
import { StepFourReview } from "./StepFourReview";
import { StepFiveSuccess } from "./StepFiveSuccess";

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

const flipVariants: Variants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 90 : -90,
    scale: 0.95,
    opacity: 0,
  }),
  center: {
    rotateY: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" }
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -90 : 90,
    scale: 0.95,
    opacity: 0,
    transition: { duration: 0.35, ease: "easeIn" }
  })
};

export function QuoteModal() {
  const isOpen = useAppSelector((state) => state.ui.isQuoteModalOpen);
  const dispatch = useAppDispatch();
  const { 
    currentStep, formData, nextStep, prevStep, updateForm, 
    resetForm, validateStepOne, validateStepTwo, validateStepThree, errors 
  } = useQuoteForm();

  // 1 mtlb Next, -1 mtlb Prev (Flip direction ke liye)
  const [direction, setDirection] = useState(1);

  // Modal close hone ke baad form ko reset karne ka logic
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        resetForm();
        setDirection(1);
      }, 400); // Wait for modal exit animation to complete
      return () => clearTimeout(timer);
    }
  }, [isOpen, resetForm]);

  const handleClose = () => {
    dispatch(setQuoteModalOpen(false));
  };

  const handleStepChange = (dir: "next" | "prev") => {
    // 1. VALIDATION FIRST: Agar error hai toh animation shuru hi mat karo
    if (dir === "next") {
      if (currentStep === 1 && !validateStepOne()) return; 
      if (currentStep === 2 && !validateStepTwo()) return;
      if (currentStep === 3 && !validateStepThree()) return;
      
      setDirection(1);
      nextStep();
    } else {
      setDirection(-1);
      prevStep();
    }
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
            className="relative w-full max-w-2xl mt-16"
            style={{ perspective: "1500px" }} // Important for 3D flip effect
          >
            {/* mode="wait" ensures purana step khatam hone ke baad naya start ho */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep} // Key change par Framer Motion animate karega
                custom={direction}
                variants={flipVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative w-full rounded-[1.5rem] bg-[#FAFAFA] p-6 sm:p-10 shadow-2xl [transform-style:preserve-3d]"
              >
                {/* Peeking Cat/Dog Image */}
                <div className="absolute z-10 bottom-[calc(100%-42px)] sm:bottom-[calc(100%-56px)] left-1/2 -translate-x-1/2 w-[260px] h-[150px] sm:w-[340px] sm:h-[190px] pointer-events-none transition-all duration-300">
                  <Image
                    src={currentStep <= 4 ? "/quote/peekcat.png" : "/quote/peekdog.png"}
                    alt={currentStep <= 4 ? "Peeking Cat" : "Success Dog"}
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 768px) 260px, 340px"
                    priority
                  />
                </div>
                
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 z-10 text-gray-500 hover:text-navy transition"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Form Steps */}
                {currentStep === 1 && <StepOnePersonal validateStep={validateStepOne} formData={formData} errors={errors} updateForm={updateForm} onNext={() => handleStepChange("next")} />}
                {currentStep === 2 && <StepTwoPet validateStep={validateStepTwo} formData={formData} errors={errors} updateForm={updateForm} onNext={() => handleStepChange("next")} onPrev={() => handleStepChange("prev")} />}
                {currentStep === 3 && <StepThreeRoute validateStep={validateStepThree} formData={formData} errors={errors} updateForm={updateForm} onNext={() => handleStepChange("next")} onPrev={() => handleStepChange("prev")} />}
                {currentStep === 4 && <StepFourReview formData={formData} onPrev={() => handleStepChange("prev")} onSuccess={() => { handleStepChange("next") }} />}
                {currentStep === 5 && <StepFiveSuccess onClose={handleClose} />}

              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}