import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-indigo-200">
            Tech • Portfolio • Playful
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Building interactive experiences for the modern web
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-xl">
            I design and ship delightful, performant interfaces with a focus on user experience, accessibility, and clean code.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
            >
              View my work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* soft gradient glow overlay - doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-neutral-950" />
        </div>
      </div>
    </section>
  );
}
