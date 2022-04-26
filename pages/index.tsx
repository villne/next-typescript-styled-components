import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>HOME</Heading>
      </Hero>
    </div>
  );
};

export default Home;
