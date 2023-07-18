import Link from "next/link";
import Image from "next/image";
import { styled } from "styled-components";

import Container from "@/helpers/Container";
import LinkButton from "./LinkButtons/LinkButton";

function Header() {
  return(
    <Wrapper>
      <nav>
        <Container className="nav-container">
          <Link href="/">
            <Image className="logo" src="/images/logo.svg" width={50} height={50} alt="Site logo" />
          </Link>
          <LinkButton href="#">Войти</LinkButton>
        </Container>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  border-bottom: 1px solid #242628; 
  .nav-container{
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: calc(100% - 40px);
    height: 96px;
    margin: 0 auto;
    padding: 16px 0;
    .logo{
      border-radius: 100%;
    }
  }
`;

export default Header;