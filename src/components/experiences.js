import React from "react"
import Experience from "./experience"
import exps from "./experience.json"

const experiences = () => {
  const texts = exps;
  return (
    <section className="experience">
      <h2>Experience</h2>
      <hr />
      <div>
        {texts.map((e, index) => (
          <Experience key={index} props={e} />
        ))}
      </div>
    </section>
  )
}

export default experiences;