import React from "react";
import { Card, Flex, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Link } from "react-router-dom";
import "./TechPage.css";

const cardStyle =
  "bg-[#004879] text-white rounded-2xl shadow-2xl border border-blue-900 p-6 transform hover:scale-105 transition-transform duration-300";

const BackgroundStylePropExample = () => {
  return (
    <Link to="/AIPage" className="no-underline">
      <Card className={`glass-card cursor-pointer ${cardStyle}`}>
        <Heading level={3} className="text-white">
          AI Page
        </Heading>
      </Card>
    </Link>
  );
};

const BackgroundThemeTokenExample = () => {
  return (
    <Link to="/JobBoard" className="no-underline">
      <Card className={`glass-card ${cardStyle}`}>
        <Heading level={3} className="text-white">
          Job Board
        </Heading>
      </Card>
    </Link>
  );
};

const BackgroundTokenNameExample = () => {
  return (
    <Link to="/Dashboard" className="no-underline">
      <Card className={`glass-card ${cardStyle}`}>
        <Heading level={3} className="text-white">
          Business Page
        </Heading>
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
