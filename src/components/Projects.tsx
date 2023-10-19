import styled from "styled-components";

const ProjectsContainer = styled.div`
  width: 100%;
  background-color: #ffc773;
  height: 720px;
  flex-direction: column;
  justify-content: center;
  display: flex;
`;

const ProjectsSubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1400px;
  margin: auto;
  text-align: center;
`;

const ProjectsContent = styled.div`
  margin: 40px;
  width: 600px;
  & h1 {
    font-size: 3rem;
  }
  & p {
    font-size: 1.7rem;
  }
  & button {
    font-size: 1.3rem;
    background: #56d0d8;
    border-radius: 10px;
    margin: 30px 10px;
    padding: 10px 20px;
    border: none;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsSubContainer>
        <img src="/images/project-image.png" alt="" />
        <ProjectsContent>
          <h1>THE PROJECTS</h1>
          <p>
            It is a collection of my web app projects. They are made mostly with
            React, Redux, Node.js, Express, MongoDB, REST API, GraphQL, and AWS
          </p>
          <button>Check My Projects</button>
        </ProjectsContent>
      </ProjectsSubContainer>
    </ProjectsContainer>
  );
};

export default Projects;
