import { ProjectCard } from "@/components/cards/ProjectCard";

const projects = [
  {
    title: "Residential Replacement",
    location: "North Hills",
    beforeImage: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    afterImage: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    summary: "Shingle system replacement with improved ventilation and warranty coverage."
  },
  {
    title: "Storm Damage Recovery",
    location: "Lakeview",
    beforeImage: "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg",
    afterImage: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg",
    summary: "Fast inspection, documented scope, and full restoration after wind uplift."
  },
  {
    title: "Metal Upgrade",
    location: "Ridge Garden",
    beforeImage: "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg",
    afterImage: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    summary: "Converted aging roof to metal system for long-term durability."
  }
];

export function ProjectGallerySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-semibold text-foreground">Recent Local Projects</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
