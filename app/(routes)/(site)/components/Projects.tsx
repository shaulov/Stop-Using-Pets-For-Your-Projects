import { styled } from "styled-components";
import Container from "@/helpers/Container";
import { ProjectList } from "@/modules/ProjectList";

function Projects() {
  return (
    <Wrapper>
      <Container className="projects-content">
        <h2>Доступные проекты</h2>
        <ProjectList />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 170px;
  .projects-content {
    padding: 40px 0;
    border-top: 1px solid #242628;
  }
  h2 {
    margin-bottom: 24px;
    text-align: center;
  }
`;

export default Projects;