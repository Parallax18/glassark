import { Box, Button, Heading, Icon, Text } from "@chakra-ui/react";
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <Box className="gradient-bg" px="10%" id={"about"}>
      <Box>
        <Box
          py="100px"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "start" }}
          textAlign={{ base: "center", md: "start" }}
          justifyContent="space-between"
        >
          <Box>
            <Heading color="gray.200">GlassArk</Heading>
            <Text
              color="gray.200"
              w={{ base: "100%", md: "60%" }}
              px={{ sm: "5%", md: 0 }}
            >
              We are solving a digital problem inside of the website and apps
              also create a project.
            </Text>

            <Box
              display="flex"
              gap={3}
              justifyContent={{ base: "center", md: "start" }}
              pt={8}
              pb={{ base: 8, md: 0 }}
            >
              <Box
                style={{
                  border: "1px solid #E2E8F0",
                }}
                display="flex"
                borderRadius="100%"
                w="40px"
                h="40px"
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={FiTwitter} color="gray.200" w={4} h={4} />
              </Box>
              <Box
                style={{
                  border: "1px solid #E2E8F0",
                }}
                display="flex"
                borderRadius="100%"
                w="40px"
                h="40px"
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={FiFacebook} color="gray.200" w={4} h={4} />
              </Box>
              <Box
                style={{
                  border: "1px solid #E2E8F0",
                }}
                display="flex"
                borderRadius="100%"
                w="40px"
                h="40px"
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={FiInstagram} color="gray.200" w={4} h={4} />
              </Box>
              <Box
                style={{
                  border: "1px solid #E2E8F0",
                }}
                display="flex"
                borderRadius="100%"
                w="40px"
                h="40px"
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={FiLinkedin} color="gray.200" w={4} h={4} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          pb="40px"
          fontSize="13px"
          color="gray.200"
        >
          <Text
            w={{ base: "100%", md: "60%" }}
            textAlign={{ base: "center", md: "start" }}
          >
            glassark, All rights reserved 2023
          </Text>
          <Text display={{ base: "none", md: "block" }}>Privacy policy</Text>
          <Text display={{ base: "none", md: "block" }}>
            Terms and conditions
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
