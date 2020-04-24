import React from "react"
import containerStyles from "./container.module.css"

export default ({ children }) => (
  <section className={`container ${containerStyles.container}`}>{children}</section>
)