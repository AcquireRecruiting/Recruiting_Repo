import React from "react";
import { Card, useTheme, Flex, Heading, Text } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./TechPage.css";


const BackgroundStylePropExample = () => {
  return (
    <Card className="glass-card">
      <Heading level={3}>AI Assistant</Heading>
    </Card>
  );
};

const BackgroundThemeTokenExample = () => {
  const { tokens } = useTheme();
  return (
    <Card className="glass-card" style={{ backgroundColor: tokens.colors.primary[80] }}>
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

const TechPage = () => {
  return (
    <div className="tech-container">
      <Heading level={1} className="tech-title">ACQUIRE RECRUITING</Heading>
      <Flex direction="column" alignItems="center" gap="2rem">
        <BackgroundStylePropExample />
        <BackgroundThemeTokenExample />
        <BackgroundTokenNameExample />
      </Flex>
    </div>
  );
};

export default TechPage;