import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

import Works from "@/components/Works";
import AboutUs from "@/components/About Us";
import Testimonials from "@/components/Testimonials";
import TrustedCompany from "@/components/TrustedCompany";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
export default function Home() {
  return (
    <>
      <Head>
        <title>Glass ark | software development agency | home</title>
      </Head>
      <Box>
        <Navbar />
        <Header />
        <Services />
        <Works />
        <AboutUs />
        <Testimonials />
        <TrustedCompany />
        <Footer />
      </Box>
    </>
  );
}
