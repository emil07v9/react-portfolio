import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tag: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  tag,
}) => {
  return (
    <div className="transitionscale mt-10">
      <a href={link}>
        <div className="imgzoom bg-[#121212] px-20 py-20">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="mt-5">
          <span className="text-black text-xs mr-2 px-2.5 py-0.5 rounded border-2 border-black">
            {tag}
          </span>
        </div>
        <h3 className="mt-2 text-black">{title}</h3>
        <p className="projectcaption text-black">{description}</p>
      </a>
    </div>
  );
};

export default ProjectCard;
