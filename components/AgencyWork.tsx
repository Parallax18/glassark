import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";

const AgencyWork = ({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) => {
  return (
    <Box height={"max-content"}>
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="md"
        height={"max-content"}
      >
        <Image src={image} width={700} height={700} alt="img" />
        <Flex
          alignItems={"end"}
          position="absolute"
          w="100%"
          h="100%"
          top="0"
          left="0"
          zIndex="3"
          color="white"
        >
          <Stack bg={"#242424"} w={"full"} p={4} spacing={0}>
            <Link
              href="https://unsplash.com/"
              _hover={{ textDecoration: "none" }}
            >
              <HStack alignItems={"center"}>
                <Heading
                  textDecoration={"none"}
                  as="h3"
                  fontSize="24px"
                  fontWeight="bold"
                >
                  {title}
                </Heading>

                <GoLinkExternal />
              </HStack>
            </Link>
            <Text fontSize={"sm"}>{desc}</Text>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default AgencyWork;
