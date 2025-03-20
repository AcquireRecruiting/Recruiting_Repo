/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createPersonalInfo } from "../graphql/mutations";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import { createPersonalInfo } from '../graphql/mutations';
const client = generateClient();
export default function Portfolio(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const fillinhereThreeThreeOneTwoOnClick = async () => {
    await client.graphql({
      query: createPersonalInfo.replaceAll("__typename", ""),
      variables: { input: {} },
    });
  };
  const janeDoeOnClick = async () => {
    await client.graphql({
      query: createPersonalInfo.replaceAll("__typename", ""),
      variables: {
        input: {
          name: authAttributes["email"],
        },
      },
    });
  };
  return (
    <View
      width="1440px"
      height="1767px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Portfolio")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="359px"
        height="88px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="740px"
        left="300px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Card338")}
      >
        <View
          width="266px"
          height="183px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "paperclip 1339")}
        ></View>
      </Flex>
      <Flex
        gap="4px"
        direction="column"
        width="359px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="554px"
        left="278px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Copy3310")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(86,101,135,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Professional Achievements"
          {...getOverrideProps(overrides, "Professional Achievements")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(130,130,130,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Fill in here"
          onClick={() => {
            fillinhereThreeThreeOneTwoOnClick();
          }}
          {...getOverrideProps(overrides, "Fill in here3312")}
        ></Text>
      </Flex>
      <Flex
        gap="4px"
        direction="column"
        width="359px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="554px"
        left="752px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Copy33156")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(86,101,135,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Interests/Hobbies"
          {...getOverrideProps(overrides, "Interests/Hobbies")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(130,130,130,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Fill in here"
          {...getOverrideProps(overrides, "Fill in here33158")}
        ></Text>
      </Flex>
      <Flex
        gap="4px"
        direction="column"
        width="359px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="908px"
        left="284px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Copy3313")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(86,101,135,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Work History"
          {...getOverrideProps(overrides, "Work History")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(130,130,130,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Fill in Here"
          {...getOverrideProps(overrides, "Fill in Here")}
        ></Text>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        width="359px"
        height="50px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="1457px"
        left="845px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Card3319")}
      >
        <View
          width="266px"
          height="183px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "paperclip 13320")}
        ></View>
      </Flex>
      <Flex
        gap="4px"
        direction="column"
        width="359px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="900px"
        left="752px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Copy3321")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(86,101,135,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Education"
          {...getOverrideProps(overrides, "Education")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(130,130,130,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Fill in here"
          {...getOverrideProps(overrides, "Fill in here3323")}
        ></Text>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        width="572px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="170px"
        left="434px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Copy3324")}
      >
        <Text
          fontFamily="Inter"
          fontSize="64px"
          fontWeight="700"
          color="rgba(86,101,135,1)"
          lineHeight="77.45454406738281px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-1.13px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Jane Doe"
          onClick={() => {
            janeDoeOnClick();
          }}
          {...getOverrideProps(overrides, "Jane Doe")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(130,130,130,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="A subheading with a brief description of you, your work, and what you’re all about—no biggie"
          {...getOverrideProps(
            overrides,
            "A subheading with a brief description of you, your work, and what you\u2019re all about\u2014no biggie"
          )}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(130,130,130,1)"
        lineHeight="36px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="572px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="447px"
        left="23px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Professional Focus"
        {...getOverrideProps(overrides, "Professional Focus")}
      ></Text>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="365px"
        left="431px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Social Icons3328")}
      >
        <View
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Buttons / Icon3329")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8px"
            left="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon3330")}
          >
            <Icon
              width="20px"
              height="19.92px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 20.000024795532227,
                height: 19.919998168945312,
              }}
              paths={[
                {
                  d: "M10 0C4.5 0 0 4.49 0 10.02C0 15.02 3.66 19.17 8.44 19.92L8.44 12.92L5.9 12.92L5.9 10.02L8.44 10.02L8.44 7.81C8.44 5.3 9.93 3.92 12.22 3.92C13.31 3.92 14.45 4.11 14.45 4.11L14.45 6.58L13.19 6.58C11.95 6.58 11.56 7.35 11.56 8.14L11.56 10.02L14.34 10.02L13.89 12.92L11.56 12.92L11.56 19.92C13.9164 19.5478 16.0622 18.3455 17.6099 16.5301C19.1576 14.7146 20.0054 12.4056 20 10.02C20 4.49 15.5 0 10 0Z",
                  fill: "rgba(86,101,135,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="2.04px"
              left="2px"
              {...getOverrideProps(overrides, "Icon3331")}
            >
              <View
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="-8.5%"
                bottom="8.5%"
                left="-8.33%"
                right="8.33%"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(
                  overrides,
                  "Icons / Social / facebook3332"
                )}
              >
                <Icon
                  width="20px"
                  height="19.92px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 20.000024795532227,
                    height: 19.919998168945312,
                  }}
                  paths={[
                    {
                      d: "M10 0C4.5 0 0 4.49 0 10.02C0 15.02 3.66 19.17 8.44 19.92L8.44 12.92L5.9 12.92L5.9 10.02L8.44 10.02L8.44 7.81C8.44 5.3 9.93 3.92 12.22 3.92C13.31 3.92 14.45 4.11 14.45 4.11L14.45 6.58L13.19 6.58C11.95 6.58 11.56 7.35 11.56 8.14L11.56 10.02L14.34 10.02L13.89 12.92L11.56 12.92L11.56 19.92C13.9164 19.5478 16.0622 18.3455 17.6099 16.5301C19.1576 14.7146 20.0054 12.4056 20 10.02C20 4.49 15.5 0 10 0Z",
                      fill: "rgba(130,130,130,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="8.5%"
                  bottom="8.5%"
                  left="8.33%"
                  right="8.33%"
                  {...getOverrideProps(overrides, "Vector3333")}
                ></Icon>
              </View>
            </Icon>
          </View>
        </View>
        <View
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Buttons / Icon3334")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8px"
            left="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon3335")}
          >
            <Icon
              width="18px"
              height="18px"
              viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
              paths={[
                {
                  d: "M16 0C16.5304 4.44089e-16 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2L18 16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18L2 18C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 4.44089e-16 16.5304 0 16L0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 4.44089e-16 2 0L16 0ZM15.5 15.5L15.5 10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24L9.92 7.13L7.13 7.13L7.13 15.5L9.92 15.5L9.92 10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57L12.71 15.5L15.5 15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5L5.27 7.13L2.5 7.13L2.5 15.5L5.27 15.5Z",
                  fill: "rgba(86,101,135,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="3px"
              left="3px"
              {...getOverrideProps(overrides, "Icon3336")}
            >
              <View
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="-12.5%"
                bottom="12.5%"
                left="-12.5%"
                right="12.5%"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(
                  overrides,
                  "Icons / Social / linkedin3337"
                )}
              >
                <Icon
                  width="18px"
                  height="18px"
                  viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
                  paths={[
                    {
                      d: "M16 0C16.5304 4.44089e-16 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2L18 16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18L2 18C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 4.44089e-16 16.5304 0 16L0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 4.44089e-16 2 0L16 0ZM15.5 15.5L15.5 10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24L9.92 7.13L7.13 7.13L7.13 15.5L9.92 15.5L9.92 10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57L12.71 15.5L15.5 15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5L5.27 7.13L2.5 7.13L2.5 15.5L5.27 15.5Z",
                      fill: "rgba(130,130,130,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="12.5%"
                  bottom="12.5%"
                  left="12.5%"
                  right="12.5%"
                  {...getOverrideProps(overrides, "Vector3338")}
                ></Icon>
              </View>
            </Icon>
          </View>
        </View>
        <View
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Buttons / Icon3339")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8px"
            left="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon3340")}
          >
            <Icon
              width="20px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 14 }}
              paths={[
                {
                  d: "M8 10L13.19 7L8 4L8 10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z",
                  fill: "rgba(86,101,135,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5px"
              left="2px"
              {...getOverrideProps(overrides, "Icon3341")}
            >
              <View
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="-20.83%"
                bottom="20.83%"
                left="-8.33%"
                right="8.33%"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Icons / Social / youtube3342")}
              >
                <Icon
                  width="20px"
                  height="14px"
                  viewBox={{ minX: 0, minY: 0, width: 20, height: 14 }}
                  paths={[
                    {
                      d: "M8 10L13.19 7L8 4L8 10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z",
                      fill: "rgba(130,130,130,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="20.83%"
                  bottom="20.83%"
                  left="8.33%"
                  right="8.33%"
                  {...getOverrideProps(overrides, "Vector3343")}
                ></Icon>
              </View>
            </Icon>
          </View>
        </View>
        <View
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Buttons / Icon3344")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8px"
            left="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon3345")}
          >
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M5.8 0L14.2 0C17.4 0 20 2.6 20 5.8L20 14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20L5.8 20C2.6 20 0 17.4 0 14.2L0 5.8C4.44089e-16 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 1.9984e-15 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6L2 14.4C2 16.39 3.61 18 5.6 18L14.4 18C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4L18 5.6C18 3.61 16.39 2 14.4 2L5.6 2ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z",
                  fill: "rgba(86,101,135,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="2px"
              left="2px"
              {...getOverrideProps(overrides, "Icon3346")}
            >
              <View
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="-8.33%"
                bottom="8.33%"
                left="-8.33%"
                right="8.33%"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(
                  overrides,
                  "Icons / Social / instagram3347"
                )}
              >
                <Icon
                  width="20px"
                  height="20px"
                  viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M5.8 0L14.2 0C17.4 0 20 2.6 20 5.8L20 14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20L5.8 20C2.6 20 0 17.4 0 14.2L0 5.8C4.44089e-16 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 1.9984e-15 5.8 0M5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6L2 14.4C2 16.39 3.61 18 5.6 18L14.4 18C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4L18 5.6C18 3.61 16.39 2 14.4 2L5.6 2ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5M10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z",
                      fill: "rgba(130,130,130,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="8.33%"
                  bottom="8.33%"
                  left="8.33%"
                  right="8.33%"
                  {...getOverrideProps(overrides, "Vector3348")}
                ></Icon>
              </View>
            </Icon>
          </View>
        </View>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="40px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="155px"
        left="1060px"
        borderRadius="8px"
        padding="0px 16px 0px 16px"
        backgroundColor="rgba(86,101,135,1)"
        {...getOverrideProps(overrides, "00 Primary button")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="284px"
          height="42px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="UPLOAD YOUR RESUME"
          {...getOverrideProps(overrides, "UPLOAD YOUR RESUME")}
        ></Text>
      </Flex>
      <View
        width="280px"
        height="311px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="526px"
        bottom="930px"
        left="-2px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Left sidebar")}
      >
        <Flex
          gap="0"
          direction="column"
          width="240px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="78px"
          left="8px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "List3352")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="0px 16px 0px 16px"
            backgroundColor="rgba(247,247,247,1)"
            {...getOverrideProps(overrides, "Menu item3353")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "home")}
            >
              <Icon
                width="18px"
                height="20px"
                viewBox={{ minX: 0, minY: 0, width: 18, height: 20 }}
                paths={[
                  {
                    d: "M0 7L-0.613941 6.21065C-0.857527 6.4001 -1 6.69141 -1 7L0 7ZM9 0L9.61394 -0.789352C9.25283 -1.07022 8.74717 -1.07022 8.38606 -0.789352L9 0ZM18 7L19 7C19 6.69141 18.8575 6.4001 18.6139 6.21065L18 7ZM0 18L-1 18L0 18ZM0.613941 7.78935L9.61394 0.789352L8.38606 -0.789352L-0.613941 6.21065L0.613941 7.78935ZM8.38606 0.789352L17.3861 7.78935L18.6139 6.21065L9.61394 -0.789352L8.38606 0.789352ZM17 7L17 18L19 18L19 7L17 7ZM17 18C17 18.2652 16.8946 18.5196 16.7071 18.7071L18.1213 20.1213C18.6839 19.5587 19 18.7957 19 18L17 18ZM16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19L16 21C16.7957 21 17.5587 20.6839 18.1213 20.1213L16.7071 18.7071ZM16 19L2 19L2 21L16 21L16 19ZM2 19C1.73478 19 1.48043 18.8946 1.29289 18.7071L-0.12132 20.1213C0.441288 20.6839 1.20435 21 2 21L2 19ZM1.29289 18.7071C1.10536 18.5196 1 18.2652 1 18L-1 18C-1 18.7957 -0.68393 19.5587 -0.12132 20.1213L1.29289 18.7071ZM1 18L1 7L-1 7L-1 18L1 18Z",
                    stroke: "rgba(86,101,135,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="8.33%"
                bottom="8.33%"
                left="12.5%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector3355")}
              ></Icon>
              <Icon
                width="6px"
                height="10px"
                viewBox={{ minX: 0, minY: 0, width: 6, height: 10 }}
                paths={[
                  {
                    d: "M-1 10C-1 10.5523 -0.552285 11 0 11C0.552285 11 1 10.5523 1 10L-1 10ZM0 0L0 -1C-0.552285 -1 -1 -0.552285 -1 2.22045e-16L0 0ZM6 0L7 0C7 -0.552285 6.55228 -1 6 -1L6 0ZM5 10C5 10.5523 5.44772 11 6 11C6.55228 11 7 10.5523 7 10L5 10ZM1 10L1 0L-1 0L-1 10L1 10ZM0 1L6 1L6 -1L0 -1L0 1ZM5 0L5 10L7 10L7 0L5 0Z",
                    stroke: "rgba(86,101,135,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="50%"
                bottom="8.33%"
                left="37.5%"
                right="37.5%"
                {...getOverrideProps(overrides, "Vector3356")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="500"
              color="rgba(86,101,135,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Home"
              {...getOverrideProps(overrides, "Home")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="0px 16px 0px 16px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Menu item3358")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "search")}
            >
              <Icon
                width="16px"
                height="16px"
                viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
                paths={[
                  {
                    d: "M15 8C15 11.866 11.866 15 8 15L8 17C12.9706 17 17 12.9706 17 8L15 8ZM8 15C4.13401 15 1 11.866 1 8L-1 8C-1 12.9706 3.02944 17 8 17L8 15ZM1 8C1 4.13401 4.13401 1 8 1L8 -1C3.02944 -1 -1 3.02944 -1 8L1 8ZM8 1C11.866 1 15 4.13401 15 8L17 8C17 3.02944 12.9706 -1 8 -1L8 1Z",
                    stroke: "rgba(86,101,135,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="12.5%"
                bottom="20.83%"
                left="12.5%"
                right="20.83%"
                {...getOverrideProps(overrides, "Vector3360")}
              ></Icon>
              <Icon
                width="4.35px"
                height="4.35px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 4.350000381469727,
                  height: 4.350000381469727,
                }}
                paths={[
                  {
                    d: "M3.64289 5.05711C4.03342 5.44763 4.66658 5.44763 5.05711 5.05711C5.44763 4.66658 5.44763 4.03342 5.05711 3.64289L3.64289 5.05711ZM0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM5.05711 3.64289L0.707107 -0.707107L-0.707107 0.707107L3.64289 5.05711L5.05711 3.64289Z",
                    stroke: "rgba(86,101,135,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="69.37%"
                bottom="12.5%"
                left="69.37%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector3361")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="500"
              color="rgba(86,101,135,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Search"
              {...getOverrideProps(overrides, "Search")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="0px 16px 0px 16px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Menu item3363")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "bell")}
            >
              <Icon
                width="18px"
                height="15px"
                viewBox={{ minX: 0, minY: 0, width: 18, height: 15 }}
                paths={[
                  {
                    d: "M9 0L9 -1L9 0ZM3 6L2 6L3 6ZM0 15L-0.5547 14.1679C-0.921357 14.4124 -1.08479 14.868 -0.957092 15.2898C-0.829394 15.7115 -0.440667 16 0 16L0 15ZM18 15L18 16C18.4407 16 18.8294 15.7115 18.9571 15.2898C19.0848 14.868 18.9214 14.4124 18.5547 14.1679L18 15ZM16 6C16 4.14349 15.2625 2.36301 13.9497 1.05025L12.5355 2.46447C13.4732 3.40215 14 4.67392 14 6L16 6ZM13.9497 1.05025C12.637 -0.262502 10.8565 -1 9 -1L9 1C10.3261 1 11.5979 1.52678 12.5355 2.46447L13.9497 1.05025ZM9 -1C7.14348 -1 5.36301 -0.262502 4.05025 1.05025L5.46447 2.46447C6.40215 1.52678 7.67392 1 9 1L9 -1ZM4.05025 1.05025C2.7375 2.36301 2 4.14348 2 6L4 6C4 4.67392 4.52678 3.40215 5.46447 2.46447L4.05025 1.05025ZM2 6C2 9.35266 1.28293 11.4346 0.622104 12.6461C0.290309 13.2544 -0.0327743 13.6535 -0.257203 13.8904C-0.369678 14.0091 -0.458062 14.0878 -0.511278 14.1322C-0.5379 14.1544 -0.555753 14.168 -0.563453 14.1737C-0.567303 14.1766 -0.568614 14.1775 -0.567214 14.1765C-0.566514 14.176 -0.565135 14.175 -0.563057 14.1736C-0.562018 14.1729 -0.560804 14.1721 -0.559412 14.1711C-0.558716 14.1706 -0.557975 14.1701 -0.55719 14.1696C-0.556798 14.1694 -0.556175 14.1689 -0.555979 14.1688C-0.555345 14.1684 -0.5547 14.1679 0 15C0.5547 15.8321 0.555368 15.8316 0.556048 15.8312C0.556289 15.831 0.556981 15.8305 0.557464 15.8302C0.558432 15.8296 0.559445 15.8289 0.560505 15.8282C0.562623 15.8267 0.564925 15.8252 0.567406 15.8235C0.572368 15.8201 0.578049 15.8161 0.584426 15.8116C0.597179 15.8026 0.612713 15.7915 0.630836 15.778C0.667081 15.751 0.713681 15.7148 0.769091 15.6686C0.879937 15.5762 1.02593 15.444 1.1947 15.2659C1.53277 14.909 1.95969 14.3706 2.3779 13.6039C3.21707 12.0654 4 9.64734 4 6L2 6ZM0 16L18 16L18 14L0 14L0 16ZM18 15C18.5547 14.1679 18.5553 14.1684 18.556 14.1688C18.5562 14.1689 18.5568 14.1694 18.5572 14.1696C18.558 14.1701 18.5587 14.1706 18.5594 14.1711C18.5608 14.1721 18.562 14.1729 18.5631 14.1736C18.5651 14.175 18.5665 14.176 18.5672 14.1765C18.5686 14.1775 18.5673 14.1766 18.5635 14.1737C18.5558 14.168 18.5379 14.1544 18.5113 14.1322C18.4581 14.0878 18.3697 14.0091 18.2572 13.8904C18.0328 13.6535 17.7097 13.2544 17.3779 12.6461C16.7171 11.4346 16 9.35266 16 6L14 6C14 9.64734 14.7829 12.0654 15.6221 13.6039C16.0403 14.3706 16.4672 14.909 16.8053 15.2659C16.9741 15.444 17.1201 15.5762 17.2309 15.6686C17.2863 15.7148 17.3329 15.751 17.3692 15.778C17.3873 15.7915 17.4028 15.8026 17.4156 15.8116C17.422 15.8161 17.4276 15.8201 17.4326 15.8235C17.4351 15.8252 17.4374 15.8267 17.4395 15.8282C17.4406 15.8289 17.4416 15.8296 17.4425 15.8302C17.443 15.8305 17.4437 15.831 17.444 15.8312C17.4446 15.8316 17.4453 15.8321 18 15Z",
                    stroke: "rgba(86,101,135,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="8.33%"
                bottom="29.17%"
                left="12.5%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector3365")}
              ></Icon>
              <Icon
                width="3.46px"
                height="1px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 3.4599990844726562,
                  height: 0.9964561462402344,
                }}
                paths={[
                  {
                    d: "M4.325 0.501772C4.60212 0.0240456 4.4395 -0.587879 3.96177 -0.865C3.48404 -1.14212 2.87212 -0.979498 2.595 -0.501772L4.325 0.501772ZM0.865 -0.501772C0.587879 -0.979498 -0.0240456 -1.14212 -0.501772 -0.865C-0.979498 -0.587879 -1.14212 0.0240456 -0.865 0.501772L0.865 -0.501772ZM2.595 -0.501772C2.50709 -0.350232 2.38092 -0.224445 2.22911 -0.137006L3.22734 1.59607C3.68276 1.33375 4.06128 0.956388 4.325 0.501772L2.595 -0.501772ZM2.22911 -0.137006C2.07731 -0.0495675 1.90519 -0.00354385 1.73 -0.00354385L1.73 1.99646C2.25557 1.99646 2.77191 1.85839 3.22734 1.59607L2.22911 -0.137006ZM1.73 -0.00354385C1.55481 -0.00354385 1.38269 -0.0495675 1.23089 -0.137006L0.23266 1.59607C0.688086 1.85839 1.20443 1.99646 1.73 1.99646L1.73 -0.00354385ZM1.23089 -0.137006C1.07908 -0.224445 0.952906 -0.350232 0.865 -0.501772L-0.865 0.501772C-0.601285 0.956388 -0.222765 1.33375 0.23266 1.59607L1.23089 -0.137006Z",
                    stroke: "rgba(86,101,135,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="87.5%"
                bottom="8.35%"
                left="42.79%"
                right="42.79%"
                {...getOverrideProps(overrides, "Vector3366")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="500"
              color="rgba(86,101,135,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Notifications"
              {...getOverrideProps(overrides, "Notifications")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="0px 16px 0px 16px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Menu item3368")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "bookmark")}
            >
              <Icon
                width="14px"
                height="18px"
                viewBox={{ minX: 0, minY: 0, width: 14, height: 18 }}
                paths={[
                  {
                    d: "M14 18L13.4188 18.8137C13.7236 19.0315 14.1245 19.0606 14.4576 18.8892C14.7907 18.7178 15 18.3746 15 18L14 18ZM7 13L7.58124 12.1863C7.23354 11.9379 6.76646 11.9379 6.41876 12.1863L7 13ZM0 18L-1 18C-1 18.3746 -0.790653 18.7178 -0.457582 18.8892C-0.124511 19.0606 0.276424 19.0315 0.581238 18.8137L0 18ZM2 0L2 -1L2 0ZM12 0L12 -1L12 0ZM14.5812 17.1863L7.58124 12.1863L6.41876 13.8137L13.4188 18.8137L14.5812 17.1863ZM6.41876 12.1863L-0.581238 17.1863L0.581238 18.8137L7.58124 13.8137L6.41876 12.1863ZM1 18L1 2L-1 2L-1 18L1 18ZM1 2C1 1.73478 1.10536 1.48043 1.29289 1.29289L-0.12132 -0.12132C-0.68393 0.441289 -1 1.20435 -1 2L1 2ZM1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1L2 -1C1.20435 -1 0.441289 -0.68393 -0.12132 -0.12132L1.29289 1.29289ZM2 1L12 1L12 -1L2 -1L2 1ZM12 1C12.2652 1 12.5196 1.10536 12.7071 1.29289L14.1213 -0.12132C13.5587 -0.68393 12.7956 -1 12 -1L12 1ZM12.7071 1.29289C12.8946 1.48043 13 1.73478 13 2L15 2C15 1.20435 14.6839 0.441288 14.1213 -0.12132L12.7071 1.29289ZM13 2L13 18L15 18L15 2L13 2Z",
                    stroke: "rgba(86,101,135,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="12.5%"
                bottom="12.5%"
                left="20.83%"
                right="20.83%"
                {...getOverrideProps(overrides, "Vector3370")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="500"
              color="rgba(86,101,135,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Activity&#xA;"
              {...getOverrideProps(overrides, "Activity")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="0px 16px 0px 16px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Menu item3372")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "message-circle")}
            >
              <Icon
                width="18px"
                height="18px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 18.000028610229492,
                  height: 18.000028610229492,
                }}
                paths={[
                  {
                    d: "M18 8.50003L17 8.50003L17 8.50264L18 8.50003ZM17.1 12.3L16.2074 11.8492L16.2055 11.853L17.1 12.3ZM9.5 17L9.49961 16L9.49739 16L9.5 17ZM5.7 16.1L6.15085 15.2074C5.91286 15.0872 5.63672 15.067 5.38377 15.1513L5.7 16.1ZM0 18L-0.948683 17.6838C-1.06846 18.0431 -0.974939 18.4393 -0.707107 18.7071C-0.439275 18.975 -0.043107 19.0685 0.316228 18.9487L0 18ZM1.9 12.3L2.84868 12.6163C2.933 12.3633 2.91281 12.0872 2.7926 11.8492L1.9 12.3ZM1 8.50003L2 8.50264L2 8.50042L1 8.50003ZM5.7 0.900029L6.14706 1.79454L6.15085 1.79263L5.7 0.900029ZM9.5 2.84881e-05L9.49739 1.00003L9.5 1.00003L9.5 2.84881e-05ZM10 2.84881e-05L10.0551 -0.998453C10.0367 -0.999465 10.0184 -0.999972 10 -0.999972L10 2.84881e-05ZM18 8.00003L19 8.00003C19 7.98166 18.9995 7.96329 18.9985 7.94494L18 8.00003ZM17 8.50264C17.003 9.665 16.7315 10.8116 16.2074 11.8492L17.9926 12.7509C18.6587 11.4322 19.0038 9.97479 19 8.49742L17 8.50264ZM16.2055 11.853C15.5829 13.0986 14.6259 14.1464 13.4415 14.8788L14.4934 16.5798C15.9936 15.652 17.2059 14.3249 17.9945 12.7471L16.2055 11.853ZM13.4415 14.8788C12.2571 15.6113 10.8922 15.9995 9.49961 16L9.50039 18C11.2643 17.9993 12.9932 17.5076 14.4934 16.5798L13.4415 14.8788ZM9.49739 16C8.33503 16.0031 7.18838 15.7315 6.15085 15.2074L5.24915 16.9926C6.56785 17.6587 8.02524 18.0039 9.50261 18L9.49739 16ZM5.38377 15.1513L-0.316228 17.0513L0.316228 18.9487L6.01623 17.0487L5.38377 15.1513ZM0.948683 18.3163L2.84868 12.6163L0.951317 11.9838L-0.948683 17.6838L0.948683 18.3163ZM2.7926 11.8492C2.26854 10.8116 1.99697 9.665 2 8.50264L3.39891e-06 8.49742C-0.0038485 9.97479 0.341323 11.4322 1.0074 12.7509L2.7926 11.8492ZM2 8.50042C2.00054 7.10785 2.38878 5.74293 3.12122 4.55855L1.42022 3.50661C0.492449 5.00683 0.000682624 6.73572 7.48654e-08 8.49964L2 8.50042ZM3.12122 4.55855C3.85367 3.37416 4.9014 2.41709 6.14706 1.79453L5.25294 0.00552399C3.67511 0.794099 2.34798 2.00639 1.42022 3.50661L3.12122 4.55855ZM6.15085 1.79263C7.18838 1.26857 8.33503 0.996994 9.49739 1.00003L9.50261 -0.999968C8.02524 -1.00382 6.56785 -0.658649 5.24915 0.00743056L6.15085 1.79263ZM9.5 1.00003L10 1.00003L10 -0.999972L9.5 -0.999972L9.5 1.00003ZM9.94491 0.99851C11.7835 1.09994 13.52 1.87596 14.822 3.17799L16.2362 1.76378C14.5861 0.113615 12.3852 -0.869901 10.0551 -0.998453L9.94491 0.99851ZM14.822 3.17799C16.1241 4.48002 16.9001 6.21656 17.0015 8.05511L18.9985 7.94494C18.8699 5.6148 17.8864 3.41395 16.2362 1.76378L14.822 3.17799ZM17 8.00003L17 8.50003L19 8.50003L19 8.00003L17 8.00003Z",
                    stroke: "rgba(86,101,135,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="12.5%"
                bottom="12.5%"
                left="12.5%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector3374")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="500"
              color="rgba(86,101,135,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Messages"
              {...getOverrideProps(overrides, "Messages")}
            ></Text>
          </Flex>
        </Flex>
      </View>
      <Flex
        gap="8px"
        direction="column"
        width="1285px"
        height="296px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="1292px"
        left="56px"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="8px"
        padding="23px 23px 23px 23px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "List card")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="600"
          color="rgba(86,101,135,1)"
          lineHeight="48px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="About"
          {...getOverrideProps(overrides, "About")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="36px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1663.5px"
        left="43px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Acquire Recruiting"
        {...getOverrideProps(overrides, "Acquire Recruiting3378")}
      ></Text>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="1699.5px"
        left="55px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Social Icons3379")}
      >
        <View
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Buttons / Icon3380")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8px"
            left="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon3381")}
          >
            <Icon
              width="20px"
              height="19.92px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 20.000024795532227,
                height: 19.919998168945312,
              }}
              paths={[
                {
                  d: "M10 0C4.5 0 0 4.49 0 10.02C0 15.02 3.66 19.17 8.44 19.92L8.44 12.92L5.9 12.92L5.9 10.02L8.44 10.02L8.44 7.81C8.44 5.3 9.93 3.92 12.22 3.92C13.31 3.92 14.45 4.11 14.45 4.11L14.45 6.58L13.19 6.58C11.95 6.58 11.56 7.35 11.56 8.14L11.56 10.02L14.34 10.02L13.89 12.92L11.56 12.92L11.56 19.92C13.9164 19.5478 16.0622 18.3455 17.6099 16.5301C19.1576 14.7146 20.0054 12.4056 20 10.02C20 4.49 15.5 0 10 0Z",
                  fill: "rgba(130,130,130,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="2.04px"
              left="2px"
              {...getOverrideProps(overrides, "Icon3382")}
            >
              <View
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="-8.5%"
                bottom="8.5%"
                left="-8.33%"
                right="8.33%"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(
                  overrides,
                  "Icons / Social / facebook3383"
                )}
              >
                <Icon
                  width="20px"
                  height="19.92px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 20.000024795532227,
                    height: 19.919998168945312,
                  }}
                  paths={[
                    {
                      d: "M10 0C4.5 0 0 4.49 0 10.02C0 15.02 3.66 19.17 8.44 19.92L8.44 12.92L5.9 12.92L5.9 10.02L8.44 10.02L8.44 7.81C8.44 5.3 9.93 3.92 12.22 3.92C13.31 3.92 14.45 4.11 14.45 4.11L14.45 6.58L13.19 6.58C11.95 6.58 11.56 7.35 11.56 8.14L11.56 10.02L14.34 10.02L13.89 12.92L11.56 12.92L11.56 19.92C13.9164 19.5478 16.0622 18.3455 17.6099 16.5301C19.1576 14.7146 20.0054 12.4056 20 10.02C20 4.49 15.5 0 10 0Z",
                      fill: "rgba(130,130,130,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="8.5%"
                  bottom="8.5%"
                  left="8.33%"
                  right="8.33%"
                  {...getOverrideProps(overrides, "Vector3384")}
                ></Icon>
              </View>
            </Icon>
          </View>
        </View>
        <View
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Buttons / Icon3385")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8px"
            left="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon3386")}
          >
            <Icon
              width="18px"
              height="18px"
              viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
              paths={[
                {
                  d: "M16 0C16.5304 4.44089e-16 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2L18 16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18L2 18C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 4.44089e-16 16.5304 0 16L0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 4.44089e-16 2 0L16 0ZM15.5 15.5L15.5 10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24L9.92 7.13L7.13 7.13L7.13 15.5L9.92 15.5L9.92 10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57L12.71 15.5L15.5 15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5L5.27 7.13L2.5 7.13L2.5 15.5L5.27 15.5Z",
                  fill: "rgba(130,130,130,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="3px"
              left="3px"
              {...getOverrideProps(overrides, "Icon3387")}
            >
              <View
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="-12.5%"
                bottom="12.5%"
                left="-12.5%"
                right="12.5%"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(
                  overrides,
                  "Icons / Social / linkedin3388"
                )}
              >
                <Icon
                  width="18px"
                  height="18px"
                  viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
                  paths={[
                    {
                      d: "M16 0C16.5304 4.44089e-16 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2L18 16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18L2 18C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 4.44089e-16 16.5304 0 16L0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 4.44089e-16 2 0L16 0ZM15.5 15.5L15.5 10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24L9.92 7.13L7.13 7.13L7.13 15.5L9.92 15.5L9.92 10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57L12.71 15.5L15.5 15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5L5.27 7.13L2.5 7.13L2.5 15.5L5.27 15.5Z",
                      fill: "rgba(130,130,130,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="12.5%"
                  bottom="12.5%"
                  left="12.5%"
                  right="12.5%"
                  {...getOverrideProps(overrides, "Vector3389")}
                ></Icon>
              </View>
            </Icon>
          </View>
        </View>
        <View
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Buttons / Icon3390")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8px"
            left="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon3391")}
          >
            <Icon
              width="20px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 14 }}
              paths={[
                {
                  d: "M8 10L13.19 7L8 4L8 10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z",
                  fill: "rgba(130,130,130,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5px"
              left="2px"
              {...getOverrideProps(overrides, "Icon3392")}
            >
              <View
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="-20.83%"
                bottom="20.83%"
                left="-8.33%"
                right="8.33%"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Icons / Social / youtube3393")}
              >
                <Icon
                  width="20px"
                  height="14px"
                  viewBox={{ minX: 0, minY: 0, width: 20, height: 14 }}
                  paths={[
                    {
                      d: "M8 10L13.19 7L8 4L8 10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z",
                      fill: "rgba(130,130,130,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="20.83%"
                  bottom="20.83%"
                  left="8.33%"
                  right="8.33%"
                  {...getOverrideProps(overrides, "Vector3394")}
                ></Icon>
              </View>
            </Icon>
          </View>
        </View>
        <View
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Buttons / Icon3395")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8px"
            left="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon3396")}
          >
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M5.8 0L14.2 0C17.4 0 20 2.6 20 5.8L20 14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20L5.8 20C2.6 20 0 17.4 0 14.2L0 5.8C4.44089e-16 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 1.9984e-15 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6L2 14.4C2 16.39 3.61 18 5.6 18L14.4 18C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4L18 5.6C18 3.61 16.39 2 14.4 2L5.6 2ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z",
                  fill: "rgba(130,130,130,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="2px"
              left="2px"
              {...getOverrideProps(overrides, "Icon3397")}
            >
              <View
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="-8.33%"
                bottom="8.33%"
                left="-8.33%"
                right="8.33%"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(
                  overrides,
                  "Icons / Social / instagram3398"
                )}
              >
                <Icon
                  width="20px"
                  height="20px"
                  viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M5.8 0L14.2 0C17.4 0 20 2.6 20 5.8L20 14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20L5.8 20C2.6 20 0 17.4 0 14.2L0 5.8C4.44089e-16 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 1.9984e-15 5.8 0M5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6L2 14.4C2 16.39 3.61 18 5.6 18L14.4 18C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4L18 5.6C18 3.61 16.39 2 14.4 2L5.6 2ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5M10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z",
                      fill: "rgba(130,130,130,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="8.33%"
                  bottom="8.33%"
                  left="8.33%"
                  right="8.33%"
                  {...getOverrideProps(overrides, "Vector3399")}
                ></Icon>
              </View>
            </Icon>
          </View>
        </View>
      </Flex>
      <Icon
        width="1280px"
        height="46px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 1280.0000040214431,
          height: 46.000058495392295,
        }}
        paths={[
          {
            d: "M632 45.9999L631.964 46.4986L632 46.5012L632.035 46.4987L632 45.9999ZM-0.0362963 0.498681L631.964 46.4986L632.036 45.5013L0.0362963 -0.498681L-0.0362963 0.498681ZM632.035 46.4987L1280.04 0.498745L1279.96 -0.498745L631.965 45.5012L632.035 46.4987Z",
            stroke: "rgba(0,72,121,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1640px"
        left="56px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Divider")}
      ></Icon>
      <View
        width="1440px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        border="1px SOLID rgba(224,224,224,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Navigation")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="12px"
          left="1320px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Avatar33102")}
        >
          <View
            width="40px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="1000px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(247,247,247,1)"
            {...getOverrideProps(overrides, "Avatar33103")}
          >
            <Image
              width="100%"
              height="100%"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "Rectangle 1")}
            ></Image>
          </View>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "chevron-down")}
          >
            <Icon
              width="12px"
              height="6px"
              viewBox={{ minX: 0, minY: 0, width: 12, height: 6 }}
              paths={[
                {
                  d: "M0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM6 6L5.29289 6.70711C5.68342 7.09763 6.31658 7.09763 6.70711 6.70711L6 6ZM12.7071 0.707107C13.0976 0.316583 13.0976 -0.316583 12.7071 -0.707107C12.3166 -1.09763 11.6834 -1.09763 11.2929 -0.707107L12.7071 0.707107ZM-0.707107 0.707107L5.29289 6.70711L6.70711 5.29289L0.707107 -0.707107L-0.707107 0.707107ZM6.70711 6.70711L12.7071 0.707107L11.2929 -0.707107L5.29289 5.29289L6.70711 6.70711Z",
                  stroke: "rgba(130,130,130,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="37.5%"
              bottom="37.5%"
              left="25%"
              right="25%"
              {...getOverrideProps(overrides, "Vector33106")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="12px"
          right="144px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Buttons")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="0px 16px 0px 16px"
            backgroundColor="rgba(238,238,238,1)"
            {...getOverrideProps(overrides, "Button")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
                    stroke: "rgba(86,101,135,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector33110")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
                    stroke: "rgba(86,101,135,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector33111")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
                    stroke: "rgba(86,101,135,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector33112")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
        <Flex
          gap="32px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="19px"
          left="299px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "List33113")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(86,101,135,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="My Page"
            {...getOverrideProps(overrides, "My Page")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(86,101,135,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Explore"
            {...getOverrideProps(overrides, "Explore")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(86,101,135,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Calendar"
            {...getOverrideProps(overrides, "Calendar")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(86,101,135,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Chat"
            {...getOverrideProps(overrides, "Chat")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(86,101,135,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 15px - 1px)"
          left="79px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Acquire Recruiting"
          {...getOverrideProps(overrides, "Acquire Recruiting33118")}
        ></Text>
      </View>
      <Image
        width="56px"
        height="52px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="7px"
        left="11px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
      <View
        width="377px"
        height="320px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="88px"
        left="21px"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(181,219,255,1)"
        {...getOverrideProps(overrides, "Graphic")}
      ></View>
      <Icon
        width="919px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 919, height: 3.382157647280337e-7 }}
        paths={[
          {
            d: "M0 0L919 0L919 -3L0 -3L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="868px"
        left="292px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 2")}
      ></Icon>
      <Icon
        width="702px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1, height: 702 }}
        paths={[
          {
            d: "M0 2.22045e-16L702 2.22045e-16L702 -3L0 -3L0 2.22045e-16Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="542px"
        left="736px"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 3")}
      ></Icon>
    </View>
  );
}
