import Link from "next/link";
import styled from "styled-components";

interface Props {}

const Nav = styled.nav`
  min-height: 10vh;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

export const Navbar = ({}: Props) => {
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <StyledLink>NEXT</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};
