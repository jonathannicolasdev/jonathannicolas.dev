import styled from "styled-components";

const BioContainer = styled.div`
  min-height: 710px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BioSubContainer = styled.div`
  max-width: 600px;
  margin: auto;
  text-align: center;
`;

const BioTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 5rem;
`;

const BioParagraph = styled.p`
  font-size: 2rem;
`;

const Bio = () => {
  return (
    <BioContainer>
      <BioSubContainer>
        <BioTitle>CODER & DESIGNER</BioTitle>
        <BioParagraph>
          Jonathan Nicolas loves programming, writing, speaking, traveling, and
          art. He does not love talking about himself in the 3rd Person
        </BioParagraph>
      </BioSubContainer>
    </BioContainer>
  );
};

export default Bio;
