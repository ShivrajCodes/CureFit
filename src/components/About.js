import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  background-color: #E4ECF6;
  text-align: center;
  padding: 10px 0;
`;

const About = () => {
  return (
    <PageContainer>
      <Content className="mx-auto max-w-3xl px-4 pt-20 pb-24">
        <h1 className="text-4xl font-semibold">About</h1>
        <p className="text-lg mt-4">About the project and the author of the project.</p>

        <h2 className="mt-8 text-2xl font-semibold">Features</h2>
        <ul className="ml-6 list-disc text-lg mt-2">
          <li>Users can read articles</li>
          <li>Users can view stories</li>
          <li>Find Hospitals on Google Map</li>
          <li>Find a list of best doctors of each department along with location and phone number</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">About Us</h2>
        <p className="text-lg mt-2">
          We are Script Squad, a team of first-year undergraduates interested in development and crafting web experiences. 
          We aim to deliver reliable and user-friendly applications. 
          Our passion for coding drives us to create solutions that make a difference.
        </p>
        <ul className="ml-6 list-disc text-lg mt-2">
          <li>Team Members: Shivraj, Simantini Das, Rudrangshu Bose</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Tech Stack Used</h2>
        <ul className="ml-6 list-disc text-lg mt-2">
          <li><a href="https://reactjs.org/" className="font-medium underline">React</a></li>
          <li><a href="https://nodejs.org/en" className="font-medium underline">Node.JS</a></li>
          <li><a href="https://tailwindcss.com/" className="font-medium underline">Tailwind CSS</a></li>
          <li><a href="https://www.mongodb.com/" className="font-medium underline">MongoDB</a></li>
          <li><a href="https://axios-http.com/" className="font-medium underline">Axios</a></li>
        </ul>
      </Content>
      <Footer className="sc-dhKdPU hsaLvP"></Footer>
    </PageContainer>
  );
};

export default About;
