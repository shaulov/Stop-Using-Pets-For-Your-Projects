import Image from "next/image";
import { styled } from "styled-components";
import useCardModal from "@/hooks/useCardModal";
import Tags from "./Tags";
import LikeButton from "./LikeButton/LikeButton";
import Button from "@/components/Buttons/Button";
import { Project } from "@/type";

interface ProjectCardProps {
  data: Project,
}

function ProjectCard({ data }: ProjectCardProps) {
  const { onOpen, setCardData } = useCardModal();

  const handleButtonClick = () => {
    setCardData(data);
    onOpen();
  }

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
        <LikeButton projectId={data.id} />
        <Button onClick={handleButtonClick}>Подробнее</Button>
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
  }
`;

export default ProjectCard;