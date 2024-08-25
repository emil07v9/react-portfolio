import React from "react";
import ProjectCard from "../ProjectCard/page";

const ProjectsOverview: React.FC = () => {
  const projects = [
    {
      title: "Concertify",
      description: "Web Development 6th semester",
      imageUrl: "/img/concertifyforside.png",
      link: "/project_concertify.html",
      tag: "FullStack",
    },
    {
      title: "BOREDK Spotlight Platform",
      description: "Web Development 7th semester",
      imageUrl: "/img/boredksupadm.png",
      link: "/project_boredk.html",
      tag: "Bachelor",
    },
    {
      title: "Twitter Clone",
      description: "Web development 5th semester",
      imageUrl: "/img/twitter2.png",
      link: "/project_twitter.html",
      tag: "FullStack",
    },
    {
      title: "Craft Studio",
      description: "Multimediadesign 4th semester",
      imageUrl: "/img/craftstudio1.png",
      link: "/project_craftstudio.html",
      tag: "Multimedia",
    },
  ];

  return (
    <section className="mb-10">
      <div className="flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
            tag={project.tag}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsOverview;
