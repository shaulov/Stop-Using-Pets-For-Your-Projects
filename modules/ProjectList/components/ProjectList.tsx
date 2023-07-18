import Image from "next/image";
import { styled } from "styled-components";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  return (
    <List>
      <li className="projects-item">
        <ProjectCard />
      </li>
      <li className="projects-item">
        <ProjectCard />
      </li>
      <li className="projects-item">
        <ProjectCard />
      </li>
      <li className="projects-item">
        <ProjectCard />
      </li>
      <li className="projects-item">
        <ProjectCard />
      </li>
    </List>
  );
}

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  list-style: none;
  .projects-item {
    position: relative;
    &:nth-child(3n){
      &:before{
        display: none;
      }
    }
    &:nth-last-child(-n+3) {
      &:after{
        display: none;
      }
    }
    &:before{
      content: "";
      position: absolute;
      top: 0;
      right: -21px;
      height: 100%;
      border-right: 1px solid #242628;
    }
    &:after{
      content: "";
      position: absolute;
      bottom: -21px;
      left: 0;
      width: 100%;
      border-bottom: 1px solid #242628;
    }
  }
`;

export { ProjectList };