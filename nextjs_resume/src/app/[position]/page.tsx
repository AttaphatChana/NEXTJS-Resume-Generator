import { notFound } from 'next/navigation';
import Basic from '../components/Basic';
import Education from '../components/Education';
import Section from '../components/Section';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Work from '../components/Work';
import Lang from '../components/Lang';
import Cert from '../components/Cert';
import Awards from '../components/Awards';
import {
  sampleBasics,
  sampleEducation,
  sampleSkills,
  sampleWork,
  sampleProjects,
  sampleLanguages,
  sampleCertificates,
  sampleAwards,
  positionConfigs
} from '../data/sample-resume';

interface PageProps {
  params: Promise<{
    position: string;
  }>;
}

export default async function ResumePage({ params }: PageProps) {
  const { position } = await params;

  // Get configuration for this position
  const config = positionConfigs[position as keyof typeof positionConfigs];

  // If position doesn't exist, show 404
  if (!config) {
    notFound();
  }

  return (
    // <div className="min-h-screen bg-gray-50 py-8">
    <body>
      <div className="max-w-4xl mx-auto bg-white shadow-lg px-12 py-10">
        {/* Header Section */}
        {config.sections.includes('header') && (
          <header>
            <h1 >
              {sampleBasics.name}
            </h1>
            <p>
              {config.title}
            </p>
            <Basic basics={sampleBasics} />

            {config.sections.includes('summary') && config.summary && (
              <section className="section mx-auto text-center font-semibold">
                <div>{config.summary}</div>
              </section>
            )}
          </header>
        )}

        {/* Education Section */}
        {config.sections.includes('education') && (
          <Section title="Education">
            {sampleEducation.map((edu, index) => (
              <Education key={index} education={edu} />
            ))}
          </Section>
        )}

        {config.sections.includes('skills') && (
          <Section title="Skills">
            {sampleSkills.map((skill, index) => (
              <Skill key={index} skills={skill} />
            ))}
          </Section>
        )}
        {/* Skills Section */}
        {/* {config.sections.includes('skills') && (
          <section className="section mb-8">
            <div className="section-title">
              <h2>Skills</h2>
            </div>
            <div className="section-list">
              {sampleSkills.map((skill, index) => (
                <div key={index} className="skill-group">
                  <h3 className="item-title">{skill.name}</h3>
                  <div className="item-content flex flex-wrap gap-2">
                    {skill.keywords.map((keyword, kidx) => (
                      <span key={kidx} className="keyword">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )} */}

        {config.sections.includes('experience') && (
          <Section title="Experience">
            {sampleWork.map((work, index) => (
              <Work key={index} work={work} />
            ))}
          </Section>
        )}
        {/* Experience Section */}
        {/* {config.sections.includes('experience') && (
          <section className="section mb-8">
            <div className="section-title">
              <h2>Experience</h2>
            </div>
            <div className="section-list">
              {sampleWork.map((job, index) => (
                <div key={index} className="work-item">
                  <div className="item-title mb-[4px]">
                    <div className="flex flex-row justify-between align-bottom">
                      <h3>{job.name}</h3>
                      <div className="item-date">
                        {job.startDate} - {job.endDate || 'Present'}
                      </div>
                    </div>
                    <div className="flex flex-row justify-between align-bottom">
                      <div className="work-item-position">{job.position}</div>
                      <div className="item-location">{job.location}</div>
                    </div>
                  </div>
                  <div className="item-content">
                    <p>{job.summary}</p>
                    {job.highlights && job.highlights.length > 0 && (
                      <ul>
                        {job.highlights.map((highlight, hidx) => (
                          <li key={hidx}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )} */}

        {config.sections.includes('projects') && (
          <Section title="Projects">
            {sampleProjects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </Section>
        )}

        {/* Projects Section */}
        {/* {config.sections.includes('projects') && (
          <section className="section mb-8">
            <div className="section-title">
              <h2>Projects</h2>
            </div>
            <div className="section-list">
              {sampleProjects.map((project, index) => (
                <div key={index} className="project">
                  <div className="project-title item-title items-center flex flex-row align-middle py-auto gap-1 justify-between">
                    {project.url ? (
                      <a 
                        className="my-auto" 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {project.name}
                        <i className="ml-[5px] fas fa-external-link-alt fa-xs"></i>
                      </a>
                    ) : (
                      <span>{project.name}</span>
                    )}
                    <div className="project-tech">
                      {Array.isArray(project.technologies) 
                        ? project.technologies.join(', ') 
                        : project.technologies}
                    </div>
                  </div>
                  <div className="item-content">
                    <p>{project.description}</p>
                    <ul>
                      {project.highlights.map((highlight, hidx) => (
                        <li key={hidx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )} */}

        {config.sections.includes('languages') && (
          <Section title="Languages">
            {sampleLanguages.map((lang, index) => (
              <Lang key={index} lang={lang} />
            ))}
          </Section>
        )}

        {/* Languages Section */}
        {/* {config.sections.includes('languages') && (
          <section className="section mb-8">
            <div className="section-title">
              <h2>Languages</h2>
            </div>
            <div className="section-list">
              <div className="flex flex-row flex-wrap gap-2">
                {sampleLanguages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <span className="item-title">{lang.language}</span>: <i>{lang.fluency}</i>
                    {index < sampleLanguages.length - 1 && ','}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )} */}

        {config.sections.includes('certificates') && (
          <Section title="Certificates">
            {sampleCertificates.map((cert, index) => (
              <Cert key={index} cert={cert} />
            ))}
          </Section>
        )}

        {/* Certificates Section */}
        {/* {config.sections.includes('certificates') && (
          <section className="section mb-8">
            <div className="section-title">
              <h2>Certificates</h2>
            </div>
            {sampleCertificates.map((cert, index) => (
              <div key={index} className="section-list">
                <div className="certificates-title item-title items-center flex flex-row align-middle py-auto gap-1 justify-between">
                  {cert.url ? (
                    <a 
                      className="my-auto" 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {cert.name}
                      <i className="ml-[5px] fas fa-external-link-alt fa-xs"></i>
                    </a>
                  ) : (
                    <span>{cert.name}</span>
                  )}
                  <div className="project-tech">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </section>
        )} */}


        {config.sections.includes('awards') && (
          <Section title="Awards">
            {sampleAwards.map((award, index) => (
              <Awards key={index} awards={award} />
            ))}
          </Section>
        )}
        {/* Awards Section */}
        {/* {config.sections.includes('awards') && (
          <section className="section mb-8">
            <div className="section-title">
              <h2>Awards</h2>
            </div>
            <div className="section-list">
              <div>
                {sampleAwards.map((award, index) => (
                  <div key={index} className="certificate-item">
                    <p className="item-title">
                      <strong>{award.title}</strong> {award.date.split('-')[0]}
                    </p>
                    <div className="item-content">
                      <p>{award.awarder}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )} */}
      </div>
    </body>
  );
}

// Generate static params for all positions at build time
export function generateStaticParams() {
  return Object.keys(positionConfigs).map((position) => ({
    position,
  }));
}

// Generate metadata for each resume page
export async function generateMetadata({ params }: PageProps) {
  const { position } = await params;
  const config = positionConfigs[position as keyof typeof positionConfigs];

  if (!config) {
    return {
      title: 'Resume Not Found',
    };
  }

  return {
    title: `${sampleBasics.name} - ${config.title} Resume`,
    description: config.summary,
  };
}

