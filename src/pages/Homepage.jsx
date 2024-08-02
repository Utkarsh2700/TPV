import React from "react";
import Container from "../components/Container/Container";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Reviews from "../components/Reviews";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <Container>
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <ContactUs />
      <Reviews />
      <Blogs />
      <Footer />
    </Container>
  );
}

export default Homepage;
