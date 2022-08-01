import React from 'react';
import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import { Highlight } from '@chakra-ui/react';

const experiences = [
  {
    title: "globo.com",
    content: "Globo.com is one of the most acessed websites in Brazil, serving new and content to the whole country and having more than 1kk views per month",
    link: "https://globo.com",
  },
  {
    title: "Criaflow",
    content: "Criaflow is a creative agency based in Sao Paulo. They manage and create marketing projects for big companies.",
    link: "https://www.criaflow.com/"
  },
  {
    title: "Eduardo Srur",
    content: "An independent artist, Srur works from his studio in São Paulo, where he has built up a personal collection throughout his career that includes a series of great and impactfull projects.",
    link: "https://en.eduardosrur.com.br/"
  }
];

export default function Portfolio() {
  return (
    <Box
      minH={"100vh"}
      position={"relative"}
    >
      <Box boxShadow="inset 10px 10px 100px 100px red">
        <Heading
          fontSize={"10rem"}
          opacity={"0.04"}
          position="absolute"
          zIndex={"-1"}
          ml={"3vw"}
        >
          PORTFOLIO AND PROJECTS<br />
          MY CREATIONS<br />
          PORTFOLIO AND PROJECTS<br />
          MY CREATIONS<br />
        </Heading>
      </Box>

      <Flex flexDir={"column"} justifyContent="center" alignItems={"center"} background={"#ffffff"} opacity={"1"} boxShadow="rgb(73 73 73 / 20%) 0px 50px 250px" p={"60px"} my={"6vw"} mx={"15vw"} borderRadius={"50px"}>
        <div className='square-separator'>
          <div className='square'></div>
          <div className="dotted"></div>
        </div>
        <Heading fontSize={"5xl"} >MY PORTFOLIO</Heading>
        <Text fontSize={26} textAlign="center" my={10} maxW="400px">
          <Highlight query='Globo' styles={{ px: '1', py: '1', bg: 'blue.100' }}>
            Currently he works for the biggest media company in Brazil, Globo.
            He also does some freelance work on his free time.
            Checkout some products he participated/worked on:
          </Highlight>
        </Text>

        <Flex mt={"80px"} w={"100%"} justifyContent="space-evenly">
          {experiences.map(({ title, content, link }, i) => (
            <Box key={i}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Text variant={"h1"} fontWeight={1000}>{title}</Text>
                <Text fontSize={"12px"} maxW="10rem">
                  {content}
                </Text>
              </a>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box >
  );
}
