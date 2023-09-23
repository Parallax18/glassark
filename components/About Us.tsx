import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box
      id={"about"}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      px="10%"
      py="150px"
      gap={10}
    >
      <Box w={{ base: "100%", md: "50%" }}>
        <Box>
          <Heading fontWeight="bold" pb={2} fontSize={25}>
            Our company is the best all over the world
          </Heading>
        </Box>
        <Text pb={10} fontWeight="normal">
          We are solving a digital problem inside of the websites and apps also
          create a beautiful work project, within a short time we deliver for
          clients.
        </Text>
      </Box>
      <SimpleGrid columns={[1, 2]} gap={3}>
        <Box p={8} boxShadow="md" textAlign="center">
          <Heading color="orange.400" fontSize={25}>
            10 Years
          </Heading>
          <Text>Working Experience</Text>
        </Box>
        <Box p={8} boxShadow="md" textAlign="center">
          <Heading color="orange.400" fontSize={25}>
            140M+
          </Heading>
          <Text>Customers all over the world</Text>
        </Box>
        <Box p={8} boxShadow="md" textAlign="center">
          <Heading color="orange.400" fontSize={25}>
            300+ Clients
          </Heading>
          <Text>Completed their works</Text>
        </Box>
        <Box p={8} boxShadow="md" textAlign="center">
          <Heading color="orange.400" fontSize={25}>
            1000+
          </Heading>
          <Text>Satisfied Clients</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default AboutUs;
