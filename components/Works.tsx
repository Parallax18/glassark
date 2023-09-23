import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import AgencyWork from "./AgencyWork";

const workData = [
  {
    id: "nblbns",
    title: "Project One",
    desc: "Description for Project 1",
    image:
      "https://cdn.dribbble.com/userupload/10204724/file/original-d5b1ba6b056e7f899ceb8f33eae6945e.png?resize=2048x1536",
    baseColor: "#588B8B",
  },
  {
    id: "knvaly",
    title: "Project Two",
    desc: "Description for Project 2",
    image:
      "https://cdn.dribbble.com/userupload/10197479/file/original-0f5cac8c4e668443967ee0e50fdbcac6.png?resize=2048x1536",
    baseColor: "#C8553D",
  },
  {
    id: "jkvnou",
    title: "Project Three",
    desc: "Description for Project 3",
    image:
      "https://cdn.dribbble.com/userupload/10172783/file/original-5a358c07634088cc35ce3f1894a88c51.png?resize=2048x1536",
    baseColor: "#38497D",
  },
  {
    id: "avaonv",
    title: "Project Four",
    desc: "Description for Project 4",
    image:
      "https://cdn.dribbble.com/userupload/10182826/file/original-684ad28563e7e1ddd16b961a815e22db.jpg?resize=2048x1536",
    baseColor: "#78588C",
  },
];

const Works = () => {
  return (
    <Box id={"work"} py="100px" bgColor="orange.50">
      <Stack px="10%" spacing={10}>
        <Heading fontWeight={600} textAlign="center" fontSize={30}>
          What we've been up to
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {workData.map((item) => (
            <AgencyWork {...item} key={item.id} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Works;
