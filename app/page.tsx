'use client';

import { useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

const accordionVariants = {
  enter: (custom: number) => ({
    x: -100,
    opacity: 0,
    transition: {
      delay: custom * 0.2,
    },
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  collapsed: { 
    opacity: 0,
    height: 0,
    transition: {
      height: {
        duration: 0.3,
      },
      opacity: {
        duration: 0.2,
      },
    },
  },
  expanded: { 
    opacity: 1,
    height: "auto",
    transition: {
      height: {
        duration: 0.3,
      },
      opacity: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  },
};

const textVariants = {
  collapsed: {
    opacity: 0,
    y: 10,
    filter: "blur(10px)",
  },
  expanded: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      delay: 0.1,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (accordionId: string) => {
    setOpenAccordion(prev => prev === accordionId ? null : accordionId);
  };

  const accordionSections = [
    {
      id: 'hack1',
      title: 'Hack #1: Let Overnight Contact Do the Work',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>Apply the Toenail Care Hydrogel Patch before bedtime to allow up to 8 hours of uninterrupted contact.</p>
          <p>Overnight use creates a sealed, low-disturbance environment that helps maintain moisture and supports absorption while your feet are at rest.</p>
          <p className="italic">💡 Best used during sleep or extended rest periods.</p>
        </div>
      ),
    },
    {
      id: 'hack2',
      title: 'Hack #2: Start with Clean, Dry Nails',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>For best results, always begin with clean, dry toenails.</p>
          <div>
            <ul className="space-y-2 list-disc pl-5">
              <li>Gently wash the feet with mild soap</li>
              <li>Dry nails thoroughly, especially around nail edges</li>
              <li>Apply the patch directly onto the nail surface</li>
            </ul>
          </div>
          <p>This simple step helps ensure the patch stays in place and performs as intended.</p>
        </div>
      ),
    },
    {
      id: 'hack3',
      title: 'Hack #3: One Patch Per Night = Better Hygiene',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>Each patch is single-use, designed for nightly application.</p>
          <div>
            <ul className="space-y-2 list-disc pl-5">
              <li>Fresh patch each night</li>
              <li>No washing or reusing</li>
              <li>Hygienic and convenient</li>
            </ul>
          </div>
          <p>Using a new patch daily helps maintain a clean routine and consistent overnight care.</p>
        </div>
      ),
    },
    {
      id: 'hack4',
      title: 'Hack #4: Consistency Is the Real Secret',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>Overnight nail care works best when used regularly.</p>
          <p>Most customers follow a nightly routine as part of their foot care regimen.</p>
          <p>Visible nail appearance changes happen gradually, so daily use is key.</p>
          <p className="italic">🕒 Consistency matters more than speed.</p>
        </div>
      ),
    },
    {
      id: 'hack5',
      title: 'Hack #5: Be Patient with Nail Appearance Changes',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>Toenails grow slowly. That means changes in nail appearance take time.</p>
          <div>
            <ul className="space-y-2 list-disc pl-5">
              <li>Early signs may appear with consistent use</li>
              <li>Full nail renewal follows natural nail growth cycles</li>
              <li>Routine care supports long-term nail appearance</li>
            </ul>
          </div>
          <p className="italic">✨ Think of this as progress, not an overnight miracle.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-8 pb-0">
        {/* Header with logo */}
        <header className="flex flex-col items-center mb-8">
          <Image
            src="/logo.png" 
            alt="VigorWell Logo"
            width={120}
            height={120}
            className="mb-4"
          />
          <h1 className="text-xl font-bold text-center text-slate-800">The Ultimate Overnight Nail Care Guide – Shared by Our Customers</h1>
        </header>

        {/* Product image and welcome section */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
            <div className="md:w-1/3 flex justify-center">
          <Image
                src="/product.jpg"
                alt="VigorWell Overnight Nail Care Patches"
                width={250}
                height={250}
                className="rounded-md"
              />
            </div>
            <div className="md:w-2/3 text-slate-800">
              <h3 className="text-2xl font-bold mb-4">Featuring: VigorWell Toenail Care Hydrogel Patches</h3>
              <p className="mb-4">At VigorWell, we believe effective nail care starts with consistent overnight routines supported by advanced hydrogel technology. Whether you're dealing with discolored nails, thickened nails, or damaged-looking toenails, these customer-backed nail care hacks are designed to support healthier-looking nails over time—all while you sleep.</p>
              <div className="mt-4 space-y-2">
                <p className="font-semibold">💜 Why Customers Choose VigorWell Nail Patches:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Extra Strength Hydrogel Technology – Designed for extended overnight contact</li>
                  <li>• 8-Hour Wear Time – Works while you rest</li>
                  <li>• Thin, Skin-Toned & Comfortable – Discreet for overnight or at-home use</li>
                  <li>• Simple Routine – No filing, soaking, or complicated steps</li>
                  <li>• 32 Single-Use Patches – Easy to integrate into nightly care</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Accordion sections */}
        <div className="space-y-4">
          {accordionSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(section.id)}
                className="w-full flex items-center justify-between p-4 bg-slate-100 text-left group"
              >
                <h3 className="text-lg font-semibold text-slate-800">{section.title}</h3>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-slate-600"
                  animate={{ rotate: openAccordion === section.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence initial={false}>
                {openAccordion === section.id && (
                  <motion.div
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    variants={contentVariants}
                    className="overflow-hidden"
                  >
                    <motion.div
                      variants={textVariants}
                      className="content"
                    >
                      {section.content}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer with disclaimer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: accordionSections.length * 0.15 + 0.3, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-slate-200"
        >
          <p className="text-sm text-slate-600 leading-relaxed">
            For external use only. Do not apply to open wounds or broken skin. Discontinue use if irritation occurs. Keep out of reach of children. Individual results may vary. This content is for informational purposes only and is not intended to replace professional medical advice, diagnosis, or treatment.
          </p>
          <div className="mt-6 pb-8 text-center text-sm text-slate-500">
            © 2025 VigorWell®. All rights reserved.
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
