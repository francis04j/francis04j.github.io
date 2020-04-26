import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import HomepageCover from "../components/cover";
import Container from "../components/container";
import Summary from "../components/summary";
import Skills from "../components/skills";

export default () => (
  <Layout>
    <Header />
    <HomepageCover />
    <Container>
      <Summary />
      <Skills />
    </Container>
  </Layout>
)