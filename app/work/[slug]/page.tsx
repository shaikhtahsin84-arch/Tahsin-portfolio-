import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects, getProjectBySlug, getAdjacentProjects } from '@/lib/projects';
import { CaseStudyContent } from './CaseStudyContent';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: `${project.name} — ${project.brand}`,
    description: project.briefSummary,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(params.slug);

  return <CaseStudyContent project={project} prev={prev} next={next} />;
}
