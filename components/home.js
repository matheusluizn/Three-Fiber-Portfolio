import React from "react";
import Image from "next/image";
import { useColorMode, useMediaQuery, Box, Heading, Text, Flex } from "@chakra-ui/react";
import Blob from "./three-blob";

export default function HomeSection() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 770px)");

  return (
    <Flex
      flexDir={"column"}
      justifyContent={isMobile ? "" : "space-between"}
      h="100vh"
      position="relative"
    >
      <Box>
        <Flex
          justifyContent={isMobile ? "center" : "space-between"}
          alignItems="center"
          py={8}
          px={"4.5vw"}
        >
          <Image src="/images/logo.svg" width={140} height={40} alt="" />
          {!isMobile && <Text fontSize="xs">Web developer based in Brazil.</Text>}
        </Flex>
        <Heading
          fontSize={isMobile ? "22vw" : "13vw"}
          className={"home__title"}
          whiteSpace={isMobile ? "wrap" : "nowrap"}
          w="100%"
          textAlign="center"
          lineHeight={isMobile ? "17vw" : "6rem"}
        >
          FULL STACK DEVELOPER
        </Heading>
      </Box>
      <Flex
        justifyContent={isMobile ? "" : "space-between"}
        px={"4.5vw"}
        my={isMobile ? "" : "2vh"}
        flexDir={isMobile ? "column" : ""}
        alignItems={isMobile ? "center" : ""}
      >
        <Box display={isMobile ? "none" : "flex"} flexDir={"column"} alignItems={"flex-start"} justifyContent={"flex-end"}>
          <Heading>DISCOVER MATHEUS</Heading>
          <a href="#skills"><button className="button button--anthe"><span>Explore Skills</span></button></a>
        </Box>

        <Blob />

        <Box display={isMobile ? "flex" : "flex"}
          flexDir={"column"}
          alignItems={isMobile ? "center" : "flex-start"}
          justifyContent={"flex-end"}
        >
          <Text
            fontSize={isMobile ? "lg" : "sm"}
            maxWidth="300px"
            textAlign={isMobile ? "center" : ""}
          >
            <strong>Matheus</strong> is a <strong>full-stack developer</strong> with 4 years of experience, javascript enthusiast
            and web developer based in Rio de Janeiro, Brazil.
            He&apos;s always looking for new works
            and projects to improve his dev skills.
          </Text>
          <a href="#portfolio"><button className="button button--anthe"><span>Explore Portfolio</span></button></a>
        </Box>
      </Flex>
    </Flex >
  );
}
