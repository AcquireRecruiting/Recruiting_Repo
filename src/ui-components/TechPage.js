import React from "react";
import { Card, useTheme, Flex, Heading, Text } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import "./TechPage.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { OpenAIAssistant } from "./OpenAI/OpenAIAssistant";

const BackgroundStylePropExample = () => {
    return (
      <Link to="/Actions" className="no-underline">
        <Card className="glass-card cursor-pointer hover:scale-105 transition-transform">
          <Heading level={3}>Actions</Heading>
        </Card>
      </Link>
    );
  };
const BackgroundThemeTokenExample = () => {
  const { tokens } = useTheme();
  return (
    <Link to="/JobBoard" className="no-underline">
    <Card className="glass-card" style={{ backgroundColor: tokens.colors.primary[40] }}>
      <Heading level={3}>Job Board</Heading>
    </Card>
    </Link>
  );
};

const BackgroundTokenNameExample = () => {
  return (
    <Link to="/" className="no-underline">
    <Card className="glass-card">
      <Heading level={3}>Business Page</Heading>
    </Card>
    </Link>
  );
};

const TechPage = () => {
  return (
    <div className="tech-container">
      <Flex direction="column" alignItems="center" gap="2rem">
        <BackgroundStylePropExample />
        <BackgroundThemeTokenExample />
        <BackgroundTokenNameExample />
      </Flex>
    </div>
  );
};



export default TechPage;