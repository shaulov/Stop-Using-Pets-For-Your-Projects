import { styled } from "styled-components";
import Container from "@/helpers/Container";

function Footer() {
  return(
    <Wrapper>
      <Container className="footer-content">
        <p>© Pet Project, 2023</p>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  border-top: 1px solid #242628;
  .footer-content {
    display: grid;
    justify-content: space-between;
    padding: 16px 0;
    font-size: 0.875rem;
  }
`;

export default Footer;