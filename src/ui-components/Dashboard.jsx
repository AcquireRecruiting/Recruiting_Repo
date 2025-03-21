/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Dashboard(props) {
  const {
    Information,
    fullmatches,
    compname,
    intrequest,
    partialmatches,
    jobpo,
    barchart,
    linecart,
    overrides,
    ...rest
  } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  return (
    <View
      width="1440px"
      height="1364px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Dashboard")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="column"
        width="913px"
        height="424px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="353px"
        left="442px"
        right="85px"
        border="1px SOLID rgba(224,224,224,1)"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.03999999910593033)"
        borderRadius="8px"
        padding="23px 23px 0px 23px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "List164454")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
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
          children="AI Generated Report"
          {...getOverrideProps(overrides, "AI Generated Report")}
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        direction="column"
        width="332px"
        height="424px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="353px"
        left="76px"
        right="1032px"
        border="1px SOLID rgba(224,224,224,1)"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.03999999910593033)"
        borderRadius="8px"
        padding="23px 23px 0px 23px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "List164421")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(86,101,135,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          textDecoration="underline"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Top Employee Matches "
          {...getOverrideProps(overrides, "Top Employee Matches")}
        ></Text>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "People")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="12px 0px 12px 0px"
            {...getOverrideProps(overrides, "Conversation164424")}
          >
            <View
              width="48px"
              height="48px"
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
              {...getOverrideProps(overrides, "Avatar164425")}
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
                {...getOverrideProps(overrides, "Rectangle 1164426")}
              ></Image>
            </View>
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text164427")}
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
                children={compname}
                {...getOverrideProps(overrides, "Bike.Co")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(128,128,128,1)"
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
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={authAttributes["email"]}
                {...getOverrideProps(
                  overrides,
                  "email@figmasfakedomain.net164429"
                )}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="12px 0px 12px 0px"
            {...getOverrideProps(overrides, "Conversation164430")}
          >
            <View
              width="48px"
              height="48px"
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
              {...getOverrideProps(overrides, "Avatar164431")}
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
                {...getOverrideProps(overrides, "Rectangle 1164432")}
              ></Image>
            </View>
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text164433")}
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
                children={compname}
                {...getOverrideProps(overrides, "CorporateDomains.com")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(128,128,128,1)"
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
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="email@figmasfakedomain.net"
                {...getOverrideProps(
                  overrides,
                  "email@figmasfakedomain.net164435"
                )}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="12px 0px 12px 0px"
            {...getOverrideProps(overrides, "Conversation164436")}
          >
            <View
              width="48px"
              height="48px"
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
              {...getOverrideProps(overrides, "Avatar164437")}
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
                {...getOverrideProps(overrides, "Rectangle 1164438")}
              ></Image>
            </View>
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text164439")}
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
                children={compname}
                {...getOverrideProps(overrides, "EarthFoods.com")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(128,128,128,1)"
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
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="email@figmasfakedomain.net"
                {...getOverrideProps(
                  overrides,
                  "email@figmasfakedomain.net164441"
                )}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="12px 0px 12px 0px"
            {...getOverrideProps(overrides, "Conversation164442")}
          >
            <View
              width="48px"
              height="48px"
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
              {...getOverrideProps(overrides, "Avatar164443")}
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
                {...getOverrideProps(overrides, "Rectangle 1164444")}
              ></Image>
            </View>
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text164445")}
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
                children={compname}
                {...getOverrideProps(overrides, "Winter.gov")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(128,128,128,1)"
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
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="email@figmasfakedomain.net"
                {...getOverrideProps(
                  overrides,
                  "email@figmasfakedomain.net164447"
                )}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="12px 0px 12px 0px"
            {...getOverrideProps(overrides, "Conversation164448")}
          >
            <View
              width="48px"
              height="48px"
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
              {...getOverrideProps(overrides, "Avatar164449")}
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
                {...getOverrideProps(overrides, "Rectangle 1164450")}
              ></Image>
            </View>
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text164451")}
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
                children={compname}
                {...getOverrideProps(overrides, "Yoshi.gov")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(128,128,128,1)"
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
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="email@figmasfakedomain.net"
                {...getOverrideProps(
                  overrides,
                  "email@figmasfakedomain.net164453"
                )}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="1279px"
        height="187px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="161px"
        left="76px"
        right="85px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Cards92869")}
      >
        <Flex
          gap="32px"
          direction="row"
          width="1279px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Cards92870")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            border="1px SOLID rgba(224,224,224,1)"
            boxShadow="0px 4px 12px rgba(0, 0, 0, 0.03999999910593033)"
            borderRadius="8px"
            padding="23px 23px 23px 23px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Card92871")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Interview Requests"
              {...getOverrideProps(overrides, "Interview Requests")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="40px"
              fontWeight="600"
              color="rgba(86,101,135,1)"
              lineHeight="44px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="-0.65px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={intrequest}
              {...getOverrideProps(overrides, "2")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="500"
              color="rgba(130,130,130,1)"
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Companies interested in you"
              {...getOverrideProps(overrides, "Companies interested in you")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            border="1px SOLID rgba(224,224,224,1)"
            boxShadow="0px 4px 12px rgba(0, 0, 0, 0.03999999910593033)"
            borderRadius="8px"
            padding="23px 23px 23px 23px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Card92875")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Top Matches"
              {...getOverrideProps(overrides, "Top Matches")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="40px"
              fontWeight="600"
              color="rgba(86,101,135,1)"
              lineHeight="44px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="-0.65px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={fullmatches}
              {...getOverrideProps(overrides, "2,405")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="500"
              color="rgba(130,130,130,1)"
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Your top matches"
              {...getOverrideProps(overrides, "Your top matches")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="172px"
            justifyContent="space-between"
            alignItems="flex-start"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            border="1px SOLID rgba(224,224,224,1)"
            boxShadow="0px 4px 12px rgba(0, 0, 0, 0.03999999910593033)"
            borderRadius="8px"
            padding="23px 23px 23px 23px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Card92879")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Partial Matches"
              {...getOverrideProps(overrides, "Partial Matches")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="40px"
              fontWeight="600"
              color="rgba(86,101,135,1)"
              lineHeight="44px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="-0.65px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={partialmatches}
              {...getOverrideProps(overrides, "10")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="500"
              color="rgba(130,130,130,1)"
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Missing over 25% of criteria"
              {...getOverrideProps(overrides, "Missing over 25% of criteria")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
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
          {...getOverrideProps(overrides, "Avatar92886")}
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
            {...getOverrideProps(overrides, "Avatar92887")}
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
              {...getOverrideProps(overrides, "Rectangle 192888")}
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
              {...getOverrideProps(overrides, "Vector92890")}
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
                {...getOverrideProps(overrides, "Vector92894")}
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
                {...getOverrideProps(overrides, "Vector92895")}
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
                {...getOverrideProps(overrides, "Vector92896")}
              ></Icon>
            </View>
          </Flex>
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
          {...getOverrideProps(overrides, "Acquire Recruiting92901")}
        ></Text>
      </View>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="91px"
        left="calc(50% - 201px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "List92897")}
      >
        <Text
          fontFamily="Inter"
          fontSize="28px"
          fontWeight="500"
          color="rgba(86,101,135,1)"
          lineHeight="42px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          textDecoration="underline"
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
          fontSize="28px"
          fontWeight="500"
          color="rgba(86,101,135,1)"
          lineHeight="42px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          textDecoration="underline"
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
          fontSize="28px"
          fontWeight="500"
          color="rgba(86,101,135,1)"
          lineHeight="42px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          textDecoration="underline"
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
      </Flex>
      <Image
        width="58px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="4px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "IMG-20240331-WA0000 1")}
      ></Image>
      <View
        width="520px"
        height="404px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="788px"
        left="73px"
        right="847px"
        border="1px SOLID rgba(224,224,224,1)"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.03999999910593033)"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        children={linecart}
        {...getOverrideProps(overrides, "Line cart")}
      ></View>
      <View
        width="732px"
        height="396px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="788px"
        left="655px"
        right="53px"
        border="1px SOLID rgba(224,224,224,1)"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.03999999910593033)"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        children={barchart}
        {...getOverrideProps(overrides, "Bar chart")}
      ></View>
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
        width="214px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1278px"
        left="56px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Acquire Recruiting"
        {...getOverrideProps(overrides, "Acquire Recruiting23451")}
      ></Text>
      <Flex
        gap="8px"
        direction="row"
        width="188px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="1314px"
        left="69px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Social Icons")}
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
          {...getOverrideProps(overrides, "Buttons / Icon23453")}
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
            {...getOverrideProps(overrides, "Icon23454")}
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
              {...getOverrideProps(overrides, "Icon23455")}
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
                {...getOverrideProps(overrides, "Icons / Social / facebook")}
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
                  {...getOverrideProps(overrides, "Vector23457")}
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
          {...getOverrideProps(overrides, "Buttons / Icon23458")}
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
            {...getOverrideProps(overrides, "Icon23459")}
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
              {...getOverrideProps(overrides, "Icon23460")}
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
                {...getOverrideProps(overrides, "Icons / Social / linkedin")}
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
                  {...getOverrideProps(overrides, "Vector23462")}
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
          {...getOverrideProps(overrides, "Buttons / Icon23463")}
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
            {...getOverrideProps(overrides, "Icon23464")}
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
              {...getOverrideProps(overrides, "Icon23465")}
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
                {...getOverrideProps(overrides, "Icons / Social / youtube")}
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
                  {...getOverrideProps(overrides, "Vector23467")}
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
          {...getOverrideProps(overrides, "Buttons / Icon23468")}
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
            {...getOverrideProps(overrides, "Icon23469")}
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
              {...getOverrideProps(overrides, "Icon23470")}
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
                {...getOverrideProps(overrides, "Icons / Social / instagram")}
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
                  {...getOverrideProps(overrides, "Vector23472")}
                ></Icon>
              </View>
            </Icon>
          </View>
        </View>
      </Flex>
      <Icon
        width="1317px"
        height="46px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 1317.0000040878786,
          height: 45.999998823561896,
        }}
        paths={[
          {
            d: "M650.269 45.9999L650.163 47.4961L650.267 47.5035L650.372 47.4963L650.269 45.9999ZM-0.105845 1.49626L650.163 47.4961L650.375 44.5036L0.105845 -1.49626L-0.105845 1.49626ZM650.372 47.4963L1317.1 1.49644L1316.9 -1.49644L650.166 44.5034L650.372 47.4963Z",
            stroke: "rgba(86,101,135,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1255px"
        left="70px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Divider")}
      ></Icon>
    </View>
  );
}
