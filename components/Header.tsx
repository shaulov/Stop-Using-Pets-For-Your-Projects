import Link from "next/link";
import Image from "next/image";
import { styled } from "styled-components";

import Container from "@/helpers/Container";
import LinkArrow from "./LinkButtons/LinkArrow";

function Header() {
  return(
    <Wrapper>
      <nav>
        <Container className="nav-content">
          <Link href="/">
            <Image className="logo" src="/images/logo.svg" width={50} height={50} alt="Site logo" />
          </Link>
          <LinkArrow href="#">Войти</LinkArrow>
        </Container>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  border-bottom: 1px solid #242628; 
  .nav-content{
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    align-items: center;
    height: 96px;
    padding: 16px 0;
    .logo{
      border-radius: 100%;
    }
  }
`;

export default Header;