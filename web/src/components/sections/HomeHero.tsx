"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { t } from "@/lib/content";

const trustBadges = [t("badge.licensed"), t("badge.insured"), t("badge.years"), t("badge.response")];

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[80svh] overflow-hidden bg-[url('https://images.pexels.com/photos/5797978/pexels-photo-5797978.jpeg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/55 to-black/20" />
      <div className="relative mx-auto flex min-h-[80svh] w-full max-w-6xl flex-col justify-center px-4 py-20">
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.24 }}
          className="max-w-[18ch] text-4xl font-semibold text-white md:text-6xl"
        >
          {t("hero.home.headline")}
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.24, delay: reduceMotion ? 0 : 0.08 }}
          className="mt-5 max-w-[60ch] whitespace-normal text-base text-white/90 md:text-xl"
        >
          {t("hero.home.subheading")}
        </motion.p>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.24, delay: reduceMotion ? 0 : 0.12 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link href="/contact" className="rounded-full bg-accent-500 px-6 py-3 font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
            {t("hero.home.ctaPrimary")}
          </Link>
          <Link href="/projects" className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
            {t("hero.home.ctaSecondary")}
          </Link>
        </motion.div>
        <div className="mt-8 flex flex-wrap gap-2">
          {trustBadges.map((badge, index) => (
            <motion.span
              key={badge}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.24, delay: reduceMotion ? 0 : 0.2 + index * 0.04 }}
              className="rounded-full bg-[rgba(0,0,0,0.6)] px-4 py-2 text-sm text-white"
            >
              {badge}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}



