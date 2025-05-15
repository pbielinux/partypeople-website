import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { projects } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.subtitle,
  };
}

export default function ProjectDetailPage({ params }: { params: Params }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="container h-full text-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-2">{project.title}</h1>
        <h2 className="text-lg text-neutral-400 mb-6">{project.subtitle}</h2>

        <div className="aspect-[5/4] mb-6 overflow-hidden rounded-xl">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          )}
        </div>

        <div className="prose prose-invert max-w-none">
          <p>{project.content}</p>
        </div>
      </div>
    </div>
  );
}
