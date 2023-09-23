import {
  Box,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const servicesData = [
  {
    id: "01",
    title: "Custom Software Development",
    desc: "We create bespoke software solutions tailored to your business needs, driving efficiency and growth.",
  },
  {
    id: "02",
    title: "Web Application Development",
    desc: "Engage your audience with user-friendly web applications, from e-commerce to interactive portals.",
  },
  {
    id: "03",
    title: "Mobile App Development",
    desc: "Reach your audience on any device with our iOS, Android, and cross-platform app development.",
  },
  {
    id: "04",
    title: "UI/UX design",
    desc: "Our design team crafts intuitive, visually appealing interfaces for exceptional user experiences.",
  },
  {
    id: "05",
    title: "Maintenance and Support",
    desc: "Beyond delivery, we offer ongoing support and updates to keep your software running smoothly.",
  },
  {
    id: "06",
    title: "Technology Consulting",
    desc: "Get expert guidance on choosing the right technologies for your project.",
  },
  {
    id: "07",
    title: "Legacy System Modernization",
    desc: "Transform outdated systems to be modern, efficient, and compatible with current technologies.",
  },
];

const Services = () => {
  return (
    <Box id={"services"} py={[0, "10%"]} pr={[0, "3%"]} pl={0} bg={"#fff"}>
      <Flex
        height={["max-content", "75vh"]}
        w={["100%", "90%"]}
        flexDirection={["column", "row"]}
        bg={"blackAlpha.800"}
        justifyContent={"space-between"}
        roundedRight={[0, "3xl"]}
        color={"#fff"}
      >
        <Flex gap={[3, 20]} flexDirection={["column", "row"]}>
          <Stack spacing={[5, 24]} w={["100%", "70%"]} p={[3, 20]} pr={[3, 5]}>
            {/* <Text>What we do</Text> */}

            <Heading fontSize={[20, 60]}>Services</Heading>

            <Text lineHeight={7}>
              At GlassArk, our commitment is to deliver high-quality software
              solutions that empower your business, drive growth, and enhance
              your digital presence. Contact us today to discuss how we can help
              you achieve your software development goals.
            </Text>
          </Stack>
          <SimpleGrid
            columns={2}
            gap={25}
            p={[3, 20]}
            columnGap={20}
            bg={"rgba(131, 58, 180, 1)"}
            //   bg={"#58808C"}
          >
            {servicesData.map((item) => (
              <Box>
                <Stack color={"#fff"} spacing={5}>
                  <Text>{item.id}</Text>
                  <Text fontWeight={"bold"}>{item.title}</Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>

        <Box
          //   background={"#78588C"}
          bg={"rgba(252, 176, 69, 1)"}
          height={"100%"}
          width={"10%"}
          roundedRight={[0, "3xl"]}
        />
        {/* <Box
          background={"#C8553D"}
          height={"100%"}
          width={"10%"}
          roundedRight={"3xl"}
        /> */}
      </Flex>
    </Box>
  );
};

export default Services;
