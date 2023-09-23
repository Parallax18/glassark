import {
  Box,
  Button,
  Icon,
  SimpleGrid,
  Link,
  Text,
  Flex,
  HStack,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useState } from "react";

import { Link as ScrollLink } from "react-scroll";

const routes = [
  {
    link: "home",
    text: "Home",
  },
  {
    link: "services",
    text: "Services",
  },
  {
    link: "work",
    text: "Work",
  },
  {
    link: "about",
    text: "About Us",
  },
  // {
  //   link: "contact",
  //   text: "Contact",
  // },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useRouter();

  const handleShow = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Flex
      justify={"center"}
      position={"fixed"}
      w="full"
      zIndex={100000}
      left={0}
      top={10}
    >
      <Flex
        rounded={"full"}
        alignItems="center"
        justifyContent="space-between"
        bg="rgba(255, 255, 255, 0.3)" // Set the background color with opacity for the blur effect
        backdropFilter="blur(8px)"
        boxShadow={"lg"}
        px={2}
        py={2}
      >
        <HStack spacing={[3, 7]}>
          {routes.map((item) => (
            <Text
              activeStyle={{
                background: "orange",
                color: "#fff",
              }}
              to={item.link}
              spy={true}
              smooth={true}
              offset={item.link === "jobs" ? -40 : 0}
              duration={500}
              as={ScrollLink}
              px={[2, 5]}
              py={[1, 2]}
              rounded={"full"}
              bg={"none"}
              cursor={"pointer"}
              color={"blackAlpha.900"}
              _hover={{ textDecoration: "none" }}
              fontSize={["sm", "base"]}
            >
              {item.text}
            </Text>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
