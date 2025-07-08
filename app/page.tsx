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
  const [openAccordion, setOpenAccordion] = useState<string | null>(null); // Changed from 'share' to null

  const toggleAccordion = (accordionId: string) => {
    setOpenAccordion(prev => prev === accordionId ? null : accordionId);
  };

  const accordionSections = [
    {
      id: 'hack1',
      title: 'Hack #1: Make the Most of Every Drop',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>Toenail fungus doesn’t clear up overnight. But with consistency and smart habits, you’ll start to see real change.</p>
          <div>
            <h4 className="font-semibold mb-2">How to Maximize Results:</h4>
            <ul className="space-y-2 list-disc pl-5">
              <li>Use Daily Without Skipping: Apply twice a day for 3–6 months. Fungus lives deep in the nail and needs time to be pushed out.</li>
              <li>Prep Before You Apply: Trim and file the nail gently to reduce thickness and help the oil penetrate deeper.</li>
              <li>Apply to Clean, Dry Nails: Water and dirt block absorption—always wash and dry your feet before use.</li>
              <li>Use a Thin Layer: A light coat is enough. The formula is concentrated.</li>
            </ul>
          </div>
          <p className="italic">"I didn’t see results at first because I didn’t file my nails. Once I started prepping properly and stayed consistent, my nails began growing back clearer."</p>
        </div>
      ),
    },
    {
      id: 'hack2',
      title: 'Hack #2: Understand What Recovery Really Looks Like',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>Healing isn’t instant. The infected part of the nail doesn’t disappear—it’s slowly replaced by healthy new growth.</p>
          <div>
            <h4 className="font-semibold mb-2">What to Expect:</h4>
            <ul className="space-y-2 list-disc pl-5">
              <li>Week 1: Odor, itching, or athlete’s foot may improve.</li>
              <li>Week 4+: Healthy nail starts to grow from the base.</li>
              <li>Month 3–6: New nail gradually replaces the infected one.</li>
            </ul>
          </div>
          <p><span className="font-semibold">Pro Tip:</span> If your nails grow slowly, consider taking a keratin or biotin supplement to support nail regrowth.</p>
          <p className="italic">"I almost gave up, but then I realized the nail was growing out healthy from the bottom—just like they said!"</p>
        </div>
      ),
    },
    {
      id: 'hack3',
      title: 'Hack #3: Speed Up Healthy Nail Growth',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>Even after the fungus is gone, you still want smooth, even nails.</p>
          <div>
            <h4 className="font-semibold mb-2">How to Support Nail Recovery:</h4>
            <ul className="space-y-2 list-disc pl-5">
              <li>Keep Using the Oil Weekly: Prevent recurrence by applying 1–2 times per week after symptoms clear.</li>
              <li>Exfoliate Gently: Use a pumice or soft buffer to remove dead skin or nail buildup.</li>
              <li>Moisturize Daily: Dry nails crack and trap fungus. Hydrated nails grow smoother and stronger.</li>
              <li>Protect from Water Damage: Use socks and breathable shoes. Avoid going barefoot in damp places.</li>
            </ul>
          </div>
          <p className="italic">"I applied the oil and also moisturized daily. That combo made my nails feel stronger and helped them grow out clean."</p>
        </div>
      ),
    },
    {
      id: 'hack4',
      title: 'Hack #4: Stop It from Coming Back',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>Nail fungus often returns when you least expect it. Make prevention part of your routine.</p>
          <div>
            <h4 className="font-semibold mb-2">How to Prevent Relapse:</h4>
            <ul className="space-y-2 list-disc pl-5">
              <li>Weekly Maintenance: Even if symptoms are gone, apply once weekly to protect nails.</li>
              <li>Change Socks Daily: Moisture breeds fungus—keep feet dry and clean.</li>
            </ul>
          </div>
          <p className="italic">"Every summer I used to get fungus again—until I started using VigorWell weekly. I haven’t had a flare-up since."</p>
        </div>
      ),
    },
    {
      id: 'hack5',
      title: 'Hack #5: Combine with the Right Products for Faster Results',
      content: (
        <div className="p-4 bg-white space-y-4 text-slate-900">
          <p>For full protection and a quicker recovery, pairing your treatment with the right tools makes a huge difference.</p>
          <div>
            <h4 className="font-semibold mb-2">What Works Well with VigorWell:</h4>
            <ul className="space-y-2 list-disc pl-5">
              <li><span className="font-semibold">VigorWell Nail Fungus Treatment Patches</span><br/>Use overnight or while on-the-go. Helps maintain antifungal activity on the nail for extended hours, especially for stubborn or thickened nails.</li>
              <li><span className="font-semibold">Daily Nail Oil Treatment</span><br/>Use the 25% Undecylenic Acid liquid formula twice a day to actively fight fungal infection and support new healthy nail growth.</li>
              <li><span className="font-semibold">Breathable Socks &amp; Open-Toe Footwear</span><br/>Let your feet breathe—avoid trapping moisture that promotes fungal growth.</li>
            </ul>
          </div>
          <p className="italic">"I started using both the oil and the patches—oil in the morning, patch at night. It worked faster than using just one. Plus, the patch made sure the treatment stayed on longer!"</p>
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
          <h1 className="text-xl font-bold text-center text-slate-800">The BEST Toenail Fungus Treatment Hacks – Shared by Our Customers</h1>
        </header>

        {/* Product image and welcome section */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
            <div className="md:w-1/3 flex justify-center">
          <Image
                src="/product.jpg"
                alt="VigorWell 25% Undecylenic Acid Antifungal Treatment"
                width={250}
                height={250}
                className="rounded-md"
              />
            </div>
            <div className="md:w-2/3 text-slate-800">
              <h3 className="text-2xl font-bold mb-4">Featuring: VigorWell 25% Undecylenic Acid Antifungal Treatment</h3>
              <p className="mb-4">We’ve collected the most effective treatment tips from real users of VigorWell. Whether you’re just starting or struggling with persistent fungal nails, these hacks can help you get better results—faster, longer-lasting, and with healthier nails to show for it.</p>
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
            The information provided in this guide is based on customer experiences and anecdotal evidence. Individual results can vary. This content is intended for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the guidance of a qualified healthcare provider regarding any medical concerns or conditions. We do not guarantee the effectiveness of any discussed remedies or treatments for specific individuals.
          </p>
          <div className="mt-6 pb-8 text-center text-sm text-slate-500">
            © 2025 VigorWell®. All rights reserved.
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
