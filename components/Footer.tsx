import styled from "styled-components";

interface Props {}

const FooterSection = styled.footer`
  min-height: 10vh;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = ({}: Props) => {
  const thisYear = new Date().getFullYear();

  return (
    <FooterSection>
      <p>Next {thisYear} All Rights Reserved</p>
    </FooterSection>
  );
};
