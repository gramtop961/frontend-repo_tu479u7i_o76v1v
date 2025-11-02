import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'A responsive analytics dashboard with live data, charts, and dark mode.',
    tags: ['React', 'Tailwind', 'WebSockets'],
    link: '#',
  },
  {
    title: '3D Product Showcase',
    description: 'Interactive 3D viewer integrating Spline scenes for ecommerce.',
    tags: ['Spline', 'React', 'UX'],
    link: '#',
  },
  {
    title: 'AI Writing Assistant',
    description: 'A fast, distraction-free editor with smart prompts and export tools.',
    tags: ['FastAPI', 'React', 'Prompting'],
    link: '#',
  },
];

function Tag({ children }) {
  return (
    <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2.5 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Selected Projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              A curated mix of experimental and production work. Click through for details.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full px-4 py-2 text-sm font-medium border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white"
          >
            Work with me
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/60 dark:bg-neutral-900/60 backdrop-blur hover:shadow-lg hover:-translate-y-0.5 transition overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300" />
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
