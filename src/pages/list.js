import React from "react"
import styles from "./list.module.css"
import Container from "../components/container"
import Layout from "../components/layout";
import useDarkMode from 'use-dark-mode';

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

const List = () => {
  const darkMode = useDarkMode(false);
  return (
  <Layout>
  <Container>
  <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
     {/* <!-- <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> --> */}
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
  </Layout>
  )};

  export default List;