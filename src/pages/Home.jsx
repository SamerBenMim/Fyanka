import PageContainer from "../components/PageContainer";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Features from "../components/Features/Features";
import SlideShow from "../components/SlideShow/SlideShow";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
const Home = () => {
  const [scroll,setScroll]=useState(false);
  return (
    <PageContainer>
        <Header></Header>
        <Hero setScroll={setScroll}></Hero>
        <Features></Features>
        <SlideShow setScroll={setScroll} scroll={scroll}></SlideShow>
        <Footer></Footer>
    </PageContainer>
  );
};

export default Home;
