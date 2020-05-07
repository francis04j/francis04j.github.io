import React from "react"
import Layout from "../components/layout";
import Container from "../components/container";

const Contact = () => {
  return (
    <Layout>
      <Container>      
      <article className="post-full post page ">
        <div className="post-header">
          <h1>Contact</h1>
        </div>

        <section className="post-full-content">
          <div className="post-content nice-type">
            <p>
              Thank you for wanting to get in touch with me!. If you would like to
              engage in a conversation, please refer to the channels below. 
              I look forward to hearing from you.
            </p>
            <p>
              Please keep in mind that I get a huge amount of communications, so
              this page lists the channels I use and how I like to use them.
            </p>
            <p>
              <strong>
                Twitter: <a href="http://twitter.com/fran6_ca">@fran6_ca</a>
              </strong>
            </p>
            <p>
              I probably spend too much time here, but it has become my primary
              means of broadcasting things to the world. Please follow me here.
            </p>
            <p>
              <strong>
                Email:{" "}
                <a href="francis[AT]francisade[DOT]com">francis Adediran</a>
              </strong>
            </p>
            <p>
              I check my emails late in the evenings and early mornings. I'll try my best to 
              get back to you as soon as i can.
            </p>
          </div>
        </section>
      </article>
      </Container>
    </Layout>
  )
}

export default Contact
