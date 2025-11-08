import type { Project } from "../types/resume";
interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;  // Optional additional styling
  }
  
  export default function Project({project}: {project: Project}) {

    return (
      <div className="project">
        <div className="project-title item-title items-center flex flex-row align-middle py-auto gap-1 justify-between">
          {project.url ? (
            <a className="my-auto" href={project.url} target="_blank" rel="noopener noreferrer"><strong>{project.name}</strong><i className="ml-[5px] fas fa-external-link-alt fa-xs"></i></a>)
            : (
            <span>{project.name}</span>
          )}
          <div className="project-tech">
            {Array.isArray(project.technologies) ? project.technologies.join(', ') : project.technologies}
          </div>
        </div>
        <div className="item-content">
          <p>{project.description}</p>
          <ul>
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    );
    // return (
    //   <section className={`mb-8 ${className}`}>
    //     <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
    //       {title}
    //     </h2>
    //     <div className="mt-4">
    //       {children}
    //     </div>
    //   </section>
    // );
  }