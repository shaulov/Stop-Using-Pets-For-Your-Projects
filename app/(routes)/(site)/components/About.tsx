import Container from "@/helpers/Container";
import { styled } from "styled-components";
import { Devices } from "@/conts";
import array from "@/public/data/about-cards.json";

function About() {
  return (
    <Wrapper>
      <Container className="about-content">
        <h2>О нашей идее</h2>
        <dl>
          {array.map(item => (
            <div className="about-card" key={item.id}>
              <dt>{item.title}</dt>
              <dd><span>{item.description}</span></dd>
            </div>
          ))}
        </dl>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 160px;
  .about-content {
    padding: 40px 0;
    border-top: 1px solid #242628;
  }
  h2 {
    margin-bottom: 24px;
  }
  dl {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
    .about-card {
      display: grid;
      grid-template-rows: auto 1fr;
      gap: 12px;
      height: 174px;
      padding: 24px;
      background-color: #E6EAF1;
      border: 1px solid #8EAEE8;
      border-radius: 16px;
    }
    dt {
      font-size: 1.25rem;
      font-weight: 500;
    }
    dd {
      display: flex;
      align-items: center;
      padding-left: 12px;
      font-size: 0.875rem;
      border-left: 2px solid #E8A5C6;
    }
  }
  @media screen and ${Devices.SM} {
    dl {
      grid-template-columns: 1fr;
      gap: 24px;
      .about-card {
        grid-template-rows: auto 1fr;
        padding: 16px;
      }
      dt {
        font-size: 1rem;
      }
    }
  }
`;

export default About;