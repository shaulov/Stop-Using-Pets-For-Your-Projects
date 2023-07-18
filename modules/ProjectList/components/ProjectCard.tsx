import Image from "next/image";
import { styled } from "styled-components";
import Tags from "./Tags";

function ProjectCard() {
  return (
    <Card>
      <h3>Project #1</h3>
      <Image 
        className="card-img"
        src="/images/project.avif" 
        width={320}
        height={240}
        alt="project 1" 
      />
      <Tags className="card-tags" />
    </Card>
  );
}

const Card = styled.article`
  display: grid;
  grid-template-areas: "img" "title" "tags";
  padding: 0 12px;
  h3 {
    grid-area: title;
  }
  .card-img {
    grid-area: img;
    margin-bottom: 12px;
  }
  .card-tags {
    margin-top: 12px;
    margin-bottom: -8px;
  }
`;

export default ProjectCard;