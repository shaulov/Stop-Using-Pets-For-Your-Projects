import Image from "next/image";
import { styled } from "styled-components";
import Container from "@/helpers/Container";
import LinkButton from "@/components/LinkButtons/LinkButton";
import { Devices } from "@/conts";

function Promo() {
  return (
    <Wrapper>
      <Container className="promo-container">
        <h1>Pet Project</h1>
        <p>Интересуетесь пет-проектами, но не знаете, с кем их создать? У нас вы можете найти единомышленников, специалистов и творческих людей для реализации своей идеи! Независимо от того, хотите ли вы разработать мобильное приложение, веб-сайт, игру или какой-то другой проект, наша платформа предоставляет удобный и эффективный способ найти идеальную команду.</p>
        <div className="button-wrapper">
          <LinkButton href="#">Хочу в проект</LinkButton>
          <LinkButton href="#">Найти команду</LinkButton>
        </div>
        <Image className="promo-img" src="/images/promo.webp" width={396} height={264} alt="" />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-bottom: 128px;
  .promo-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
      "title img"
      "text img"
      "buttons img";
    gap: 24px;
    justify-content: start;
    align-items: center;
    padding: 40px 0;
  }
  h1 {
    grid-area: title;
    text-align: left;
  }
  p {
    grid-area: text;
    margin-bottom: 12px;
    font-size: 1.125rem;
    line-height: 150%;
  }
  .button-wrapper {
    grid-area: buttons;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    gap: 40px;
  }
  .promo-img {
    grid-area: img;
    width: 100%;
    height: 100%;
  }
  @media screen and ${Devices.LG} {
    .promo-container {
      grid-template-columns: 1fr;
      grid-template-areas: 
        "title"
        "img"
        "text"
        "buttons";
    }
    .button-wrapper {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }
`;

export default Promo;