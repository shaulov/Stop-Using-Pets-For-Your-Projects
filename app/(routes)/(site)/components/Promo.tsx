import { styled } from "styled-components";
import Container from "@/helpers/Container";
import LinkButton from "@/components/LinkButtons/LinkButton";

function Promo() {
  return (
    <Wrapper>
      <Container className="promo-container">
        <h1>Pet Project</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis a, corrupti reprehenderit officia tempora aut id, sunt quos debitis modi voluptatem odio cumque fuga error explicabo est eaque sint aspernatur.</p>
        <div className="button-wrapper">
          <LinkButton href="#">Хочу в проект</LinkButton>
          <LinkButton href="#">Найти команду</LinkButton>
        </div>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border-bottom: 1px solid #242628;
  .promo-container {
    display: grid;
    gap: 24px;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
  }
  h1 {
    margin-bottom: 12px;
    text-align: center;
  }
  p {
    max-width: 560px;
    font-size: 1.125rem;
    line-height: 150%;
  }
  .button-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    gap: 40px;
  }
`;

export default Promo;