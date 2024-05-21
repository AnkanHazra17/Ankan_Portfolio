import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/Motion";
import { Tilt } from "react-tilt";
import { FaGithub, FaLink } from "react-icons/fa";

const colors = [
  "green-text-gradient",
  "blue-text-gradient",
  "pink-text-gradient",
  "orange-text-gradient",
];

const ProjectCard = ({ project, index }) => {
  const technologies = project.tags.map((tag) => ({
    tag: tag,
    color: colors[Math.floor(Math.random() * 4)],
  }));

  //   console.log(technologies);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="sm:w-[360px] w-full p-5 bg-tertiary rounded-2xl"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="w-full h-[230px] relative">
          <img
            src={project?.projectImage?.imageUrl}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          ></img>
          <div className="absolute inset-0 flex justify-end m-3 cursor-pointer gap-3">
            <div
              className="black-gradient h-8 w-8 rounded-full flex items-center justify-center"
              onClick={() => window.open(project?.srcCodeLink, "_blank")}
            >
              <FaGithub className="s hover:text-[#915EFF] transition-all duration-150"></FaGithub>
            </div>
            <div
              className="black-gradient h-8 w-8 rounded-full flex items-center justify-center"
              onClick={() => window.open(project?.liveLink, "_blank")}
            >
              <FaLink className="s hover:text-[#915EFF] transition-all duration-150"></FaLink>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project?.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {project?.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <p key={i} className={`text-[14px] ${tech.color}`}>
              {tech.tag}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
