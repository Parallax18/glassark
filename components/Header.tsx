import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import ImageScroll from "./ImageScroll";

const Header = () => {
  return (
    <Flex
      className="gradient-bg"
      alignItems="top"
      flexDirection={{ base: "column", md: "row" }}
      px={["0", "10%"]}
      pt={[32, 0]}
      pb={[10, 0]}
      gap={[0, 7]}
      height={"100vh"}
      position={"relative"}
      color={"#fff"}
      justifyContent={["space-around", "space-between"]}
      id={"home"}
    >
      <Stack w={["100%", "60%"]} pt={[0, 60]} pl={[3, 0]}>
        <Heading fontSize={[40, 80]}>
          We exist so your business can make more money
        </Heading>
        <Text fontSize={16}>
          Our job is to make you smile. That means, doing what we can to keep
          your customers happy.
        </Text>
        <Text color={"pink.100"} fontSize={16}>
          With the goal of reaching a{" "}
          <Text as={"span"} color={"white"}>
            THOUSAND
          </Text>{" "}
          clients .{" "}
          <Text as={"span"} color={"white"}>
            YOU
          </Text>{" "}
          are number{" "}
          <Text as={"span"} color={"white"}>
            One
          </Text>
        </Text>
      </Stack>

      <ImageScroll />
    </Flex>
  );
};

export default Header;
