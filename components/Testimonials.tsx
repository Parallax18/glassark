import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { BsQuote } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
const Testimonials = () => {
  return (
    <Box px="10%" id={"about"}>
      <Box>
        <Heading textAlign="center" pb={20}>
          What says people
        </Heading>
        <Flex gap={5} flexDirection={{ base: "column", md: "row" }}>
          <Box borderColor="gray.600" boxShadow="xs" p="20px">
            <Icon as={BsQuote} w={8} h={8} />
            <Text>
              GlassArk design agency create outstanding works for his clients.
              Most of their designers are creative, and they are doing very good
              work for any projects delivered.
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pt={5}
            >
              <Box>
                <Heading fontSize={{ base: 18, md: 20 }}>Markus alina</Heading>
                <Text fontSize={{ base: 14, md: 20 }}>Content creator</Text>
              </Box>
              <Box>
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
              </Box>
            </Box>
          </Box>
          <Box borderColor="gray.600" boxShadow="xs" p="20px">
            <Icon as={BsQuote} w={8} h={8} />
            <Text>
              GlassArk design agency create outstanding works for his clients.
              Most of their designers are creative, and they are doing very good
              work for any projects delivered.
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pt={5}
            >
              <Box>
                <Heading fontSize={{ base: 18, md: 20 }}>Amerigo john</Heading>
                <Text fontSize={{ base: 14, md: 20 }}>Brand designer</Text>
              </Box>
              <Box>
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
              </Box>
            </Box>
          </Box>
          <Box borderColor="gray.600" boxShadow="xs" p="20px">
            <Icon as={BsQuote} w={8} h={8} />
            <Text>
              GlassArk design agency create outstanding works for his clients.
              Most of their designers are creative, and they are doing very good
              work for any projects delivered.
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pt={5}
            >
              <Box>
                <Heading fontSize={{ base: 18, md: 20 }}>
                  Phillips anthony
                </Heading>
                <Text fontSize={{ base: 14, md: 20 }}>Content creator</Text>
              </Box>
              <Box>
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
                <Icon
                  as={AiFillStar}
                  color="orange.300"
                  w={{ base: 4, sm: 5 }}
                  h={{ base: 4, sm: 5 }}
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Testimonials;
