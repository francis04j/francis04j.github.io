import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import HomepageCover from "../components/cover";

export default () => (
  <Layout>
    <Header />
    {/* <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
    <HomepageCover />
  </Layout>
)