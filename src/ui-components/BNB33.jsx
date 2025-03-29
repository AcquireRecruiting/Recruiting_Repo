/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function BNB33(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Rectangle 373": {},
        "Ellipse 205": {},
        Subtract: {},
        home: {},
        Home: {},
        "navigation/menu - home2828518": {},
        search: {},
        Search: {},
        "navigation/menu - home2828521": {},
        "navigation/menu - left": {},
        cart: {},
        Cart: {},
        "navigation/menu - home2828525": {},
        user: {},
        Profile: {},
        "navigation/menu - home2828528": {},
        "navigation/menu - right": {},
        shop: {},
        "Frame 46": {},
        "Frame 1991": {},
        BNB33: {},
      },
      variantValues: { status: "Home", mode: "Default" },
    },
    {
      overrides: {
        "Rectangle 373": {},
        "Ellipse 205": {},
        Subtract: {
          paths: [
            {
              d: "M214 52.0938C233.882 52.0938 250 35.9761 250 16.0938L250 16.0938C250 8.25271 256.08 -0.727946 263.882 0.0468589L417.186 15.2697C423.324 15.8792 428 21.0428 428 27.211L428 66.0936C428 73.8256 421.732 80.0936 414 80.0936L14 80.0936C6.268 80.0936 0 73.8256 0 66.0936L0 27.211C0 21.0428 4.67622 15.8792 10.8142 15.2697L164.118 0.046861C171.92 -0.727944 178 8.25271 178 16.0938L178 16.0938C178 35.9761 194.118 52.0938 214 52.0938Z",
              fill: "rgba(30,30,30,1)",
              fillRule: "evenodd",
            },
          ],
        },
        home: {},
        Home: {},
        "navigation/menu - home2828518": {},
        search: {},
        Search: {},
        "navigation/menu - home2828521": {},
        "navigation/menu - left": {},
        cart: {},
        Cart: {},
        "navigation/menu - home2828525": {},
        user: {},
        Profile: {},
        "navigation/menu - home2828528": {},
        "navigation/menu - right": {},
        shop: {},
        "Frame 46": {},
        "Frame 1991": {},
        BNB33: {},
      },
      variantValues: { status: "Home", mode: "Dark" },
    },
    {
      overrides: {
        "Rectangle 373": {},
        "Ellipse 205": {},
        Subtract: {},
        home: {},
        Home: { color: "rgba(157,178,206,1)" },
        "navigation/menu - home2828518": {},
        search: {},
        Search: { color: "rgba(56,107,246,1)" },
        "navigation/menu - home2828521": {},
        "navigation/menu - left": {},
        cart: {},
        Cart: {},
        "navigation/menu - home2828525": {},
        user: {},
        Profile: {},
        "navigation/menu - home2828528": {},
        "navigation/menu - right": {},
        shop: {},
        "Frame 46": {},
        "Frame 1991": {},
        BNB33: {},
      },
      variantValues: { status: "Search", mode: "Default" },
    },
    {
      overrides: {
        "Rectangle 373": {},
        "Ellipse 205": {},
        Subtract: {
          paths: [
            {
              d: "M214 52.0938C233.882 52.0938 250 35.9761 250 16.0938L250 16.0938C250 8.25271 256.08 -0.727946 263.882 0.0468589L417.186 15.2697C423.324 15.8792 428 21.0428 428 27.211L428 66.0936C428 73.8256 421.732 80.0936 414 80.0936L14 80.0936C6.268 80.0936 0 73.8256 0 66.0936L0 27.211C0 21.0428 4.67622 15.8792 10.8142 15.2697L164.118 0.046861C171.92 -0.727944 178 8.25271 178 16.0938L178 16.0938C178 35.9761 194.118 52.0938 214 52.0938Z",
              fill: "rgba(30,30,30,1)",
              fillRule: "evenodd",
            },
          ],
        },
        home: {},
        Home: { color: "rgba(157,178,206,1)" },
        "navigation/menu - home2828518": {},
        search: {},
        Search: { color: "rgba(56,107,246,1)" },
        "navigation/menu - home2828521": {},
        "navigation/menu - left": {},
        cart: {},
        Cart: {},
        "navigation/menu - home2828525": {},
        user: {},
        Profile: {},
        "navigation/menu - home2828528": {},
        "navigation/menu - right": {},
        shop: {},
        "Frame 46": {},
        "Frame 1991": {},
        BNB33: {},
      },
      variantValues: { status: "Search", mode: "Dark" },
    },
    {
      overrides: {
        "Rectangle 373": {},
        "Ellipse 205": {},
        Subtract: {},
        home: {},
        Home: { color: "rgba(157,178,206,1)" },
        "navigation/menu - home2828518": {},
        search: {},
        Search: {},
        "navigation/menu - home2828521": {},
        "navigation/menu - left": {},
        cart: {},
        Cart: {},
        "navigation/menu - home2828525": {},
        user: {},
        Profile: {},
        "navigation/menu - home2828528": {},
        "navigation/menu - right": {},
        shop: {},
        "Frame 46": {},
        "Frame 1991": {},
        BNB33: {},
      },
      variantValues: { status: "Shop", mode: "Default" },
    },
    {
      overrides: {
        "Rectangle 373": {},
        "Ellipse 205": {},
        Subtract: {
          paths: [
            {
              d: "M214 52.0938C233.882 52.0938 250 35.9761 250 16.0938L250 16.0938C250 8.25271 256.08 -0.727946 263.882 0.0468589L417.186 15.2697C423.324 15.8792 428 21.0428 428 27.211L428 66.0936C428 73.8256 421.732 80.0936 414 80.0936L14 80.0936C6.268 80.0936 0 73.8256 0 66.0936L0 27.211C0 21.0428 4.67622 15.8792 10.8142 15.2697L164.118 0.046861C171.92 -0.727944 178 8.25271 178 16.0938L178 16.0938C178 35.9761 194.118 52.0938 214 52.0938Z",
              fill: "rgba(30,30,30,1)",
              fillRule: "evenodd",
            },
          ],
        },
        home: {},
        Home: { color: "rgba(157,178,206,1)" },
        "navigation/menu - home2828518": {},
        search: {},
        Search: {},
        "navigation/menu - home2828521": {},
        "navigation/menu - left": {},
        cart: {},
        Cart: {},
        "navigation/menu - home2828525": {},
        user: {},
        Profile: {},
        "navigation/menu - home2828528": {},
        "navigation/menu - right": {},
        shop: {},
        "Frame 46": {},
        "Frame 1991": {},
        BNB33: {},
      },
      variantValues: { status: "Shop", mode: "Dark" },
    },
    {
      overrides: {
        "Rectangle 373": {},
        "Ellipse 205": {},
        Subtract: {},
        home: {},
        Home: { color: "rgba(157,178,206,1)" },
        "navigation/menu - home2828518": {},
        search: {},
        Search: {},
        "navigation/menu - home2828521": {},
        "navigation/menu - left": {},
        cart: {},
        Cart: { color: "rgba(56,107,246,1)" },
        "navigation/menu - home2828525": {},
        user: {},
        Profile: {},
        "navigation/menu - home2828528": {},
        "navigation/menu - right": {},
        shop: {},
        "Frame 46": {},
        "Frame 1991": {},
        BNB33: {},
      },
      variantValues: { status: "Cart", mode: "Default" },
    },
    {
      overrides: {
        "Rectangle 373": {},
        "Ellipse 205": {},
        Subtract: {
          paths: [
            {
              d: "M214 52.0938C233.882 52.0938 250 35.9761 250 16.0938L250 16.0938C250 8.25271 256.08 -0.727946 263.882 0.0468589L417.186 15.2697C423.324 15.8792 428 21.0428 428 27.211L428 66.0936C428 73.8256 421.732 80.0936 414 80.0936L14 80.0936C6.268 80.0936 0 73.8256 0 66.0936L0 27.211C0 21.0428 4.67622 15.8792 10.8142 15.2697L164.118 0.046861C171.92 -0.727944 178 8.25271 178 16.0938L178 16.0938C178 35.9761 194.118 52.0938 214 52.0938Z",
              fill: "rgba(30,30,30,1)",
              fillRule: "evenodd",
            },
          ],
        },
        home: {},
        Home: { color: "rgba(157,178,206,1)" },
        "navigation/menu - home2828518": {},
        search: {},
        Search: {},
        "navigation/menu - home2828521": {},
        "navigation/menu - left": {},
        cart: {},
        Cart: { color: "rgba(56,107,246,1)" },
        "navigation/menu - home2828525": {},
        user: {},
        Profile: {},
        "navigation/menu - home2828528": {},
        "navigation/menu - right": {},
        shop: {},
        "Frame 46": {},
        "Frame 1991": {},
        BNB33: {},
      },
      variantValues: { status: "Cart", mode: "Dark" },
    },
    {
      overrides: {
        "Rectangle 373": {},
        "Ellipse 205": {},
        Subtract: {},
        home: {},
        Home: { color: "rgba(157,178,206,1)" },
        "navigation/menu - home2828518": {},
        search: {},
        Search: {},
        "navigation/menu - home2828521": {},
        "navigation/menu - left": {},
        cart: {},
        Cart: {},
        "navigation/menu - home2828525": {},
        user: {},
        Profile: { color: "rgba(56,107,246,1)" },
        "navigation/menu - home2828528": {},
        "navigation/menu - right": {},
        shop: {},
        "Frame 46": {},
        "Frame 1991": {},
        BNB33: {},
      },
      variantValues: { status: "Profile", mode: "Default" },
    },
    {
      overrides: {
        "Rectangle 373": {},
        "Ellipse 205": {},
        Subtract: {
          paths: [
            {
              d: "M214 52.0938C233.882 52.0938 250 35.9761 250 16.0938L250 16.0938C250 8.25271 256.08 -0.727946 263.882 0.0468589L417.186 15.2697C423.324 15.8792 428 21.0428 428 27.211L428 66.0936C428 73.8256 421.732 80.0936 414 80.0936L14 80.0936C6.268 80.0936 0 73.8256 0 66.0936L0 27.211C0 21.0428 4.67622 15.8792 10.8142 15.2697L164.118 0.046861C171.92 -0.727944 178 8.25271 178 16.0938L178 16.0938C178 35.9761 194.118 52.0938 214 52.0938Z",
              fill: "rgba(30,30,30,1)",
              fillRule: "evenodd",
            },
          ],
        },
        home: {},
        Home: { color: "rgba(157,178,206,1)" },
        "navigation/menu - home2828518": {},
        search: {},
        Search: {},
        "navigation/menu - home2828521": {},
        "navigation/menu - left": {},
        cart: {},
        Cart: {},
        "navigation/menu - home2828525": {},
        user: {},
        Profile: { color: "rgba(56,107,246,1)" },
        "navigation/menu - home2828528": {},
        "navigation/menu - right": {},
        shop: {},
        "Frame 46": {},
        "Frame 1991": {},
        BNB33: {},
      },
      variantValues: { status: "Profile", mode: "Dark" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="428px"
      height="100px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "BNB33")}
      {...rest}
    >
      <Icon
        width="428px"
        height="80.09px"
        viewBox={{ minX: 0, minY: 0, width: 428, height: 80.0936050415039 }}
        paths={[
          {
            d: "M214 52.0938C233.882 52.0938 250 35.9761 250 16.0938L250 16.0938C250 8.25271 256.08 -0.727946 263.882 0.0468589L417.186 15.2697C423.324 15.8792 428 21.0428 428 27.211L428 66.0936C428 73.8256 421.732 80.0936 414 80.0936L14 80.0936C6.268 80.0936 0 73.8256 0 66.0936L0 27.211C0 21.0428 4.67622 15.8792 10.8142 15.2697L164.118 0.046861C171.92 -0.727944 178 8.25271 178 16.0938L178 16.0938C178 35.9761 194.118 52.0938 214 52.0938Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "evenodd",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="19.91px"
        left="0px"
        {...getOverrideProps(overrides, "Subtract")}
      >
        <Icon
          width="428px"
          height="85px"
          viewBox={{ minX: 0, minY: 0, width: 428, height: 85 }}
          paths={[
            {
              d: "M0 32.1174C0 25.9492 4.67622 20.7857 10.8142 20.1762L212.814 0.117744C213.603 0.0394404 214.397 0.0394407 215.186 0.117745L417.186 20.1762C423.324 20.7857 428 25.9492 428 32.1174L428 85L0 85L0 32.1174Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-4.91px"
          left="0px"
          right="0px"
          {...getOverrideProps(overrides, "Rectangle 373")}
        ></Icon>
        <Icon
          width="72px"
          height="72px"
          viewBox={{ minX: 0, minY: 0, width: 72, height: 72 }}
          paths={[
            {
              d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-19.91px"
          left="calc(50% - 36px - 0px)"
          {...getOverrideProps(overrides, "Ellipse 205")}
        ></Icon>
      </Icon>
      <Flex
        gap="15px"
        direction="row"
        width="428px"
        height="68px"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top="32px"
        left="0px"
        right="0px"
        borderRadius="32px 22px 0px 0px"
        padding="0px 25px 0px 25px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 1991")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "navigation/menu - left")}
        >
          <Flex
            gap="5px"
            direction="column"
            width="70px"
            height="61px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="12.5px 15px 12.5px 15px"
            display="flex"
            {...getOverrideProps(overrides, "navigation/menu - home2828518")}
          >
            <View
              width="24px"
              height="24px"
              {...getOverrideProps(overrides, "home")}
            ></View>
            <Text
              fontFamily="SF Pro Text"
              fontSize="12px"
              fontWeight="500"
              color="rgba(56,107,246,1)"
              lineHeight="14.3203125px"
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
              children="Home"
              {...getOverrideProps(overrides, "Home")}
            ></Text>
          </Flex>
          <Flex
            gap="5px"
            direction="column"
            width="70px"
            height="61px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="12.5px 15px 12.5px 15px"
            display="flex"
            {...getOverrideProps(overrides, "navigation/menu - home2828521")}
          >
            <View
              width="24px"
              height="24px"
              {...getOverrideProps(overrides, "search")}
            ></View>
            <Text
              fontFamily="SF Pro Text"
              fontSize="12px"
              fontWeight="500"
              color="rgba(157,178,206,1)"
              lineHeight="14.3203125px"
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
              children="Search"
              {...getOverrideProps(overrides, "Search")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "navigation/menu - right")}
        >
          <Flex
            gap="5px"
            direction="column"
            width="70px"
            height="61px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="12.5px 15px 12.5px 15px"
            display="flex"
            {...getOverrideProps(overrides, "navigation/menu - home2828525")}
          >
            <View
              width="24px"
              height="24px"
              {...getOverrideProps(overrides, "cart")}
            ></View>
            <Text
              fontFamily="SF Pro Text"
              fontSize="12px"
              fontWeight="500"
              color="rgba(157,178,206,1)"
              lineHeight="14.3203125px"
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
              children="Cart"
              {...getOverrideProps(overrides, "Cart")}
            ></Text>
          </Flex>
          <Flex
            gap="5px"
            direction="column"
            width="70px"
            height="61px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="12.5px 15px 12.5px 15px"
            display="flex"
            {...getOverrideProps(overrides, "navigation/menu - home2828528")}
          >
            <View
              width="24px"
              height="24px"
              {...getOverrideProps(overrides, "user")}
            ></View>
            <Text
              fontFamily="SF Pro Text"
              fontSize="12px"
              fontWeight="500"
              color="rgba(157,178,206,1)"
              lineHeight="14.3203125px"
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
              children="Profile"
              {...getOverrideProps(overrides, "Profile")}
            ></Text>
          </Flex>
        </Flex>
        <View
          width="55px"
          height="55px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 12px rgba(0.3803921639919281, 0.24313725531101227, 0.9176470637321472, 0.5)"
          borderRadius="50px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(97,62,234,1)"
          {...getOverrideProps(overrides, "Frame 46")}
        >
          <View
            width="24px"
            height="24px"
            {...getOverrideProps(overrides, "shop")}
          ></View>
        </View>
      </Flex>
    </View>
  );
}
