import { styled } from "styled-components";
import ProjectCard from "./ProjectCard";
import { Devices } from "@/conts";

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
      right: -25px;
      height: 100%;
      border-right: 1px solid #242628;
    }
    &:after{
      content: "";
      position: absolute;
      bottom: -25px;
      left: 0;
      width: 100%;
      border-bottom: 1px solid #242628;
    }
  }
  @media screen and ${Devices.LG} {
    grid-template-columns: repeat(2, 1fr);
    .projects-item {
      position: relative;
      &:nth-child(n){
        &:before, &:after{
          display: inherit;
        }
      }
      &:nth-child(2n){
        &:before{
          display: none;
        }
      }
      &:nth-last-child(-n+2) {
        &:after{
          display: none;
        }
      }
    }
  }
  @media screen and ${Devices.SM} {
    grid-template-columns: 1fr;
    .projects-item {
      position: relative;
      &:nth-child(n){
        &:after {
          display: inherit;
        }
        &:before {
          display: none;
        }
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
`;

export { ProjectList };