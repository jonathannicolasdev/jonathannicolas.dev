import styled from "styled-components";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Container>
      <Navigation></Navigation>
      <Hero></Hero>
      <Bio></Bio>
      <Projects></Projects>
      <Footer></Footer>
    </Container>
  );
};

export default App;
