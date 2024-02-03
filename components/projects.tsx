import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div className="m-auto mt-8">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function Project({
  title,
  description,
  tags,
  imageUrl,
}: (typeof projectsData)[number]) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </section>
  );
}
