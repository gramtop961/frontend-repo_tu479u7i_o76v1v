import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      {/* decorative background gradient */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_80%_10%,rgba(99,102,241,0.15),transparent_60%)]" />

      <Navbar />

      <main className="relative z-0">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-neutral-200 dark:border-neutral-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} Flames • Portfolio</p>
          <a href="#home" className="hover:text-neutral-900 dark:hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About me</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            I’m a frontend-focused developer who loves crafting interactive, playful experiences that feel effortless. My toolkit includes React, Tailwind, and a strong sense for motion and detail.
          </p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            <h3 className="font-semibold">What I do</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Design systems, component libraries, 3D embeds, data visualizations, and high-performance apps.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            <h3 className="font-semibold">How I work</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Collaborative, iterative, and user-centered. I prototype quickly and refine thoughtfully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
