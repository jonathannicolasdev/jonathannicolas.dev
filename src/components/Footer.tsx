import styled from "styled-components";

const FooterContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FootSubContainer = styled.div`
  width: 1400px;
  margin: auto;
  text-align: center;
  & p {
    font-size: 2rem;
  }
`;

const ImageFooter = styled.img`
  height: 100px;
  margin: 50px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FootSubContainer>
        <div>
          <ImageFooter src="/images/github-image.png" alt="" />
          <ImageFooter src="/images/linkedin-image.png" alt="" />
        </div>
        <div>
          <p>Copyright 2020 Jonathan Nicolas</p>
        </div>
      </FootSubContainer>
    </FooterContainer>
  );
};

export default Footer;
