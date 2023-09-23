import React, { useEffect, useRef } from "react";
import { Box, Image, Stack } from "@chakra-ui/react";
import "@/styles/ImageScroll.module.css"; // Import your custom CSS file

const images = [
  // "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1Z2h0ZXIlMjB1c2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  // "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF1Z2h0ZXIlMjB1c2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  // "https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGF1Z2h0ZXIlMjB1c2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  // "https://images.unsplash.com/photo-1617608587196-6391433fb6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF1Z2h0ZXIlMjB1c2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  // "https://images.unsplash.com/photo-1600481394096-62eaefa44958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhdWdodGVyJTIwdXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  // "https://images.unsplash.com/photo-1663743629961-c6134ef1afc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdWdodGVyJTIwdXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  // "https://images.unsplash.com/photo-1626275320874-f3f4f55064a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGxhdWdodGVyJTIwdXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  // "https://images.unsplash.com/photo-1588160049682-9761fcf4d70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGxhdWdodGVyJTIwdXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1608344858738-b514940ca5e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGxhdWdodGVyJTIwdXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1637199811700-d1c730797457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGxhdWdodGVyJTIwdXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1616446667406-0c77724b1a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGxhdWdodGVyJTIwdXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBjdXN0b21lcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1579047917338-a6a69144fe63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFwcHklMjBjdXN0b21lcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1556740772-1a741367b93e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhcHB5JTIwY3VzdG9tZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcHB5JTIwY3VzdG9tZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1502767882403-636aee14f873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhhcHB5JTIwY3VzdG9tZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1506880135364-e28660dc35fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhhcHB5JTIwY3VzdG9tZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1485622204874-8ee4a42c4969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGhhcHB5JTIwY3VzdG9tZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
];

const ImageScroll = () => {
  return (
    <Box
      className="scrolling-container"
      bg={["none", "rgba(255, 255, 255, 0.3)"]}
      backdropFilter="blur(8px)"
    >
      <Stack
        flexDirection={["row", "column"]}
        spacing={2}
        className="scrolling-content"
        p={2}
      >
        {images.map((item, idx) => (
          <Box
            className="scrolling-item"
            key={item}
            height={["max-content", "300px"]}
            // w={"500px"}
          >
            <Image
              src={item}
              height={["100px", "300px"]}
              w={["100px", "300px"]}
              alt=""
              rounded={"30"}
            />
          </Box>
        ))}
        {images.map((item, idx) => (
          <Box
            className="scrolling-item"
            key={item}
            height={["max-content", "300px"]}
          >
            <Image
              src={item}
              height={["100px", "300px"]}
              w={["100px", "300px"]}
              alt=""
              rounded={"30"}
            />
          </Box>
        ))}
        {images.map((item, idx) => (
          <Box
            className="scrolling-item"
            key={item}
            height={["max-content", "300px"]}
          >
            <Image
              src={item}
              height={["100px", "300px"]}
              w={["100px", "300px"]}
              alt=""
              rounded={"30"}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ImageScroll;
