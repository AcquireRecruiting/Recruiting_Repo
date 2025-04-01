/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import AcquireRecruitingHome from "./AcquireRecruitingHome";
import { View } from "@aws-amplify/ui-react";
import AcqureLogo from "./AcqureLogo";
export default function WholeHomePage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="2172px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "WholeHomePage")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1440px"
        height="2172px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Group 4")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="1440px"
          height="2172px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Group 2")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="1440px"
            height="2172px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "HOMEPAGE")}
          >
            <AcquireRecruitingHome
              width="1440px"
              height="2172px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              padding="0px 0px 0px 0px"
              backgroundImage="linear-gradient(-90deg, rgba(255,255,255,1), rgba(227,230,233,1), rgba(163,173,183,1), rgba(117,139,160,0.82))"
              {...getOverrideProps(overrides, "AcquireRecruitingHome")}
            ></AcquireRecruitingHome>
          </View>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="664px"
        height="180.01px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5.15%"
        bottom="86.57%"
        left="26.94%"
        right="26.94%"
        {...getOverrideProps(overrides, "Group 1")}
      >
        <AcqureLogo
          width="664px"
          height="180.01px"
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
          {...getOverrideProps(overrides, "AcqureLogo")}
        ></AcqureLogo>
      </View>
    </View>
  );
}
