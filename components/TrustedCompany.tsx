import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

const TrustedCompany = () => {
  return (
    <Box px="10%" py="150px" id={"about"}>
      <Heading pb={10}>Trusted our company</Heading>
      <SimpleGrid columns={[1, 2, 6]} justifyItems="center" spacing={3}>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          width="100%"
          borderRadius={7}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontSize="33px" color="gray.400">
            connex
          </Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          width="100%"
          borderRadius={7}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontSize="33px" color="gray.400">
            FRAP
          </Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          width="100%"
          borderRadius={7}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontWeight={600} fontSize="30px" color="gray.400">
            logstash
          </Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          width="100%"
          borderRadius={7}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading color="gray.400">LOGW</Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          width="100%"
          borderRadius={7}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontWeight={700} color="gray.400">
            TURK
          </Heading>
        </Box>
        <Box
          p={7}
          style={{
            border: "2px solid #CBD5E0",
          }}
          width="100%"
          borderRadius={7}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontWeight={600} color="gray.400">
            CAREC
          </Heading>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default TrustedCompany;
