'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects, Category } from '@/lib/data';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const [filter, setFilter] = useState<Category>('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.categories.includes(filter));

  return (
    <section className="container py-20 bg-white text-black">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl font-medium mb-8">Latest News</h1>

        <div className="flex gap-2 mb-12 flex-wrap text-sm font-medium">
          {(['All', 'Music', 'Culture'] as Category[]).map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full transition ${filter === cat ? 'bg-white text-black' : 'bg-zinc-500 hover:bg-neutral-700'
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(project => (
            <motion.div
              key={project.slug}
              className="relative group overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/news/${project.slug}`}>
                <div className="aspect-[5/4] bg-black overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                <div className="absolute bottom-4 left-4 bg-white/90 text-black px-3 py-1 rounded-md text-sm">
                  {project.title} – <span className="font-light">{project.subtitle}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}