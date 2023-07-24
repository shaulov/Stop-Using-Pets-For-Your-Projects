import Image from "next/image";
import { styled } from "styled-components";
import Tags from "./Tags";
import LinkButton from "@/components/LinkButtons/LinkButton";
import { CardData } from "@/type";

interface ProjectCardProps {
  data: CardData,
}

function ProjectCard({ data }: ProjectCardProps) {
  return (
    <Card>
      <h3>{data.title}</h3>
      <Image 
        className="card-img"
        src={data.imgUrl} 
        width={320}
        height={240}
        alt={data.title} 
      />
      <Tags className="card-tags" data={data.tags} />
      <p className="card-description">{data.description}</p>
      <div className="card-footer">
        <dl>
          <dt>человек</dt>
          <dd>{data.participantNumber}</dd>
        </dl>
        <LinkButton href="#">Подробнее</LinkButton>
      </div>
    </Card>
  );
}

const Card = styled.article`
  display: grid;
  grid-template-areas: "img" "tags" "title";
  padding: 0 12px;
  h3 {
    grid-area: title;
    margin-top: 20px;
    margin-bottom: 8px;
    font-size: 1rem;
    line-height: 140%;
    text-transform: uppercase;
  }
  .card-img {
    grid-area: img;
    width: 100%;
    margin-bottom: 12px;
  }
  .card-tags {
    margin-bottom: -8px;
  }
  .card-description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    height: 57px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .card-footer {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    margin-top: 24px;
    text-align: right;
    dl {
      display: grid;
      grid-template-areas: "value" "key";
      line-height: 140%;
      dt {
        grid-area: key;
        align-self: center;
        text-align: center;
        font-weight: 500;
        font-size: 1rem;
        color: #868889;
      }
      dd {
        grid-area: value;
        align-self: center;
        text-align: center;
        font-weight: 700;
        font-size: 1.75rem;
      }
    }
  }
`;

export default ProjectCard;