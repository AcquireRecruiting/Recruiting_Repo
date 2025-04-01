import React from "react";
import { Card, useTheme, Flex, Heading, Text } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./AIAssistant.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const BackgroundStylePropExample = () => {
    return (
      <Link to="/ai-assistant" className="no-underline">
        <Card className="glass-card cursor-pointer hover:scale-105 transition-transform">
          <Heading level={3}>AI Assistant</Heading>
        </Card>
      </Link>
    );
  };
const BackgroundThemeTokenExample = () => {
  const { tokens } = useTheme();
  return (
    <Card className="glass-card" style={{ backgroundColor: tokens.colors.primary[60] }}>
      <Heading level={3}>Job Board</Heading>
    </Card>
  );
};

const BackgroundTokenNameExample = () => {
  return (
    <Card className="glass-card">
      <Heading level={3}>Business Page</Heading>
    </Card>
  );
};

const AIAssistant = () => {
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

export default AIAssistant;