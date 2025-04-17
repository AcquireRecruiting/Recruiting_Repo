/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Flex,
  Heading,
  TextField,
  TextAreaField,
  Image,
  Button,
} from "@aws-amplify/ui-react";
import NavBarSide from "./NavBarSide";
import MarketingFooter from "./MarketingFooter";
import { useState } from "react";

export default function BusinessProfilePage(props) {
  const { overrides, ...rest } = props;

  const [profile, setProfile] = useState({
    businessName: "",
    businessField: "",
    about: "",
  });

  const handleChange = (key) => (e) => {
    setProfile((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log("Business Profile submitted:", profile);
    // Hook into backend or storage service here
  };

  return (
    <Flex
      direction="column"
      width="100%"
      minHeight="100vh"
      backgroundColor="#ffffff"
      {...getOverrideProps(overrides, "BusinessProfilePage")}
      {...rest}
    >
      {/* Layout Row: Sidebar + Main Content */}
      <Flex direction="row" flex="1" overflow="hidden">
        {/* Sidebar */}
        <Flex
          direction="column"
          width="240px"
          minWidth="200px"
          padding="2rem 1rem"
          backgroundColor="#ffffff"
          borderRight="1px solid #ddd"
        >
          <NavBarSide />
        </Flex>

        {/* Main Content */}
        <Flex
          direction="column"
          flex="1"
          gap="1.5rem"
          padding="2rem"
          overflow="auto"
          backgroundColor="#ffffff"
          borderRadius="16px"
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
          margin="2rem"
        >
          <Heading level={3}>Business Profile Settings</Heading>

          <Image
            src="https://via.placeholder.com/150"
            alt="Business Logo"
            borderRadius="8px"
            width="150px"
            height="150px"
          />

          <TextField
            label="Business Name"
            placeholder="Enter your company name"
            value={profile.businessName}
            onChange={handleChange("businessName")}
          />

          <TextField
            label="Business Field"
            placeholder="Industry or sector (e.g. Tech, Healthcare)"
            value={profile.businessField}
            onChange={handleChange("businessField")}
          />

          <TextAreaField
            label="About the Company"
            placeholder="Tell us more about what your company does"
            value={profile.about}
            onChange={handleChange("about")}
          />

          <Button onClick={handleSubmit}>Save Business Profile</Button>
        </Flex>
      </Flex>

      <Flex justifyContent="center" width="100%" padding="2rem 0">
        <MarketingFooter />
      </Flex>
    </Flex>
  );
}
